import React from "react";

const Dashboard = () => {
  return (
    <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg">
      <h2 className="text-xl font-semibold mb-4 text-white">📊 Dashboard Overview</h2>
      <div className="grid md:grid-cols-3 gap-6">
        <div className="p-6 bg-indigo-100 dark:bg-indigo-900 rounded-xl">
          <h3 className="font-bold text-white">Users</h3>
          <p className="text-2xl text-white">1,245</p>
        </div>
        <div className="p-6 bg-green-100 dark:bg-green-900 rounded-xl">
          <h3 className="font-bold text-white">Revenue</h3>
          <p className="text-2xl text-white">$12,500</p>
        </div>
        <div className="p-6 bg-yellow-100 dark:bg-yellow-900 rounded-xl">
          <h3 className="font-bold text-white">Orders</h3>
          <p className="text-2xl text-white">320</p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
