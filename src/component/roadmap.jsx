import React from 'react'

const roadmap = () => {
  return (
    <div>

      
      <section className="py-16 px-6 bg-gradient-to-r from-white to-purple-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-semibold text-gray-900 mb-2">
            Strategic Roadmap for Healthcare Transformation
          </h2>
          <p className="text-gray-600 mb-10">
            Based on industry challenges & proven use cases, here’s a clear action plan for entering & growing in the healthcare market:
          </p>
      
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Immediate Priorities */}
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-1">Immediate Priorities</h3>
              <p className="text-sm text-gray-500">(0–6 months)</p>
              <div className="border-b border-gray-300 mb-3 mt-1"></div>
      
              <ul className="text-sm text-gray-700 list-disc list-inside space-y-1">
                <li>VR surgical training platforms</li>
                <li>AI services for revenue cycle optimization</li>
                <li>Patient education content</li>
              </ul>
              <p className="mt-4 text-sm font-medium text-gray-900">Builds early success & market trust</p>
            </div>
      
            {/* Medium-Term Priorities */}
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-1">Medium–Term Priorities</h3>
              <p className="text-sm text-gray-500">(6–18 months)</p>
              <div className="border-b border-gray-300 mb-3 mt-1"></div>
      
              <p className="text-sm text-gray-700 mb-2">Exp& into broader solutions:</p>
              <ul className="text-sm text-gray-700 list-disc list-inside space-y-1">
                <li>Learning management systems (LMS)</li>
                <li>Clinical decision support AI</li>
                <li>Patient engagement services</li>
              </ul>
              <p className="mt-4 text-sm font-medium text-gray-900">Deepens offerings & strengthens client ties</p>
            </div>
      
            {/* Long-Term Priorities */}
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-1">Long–Term Priorities</h3>
              <p className="text-sm text-gray-500">(18+ months)</p>
              <div className="border-b border-gray-300 mb-3 mt-1"></div>
      
              <p className="text-sm text-gray-700 mb-2">Aim for market leadership:</p>
              <ul className="text-sm text-gray-700 list-disc list-inside space-y-1">
                <li>Fully integrated transformation platforms</li>
                <li>Advanced VR therapy</li>
                <li>Scalable workforce development</li>
              </ul>
              <p className="mt-4 text-sm font-medium text-gray-900">Positions as a strategic healthcare partner</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default roadmap
