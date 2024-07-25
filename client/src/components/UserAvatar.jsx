import { Menu, Transition } from "@headlessui/react";
import { MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import { Fragment, useState } from "react";
import { FaUser, FaUserLock } from "react-icons/fa";
import { IoLogOutOutline } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getInitials } from "../utils";
import { toast } from "sonner";
import { useLogoutMutation } from "../redux/slices/api/authApiSlice";
import { logout } from "../redux/slices/authSlice";
import AddUser from "./AddUser";


const UserAvatar = () => {
  const [open, setOpen] = useState(false);
  const { user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [logoutUser] = useLogoutMutation()
  const logoutHandler = async () => {
    try {
      await logoutUser().unwrap();
      localStorage.removeItem("userInfo");
      document.cookie ="token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
      dispatch(logout());
      navigate("/login");
      toast.success("Logged out successfully");
    } catch (err) {
      console.error("Error during logout:", err);
      toast.error(err?.data?.message || err.error);
    }
  };

  

  return (
    <>
      <div>
        <Menu as="div" className="relative inline-block text-left">
          <div>
            <MenuButton className="w-10 h-10 2xl:w-12 2xl:h-12 items-center justify-center rounded-full bg-blue-600">
              <span className="text-white font-semibold">
                {getInitials(user?.name)}
              </span>
            </MenuButton>
          </div>

          <Transition
            as={Fragment}
            enter="transition ease-out duration-100"
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-75"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95"
          >
            <MenuItems className="absolute right-0 mt-2 w-56 origin-top-right divide-gray-100 rounded-md bg-white shadow-2xl ring-1 ring-black/5 focus:outline-none">
              <div className="p-4">
                <MenuItem>
                  {({}) => (
                    <button
                      onClick={() => setOpen(true)}
                      className="text-gray-700 group flex w-full items-center rounded-md px-2 py-2 text-base"
                    >
                      <FaUser className="mr-2" aria-hidden="true" />
                      Profile
                    </button>
                  )}
                </MenuItem>

                
                <MenuItem>
                  <button
                    onClick={logoutHandler}
                    className={`text-red-600 group flex w-full items-center rounded-md px-2 py-2 text-base`}
                  >
                    <IoLogOutOutline className="mr-2" aria-hidden="true" />
                    Logout
                  </button>
                </MenuItem>
              </div>
            </MenuItems>
          </Transition>
        </Menu>
      </div>
      <AddUser open={open} setOpen={setOpen} userData={user} />
    </>
  );
};

export default UserAvatar;
