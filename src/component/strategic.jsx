 import React from "react";

const topRowCards = [
  {
    id: 1,
    value: "65%",
    title: "Revenue Growth",
    subtitle: "of executives' top priority",
  },
  {
    id: 2,
    value: "55%",
    title: "Consumer Experience",
    subtitle: "of executives' top priority",
  },
  {
    id: 3,
    value: "55%",
    title: "AI & Technology",
    subtitle: "priority ranking",
  },
];

const bottomRowCards = [
  {
    id: 1,
    value: "70%",
    title: "Workforce Development",
    subtitle: "Critical retention, training focus",
  },
  {
    id: 2,
    value: "60%",
    title: "Cybersecurity",
    subtitle: "prioritizing enhancement",
  },
];

const Strategic = () => {
  return (
    <section className="py-12 px-4 bg-gradient-to-r from-white to-purple-50">
      <div className="max-w-6xl mx-auto space-y-6">
        <h2 className="text-3xl font-semibold text-gray-800 mb-8">
          Strategic Priorities 2025
        </h2>

        {/* Top row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {topRowCards.map(({ id, value, title, subtitle }) => (
            <div
              key={id}
              className="bg-white rounded-lg border border-gray-300 shadow-md p-6 text-center w-full"
            >
              <h2 className="text-6xl font-thick bg-gradient-to-b from-orange-400 to-purple-600 bg-clip-text text-transparent mb-2">
                {value}
              </h2>
              <p className="text-gray-800 font-medium">{title}</p>
              <p className="text-sm text-gray-500">{subtitle}</p>
            </div>
          ))}
        </div>

        {/* Bottom row */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:px-24 mt-6">
          {bottomRowCards.map(({ id, value, title, subtitle }) => (
            <div
              key={id}
              className="bg-white rounded-lg border border-gray-300 shadow-md p-6 text-center w-full"
            >
              <h2 className="text-6xl font-thick bg-gradient-to-b from-orange-400 to-purple-600 bg-clip-text text-transparent mb-2">
                {value}
              </h2>
              <p className="text-gray-800 font-medium">{title}</p>
              <p className="text-sm text-gray-500">{subtitle}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Strategic;
