import React from "react";

const Navbar = ({ user, setUser, setSelectedJob }) => {
  return (
    <header className="bg-indigo-600 text-white shadow-md p-4 flex justify-between items-center">
      <h1 className="text-2xl font-bold">💼 Job Portal</h1>
      <div>
        {user ? (
          <button
            onClick={() => {
              setUser(null);
              setSelectedJob(null);
            }}
            className="px-4 py-2 bg-white/20 rounded-lg hover:bg-white/30 transition"
          >
            Logout
          </button>
        ) : (
          <span className="italic">Guest</span>
        )}
      </div>
    </header>
  );
};

export default Navbar;
