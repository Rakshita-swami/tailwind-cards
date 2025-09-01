import React from "react";

const PersonalInfo = ({ formData, handleChange, nextStep }) => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-6">
      {/* Form Card */}
      <div className="w-full max-w-md bg-white shadow-lg rounded-2xl p-8 border border-gray-200">
        <h2 className="text-3xl font-extrabold text-center text-gray-800 mb-6">
          Step 1: Personal Info
        </h2>

        <div className="space-y-6">
          {/* Full Name */}
          <div>
            <label className="block text-gray-700 mb-2 font-medium">
              Full Name
            </label>
            <input
              type="text"
              name="name"
              placeholder="Enter your full name"
              value={formData.name}
              onChange={handleChange}
              className="w-full border border-gray-300 p-3 rounded-lg focus:ring-2 focus:ring-blue-300 focus:outline-none"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-gray-700 mb-2 font-medium">
              Email Address
            </label>
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
              className="w-full border border-gray-300 p-3 rounded-lg focus:ring-2 focus:ring-blue-300 focus:outline-none"
            />
          </div>

          {/* Gender */}
          <div>
            <label className="block text-gray-700 mb-2 font-medium">
              Gender
            </label>
            <div className="flex gap-6">
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="radio"
                  name="gender"
                  value="Male"
                  checked={formData.gender === "Male"}
                  onChange={handleChange}
                  className="accent-blue-400"
                />
                <span>Male</span>
              </label>
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="radio"
                  name="gender"
                  value="Female"
                  checked={formData.gender === "Female"}
                  onChange={handleChange}
                  className="accent-blue-400"
                />
                <span>Female</span>
              </label>
            </div>
          </div>
        </div>

        {/* Next Button */}
        <button
          onClick={nextStep}
          className="mt-8 w-full bg-blue-400 text-white py-3 rounded-lg font-medium shadow hover:bg-blue-500 transition"
        >
          Next →
        </button>
      </div>
    </div>
  );
};

export default PersonalInfo;
