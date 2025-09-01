import React, { useState } from "react";

const Login = ({ setUser }) => {
  const [email, setEmail] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    if (email.trim()) {
      setUser({ name: "John Doe", email });
    }
  };

  return (
    <div className="bg-white dark:bg-gray-800 shadow-lg p-8 rounded-xl max-w-md mx-auto">
      <h2 className="text-xl font-bold mb-4">🔐 Login to Continue</h2>
      <form onSubmit={handleLogin} className="space-y-4">
        <input
          type="email"
          placeholder="Enter your email"
          className="w-full px-4 py-2 rounded-lg border dark:bg-gray-700"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button
          type="submit"
          className="w-full bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-700"
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
