import { useState } from "react";
import Navbar from "./components/Navbar";
import Login from "./components/Login";
import JobList from "./components/JobList";
import JobDetails from "./components/JobDetails";

export default function App() {
  const [user, setUser] = useState(null); // null = not logged in
  const [selectedJob, setSelectedJob] = useState(null);

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white transition-all">
      <Navbar user={user} setUser={setUser} setSelectedJob={setSelectedJob} />

      <main className="p-6 max-w-5xl mx-auto">
        {/* Conditional Rendering */}
        {!user ? (
          <Login setUser={setUser} />
        ) : selectedJob ? (
          <JobDetails job={selectedJob} setSelectedJob={setSelectedJob} />
        ) : (
          <JobList setSelectedJob={setSelectedJob} />
        )}
      </main>
    </div>
  );
}
