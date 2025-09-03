import React from "react";

import stressRelief from "../assets/stress-relief.avif";
import calmMornings from "../assets/calm-mornings.avif";
import rewardIcon from "../assets/reward-icon.avif";

const Cards = () => {
  const notifications = [
    {
      title: "Yoga class near you!",
      message: "Cafe Yoga has a class nearby.",
      time: "12:41 AM",
    },
    {
      title: "Perfect time for relaxation",
      message: "Take 5 minutes for yourself.",
      time: "10:41 AM",
    },
    {
      title: "Congratulate yourself on a great day",
      message: "You've had the most meditations today.",
      time: "8:41 PM",
    },
  ];

  return (
<section className="bg-white pt-0 pb-12 px-6">


  <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-4">
        
        {/* Left Card */}
       <div className="bg-pink-50 shadow-sm border border-gray-100 rounded-3xl p-6 flex flex-col items-center text-center">
  
          <div className="relative w-full flex justify-center mb-6">
            {/* Left Image */}
            <img
              src={stressRelief}
              alt="Beach"
              className="w-80 h-64 object-cover rounded-2xl shadow-md absolute left-[3%] -top-2 rotate-[-8deg] z-0"
            />

            {/* Middle Image */}
       <img
  src={calmMornings}
  alt="Room"
  className="w-64 h-72 object-cover rounded-2xl shadow-md relative z-10 rotate-6"
/>

          </div>

          <h3 className="text-2xl font-semibold text-[#3c0000] mb-2 font-outfit">
            Remember your locations
          </h3>
          <p className="text-[#7d6666] text-base">
            Save your favorite meditation spots, whether it’s your cozy reading nook,
            a quiet park, or a peaceful beach.
          </p>
        </div>

        {/* Right Card */}
      <div className="bg-pink-50 shadow-sm border border-gray-100 rounded-3xl p-6 flex flex-col items-center text-center">
  
          <div className="space-y-3 w-full">
            {notifications.map((nudge, idx) => (
              <div
                key={idx}
                className="flex items-center justify-between p-3 rounded-xl shadow-md bg-white"
              >
                <div className="flex items-start space-x-3">
                  <img
                    src={rewardIcon}
                    alt="Wellness Logo"
                    className="w-10 h-10 rounded-lg bg-purple-200 p-2"
                  />
                  <div>
                    <p className="font-medium text-gray-900">{nudge.title}</p>
                    <p className="text-sm text-gray-500">{nudge.message}</p>
                  </div>
                </div>
                <p className="text-xs text-gray-400 whitespace-nowrap">{nudge.time}</p>
              </div>
            ))}
          </div>

          <div className="mt-6 text-center">
           <h3 className="text-2xl font-semibold text-[#3c0000] mb-2 font-outfit">
              A nudge when you need it most.
            </h3>
           <p className="text-[#7d6666] text-base">
              Get soft, mindful reminders to pause, breathe, and take a moment for
              yourself—without the pressure.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Cards;
