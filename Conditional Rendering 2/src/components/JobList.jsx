import React from "react";

const JobList = ({ setSelectedJob }) => {
  const jobs = [
    { id: 1, title: "Frontend Developer", company: "TechCorp", location: "Bangalore", salary: "₹10 LPA" },
    { id: 2, title: "Backend Engineer", company: "CodeWorks", location: "Hyderabad", salary: "₹12 LPA" },
    { id: 3, title: "Fullstack Developer", company: "InnoSoft", location: "Remote", salary: "₹15 LPA" },
  ];

  return (
    <div>
      <h2 className="text-2xl font-bold mb-6">📋 Available Jobs</h2>
      <div className="grid md:grid-cols-2 gap-6">
        {jobs.map((job) => (
          <div
            key={job.id}
            className="p-6 bg-white dark:bg-gray-800 shadow-md rounded-xl hover:shadow-xl transition cursor-pointer"
            onClick={() => setSelectedJob(job)}
          >
            <h3 className="text-xl font-semibold">{job.title}</h3>
            <p className="text-gray-600 dark:text-gray-400">{job.company}</p>
            <p className="text-sm">{job.location}</p>
            <p className="mt-2 font-bold">{job.salary}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default JobList;
