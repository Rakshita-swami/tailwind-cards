import React from "react";

const CourseCard = ({ course }) => {
  return (
    <div className="bg-white rounded-2xl shadow-md hover:shadow-2xl transition transform hover:-translate-y-2 p-6 flex flex-col border border-gray-100">
      <h2 className="text-2xl font-bold text-gray-800">{course.title}</h2>
      <p className="text-gray-500 mt-1 text-sm">👨‍🏫 {course.instructor}</p>
      <p className="mt-2 text-sm text-gray-600">⏳ Duration: {course.duration}</p>
      <p className="mt-2 text-green-600 font-bold text-lg">💰 {course.price}</p>

      <div className="mt-4 flex flex-wrap gap-2">
        {course.categories.map((cat, index) => (
          <span
            key={index}
            className="px-3 py-1 text-sm bg-gradient-to-r from-yellow-100 to-yellow-200 text-yellow-800 font-medium rounded-full shadow-sm"
          >
            #{cat}
          </span>
        ))}
      </div>

      <button className="mt-6 bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-2 rounded-xl shadow-md hover:scale-105 transition">
        🚀 Enroll Now
      </button>
    </div>
  );
};

export default CourseCard;
