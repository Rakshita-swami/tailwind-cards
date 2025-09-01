import React, { useState, useEffect } from "react";
import TaskCard from "./TaskCard";

export default function App() {
  const [tasks, setTasks] = useState([]);
  const [input, setInput] = useState("");

  // useEffect: load welcome msg once
  useEffect(() => {
    console.log("Welcome to Task Manager!");
  }, []);

  // Add task
  const addTask = () => {
    if (!input.trim()) return;
    setTasks([...tasks, { text: input, done: false }]);
    setInput("");
  };

  // Toggle task completion
  const toggleTask = (index) => {
    const updated = [...tasks];
    updated[index].done = !updated[index].done;
    setTasks(updated);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-purple-200 p-6">
      <div className="max-w-lg mx-auto bg-white shadow-2xl rounded-2xl p-6">
        <h1 className="text-3xl font-bold text-center text-indigo-600 mb-4">
           Task Manager
        </h1>

        {/* Input Box */}
        <div className="flex gap-2 mb-6">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)} // event handling
            placeholder="Enter task..."
            className="flex-1 px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
          />
          <button
            onClick={addTask} // event handling
            className="bg-indigo-500 text-white px-4 py-2 rounded-lg hover:bg-indigo-600 transition"
          >
            Add
          </button>
        </div>

        {/* Task List */}
        <div className="space-y-3">
          {tasks.length === 0 ? (
            <p className="text-gray-500 text-center">No tasks yet 🚀</p>
          ) : (
            tasks.map((task, index) => (
              <TaskCard
                key={index}
                task={task}
                onToggle={() => toggleTask(index)} // props + event
              />
            ))
          )}
        </div>

        {/* Stats */}
        <p className="mt-6 text-center text-sm text-gray-600">
          Total: {tasks.length} | Remaining:{" "}
          {tasks.filter((t) => !t.done).length}
        </p>
      </div>
    </div>
  );
}
