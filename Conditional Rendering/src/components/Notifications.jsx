import React from "react";

const Notifications = () => {
  return (
    <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg">
      <h2 className="text-xl font-semibold mb-4 text-white">🔔 Notifications</h2>
      <ul className="space-y-3">
        <li className="p-3 bg-indigo-100 dark:bg-indigo-900 rounded-lg text-white">
          📢 New update available!
        </li>
        <li className="p-3 bg-green-100 dark:bg-green-900 rounded-lg text-white">
          ✅ Profile updated successfully
        </li>
        <li className="p-3 bg-red-100 dark:bg-red-900 rounded-lg text-white">
          ⚠️ Password will expire soon
        </li>
      </ul>
    </div>
  );
};

export default Notifications;
