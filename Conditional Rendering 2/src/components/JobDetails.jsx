import React from "react";

const JobDetails = ({ job, setSelectedJob }) => {
  const handleApply = () => {
    alert(`✅ Application for "${job.title}" submitted successfully!`);
  };

  return (
    <div className="bg-white dark:bg-gray-800 shadow-lg p-8 rounded-xl">
      <h2 className="text-2xl font-bold mb-4">{job.title}</h2>
      <p className="mb-2"><strong>Company:</strong> {job.company}</p>
      <p className="mb-2"><strong>Location:</strong> {job.location}</p>
      <p className="mb-4"><strong>Salary:</strong> {job.salary}</p>

      <p className="mb-6">
        📄 <strong>Job Description:</strong> We are looking for a talented {job.title} to join {job.company}.
        Apply now and be part of an exciting journey in building next-gen solutions.
      </p>

      <div className="flex gap-4">
        <button
          onClick={handleApply}
          className="px-6 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700"
        >
          Apply Now
        </button>
        <button
          onClick={() => setSelectedJob(null)}
          className="px-6 py-2 bg-gray-300 dark:bg-gray-600 rounded-lg hover:bg-gray-400 dark:hover:bg-gray-700"
        >
          Back
        </button>
      </div>
    </div>
  );
};

export default JobDetails;
