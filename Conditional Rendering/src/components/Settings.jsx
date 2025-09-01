import React from "react";

const Settings = () => {
  return (
    <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg">
      <h2 className="text-xl font-semibold mb-4 text-white">⚙️ Settings</h2>
      <div className="space-y-4">
        <label className="flex items-center gap-2 text-white">
          <input type="checkbox" className="w-5 h-5" /> Enable 2FA
        </label>
        <label className="flex items-center gap-2 text-white">
          <input type="checkbox" className="w-5 h-5" /> Email Notifications
        </label>
      </div>
    </div>
  );
};

export default Settings;
