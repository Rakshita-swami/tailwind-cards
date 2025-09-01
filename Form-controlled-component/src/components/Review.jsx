import React from "react";

const Review = ({ formData, prevStep }) => {
  const handleSubmit = () => {
    alert("Form Submitted! 🎉\n" + JSON.stringify(formData, null, 2));
  };

  return (
    <div>
      <h2 className="text-lg font-semibold mb-4">Step 4: Review</h2>
      <div className="bg-gray-50 p-4 rounded-lg">
        <p><strong>Name:</strong> {formData.name}</p>
        <p><strong>Email:</strong> {formData.email}</p>
        <p><strong>Gender:</strong> {formData.gender}</p>
        <p><strong>Skills:</strong> {formData.skills.join(", ")}</p>
        <p><strong>Role:</strong> {formData.role}</p>
        <p><strong>Experience:</strong> {formData.experience}</p>
      </div>

      <div className="flex justify-between mt-6">
        <button
          onClick={prevStep}
          className="bg-gray-400 text-white px-4 py-2 rounded-lg hover:bg-gray-500"
        >
          Back
        </button>
        <button
          onClick={handleSubmit}
          className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700"
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default Review;
