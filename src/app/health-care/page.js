
import React from 'react';
import {
  FaUserMd,
  FaMicrochip,
  FaHospitalAlt,
  FaVrCardboard,
  FaBookMedical,
   FaNotesMedical,
   FaLaptopMedical,
   FaMoneyBillWave,FaGamepad,  FaLinkedinIn,
   FaTwitter, 
  FaYoutube,
  FaInstagram
  
} from 'react-icons/fa';
import Hero from '../../component/hero';
// import Percentage from '../../component/percentage ';
import Industrychal from '../../component/industrychal';
import Strategic from '../../component/strategic';
import Digital from '../../component/digital';
// import Framewrk from '../../component/framewrk';
import Roadmap from '../../component/roadmap';
import Usecases from '../../component/usecases';
import Cta from '../../component/cta';


function HealthCare() {
  return (
    <div className="min-h-screen bg-white text-gray-800 font-sans">
      {/* Hero Section */}
  <Hero/>

     <Industrychal />

     {/* <Percentage/> */}

     <Strategic />

    <Digital />

    {/* <Framewrk /> */}

    <Roadmap/>

    <Usecases/>
    <Cta/>












  {/* <!-- Footer Section --> */}
  <section className="px-6 md:px-20 py-12 bg-transparent text-gray-800">
    <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-10">
      {/* <!-- Logo --> */}
      <div className="flex-shrink-0">
        {/* <img src="your-logo.png" alt="Karanji Logo" class="h-10 mb-4"> */}
        <p className="font-semibold text-xl">Karanji</p>
      </div>

      {/* <!-- Footer Links Grid --> */}
      <div className="grid grid-cols-2 md:grid-cols-6 gap-8 text-sm">
        {/* <!-- Technology Solutions --> */}
        <div>
          <h3 className="font-semibold mb-5">Technology Solutions</h3>
          <ul className="space-y-3">
            <li>AI Advisory & Implementation</li>
            <li>Digital Twins & Simulations</li>
            <li>XR & Gamming Solutions</li>
          </ul>
        </div>

        {/* <!-- Digital Learning --> */}
        <div>
          <h3 className="font-semibold mb-5">Digital Learning</h3>
          <ul className="space-y-3">
            <li>Content Design & Development</li>
            <li>Learning Management Systems</li>
            <li>Advanced Analytics</li>
          </ul>
        </div>

        {/* <!-- Entertainment Services --> */}
        <div>
          <h3 className="font-semibold mb-5">Entertainment Services</h3>
          <ul className="space-y-3">
            <li>VFX & Animation Services</li>
            <li>Audio & Podcast Production</li>
            <li>Event Production & Management</li>
          </ul>
        </div>

        {/* <!-- Industries --> */}
        <div>
          <h3 className="font-semibold mb-5">Industries</h3>
          <ul className="space-y-3">
            <li>Healthcare</li>
            <li>Aviation</li>
            <li>Logistics</li>
            <li>Oil & Gas</li>
          </ul>
        </div>

        {/* <!-- Company --> */}
        <div>
          <h3 className="font-semibold mb-5">Company</h3>
          <ul className="space-y-3">
            <li>About Us</li>
            <li>Our Team</li>
            <li>Digital Twins</li>
            <li>Careers</li>
            <li>Contact</li>
          </ul>
        </div>

        {/* <!-- Resources --> */}
        <div>
          <h3 className="font-semibold mb-5">Resources</h3>
          <ul className="space-y-3">
            <li>Blog</li>
            <li>Case Studies</li>
            <li>Webinars</li>
          </ul>
        </div>
      </div>
    </div>
  </section>


{/* 
<!-- Footer Disclaimer Section --> */}
<section className="bg-white text-gray-500 text-sm px-6 md:px-20 pt-8 pb-6 ">
  
  {/* <!-- Disclaimer Text --> */}
  <p className="mb-8">
    The quantitative metrics presented here are based on research and comparable implementations. These figures serve as directional indicators of potential magnitude rather than guaranteed outcomes. The actual impact may vary due to a multitude of factors.
  </p>

  {/* <!-- Bottom Row: Copyright, Links, Social --> */}
  <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4 ">
    
    {/* <!-- Left: © and Links --> */}
    <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-6">
      <span>© 2025 Karanji. All rights reserved.</span>
      <div className="flex flex-wrap gap-4 underline">
        <a href="#">Privacy Policy</a>
        <a href="#">Terms of Service</a>
        <a href="#">Cookie Settings</a>
        <a href="#">Accessibility Statement</a>
      </div>
    </div>

    {/* <!-- Right: Social Icons --> */}
<div className="flex items-center gap-3 text-gray-600">
  <a href="#" className="border p-2 rounded hover:text-blue-600" aria-label="LinkedIn">
    <FaLinkedinIn />
  </a>
<a href="#" className="border p-2 rounded hover:text-black" aria-label="X (Twitter)">
  <FaTwitter />
</a>

  <a href="#" className="border p-2 rounded hover:text-red-600" aria-label="YouTube">
    <FaYoutube />
  </a>
  <a href="#" className="border p-2 rounded hover:text-pink-500" aria-label="Instagram">
    <FaInstagram />
  </a>
</div>

  </div>

</section>




    </div>
  );
}




























// Components
function ChallengeCard({ icon, title, description }) {
  return (
    <div className="bg-white p-6 rounded-xl shadow flex items-center justify-between">
      <div>
        <h4 className="text-lg font-bold mb-1">{title}</h4>
        <p className="text-gray-600 text-sm">{description}</p>
      </div>
      {icon}
    </div>
  );
}

function StatBox({ value, label }) {
  return (
    <div className="h-[100px] border rounded shadow flex flex-col justify-center items-center">
      <h2 className="font-semibold mb-1 text-purple-600 text-xl">{value}</h2>
      <p className="text-sm text-center">{label}</p>
    </div>
  );
}

export default HealthCare;


