import React from "react";

const skillsList = ["React", "Node.js", "Python", "UI/UX", "DevOps"];

const Skills = ({ formData, handleChange, nextStep, prevStep }) => {
  return (
    <div>
      <h2 className="text-lg font-semibold mb-4">Step 2: Skills</h2>
      <div className="grid grid-cols-2 gap-3">
        {skillsList.map((skill) => (
          <label key={skill} className="flex items-center space-x-2 border p-2 rounded-md cursor-pointer hover:bg-gray-100">
            <input
              type="checkbox"
              name="skills"
              value={skill}
              checked={formData.skills.includes(skill)}
              onChange={handleChange}
            />
            <span>{skill}</span>
          </label>
        ))}
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

export default Skills;
