import React from "react";
import {
  FaUserMd,
  FaMicrochip,
  FaBookMedical,
  FaNotesMedical,
  FaLaptopMedical,
  FaMoneyBillWave,
  FaGamepad,
  FaVrCardboard,
} from "react-icons/fa";

// Extract use case cards data into an array
const useCaseCards = [
  {
    id: 1,
    icon: <FaVrCardboard className="text-xl text-white" />,
    category: "XR & Gaming",
    title: "Surgical Training Platform",
    description:
      "Critical physician shortage (37K–124K by 2034) with limited surgical training opportunities",
    duration: "12–18 months",
    complexity: "Medium Complexity",
  },
  {
    id: 2,
    icon: <FaNotesMedical className="text-xl text-white" />,
    category: "XR & Gaming",
    title: "Patient Education VR",
    description:
      "4 in 10 patients face affordability & understanding gaps: poor treatment compliance",
    duration: "12–18 months",
    complexity: "Low Complexity",
  },
  {
    id: 3,
    icon: <FaLaptopMedical className="text-xl text-white" />,
    category: "XR & Gaming",
    title: "Remote Consultation Platform",
    description:
      "Specialist access gaps in rural/underserved areas; $265B shifts to home-based care",
    duration: "18–24 months",
    complexity: "High Complexity",
  },
  {
    id: 4,
    icon: <FaMicrochip className="text-xl text-white" />,
    category: "AI Advisory",
    title: "AI Readiness Assessment",
    description:
      "77% prioritize AI but lack a strategic framework for effective, scalable implementation",
    duration: "12–18 months",
    complexity: "Medium Complexity",
  },
  {
    id: 5,
    icon: <FaMoneyBillWave className="text-xl text-white" />,
    category: "AI Advisory",
    title: "Revenue Cycle Optimization",
    description:
      "15 cents lost per dollar; current systems lack predictive AI for denial prevention & efficiency",
    duration: "6–12 months",
    complexity: "Medium Complexity",
  },
  {
    id: 6,
    icon: <FaUserMd className="text-xl text-white" />,
    category: "AI Advisory",
    title: "Clinical Decision Support",
    description:
      "Medical decisions suffer without real-time AI to improve safety, accuracy, & diagnostic confidence.",
    duration: "12–18 months",
    complexity: "High Complexity",
  },
  {
    id: 7,
    icon: <FaBookMedical className="text-xl text-white" />,
    category: "Creative & Entertainment",
    title: "Patient Education Content",
    description:
      "Low health literacy persists; providers lack customizable, multilingual tools for clear patient communication.",
    duration: "12–18 months",
    complexity: "Low Complexity",
  },
  {
    id: 8,
    icon: <FaMicrochip className="text-xl text-white" />,
    category: "Creative & Entertainment",
    title: "Healthcare Marketing",
    description:
      "Organizations struggle to differentiate; authentic, culturally resonant storytelling boosts trust & community engagement.",
    duration: "6–12 months",
    complexity: "Medium Complexity",
  },
  {
    id: 9,
    icon: <FaUserMd className="text-xl text-white" />,
    category: "Creative & Entertainment",
    title: "Medical Training Content Production",
    description:
      "Healthcare workers lack effective training content tailored to learning styles, specialists, & competency needs.",
    duration: "12–18 months",
    complexity: "High Complexity",
  },
  {
    id: 10,
    icon: <FaLaptopMedical className="text-xl text-white" />,
    category: "Digital Learning",
    title: "Healthcare LMS",
    description:
      "Fragmented training programs lack robust LMS tools for workforce & competency tracking.",
    duration: "12–18 months",
    complexity: "Medium Complexity",
  },
  {
    id: 11,
    icon: <FaGamepad className="text-xl text-white" />,
    category: "Creative & Entertainment",
    title: "Gamified Learning",
    description:
      "Traditional training underperforms; gamified learning boosts engagement, retention, & clinical outcomes.",
    duration: "12–18 months",
    complexity: "Medium Complexity",
  },
  {
    id: 12,
    icon: <FaVrCardboard className="text-xl text-white" />,
    category: "Creative & Entertainment",
    title: "Virtual Skills Laboratory",
    description:
      "Simulation access is limited; virtual labs deliver scalable, safe, remote procedural & patient training.",
    duration: "18–24 months",
    complexity: "High Complexity",
  },
];

const Usecases = () => {
  return (
    <section className="py-16 px-6 bg-gradient-to-r from-white to-purple-50">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-900 mb-2 text-center">
          Strategic Use Cases & Implementation
        </h2>
        <p className="text-center text-gray-600 mb-8">
          12 validated opportunities with proven market demand & clear ROI
          pathways
        </p>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-10">
          <button className="bg-gradient-to-r from-[rgb(105,189,242)] via-[rgb(212,128,242)] to-[rgb(255,191,128)] text-white px-4 py-2 rounded-full text-sm">
            All
          </button>
          <button className="bg-white border border-gray-600 px-4 py-2 rounded-full text-sm">
            XR & Gaming
          </button>
          <button className="bg-white border border-gray-600 px-4 py-2 rounded-full text-sm">
            AI Advisory & Implementation
          </button>
          <button className="bg-white border border-gray-600 px-4 py-2 rounded-full text-sm">
            Creative & Entertainment
          </button>
          <button className="bg-white border border-gray-600 px-4 py-2 rounded-full text-sm">
            Digital Learning
          </button>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {useCaseCards.map(
            ({ id, icon, category, title, description, duration, complexity }) => (
              <div
                key={id}
                className="border rounded-lg p-4 shadow-sm hover:shadow-md transition"
              >
                <div className="flex items-center justify-between mb-2 text-sm font-semibold">
                  <div className="bg-gradient-to-r from-[rgb(105,189,242)] via-[rgb(212,128,242)] to-[rgb(255,191,128)] p-2 rounded-full">
                    {icon}
                  </div>
                  <span className="bg-gradient-to-r from-[rgb(105,189,242)] via-[rgb(212,128,242)] to-[rgb(255,191,128)] bg-clip-text text-transparent">
                    {category}
                  </span>
                </div>

                <h3 className="text-lg font-semibold text-gray-900 pb-1 mb-2 border-b border-gray-300">
                  {title}
                </h3>

                <p className="text-sm text-gray-600 mb-3">{description}</p>

                <div className="flex justify-between text-xs text-gray-500">
                  <span>{duration}</span>
                  <span>{complexity}</span>
                </div>
              </div>
            )
          )}
        </div>
      </div>
    </section>
  );
};

export default Usecases;