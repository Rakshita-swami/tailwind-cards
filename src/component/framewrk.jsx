import React from 'react'

const framewrk = () => {
  return (
    <div>
  

<section className="py-16 px-4 bg-gradient-to-r from-white to-purple-50">
  <div className="max-w-3xl mx-auto">
    <h2 className="text-3xl font-semibold text-gray-900 mb-2 text-left">
  Strategic Transformation Framework
</h2>
<p className="text-gray-600 mb-0 text-left">

  A strategic framework driving innovation, efficiency, & resilience across care delivery, workforce, & operations.
</p>

    <div className="space-y-6">
      {[
        { title: "Tech–First", desc: "AI, VR/AR, digital platforms" },
        { title: "Workforce Augmentation", desc: "AI workflows, remote learning" },
        { title: "Patient–Centric", desc: "Digital front doors, home-based care ($265B by 2025)" },
        { title: "Operational Excellence", desc: "Cost control, security, quality systems" },
        { title: "Regulatory Adaptation", desc: "Compliance automation, value-based care models" }
      ].map((item, index) => (
        <div
          key={index}
          className="flex flex-row items-start border-b border-gray-300 pb-3 gap-4"
        >
          <h3 className="text-base font-medium text-gray-900 min-w-[220px]">
            {item.title}
          </h3>
          <p className="text-sm text-gray-500 max-w-[300px]">
            {item.desc}
          </p>
        </div>
      ))}
    </div>
  </div>
</section>

    </div>
  )
}

export default framewrk
