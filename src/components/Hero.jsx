import React from "react";


const Hero = () => {
  return (
    <section className="bg-white py-16">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        
        {/* Left Side - Heading */}
        <div>
<h1 className="text-[52px] font-semibold text-[#3c0000] leading-tight font-outfit">
  Find your calm, <br />
  Anytime, Anywhere
</h1>


        </div>

        {/* Right Side - Paragraph */}
        <div>
     <p className="text-base text-[#7d6666] leading-relaxed">
  Whether you need a quick mental reset or a deep meditation session,
  Hush helps you slow down, breathe, and feel at ease—whenever life
  gets overwhelming.
</p>

        </div>

      </div>
    </section>
  );
};

export default Hero;
