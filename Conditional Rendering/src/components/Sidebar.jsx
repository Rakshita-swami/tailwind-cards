import React from "react";

const Sidebar = ({ activeTab, setActiveTab }) => {
  const tabs = [
    { id: "dashboard", label: "📊 Dashboard" },
    { id: "settings", label: "⚙️ Settings" },
    { id: "notifications", label: "🔔 Notifications" },
    { id: "profile", label: "👤 Profile" },
  ];

  return (
    <aside className="w-64 bg-white dark:bg-gray-800 shadow-lg p-6 space-y-4">
      {tabs.map((tab) => (
        <button
          key={tab.id}
          onClick={() => setActiveTab(tab.id)}
          className={`w-full text-left px-4 py-2 rounded-lg ${
            activeTab === tab.id
              ? "bg-indigo-500 text-white"
              : "hover:bg-gray-200 dark:hover:bg-gray-700"
          }`}
        >
          {tab.label}
        </button>
      ))}
    </aside>
  );
};

export default Sidebar;
