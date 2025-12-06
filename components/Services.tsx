export default function Services() {
  const services = [
    {
      title: "Owner Representative Services",
      description: "Acting as your advocate throughout the project lifecycle, ensuring your interests are protected and objectives are met with precision and accountability.",
      features: [
        "Project scope development and refinement",
        "Stakeholder coordination and communication",
        "Budget oversight and cost management",
        "Quality assurance and compliance monitoring"
      ]
    },
    {
      title: "Project Management Strategies",
      description: "Comprehensive project planning and execution frameworks tailored to public sector requirements and constraints.",
      features: [
        "Strategic project planning and scheduling",
        "Resource allocation and optimization",
        "Performance tracking and reporting",
        "Change management and adaptation"
      ]
    },
    {
      title: "Risk Management & Mitigation",
      description: "Proactive identification, assessment, and mitigation of project risks to ensure successful delivery and protect public investments.",
      features: [
        "Risk identification and assessment",
        "Mitigation strategy development",
        "Contingency planning",
        "Ongoing risk monitoring and adjustment"
      ]
    },
    {
      title: "Procurement & Contract Management",
      description: "Expert guidance through complex procurement processes ensuring compliance, value, and transparency in public sector contracting.",
      features: [
        "Procurement strategy development",
        "RFP/RFQ preparation and management",
        "Vendor evaluation and selection",
        "Contract negotiation and administration"
      ]
    }
  ];

  return (
    <section id="services" className="py-24 bg-steel-950">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
            <span className="gradient-text">Service Areas</span>{' '}
            <span className="text-steel-50">We Specialize In</span>
          </h2>
          <p className="text-xl text-steel-400 max-w-2xl mx-auto">
            From strategy to delivery, we provide comprehensive support for your most critical projects
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group p-8 rounded-xl bg-gradient-to-br from-steel-900/50 to-steel-900/30 border border-steel-800/50 hover:border-accent-blue/30 transition-all duration-300"
            >
              <h3 className="text-2xl font-bold text-steel-50 mb-4 group-hover:text-accent-blue transition-colors">
                {service.title}
              </h3>
              <p className="text-steel-300 mb-6 leading-relaxed">
                {service.description}
              </p>
              <ul className="space-y-3">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start text-steel-400">
                    <svg className="w-5 h-5 text-accent-cyan mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Value proposition callout */}
        <div className="mt-16 p-8 rounded-xl bg-gradient-to-r from-accent-blue/10 to-accent-cyan/10 border border-accent-blue/20">
          <div className="max-w-3xl mx-auto text-center">
            <h3 className="text-2xl font-bold text-steel-50 mb-4">
              Reliable Promising Excellence
            </h3>
            <p className="text-steel-300 leading-relaxed">
              Our commitment goes beyond project delivery. We promise reliable guidance, transparent communication, 
              and a proven track record of turning complex challenges into successful outcomes for public sector organizations.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
