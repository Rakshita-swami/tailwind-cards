// src/components/Industrychal.jsx
import React from "react";
import {
  FaUserMd,
  FaMicrochip,
  FaHospitalAlt
} from "react-icons/fa";

const Industrychal = () => {
  return (
    <section className="bg-white py-12 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <h2 className="text-3xl font-bold text-gray-900 pb-8">
          Industry Challenges & Priorities
        </h2>
        <h3 className="text-xl text-gray-800 mb-4">Overview</h3>
        <p className="text-gray-700 pb-8">
          The healthcare industry is evolving through AI, XR, & digital learning –
          driving smarter care, cost efficiency, and better patient engagement.
          Amid workforce & tech challenges, digital solutions empower providers
          to innovate and scale resiliently.
        </p>

{/* Critical Challenges Section */}
<div className="flex justify-end">
  <div className="w-full md:w-2/5">
    
    {/* Heading */}
    <h2 className="text-2xl font-semibold text-gray-900 mb-6">
      Critical Challenges
    </h2>

{/* Card Grid */}
<div className="grid grid-cols-2 gap-6">

  {/* CARD 1 */}
  <div>
    <div className="bg-gradient-to-r from-[rgb(105,189,242)] via-[rgb(212,128,242)] to-[rgb(255,191,128)] p-2 rounded-full inline-block">
      <FaUserMd className="text-xl text-white" />
    </div>
    <h4 className="text-lg font-semibold text-gray-800 mt-4">
      Workforce Crisis
    </h4>
    <p className="text-sm text-gray-600">
      100K+ critical worker shortage by 2028, 50% burnout rate persists.
    </p>
  </div>

  {/* CARD 2 */}
  <div>
    <div className="bg-gradient-to-r from-[rgb(105,189,242)] via-[rgb(212,128,242)] to-[rgb(255,191,128)] p-2 rounded-full inline-block">
      <FaMicrochip className="text-xl text-white" />
    </div>
    <h4 className="text-lg font-semibold text-gray-800 mt-4">
      Financial Pressure
    </h4>
    <p className="text-sm text-gray-600">
      8% cost increases, 2% operating margins, $100B underpayment gap.
    </p>
  </div>

  {/* Divider spanning two columns */}
  <div className="col-span-2 my-4">
    <hr className="border-gray-300" />
  </div>

  {/* CARD 3 */}
  <div>
    <div className="bg-gradient-to-r from-[rgb(105,189,242)] via-[rgb(212,128,242)] to-[rgb(255,191,128)] p-2 rounded-full inline-block">
      <FaMicrochip className="text-xl text-white" />
    </div>
    <h4 className="text-lg font-semibold text-gray-800 mt-4">
      Technology Gaps
    </h4>
    <p className="text-sm text-gray-600">
      180+ ransomware attacks, 137TB daily data, workflow inefficiencies.
    </p>
  </div>

  {/* CARD 4 */}
  <div>
    <div className="bg-gradient-to-r from-[rgb(105,189,242)] via-[rgb(212,128,242)] to-[rgb(255,191,128)] p-2 rounded-full inline-block">
      <FaHospitalAlt className="text-xl text-white" />
    </div>
    <h4 className="text-lg font-semibold text-gray-800 mt-4">
      Access Barriers
    </h4>
    <p className="text-sm text-gray-600">
      26-day wait times, 4 in 10 can't afford care, cost-driven skipping.
    </p>
  </div>

</div>

  </div>
</div>

      </div>
    </section>
  );
};

export default Industrychal;
