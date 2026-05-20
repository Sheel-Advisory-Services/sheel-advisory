export default function Props() {
  const articles = [
    {
      title: "Evolution of the Status Quo",
      publication: "The Procurement School",
      date: "May 2024",
      link: "https://theprocurementschool.com/evolution-of-the-status-quo/"
    },
    {
      title: "Simplifying Public Sector Procurement",
      publication: "The Procurement School",
      date: "October 2024",
      link: "https://theprocurementschool.com/simplifying-public-sector-procurement-to-increase-sme-participation/"
    },
    {
      title: "Procurement in 2025",
      publication: "The Procurement School",
      date: "July 2025",
      link: "https://theprocurementschool.com/procurement-in-2025-how-the-role-has-evolved/"
    }
  ];

  const props: Array<{
    title: string;
    organization: string;
    year: string;
    image?: string;
    link?: string;
  }> = [
    {
      title: "Best of Public Procurement 2017 Award",
      organization: "British Columbia Construction Association",
      year: "2017",
      link: "https://web.archive.org/web/20250424133307/https://bccassn.com/qa-chris-sheel-manager-of-procurement-services-city-of-vernon/"
    },
    {
      title: "Featured on Inside Public Procurement Podcast",
      organization: "Euna Solutions",
      year: "2024",
      image: "/euna-podcast.png",
      link: "https://www.youtube.com/watch?v=Z7kh_jCbpPg"
    }
  ];

  return (
    <section
      id="props"
      className="pt-16 pb-24 bg-white dark:bg-steel-950"
    >
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
            <span className="text-steel-600 dark:text-steel-50">
              Podcast & Props
            </span>
          </h2>
          <p className="text-xl text-steel-600 dark:text-steel-400 max-w-2xl mx-auto">
            Thought leadership, industry recognition, and ongoing
            conversations about project excellence
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Podcast Feature */}
          <div className="lg:col-span-2">
            <div className="p-4 md:p-8 rounded-xl bg-gradient-to-br from-accent-blue/10 to-accent-cyan/10 border border-accent-blue/30 dark:border-accent-blue/20 h-full">
              <div className="flex items-start space-x-4 mb-6">
                {/* Free icon from Bootstrap Icons */}
                <svg
                  className="w-8 h-8 md:w-10 md:h-10 text-steel-600 dark:text-steel-300 flex-shrink-0"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                >
                  <path d="M13 2.5a1.5 1.5 0 0 1 3 0v11a1.5 1.5 0 0 1-3 0zm-1 .724c-2.067.95-4.539 1.481-7 1.656v6.237a25 25 0 0 1 1.088.085c2.053.204 4.038.668 5.912 1.56zm-8 7.841V4.934c-.68.027-1.399.043-2.008.053A2.02 2.02 0 0 0 0 7v2c0 1.106.896 1.996 1.994 2.009l.496.008a64 64 0 0 1 1.51.048m1.39 1.081q.428.032.85.078l.253 1.69a1 1 0 0 1-.983 1.187h-.548a1 1 0 0 1-.916-.599l-1.314-2.48a66 66 0 0 1 1.692.064q.491.026.966.06" />
                </svg>
                <div>
                  <h3 className="text-xl md:text-2xl font-bold text-steel-500 dark:text-steel-50 mb-2">
                    Public Procurement Podcast — Coming Soon!
                  </h3>
                  <p className="text-steel-700 dark:text-white mb-4">
                    New Episodes Monthly
                  </p>
                </div>
              </div>
              <p className="text-steel-600 dark:text-steel-300 leading-relaxed mb-6">
                No scripts. No filters. Honest, opinionated, and
                innovative conversations with procurement disrupters.
              </p>
              <a
                href="https://theprocurementschool.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 bg-accent-blue/10 border border-accent-blue/30 rounded-lg text-steel-700 dark:text-white hover:bg-accent-blue/20 transition-all duration-200 font-medium"
              >
                Listen Here
                <svg
                  className="w-4 h-4 ml-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </a>
            </div>
          </div>

          {/* Props */}
          <div className="p-4 md:p-8 rounded-xl bg-steel-50 dark:bg-steel-900/50 border border-steel-200 dark:border-steel-800/50">
            <h3 className="text-2xl font-bold text-steel-500 dark:text-steel-50 mb-6">
              Props
            </h3>
            <div className="space-y-4">
              {props.map((prop, index) =>
                prop.link ? (
                  <a
                    key={index}
                    href={prop.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-start justify-between space-x-4 hover:text-accent-blue transition-colors group"
                  >
                    <div className="flex items-start space-x-3 flex-1">
                      <div className="w-2 h-2 bg-accent-cyan rounded-full mt-2 flex-shrink-0"></div>
                      <div>
                        <h4 className="font-semibold text-steel-600 dark:text-steel-200 group-hover:text-accent-blue transition-colors">
                          {prop.title}
                        </h4>
                        <p className="text-sm text-steel-600 dark:text-steel-400">
                          {prop.organization}
                        </p>
                      </div>
                    </div>
                    {prop.image && (
                      <div className="w-24 sm:w-36 h-20 flex-shrink-0 rounded-lg overflow-hidden">
                        <img
                          src={prop.image}
                          alt={prop.title}
                          className="w-full h-full object-contain"
                        />
                      </div>
                    )}
                  </a>
                ) : (
                  <div
                    key={index}
                    className="flex items-start justify-between space-x-4"
                  >
                    <div className="flex items-start space-x-3 flex-1">
                      <div className="w-2 h-2 bg-accent-cyan rounded-full mt-2 flex-shrink-0"></div>
                      <div>
                        <h4 className="font-semibold text-steel-600 dark:text-steel-200">
                          {prop.title}
                        </h4>
                        <p className="text-sm text-steel-600 dark:text-steel-400">
                          {prop.organization}
                        </p>
                      </div>
                    </div>
                    {prop.image && (
                      <div className="w-24 sm:w-36 h-20 flex-shrink-0 rounded-lg overflow-hidden">
                        <img
                          src={prop.image}
                          alt={prop.title}
                          className="w-full h-full object-contain"
                        />
                      </div>
                    )}
                  </div>
                )
              )}
            </div>
          </div>
        </div>

        {/* Articles/Publications */}
        <div className="mt-8">
          <h3 className="text-2xl font-bold text-steel-500 dark:text-steel-50 mb-6">
            Published Articles
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            {articles.map((article, index) => (
              <a
                key={index}
                href={article.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group p-6 rounded-xl bg-steel-50 dark:bg-steel-900/30 border border-steel-200 dark:border-steel-800/50 hover:border-accent-blue/30 transition-all duration-300 hover:-translate-y-1"
              >
                <div className="flex items-start justify-between mb-3">
                  <span className="text-xs text-steel-600 dark:text-steel-400">
                    {article.publication}
                  </span>
                  <svg
                    className="w-4 h-4 text-steel-500 group-hover:text-accent-blue transition-colors"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                    />
                  </svg>
                </div>
                <h4 className="font-semibold text-steel-500 dark:text-steel-200 mb-2 group-hover:text-accent-blue transition-colors">
                  {article.title}
                </h4>
                <p className="text-sm text-steel-600 dark:text-steel-500">
                  {article.date}
                </p>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
