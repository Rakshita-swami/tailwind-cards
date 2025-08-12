import React from 'react'

const Digital = () => {
  return (
    <div>
      <section className="bg-gradient-to-r from-white via-gray-50 to-white py-12 px-4">
        <div className="max-w-7xl mx-auto text-center mb-10">
          <h2 className="text-3xl font-bold text-gray-800">
            Digital Transformation Landscape
          </h2>
          <p className="text-sm text-gray-500 mt-2">
            Empowering Healthcare Through Smart Technologies
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">

          {/* Card 1 */}
          <div className="bg-white rounded-xl shadow p-6 hover:shadow-md transition">
            <div className="flex justify-center mb-4">
              <div className="bg-gradient-to-r from-[rgb(105,189,242)] via-[rgb(212,128,242)] to-[rgb(255,191,128)] p-3 rounded-full">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 2a1 1 0 011 1v2h-4V3a1 1 0 011-1zm-3 5a4 4 0 118 0v2a4 4 0 01-8 0V7z"
                  />
                </svg>
              </div>
            </div>
            <h3 className="text-lg font-semibold text-gray-800 mb-3 text-center">AI Leadership</h3>
            <ul className="text-sm text-gray-600 space-y-2">
              <li className="border-t pt-2">77% of leaders prioritize AI</li>
              <li className="border-t pt-2">73% plan to use Generative AI</li>
              <li className="border-t pt-2">Market growth $4B to $46B</li>
            </ul>
          </div>

          {/* Card 2 */}
          <div className="bg-white rounded-xl shadow p-6 hover:shadow-md transition">
            <div className="flex justify-center mb-4">
              <div className="bg-gradient-to-r from-[rgb(105,189,242)] via-[rgb(212,128,242)] to-[rgb(255,191,128)] p-3 rounded-full">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 9a4 4 0 014-4h8a4 4 0 014 4v6a4 4 0 01-4 4H8a4 4 0 01-4-4V9z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8 15s1-2 4-2 4 2 4 2"
                  />
                </svg>
              </div>
            </div>
            <h3 className="text-lg font-semibold text-gray-800 mb-3 text-center">XR/VR Revolution</h3>
            <ul className="text-sm text-gray-600 space-y-2">
              <li className="border-t pt-2">68% medical schools use VR</li>
              <li className="border-t pt-2">71% doctors prefer VR training</li>
              <li className="border-t pt-2">84% believe positive impact</li>
            </ul>
          </div>

          {/* Card 3 */}
          <div className="bg-white rounded-xl shadow p-6 hover:shadow-md transition">
            <div className="flex justify-center mb-4">
              <div className="bg-gradient-to-r from-[rgb(105,189,242)] via-[rgb(212,128,242)] to-[rgb(255,191,128)] p-3 rounded-full">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 6V4a1 1 0 00-1-1H5a2 2 0 00-2 2v14a2 2 0 002 2h6a1 1 0 001-1v-2m0-10h6a2 2 0 012 2v12a2 2 0 01-2 2h-6"
                  />
                </svg>
              </div>
            </div>
            <h3 className="text-lg font-semibold text-gray-800 mb-3 text-center">Digital Learning</h3>
            <ul className="text-sm text-gray-600 space-y-2">
              <li className="border-t pt-2">Remote Acceleration</li>
              <li className="border-t pt-2">AI personalizes training paths</li>
              <li className="border-t pt-2">Enhance learning engagement</li>
            </ul>
          </div>

          {/* Card 4 */}
          <div className="bg-white rounded-xl shadow p-6 hover:shadow-md transition">
            <div className="flex justify-center mb-4">
              <div className="bg-gradient-to-r from-[rgb(105,189,242)] via-[rgb(212,128,242)] to-[rgb(255,191,128)] p-3 rounded-full">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5.121 17.804A5.004 5.004 0 017 10h10a5 5 0 011.879 7.804M15 10v1.586a1 1 0 01-.293.707l-2 2a1 1 0 01-1.414 0l-2-2A1 1 0 019 11.586V10"
                  />
                </svg>
              </div>
            </div>
            <h3 className="text-lg font-semibold text-gray-800 mb-3 text-center">Patient Centric Care</h3>
            <ul className="text-sm text-gray-600 space-y-2">
              <li className="border-t pt-2">Digital front doors</li>
              <li className="border-t pt-2">$265B home care by 2025</li>
              <li className="border-t pt-2">Boost patient engagement</li>
            </ul>
          </div>

        </div>
      </section>
    </div>
  )
}

export default Digital
