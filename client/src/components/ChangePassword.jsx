import React from "react";
import { DialogTitle } from "@headlessui/react";
import { useForm } from "react-hook-form";
import Button from "./Button";
import ModalWrapper from "./ModalWrapper";
import Textbox from "./Textbox";
import { toast } from "sonner";
import { useChangePasswordMutation } from "../redux/slices/api/userApiSlice";

const ChangePassword = ({ open, setOpen }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [changePassword] = useChangePasswordMutation();

  const handleOnSubmit = async (data) => {
    if (data.newPassword !== data.confirmPassword) {
      toast.error("Password does not match");
      return;
    }
    try {
      const result = await changePassword(data).unwrap();
      toast.success("Password changed successfully");
      setTimeout(() => {
        setOpen(false);
      }, 1500);
    } catch (error) {
      console.log(error);
      toast.error(error?.data?.message || error.error);
    }
  };
  return (
    <>
      <ModalWrapper show={open} onClose={() => setOpen(false)}>
        <form onSubmit={handleSubmit(handleOnSubmit)} className="">
          <DialogTitle
            as="h2"
            className="text-lg font-medium leading-6 text-gray-900"
          >
            Change Password
          </DialogTitle>
          <div className="mt-2 flex flex-col gap-6">
            <Textbox
              label="New Password"
              placeholder="New Password"
              type="password"
              {...register("newPassword", {
                required: "New Password is required",
              })}
              error={errors.newPassword ? errors.newPassword.message : ""}
            />
            <Textbox
              label="Confirm Password"
              placeholder="Confirm Password"
              type="password"
              {...register("confirmPassword", {
                required: "Confirm Password is required",
              })}
              error={
                errors.confirmPassword ? errors.confirmPassword.message : ""
              }
            />
          </div>
          <div className="py-3 mt-4 sm:flex sm:flex-row-reverse">
            <Button
              type="submit"
              label="Save"
              className="bg-blue-600 px-8 text-sm font-semibold text-white
                   hover:bg-blue-500 sm:w-auto"
            />
            <button
              type="button"
              className="
                    bg-white
                    px-5
                    text-small
                    font-semibold
                    text-gray-900
                    hover:bg-gray-50
                    sm:w-auto
                    "
              onClick={() => setOpen(false)}
            >
              Cancel
            </button>
          </div>
        </form>
      </ModalWrapper>
    </>
  );
};

export default ChangePassword;
