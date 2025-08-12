import React from 'react';

const roadmapData = [
  {
    title: "Immediate Priorities",
    timeframe: "(0–6 months)",
    points: [
      "VR surgical training platforms",
      "AI services for revenue cycle optimization",
      "Patient education content",
    ],
    note: "Builds early success & market trust",
  },
  {
    title: "Medium–Term Priorities",
    timeframe: "(6–18 months)",
    intro: "Exp& into broader solutions:",
    points: [
      "Learning management systems (LMS)",
      "Clinical decision support AI",
      "Patient engagement services",
    ],
    note: "Deepens offerings & strengthens client ties",
  },
  {
    title: "Long–Term Priorities",
    timeframe: "(18+ months)",
    intro: "Aim for market leadership:",
    points: [
      "Fully integrated transformation platforms",
      "Advanced VR therapy",
      "Scalable workforce development",
    ],
    note: "Positions as a strategic healthcare partner",
  },
];

const Roadmap = () => {
  return (
    <section className="py-16 px-6 bg-gradient-to-r from-white to-purple-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-semibold text-gray-900 mb-2">
          Strategic Roadmap for Healthcare Transformation
        </h2>
        <p className="text-gray-600 mb-10">
          Based on industry challenges & proven use cases, here’s a clear action plan for entering & growing in the healthcare market:
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {roadmapData.map(({ title, timeframe, intro, points, note }, idx) => (
            <div key={idx}>
              <h3 className="text-xl font-semibold text-gray-900 mb-1">{title}</h3>
              <p className="text-sm text-gray-500">{timeframe}</p>
              <div className="border-b border-gray-300 mb-3 mt-1"></div>

              {intro && <p className="text-sm text-gray-700 mb-2">{intro}</p>}

              <ul className="text-sm text-gray-700 list-disc list-inside space-y-1">
                {points.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
              <p className="mt-4 text-sm font-medium text-gray-900">{note}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Roadmap;
