import Link from 'next/link';

export default function TargetClients() {
  const clients = [
    {
      title: "Municipalities",
      description: "Project management and risk assessment for urban development and infrastructure projects.",
      slug: "municipalities"
    },
    {
      title: "Regional Districts",
      description: "Strategic guidance for multi-jurisdictional projects requiring coordination across communities.",
      slug: "school-districts"
    },
    {
      title: "School Districts",
      description: "Educational facility planning and construction oversight with focus on community impact.",
      slug: "school-districts"
    },
    {
      title: "Non-Profit Organizations",
      description: "Cost-effective project delivery and grant writing tailored to mission-driven budgets.",
      slug: "non-profits"
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-steel-50 to-steel-100 dark:from-steel-950 dark:to-steel-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
            <span className="text-steel-500 dark:text-steel-50">Organizations We Serve</span>{' '}
          </h2>
          <p className="text-xl text-steel-600 dark:text-steel-400 max-w-2xl mx-auto">
            Specialized expertise for public sector and non-profit entities across British Columbia
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {clients.map((client, index) => (
            <Link
              key={index}
              href={`/${client.slug}`}
              className="group p-8 rounded-xl bg-white dark:bg-steel-900/50 border border-steel-300 dark:border-steel-800/50 hover:border-accent-blue/50 transition-all duration-300 hover:-translate-y-2"
            >
              <h3 className="text-xl font-bold text-steel-500 dark:text-steel-100 mb-3 group-hover:text-accent-blue transition-colors">
                {client.title}
              </h3>
              <p className="text-steel-600 dark:text-steel-400 leading-relaxed">
                {client.description}
              </p>
              <div className="flex items-center text-accent-blue text-sm font-medium">
                Learn more
                <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
