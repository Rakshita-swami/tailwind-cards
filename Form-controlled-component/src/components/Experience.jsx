import React from "react";

const Experience = ({ formData, handleChange, nextStep, prevStep }) => {
  return (
    <div>
      <h2 className="text-lg font-semibold mb-4">Step 3: Role & Experience</h2>

      <div className="mb-4">
        <label className="block mb-2">Select Role</label>
        <select
          name="role"
          value={formData.role}
          onChange={handleChange}
          className="w-full border p-3 rounded-lg"
        >
          <option value="">Choose role...</option>
          <option value="Developer">Developer</option>
          <option value="Designer">Designer</option>
          <option value="Manager">Manager</option>
          <option value="QA">QA</option>
        </select>
      </div>

      <div>
        <label className="block mb-2">Experience Level</label>
        <div className="flex gap-4">
          <label>
            <input
              type="radio"
              name="experience"
              value="Junior"
              checked={formData.experience === "Junior"}
              onChange={handleChange}
            />{" "}
            Junior
          </label>
          <label>
            <input
              type="radio"
              name="experience"
              value="Mid-Level"
              checked={formData.experience === "Mid-Level"}
              onChange={handleChange}
            />{" "}
            Mid-Level
          </label>
          <label>
            <input
              type="radio"
              name="experience"
              value="Senior"
              checked={formData.experience === "Senior"}
              onChange={handleChange}
            />{" "}
            Senior
          </label>
        </div>
      </div>

      <div className="flex justify-between mt-6">
        <button
          onClick={prevStep}
          className="bg-gray-400 text-white px-4 py-2 rounded-lg hover:bg-gray-500"
        >
          Back
        </button>
        <button
          onClick={nextStep}
          className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Experience;
