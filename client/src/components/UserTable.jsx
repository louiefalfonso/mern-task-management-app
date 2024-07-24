import React from "react";
import moment from "moment";
import clsx from "clsx";
import { getInitials } from "../utils";
import { useGetTeamListsQuery } from "../redux/slices/api/userApiSlice";

const UserTable = ({ users }) => {
  const { data, refetch } = useGetTeamListsQuery();
  const TableHeader = () => (
    <thead className="border-b border-gray-300 ">
      <tr className="text-black  text-left">
        <th className="py-2">Full Name</th>
        <th className="py-2">Role</th>
        <th className="py-2">Email</th>
        <th className="py-2">Status</th>
      </tr>
    </thead>
  );
  const TableRow = ({ user }) => (
    <tr className="border-b border-gray-200  text-gray-600 hover:bg-gray-400/10">
      <td className="py-2">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-full text-white flex items-center justify-center text-sm bg-blue-600">
            <span className="text-center">{getInitials(user?.name)}</span>
          </div>
          <div>
            <p> {user.name}</p>
          </div>
        </div>
      </td>

      <td className="py-2">
        <p>{user?.role}</p>
      </td>
      <td className="py-2">
        <p>{user?.email}</p>
      </td>
      <td>
        <p
          className={clsx(
            "w-fit px-3 py-1 rounded-full text-sm",
            user?.isActive ? "bg-blue-200" : "bg-yellow-100"
          )}
        >
          {user?.isActive ? "Active" : "Disabled"}
        </p>
      </td>
    </tr>
  );

  return (
    <div className="w-full md:w-3/3 bg-white h-fit px-2 md:px-6 py-4 shadow-md rounded">
      <table className="w-full">
        <TableHeader />
        <tbody>
          {data &&
            data.map((user, index) => <TableRow key={index} user={user} />)}
        </tbody>
      </table>
    </div>
  );
};

export default UserTable;
