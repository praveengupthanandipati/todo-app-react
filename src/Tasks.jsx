import React from "react";

const Tasks = ({ mytasks }) => {
  const title = "List of Tasks for the month of November 2024";
  return (
    <div className="w-[1000px] mx-auto m-5">
      <h1 className="text-center text-3xl">{title}</h1>

      <table className="w-full mt-5 border">
        <thead>
          <tr>
            <th className="p-4 border bg-slate-600 text-white w-[10%]">#</th>
            <th className="p-4 border bg-slate-600 text-white w-[70%]">
              Name of Task
            </th>
            <th className="p-4 border bg-slate-600 text-white w-[10%]">
              Action
            </th>
          </tr>
        </thead>
        <tbody>
          {mytasks.map((taskname, index) => (
            <tr>
              <td className="p-4 border">{index + 1}</td>
              <td className="p-4 border">{taskname}</td>
              <td className="p-4 border">
                <button className="px-3 py-2 bg-blue-900 text-white rounded-md">Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Tasks;
