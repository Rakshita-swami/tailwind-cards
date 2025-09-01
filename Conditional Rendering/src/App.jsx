import { useState } from "react";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Dashboard from "./components/Dashboard";
import Settings from "./components/Settings";
import Notifications from "./components/Notifications";
import Profile from "./components/Profile";

export default function App() {
  const [activeTab, setActiveTab] = useState("dashboard");
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div
      className={`${
        darkMode ? "bg-gray-900 text-white" : "bg-gray-100 text-white"
      } min-h-screen transition-all`}
    >
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
      <div className="flex">
        <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />
        <main className="flex-1 p-8">
          {activeTab === "dashboard" && <Dashboard />}
          {activeTab === "settings" && <Settings />}
          {activeTab === "notifications" && <Notifications />}
          {activeTab === "profile" && <Profile />}
        </main>
      </div>
    </div>
  );
}
