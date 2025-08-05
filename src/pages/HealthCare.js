import React from 'react';
import { FaUserMd,FaMoneyBillWave, FaMicrochip, FaHospitalAlt } from 'react-icons/fa';

function HealthCare() {
  return (
    <div className="min-h-screen bg-white text-gray-800 font-sans">
      {/* Hero */}
      <section className="text-center py-16 px-4">
        <h2 className="text-5xl font-semithin">Healthcare Transformation Solutions</h2>
        <p className="mt-4 text-dark max-w-2xl mx-auto">
          Transforming healthcare with AI, XR, and Digital Learning to solve workforce gaps, control cost, & boost patient engagement through immersive, intelligent, & scalable solutions.
        </p>
        <h1 className='mt-4 max-w-2xl mx-auto'>Explore the Transformation L&scape </h1>
      </section>

      {/* Stats */}
      <section className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-6xl mx-auto px-4 py-12 text-center">
        <div>
          <h3 className="text-3xl font-bold">77%</h3>
          <p className="text-sm text-gray-600 mt-2">Executives prioritize AI</p>
        </div>
        <div>
          <h3 className="text-3xl font-bold">100K+</h3>
          <p className="text-sm text-gray-600 mt-2">Worker shortage by 2027</p>
        </div>
        <div>
          <h3 className="text-3xl font-bold">46B</h3>
          <p className="text-sm text-gray-600 mt-2">Market growth by 2027</p>
        </div>
        <div>
          <h3 className="text-3xl font-bold">68%</h3>
          <p className="text-sm text-gray-600 mt-2">Medical schools using AI</p>
        </div>
      </section>

      {/* Challenges */}
      <section className="bg-gray-50 py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-semibold mb-4">Industry Challenges & Priorities</h2>
          <h1 className="text-1xl font-thin">Overview</h1>

          <p className="text-gray-600 mb-8 max-w-3xl">
            The healthcare industry is evolving through AI, XR, & digital learning - driving smarter care, cost efficiency, & better patient engagement.
            Amid workforce & tech challenges, digital solutions empower providers to innovate, improve outcomes, & scale resiliently.
          </p>

<div className="grid md:grid-cols-3 gap-6">
  <div className="bg-white p-6 rounded shadow flex items-center justify-between">
    <div>
      <h3 className="text-lg font-bold mb-2">Workforce Crisis</h3>
      <p className="text-gray-600 text-sm">100K+ critical worker shortage by 2028, 50% burnout rate persists</p>
    </div>
    <FaUserMd className="text-purple-600 text-3xl ml-4" />
  </div>


  
  <div className="bg-white p-6 rounded shadow flex items-center justify-between">
    <div>
      <h3 className="text-lg font-bold  mb-2">Financial Pressure</h3>
      <p className="text-gray-600 text-sm">Rising costs, shrinking margins, revenue cycle inefficiencies.</p>
    </div>
    <FaMoneyBillWave className="text-purple-600 text-3xl ml-4" />
  </div>

  <div className="bg-white p-6 rounded shadow flex items-center justify-between">
    <div>
      <h3 className="text-lg font-bold mb-2">Technology Gaps</h3>
      <p className="text-gray-600 text-sm">180+ ransomware attacks, 137TB daily data, workflow inefficiencies</p>
    </div>
    <FaMicrochip className="text-purple-600 text-3xl ml-4" />
  </div>

  <div className="bg-white p-6 rounded shadow flex items-center justify-between">
    <div>
      <h3 className="text-lg font-bold  mb-2">Access Barriers</h3>
      <p className="text-gray-600 text-sm">26-day wait times, 4 in 10 can't afford care, cost-driven skipping</p>
    </div>
    <FaHospitalAlt className="text-purple-600 text-3xl ml-4" />
  </div>
</div>
        </div>
      </section>



<h1 class="text-3xl  text-gray-800 mb-6">Strategic Priorities 2025</h1>
<div class="max-w-2xl mx-auto px-4">
 
  <div class="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
    <div class="h-[100px] border rounded flex flex-col justify-center items-center">
      <h2 class="font-bold mb-1 text-purple-600 text-xl">65%</h2>
      <p class="text-sm text-center">Revenue Growth</p>
    </div>
    <div class="h-[100px] border rounded shadow flex flex-col justify-center items-center">
      <h2 class="font-semibold mb-1 text-purple-600 text-xl">55%</h2>
      <p class="text-sm text-center">Consumer Experience</p>
    </div>
    <div class="h-[100px] border rounded shadow flex flex-col justify-center items-center">
      <h2 class="font-semibold mb-1 text-purple-600 text-xl">55%</h2>
      <p class="text-sm text-center">AI & Technology</p>
    </div>
  </div>


  <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
    <div class="h-[100px] p-4 border rounded shadow flex flex-col justify-center items-center">
      <h2 class="font-semibold mb-2 text-purple-600">70%</h2>
      <p>Workforce Development</p>
    </div>
    <div class="h-[100px] p-4 border rounded shadow flex flex-col justify-center items-center">
      <h2 class="font-semibold mb-2 text-purple-600">60%</h2>
      <p>Cybersecurity</p>
    </div>
  </div>
</div>
    

 
    </div>
  );
}

export default HealthCare;
