import React from "react";

const Tasks = (props) => {
  const { title, tasks } = props;

  return (
    <div className="w-[1000px] mx-auto m-5">
      <h1 className="text-center text-2xl">{title}</h1>

      {tasks.map((task) => (
        <div className="taskListItem my-4 bg-white border shadow-md p-4 rounded-md">
          <h5
            class={`text-xl font-bold tracking-tight text-gray-900 dark:text-white ${
              task.title.iscompleted ? "font-semibold" : "line-through"
            }`}
          >
            {task.title}
          </h5>
          <p
            class={`font-normal text-gray-700 dark:text-gray-400 pb-4 ${
              task.description.isCompleted
                ? "font-semibold"
                : "line-through text-gray-400"
            }`}
          >
            {task.description}
          </p>
          <p
            className={`font-semibold ${
              task.isCompleted ? "text-green-800" : "text-red-500"
            }`}
          >
            Status: {task.isCompleted ? "Completed" : "Pending"}
          </p>
          <a
            href="#"
            class="inline-flex font-medium items-center text-blue-600 hover:underline"
          >
            Update
          </a>
        </div>
      ))}
      <button className="p-3 bg-blue-900 w-full text-white rounded">
        New Task
      </button>
    </div>
  );
};

export default Tasks;
