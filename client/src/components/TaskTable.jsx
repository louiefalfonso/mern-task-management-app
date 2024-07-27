import React from 'react'
import { BGS, PRIOTITYSTYELS, TASK_TYPE} from "../utils";
import {MdKeyboardArrowDown,MdKeyboardArrowUp,MdKeyboardDoubleArrowUp,} from "react-icons/md";
import moment from "moment";
import { summary } from "../assets/data";
import clsx from "clsx";
import UserInfo from './UserInfo';

const TaskTable = ({ tasks }) => {
  const TaskIcons = {
    high: <MdKeyboardDoubleArrowUp />,
    medium: <MdKeyboardArrowUp />,
    normal: <MdKeyboardArrowDown />,
  };

  const TableHeader = () => (
    <thead className="border-b border-gray-300 ">
      <tr className="text-black text-left">
        <th className="py-2">Task Title</th>
        <th className="py-2">Priority</th>
        <th className="py-2">Team Members</th>
      </tr>
    </thead>
  );

  const TableRow = ({ task }) => (
    <tr className="border-b border-gray-300 text-gray-600 hover:bg-gray-300/10">
      <td className="py-2">
        <div className="flex items-center gap-2">
          <div
            className={clsx("w-4 h-4 rounded-full", TASK_TYPE[task.stage])}
          />

          <p className="text-base text-black">{task.title}</p>
        </div>
      </td>

      <td className="py-2">
        <div className="flex gap-1 items-center">
          <span className={clsx("text-lg", PRIOTITYSTYELS[task.priority])}>
            {TaskIcons[task.priority]}
          </span>
          <span className="capitalize">{task.priority}</span>
        </div>
      </td>

      <td className="py-2">
        <div className="flex">
          {task.team.map((m, index) => (
            <div
              key={index}
              className={clsx(
                "w-7 h-7 rounded-full text-white flex items-center justify-center text-sm -mr-1",
                BGS[index % BGS.length]
              )}
            >
              <UserInfo user={m} />
            </div>
          ))}
        </div>
      </td>
    </tr>
  );
  return (
    <>
      <div className="w-full md:w-3/3 bg-white px-2 md:px-4 pt-4 pb-4 shadow-md rounded">
        <table className="w-full">
          <TableHeader />
          <tbody>
            {tasks?.map((task, id) => (
              <TableRow key={id} task={task} />
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default TaskTable