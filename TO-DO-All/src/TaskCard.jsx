import React from "react";

const TaskCard = ({ task, onToggle }) => {
  return (
    <div
      onClick={onToggle} // event handling
      className={`cursor-pointer p-3 rounded-lg shadow-md flex justify-between items-center transition
        ${task.done ? "bg-green-200 line-through text-gray-500" : "bg-gray-100 hover:bg-indigo-100"}
      `}
    >
      <span>{task.text}</span>
      <span>{task.done ? "✅" : "🕒"}</span>
    </div>
  );
};

export default TaskCard;
