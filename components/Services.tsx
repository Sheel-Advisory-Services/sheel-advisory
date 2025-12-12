export default function Services() {
  const otherServices = [
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
      title: "Procurement Management",
      description: (
        <>
          Expert guidance ensuring compliance, value, and transparency in public sector contracting. Provided through{' '}
          <a 
            href="https://pryceadvisory.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-accent-blue hover:text-accent-cyan transition-colors underline"
          >
            Pryce Advisory Services
          </a>.
        </>
      ),
      features: [
        "Procurement strategy development",
        "RFP/RFQ preparation and management",
        "Vendor evaluation and selection",
        "Contract negotiation and administration"
      ]
    }
  ];

  return (
    <section id="services" className="py-24 bg-white dark:bg-steel-950">
      <div className="container mx-auto px-6">
        {/* Owner Representative Services */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4 text-steel-600 dark:text-steel-50">
            Owner Representative Services
          </h2>
          <p className="text-xl text-steel-600 dark:text-steel-400 max-w-2xl mx-auto">
            Comprehensive support, communication and coordination, from planning strategy to delivery
          </p>
        </div>

        {/* Other Services */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {otherServices.map((service, index) => (
            <div
              key={index}
              className="group p-8 rounded-xl bg-gradient-to-br from-steel-50 to-white dark:from-steel-900/50 dark:to-steel-900/30 border border-steel-200 dark:border-steel-800/50 hover:border-accent-blue/30 transition-all duration-300"
            >
              <h3 className="text-2xl font-bold text-steel-600 dark:text-steel-100 mb-4 group-hover:text-accent-blue transition-colors">
                {service.title}
              </h3>
              <p className="text-steel-600 dark:text-steel-300 mb-6 leading-relaxed">
                {service.description}
              </p>
              <ul className="space-y-3">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start text-steel-600 dark:text-steel-400">
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
        <div className="mt-16 p-8 rounded-xl bg-gradient-to-r from-accent-blue/10 to-accent-cyan/10 border border-accent-blue/30 dark:border-accent-blue/20">
          <div className="max-w-3xl mx-auto text-center">
            <h3 className="text-2xl font-bold text-steel-600 dark:text-steel-50 mb-4">
              Reliable Promising — Practical Professional Advice
            </h3>
            <p className="text-steel-600 dark:text-steel-300 leading-relaxed">
              Our commitment goes beyond project delivery. We promise reliable guidance, transparent communication, 
              and a proven track record of turning complex challenges into successful outcomes for public sector organizations.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
