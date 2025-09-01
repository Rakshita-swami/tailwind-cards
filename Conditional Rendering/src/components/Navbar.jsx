import React from "react";

const Navbar = ({ darkMode, setDarkMode }) => {
  return (
    <header className="shadow-md bg-indigo-600 text-white p-4 flex justify-between items-center">
      <h1 className="text-2xl font-bold">⚡ My Dashboard</h1>
      <button
        onClick={() => setDarkMode(!darkMode)}
        className="px-4 py-2 bg-white/20 rounded-lg hover:bg-white/30 transition"
      >
        {darkMode ? "☀️ Light Mode" : "🌙 Dark Mode"}
      </button>
    </header>
  );
};

export default Navbar;
