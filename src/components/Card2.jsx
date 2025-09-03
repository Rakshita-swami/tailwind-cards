import React from "react";
import person2 from "../assets/person2.avif";
import phoneMockup from "../assets/mb.png";
import person1 from "../assets/person1.avif";
import person5 from "../assets/person5.avif";
import person6 from "../assets/person6.avif"

const Card2 = () => {
  return (
 <div className="bg-white flex flex-col items-center justify-start pt-0 pb-5">

  <div className="grid grid-cols-12 gap-4 w-full max-w-6xl">
        {/* Left Section - Leaderboard */}
       <div className="col-span-12 md:col-span-4 rounded-2xl shadow-md p-6 bg-gradient-to-b from-rose to-rose-50">
          <div className="space-y-4">
            {/* Jessie */}
            <div className="flex items-center justify-between border border-gray-200 rounded-full px-4 py-2 shadow-sm bg-white">
              <div>
                <p className="font-semibold text-gray-800">Jessie</p>
                <p className="text-sm text-gray-500">12 SESSIONS</p>
              </div>
              <img
                src={person2}
                alt="Jessie"
                className="w-12 h-12 rounded-full object-cover"
              />
            </div>

            {/* Lily */}
            <div className="flex items-center justify-between border border-gray-200 rounded-full px-4 py-2 shadow-sm bg-white">
              <div>
                <p className="font-semibold text-gray-800">Lily</p>
                <p className="text-sm text-gray-500">10 SESSIONS</p>
              </div>
              <img
                src={person1}
                alt="Lily"
                className="w-12 h-12 rounded-full object-cover"
              />
            </div>

            {/* Anna */}
            <div className="flex items-center justify-between border border-gray-200 rounded-full px-4 py-2 shadow-sm bg-white">
              <div>
                <p className="font-semibold text-gray-800">Anna</p>
                <p className="text-sm text-gray-500">7 SESSIONS</p>
              </div>
              <img
                src={person5}
                alt="Anna"
                className="w-12 h-12 rounded-full object-cover"
              />
            </div>

            {/* Stephanie (faded) */}
            <div className="flex items-center justify-between border border-gray-200 rounded-full px-4 py-2 shadow-sm bg-white opacity-50">
              <div>
                <p className="font-semibold text-gray-800">Stephanie</p>
                <p className="text-sm text-gray-500">3 SESSIONS</p>
              </div>
              <img
                src={person6}
                alt="Stephanie"
                className="w-12 h-12 rounded-full object-cover"
              />
            </div>
          </div>

          {/* Leaderboard Info */}
          <div className="mt-8">
            <h3 className="text-2xl font-semibold text-[#3c0000] mb-2">
              Climb in leaderboards
            </h3>
            <p className="text-[#7d6666] text-base">
              Track your meditation streaks and climb the leaderboards. Earn
              milestones and build a consistent practice.
            </p>
          </div>
        </div>

        {/* Right Section - Meditation Preview */}
 <div className="col-span-12 md:col-span-8 rounded-2xl shadow-lg p-8 bg-gradient-to-b from-white to-rose-50 flex flex-col items-center justify-center">
          {/* Phones Mockup */}
  <img
  src={phoneMockup}
  alt="Meditation App Preview"
  className="rounded-2xl shadow-md w-full h-auto"
/>

          {/* Text */}
          <div className="text-center mt-6">

            <h3 className="text-2xl font-semibold text-[#3c0000] mb-2 font-outfit">
  Daily meditations tailored for you
</h3>

        
            <p className="text-[#7d6666] text-base">
              Choose from structured programs designed for better sleep, stress
              relief, or focus. Each program evolves with your progress, keeping
              you engaged and motivated.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card2;
