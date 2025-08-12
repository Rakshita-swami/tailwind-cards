import React from 'react'

const percentage = () => {
  return (

<section className="max-w-6xl mx-auto px-4 py-12 bg-gradient-to-r from-white to-purple-50">
  <div className="space-y-10">

    {/* Row 1 */}
    <div className="flex items-center justify-between gap-10">
      {/* Left */}
      <div className="flex items-center space-x-3 flex-1 justify-end">
        <h3 className="text-3xl font-bold">77%</h3>
        <p className="text-xs text-gray-600 uppercase tracking-wider">Executives prioritize AI</p>
      </div>

      {/* Vertical divider */}
      <div className="h-6 w-px bg-gray-400"></div>

      {/* Right */}
      <div className="flex items-center space-x-3 flex-1 justify-start">
        <h3 className="text-3xl font-bold">46B</h3>
        <p className="text-xs text-gray-600 uppercase tracking-wider">Market growth by 2032</p>
      </div>
    </div>

    {/* Row 2 */}
    <div className="flex items-center justify-between gap-10">
      {/* Left */}
      <div className="flex items-center space-x-3 flex-1 justify-end">
        <h3 className="text-3xl font-bold">100K+</h3>
        <p className="text-xs text-gray-600 uppercase tracking-wider">Worker shortage by 2028</p>
      </div>

      {/* Vertical divider */}
      <div className="h-6 w-px bg-gray-400"></div>

      {/* Right */}
      <div className="flex items-center space-x-3 flex-1 justify-start">
        <h3 className="text-3xl font-bold">68%</h3>
        <p className="text-xs text-gray-600 uppercase tracking-wider">Medical schools use VR</p>
      </div>
    </div>

  </div>
</section>
  )
}

export default percentage
