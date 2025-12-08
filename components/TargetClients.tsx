export default function TargetClients() {
  const clients = [
    {
      title: "Municipalities",
      description: "Comprehensive project management and risk assessment for urban development and infrastructure projects.",
      icon: "🏛️"
    },
    {
      title: "Regional Districts",
      description: "Strategic guidance for multi-jurisdictional projects requiring coordination across communities.",
      icon: "🗺️"
    },
    {
      title: "School Districts",
      description: "Educational facility planning and construction oversight with focus on community impact.",
      icon: "🎓"
    },
    {
      title: "Non-Profit Organizations",
      description: "Cost-effective project delivery and grant writing tailored to mission-driven budgets.",
      icon: "🫱🏼‍🫲🏾"
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-steel-50 to-steel-100 dark:from-steel-950 dark:to-steel-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
            <span className="text-steel-500 dark:text-steel-50">Organizations We</span>{' '}
            <span className="gradient-text">Serve</span>
          </h2>
          <p className="text-xl text-steel-600 dark:text-steel-400 max-w-2xl mx-auto">
            Specialized expertise for public sector and non-profit entities across British Columbia
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {clients.map((client, index) => (
            <div
              key={index}
              className="group p-8 rounded-xl bg-white dark:bg-steel-900/50 border border-steel-300 dark:border-steel-800/50 hover:border-accent-blue/50 transition-all duration-300 hover:-translate-y-2"
            >
              <div className="text-4xl mb-4 transform group-hover:scale-110 transition-transform duration-300 opacity-80">
                {client.icon}
              </div>
              <h3 className="text-xl font-bold text-steel-500 dark:text-steel-100 mb-3 group-hover:text-accent-blue transition-colors">
                {client.title}
              </h3>
              <p className="text-steel-600 dark:text-steel-400 leading-relaxed">
                {client.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
