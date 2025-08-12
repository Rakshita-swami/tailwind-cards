import React from 'react'
import {
  FaUserMd,
  FaMicrochip,
  FaBookMedical,
  FaNotesMedical,
  FaLaptopMedical,
  FaMoneyBillWave,
  FaGamepad,
  FaVrCardboard
} from "react-icons/fa";


const usecases = () => {
  return (
    <div>
      
      
      <section className="py-16 px-6 bg-gradient-to-r from-white to-purple-50">
        <div className="max-w-7xl mx-auto">
         
          <h2 className="text-3xl font-bold text-gray-900 mb-2 text-center">Strategic Use Cases & Implementation</h2>
          <p className="text-center text-gray-600 mb-8">12 validated opportunities with proven market demand & clear ROI pathways</p>
      
      
          <div className="flex flex-wrap justify-center gap-4 mb-10">
           <button className="bg-gradient-to-r from-[rgb(105,189,242)] via-[rgb(212,128,242)] to-[rgb(255,191,128)] text-white px-4 py-2 rounded-full text-sm">
        All
      </button>
            <button className="bg-white border border-dark-600 px-4 py-2 rounded-full text-sm">XR & Gaming</button>
            <button className="bg-white border border-dark-600 px-4 py-2 rounded-full text-sm">AI Advisory & Implementation</button>
            <button className="bg-white border border-dark-600 px-4 py-2 rounded-full text-sm">Creative & Entertainment</button>
            <button className="bg-white border border-dark-600 px-4 py-2 rounded-full text-sm">Digital Learning</button>
          </div>
      
      
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      
      {/* cart1 */}
      <div className="border rounded-lg p-4 shadow-sm hover:shadow-md transition">
      <div className="flex items-center justify-between mb-1 text-xs font-semibold">
        <div className="bg-gradient-to-r from-[rgb(105,189,242)] via-[rgb(212,128,242)] to-[rgb(255,191,128)] p-2 rounded-full">
          <FaVrCardboard className="text-xl text-white" />
        </div>
        <span className="bg-gradient-to-r from-[rgb(105,189,242)] via-[rgb(212,128,242)] to-[rgb(255,191,128)] bg-clip-text text-transparent">
          XR & Gaming
        </span>
      </div>
      
      
        <h3 className="text-lg font-semibold text-gray-900 pb-1 mb-2 border-b border-gray-300">
          Surgical Training Platform
        </h3>
      
        <p className="text-sm text-gray-600 mb-3">
          Critical physician shortage (37K–124K by 2034) with limited surgical training opportunities
        </p>
      
        <div className="flex justify-between text-xs text-gray-500">
          <span>12–18 months</span>
          <span>Medium Complexity</span>
        </div>
      </div>
      
      
      
      
      {/* cart2 */}
      <div className="border rounded-lg p-4 shadow-sm hover:shadow-md transition">
      <div className="flex items-center justify-between mb-1 text-xs font-semibold">
        <div className="bg-gradient-to-r from-[rgb(105,189,242)] via-[rgb(212,128,242)] to-[rgb(255,191,128)] p-2 rounded-full">
          <FaNotesMedical className="text-xl text-white" />
        </div>
        <span className="bg-gradient-to-r from-[rgb(105,189,242)] via-[rgb(212,128,242)] to-[rgb(255,191,128)] bg-clip-text text-transparent">
          XR & Gaming
        </span>
      </div>
      
      
        <h3 className="text-lg font-semibold text-gray-900 pb-1 mb-2 border-b border-gray-300">
        Patient Education VR
        </h3>
      
        <p className="text-sm text-gray-600 mb-3">
          4 in 10 patients face affordability & understanding gaps: poor treatment compliance
        </p>
      
        <div className="flex justify-between text-xs text-gray-500">
          <span>12–18 months</span>
          <span>Low Complexity</span>
        </div>
      </div>
      
      
      
      
      
      {/* cart 3 */}
      <div className="border rounded-lg p-4 shadow-sm hover:shadow-md transition">
      <div className="flex items-center justify-between mb-2 text-sm font-semibold">
        <div className="bg-gradient-to-r from-[rgb(105,189,242)] via-[rgb(212,128,242)] to-[rgb(255,191,128)] p-2 rounded-full">
          <FaLaptopMedical className="text-xl text-white" /> {/* icon size adjusted inside background */}
        </div>
        <span className="bg-gradient-to-r from-[rgb(105,189,242)] via-[rgb(212,128,242)] to-[rgb(255,191,128)] bg-clip-text text-transparent">
          XR & Gaming
        </span>
      </div>
      
      
        <h3 className="text-lg font-semibold text-gray-900 pb-1 mb-2 border-b border-gray-300">
          Remote Consultation Platform
        </h3>
      
        <p className="text-sm text-gray-600 mb-3">
          Specialist access gaps in rural/underserved areas; $265B shifts to home-based care
        </p>
      
        <div className="flex justify-between text-xs text-gray-500">
          <span>18–24 months</span>
          <span>High Complexity</span>
        </div>
      </div>
      
        {/* cart 4 */}
      <div className="border rounded-lg p-4 shadow-sm hover:shadow-md transition">
      <div className="flex items-center justify-between mb-2 text-sm font-semibold">
        <div className="bg-gradient-to-r from-[rgb(105,189,242)] via-[rgb(212,128,242)] to-[rgb(255,191,128)] p-2 rounded-full">
          <FaMicrochip className="text-white text-xl" />
        </div>
        <span className="bg-gradient-to-r from-[rgb(105,189,242)] via-[rgb(212,128,242)] to-[rgb(255,191,128)] bg-clip-text text-transparent">
          AI Advisory
        </span>
      </div>
      
      
        <h3 className="text-lg font-semibold text-gray-900 pb-1 mb-2 border-b border-gray-300">
          AI Readiness Assessment
        </h3>
      
        <p className="text-sm text-gray-600 mb-3">
          77% prioritize AI but lack a strategic framework for effective, scalable implementation
        </p>
      
        <div className="flex justify-between text-xs text-gray-500">
          <span>12–18 months</span>
          <span>Medium Complexity</span>
        </div>
      </div>
      
      
      {/* cart 5 */}
      <div className="border rounded-lg p-4 shadow-sm hover:shadow-md transition">
      <div className="flex items-center justify-between mb-2 text-sm font-semibold">
        <div className="bg-gradient-to-r from-[rgb(105,189,242)] via-[rgb(212,128,242)] to-[rgb(255,191,128)] p-2 rounded-full">
          <FaMoneyBillWave className="text-white text-xl" />
        </div>
        <span className="bg-gradient-to-r from-[rgb(105,189,242)] via-[rgb(212,128,242)] to-[rgb(255,191,128)] bg-clip-text text-transparent">
          AI Advisory
        </span>
      </div>
      
      
        <h3 className="text-lg font-semibold text-gray-900 pb-1 mb-2 border-b border-gray-300">
          Revenue Cycle Optimization
        </h3>
      
        <p className="text-sm text-gray-600 mb-3">
          15 cents lost per dollar; current systems lack predictive AI for denial prevention & efficiency
        </p>
      
        <div className="flex justify-between text-xs text-gray-500">
          <span>6–12 months</span>
          <span>Medium Complexity</span>
        </div>
      </div>
      {/* cart 6 */}
      <div className="border rounded-lg p-4 shadow-sm hover:shadow-md transition">
      
      <div className="flex items-center justify-between mb-2 text-sm font-semibold">
        <div className="bg-gradient-to-r from-[rgb(105,189,242)] via-[rgb(212,128,242)] to-[rgb(255,191,128)] p-2 rounded-full">
          <FaUserMd className="text-white text-xl" />
        </div>
        <span className="bg-gradient-to-r from-[rgb(105,189,242)] via-[rgb(212,128,242)] to-[rgb(255,191,128)] bg-clip-text text-transparent">
          AI Advisory
        </span>
      </div>
      
      
      
        <h3 className="text-lg font-semibold text-gray-900 pb-1 mb-2 border-b border-gray-300">
          Clinical Decision Support
        </h3>
      
        <p className="text-sm text-gray-600 mb-3">
          Medical decisions suffer without real-time AI to improve safety, accuracy, & diagnostic confidence.
        </p>
      
        <div className="flex justify-between text-xs text-gray-500">
          <span>12–18 months</span>
          <span>High Complexity</span>
        </div>
      </div>
          
      
      {/* cart 7 */}
      <div className="border rounded-lg p-4 shadow-sm hover:shadow-md transition">
      <div className="flex items-center justify-between mb-2 text-sm font-semibold">
        <div className="bg-gradient-to-r from-[rgb(105,189,242)] via-[rgb(212,128,242)] to-[rgb(255,191,128)] p-2 rounded-full">
          <FaBookMedical className="text-white text-xl" />
        </div>
        <span className="bg-gradient-to-r from-[rgb(105,189,242)] via-[rgb(212,128,242)] to-[rgb(255,191,128)] bg-clip-text text-transparent">
          Creative & Entertainment
        </span>
      </div>
      
        
      
        <h3 className="text-lg font-semibold text-gray-900 pb-1 mb-2 border-b border-gray-300">
          Patient Education Content
        </h3>
      
        <p className="text-sm text-gray-600 mb-3">
          Low health literacy persists; providers lack customizable, multilingual tools for clear patient communication.
        </p>
      
        <div className="flex justify-between text-xs text-gray-500">
          <span>12–18 months</span>
          <span>Low Complexity</span>
        </div>
      </div>
      
      {/* cart 8 */}
      <div className="border rounded-lg p-4 shadow-sm hover:shadow-md transition">
      <div className="flex items-center justify-between mb-2 text-sm font-semibold">
        <div className="bg-gradient-to-r from-[rgb(105,189,242)] via-[rgb(212,128,242)] to-[rgb(255,191,128)] p-2 rounded-full">
          <FaMicrochip className="text-white text-xl" />
        </div>
        <span className="bg-gradient-to-r from-[rgb(105,189,242)] via-[rgb(212,128,242)] to-[rgb(255,191,128)] bg-clip-text text-transparent">
          Creative & Entertainment
        </span>
      </div>
      
      
      
        <h3 className="text-lg font-semibold text-gray-900 pb-1 mb-2 border-b border-gray-300">
          Healthcare Marketing
        </h3>
      
        <p className="text-sm text-gray-600 mb-3">
          Organizations struggle to differentiate; authentic, culturally resonant storytelling boosts trust & community engagement.
        </p>
      
        <div className="flex justify-between text-xs text-gray-500">
          <span>6–12 months</span>
          <span>Medium Complexity</span>
        </div>
      </div>
      
      
      {/* cart 9 */}
      <div className="border rounded-lg p-4 shadow-sm hover:shadow-md transition">
      <div className="flex items-center justify-between mb-2 text-sm font-semibold">
        <div className="bg-gradient-to-r from-[rgb(105,189,242)] via-[rgb(212,128,242)] to-[rgb(255,191,128)] p-2 rounded-full">
          <FaUserMd className="text-white text-xl" />
        </div>
        <span className="bg-gradient-to-r from-[rgb(105,189,242)] via-[rgb(212,128,242)] to-[rgb(255,191,128)] bg-clip-text text-transparent">
          Creative & Entertainment
        </span>
      </div>
      
      
        <h3 className="text-lg font-semibold text-gray-900 pb-1 mb-2 border-b border-gray-300">
          Medical Training Content Production
        </h3>
      
        <p className="text-sm text-gray-600 mb-3">
          Healthcare workers lack effective training content tailored to learning styles, specialists, & competency needs.
        </p>
      
        <div className="flex justify-between text-xs text-gray-500">
          <span>12–18 months</span>
          <span>High Complexity</span>
        </div>
      </div>
      
      
      
      {/* cart 10 */}
      <div className="border rounded-lg p-4 shadow-sm hover:shadow-md transition">
      <div className="flex items-center justify-between mb-2 text-sm font-semibold">
        <div className="bg-gradient-to-r from-[rgb(105,189,242)] via-[rgb(212,128,242)] to-[rgb(255,191,128)] p-2 rounded-full">
          <FaLaptopMedical className="text-white text-xl" />
        </div>
        <span className="bg-gradient-to-r from-[rgb(105,189,242)] via-[rgb(212,128,242)] to-[rgb(255,191,128)] bg-clip-text text-transparent">
          Digital Learning
        </span>
      </div>
      
      
        <h3 className="text-lg font-semibold text-gray-900 pb-1 mb-2 border-b border-gray-300">
          Healthcare LMS
        </h3>
      
        <p className="text-sm text-gray-600 mb-3">
          Fragmented training programs lack robust LMS tools for workforce & competency tracking.
        </p>
      
        <div className="flex justify-between text-xs text-gray-500">
          <span>12–18 months</span>
          <span>Medium Complexity</span>
        </div>
      </div>
      
      
      {/* cart 11 */}
      <div className="border rounded-lg p-4 shadow-sm hover:shadow-md transition">
      <div className="flex items-center justify-between mb-2 text-sm font-semibold">
        <div className="bg-gradient-to-r from-[rgb(105,189,242)] via-[rgb(212,128,242)] to-[rgb(255,191,128)] p-2 rounded-full">
          <FaGamepad className="text-white text-xl" />
        </div>
        <span className="bg-gradient-to-r from-[rgb(105,189,242)] via-[rgb(212,128,242)] to-[rgb(255,191,128)] bg-clip-text text-transparent">
          Creative & Entertainment
        </span>
      </div>
      
      
        <h3 className="text-lg font-semibold text-gray-900 pb-1 mb-2 border-b border-gray-300">
          Gamified Learning
        </h3>
      
        <p className="text-sm text-gray-600 mb-3">
          Traditional training underperforms; gamified learning boosts engagement, retention, & clinical outcomes.
        </p>
      
        <div className="flex justify-between text-xs text-gray-500">
          <span>12–18 months</span>
          <span>Medium Complexity</span>
        </div>
      </div>
      
      {/* cart 12 */}
      <div className="border rounded-lg p-4 shadow-sm hover:shadow-md transition">
      <div className="flex items-center justify-between mb-2 text-sm font-semibold">
        <div className="bg-gradient-to-r from-[rgb(105,189,242)] via-[rgb(212,128,242)] to-[rgb(255,191,128)] p-2 rounded-full">
          <FaVrCardboard className="text-white text-xl" />
        </div>
        <span className="bg-gradient-to-r from-[rgb(105,189,242)] via-[rgb(212,128,242)] to-[rgb(255,191,128)] bg-clip-text text-transparent">
          Creative & Entertainment
        </span>
      </div>
      
      
      
        <h3 className="text-lg font-semibold text-gray-900 pb-1 mb-2 border-b border-gray-300">
          Virtual Skills Laboratory
        </h3>
      
        <p className="text-sm text-gray-600 mb-3">
          Simulation access is limited; virtual labs deliver scalable, safe, remote procedural & patient training.
        </p>
      
        <div className="flex justify-between text-xs text-gray-500">
          <span>18–24 months</span>
          <span>High Complexity</span>
        </div>
      </div>
      
      
          </div>
        </div>
      </section>
      
    </div>
  )
}

export default usecases
