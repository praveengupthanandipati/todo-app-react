import React from "react";

const Tasks = (props) => {
  const { title, tasks } = props;

  return (
    <div className="w-[1000px] mx-auto m-5">
      <h1 className="text-center text-2xl">{title}</h1>

      {props.tasks.map((task) => (
        <div className="taskListItem my-4 bg-white border shadow-md p-4 rounded-md">
          <h5 class="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
            {task.title}
          </h5>
          <p class="font-normal text-gray-700 dark:text-gray-400 pb-4">
            {task.description}
          </p>
          <a
            href="#"
            class="inline-flex font-medium items-center text-blue-600 hover:underline"
          >
            Delete
          </a>
        </div>
      ))}
    </div>
  );
};

export default Tasks;
