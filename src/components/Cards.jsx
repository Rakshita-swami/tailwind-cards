import React from "react";
import beach from "../assets/beach.avif";
import room from "../assets/room.avif";
import tails from "../assets/tails.avif";
import person1 from "../assets/person1.avif";
import person2 from "../assets/person2.avif";
import person3 from "../assets/person3.avif";
import person4 from "../assets/person4.avif";
import person5 from "../assets/person5.avif";
import person6 from "../assets/person6.avif"





const Cards = () => {
  return (
    <section className="bg-white py-12 px-6 pb-5">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-4">
    {/* Left Card */}
<div className="bg-white shadow-sm border border-gray-100 rounded-3xl p-6 flex flex-col items-center text-center">
  <div className="relative w-full flex justify-center mb-6">
    {/* Left Image (behind middle, bigger) */}
    <img
      src={beach}
      alt="Beach"
      className="w-56 h-64 object-cover rounded-2xl shadow-md absolute left-[3%] -top-2 rotate-[-8deg] z-0"
    />

    {/* Middle Image (base layer, bigger) */}
    <img
      src={room}
      alt="Room"
      className="w-52 h-64 object-cover rounded-2xl shadow-md relative z-10"
    />

    {/* Right Image (bigger, in front of middle) */}
    <img
      src={tails}
      alt="Yoga"
      className="w-52 h-62 object-cover rounded-2xl shadow-md absolute right-[10%] top-4 rotate-[8deg] z-30"
    />
  </div>
<h3 className="text-2xl font-semibold text-[#3c0000] font-outfit">
  Remember your locations
</h3>


<p className="text-[#7d6666] text-base mt-4">
  Save your favorite meditation spots, whether it’s your cozy reading nook,
  a quiet park, or a peaceful beach.
</p>

</div>
{/* Right Card */}
<div className="bg-gradient-to-b from-pink-50 to-white shadow-sm border border-gray-100 rounded-3xl p-6 flex flex-col items-center text-center">
  <div className="relative w-80 h-80 flex items-center justify-center mb-4">
    
    {/* === 4 Orbit Rings === */}
    <div className="absolute -inset-6 rounded-full border-8 border-pink-300 blur-xl"></div>
    <div className="absolute inset-0 rounded-full border-8 border-pink-200 blur-lg"></div>
    <div className="absolute inset-8 rounded-full border-8 border-pink-100"></div>
    <div className="absolute inset-14 rounded-full border-8 border-pink-50"></div>

    {/* Center Image */}
    <img
      src={person1}
      alt="Main person"
      className="w-32 h-32 rounded-full object-cover border-4 border-pink-200 shadow-lg z-10"
    />

    {/* Small Images Around */}
    {[
      { angle: -90, img: person2 }, 
      { angle: -45, img: person3 },  
      { angle: 0, img: person4 },    
      { angle: -135, img: person5 },
      { angle: -180, img: person6 }, 
    ].map((item, idx) => {
      const radius = 120; // smaller radius to fit reduced circle
      const x = radius * Math.cos((item.angle * Math.PI) / 180);
      const y = radius * Math.sin((item.angle * Math.PI) / 180);

      return (
        <img
          key={idx}
          src={item.img}
          alt="friend"
          className="w-14 h-14 rounded-full border-2 border-white shadow-md absolute"
          style={{
            left: `calc(50% + ${x}px)`,
            top: `calc(50% + ${y}px)`,
            transform: "translate(-50%, -50%)",
          }}
        />
      );
    })}
  </div>

  <h3 className="text-2xl font-semibold text-[#3c0000] mb-2 font-outfit">
    Friendly community
  </h3>

  <p className="text-[#7d6666] text-base mt-2">
    Join a welcoming space where you can share progress, exchange
    experiences, and find encouragement.
  </p>
</div>


      </div>
    </section>
  );
};

export default Cards;
