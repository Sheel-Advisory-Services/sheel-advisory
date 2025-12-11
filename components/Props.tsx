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
  }> =[
    {
      title: "Best of Public Procurement 2017 Award",
      organization: "British Columbia Construction Association",
      year: "2017",
      link: "https://bccassn.com/qa-chris-sheel-manager-of-procurement-services-city-of-vernon/"
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
    <section id="props" className="pt-16 pb-24 bg-white dark:bg-steel-950">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
            <span className="text-steel-600 dark:text-steel-50">Podcast & Props</span>
          </h2>
          <p className="text-xl text-steel-600 dark:text-steel-400 max-w-2xl mx-auto">
            Thought leadership, industry recognition, and ongoing conversations about project excellence
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Podcast Feature */}
          <div className="lg:col-span-2">
            <div className="p-8 rounded-xl bg-gradient-to-br from-accent-blue/10 to-accent-cyan/10 border border-accent-blue/30 dark:border-accent-blue/20 h-full">
              <div className="flex items-start space-x-4 mb-6">
                <div className="w-16 h-16 rounded-full bg-accent-blue/20 flex items-center justify-center flex-shrink-0">
                  <svg className="w-8 h-8 text-accent-blue" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2a10 10 0 1010 10A10 10 0 0012 2zm0 18a8 8 0 118-8 8 8 0 01-8 8z"/>
                    <path d="M12 6a6 6 0 00-6 6h2a4 4 0 014-4V6z"/>
                  </svg>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-steel-500 dark:text-steel-50 mb-2">
                    Public Procurement Podcast
                  </h3>
                  <p className="text-accent-blue font-medium mb-4">New Episodes Monthly</p>
                </div>
              </div>
              <p className="text-steel-600 dark:text-steel-300 leading-relaxed mb-6">
                [Podcast description placeholder - topics covered, target audience, where to listen, etc.]
              </p>
              <a
                href="#"
                className="inline-flex items-center px-6 py-3 bg-accent-blue/10 border border-accent-blue/30 rounded-lg text-accent-blue hover:bg-accent-blue/20 transition-all duration-200 font-medium"
              >
                Coming Soon
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          </div>

          {/* Props */}
          <div className="p-8 rounded-xl bg-steel-50 dark:bg-steel-900/50 border border-steel-200 dark:border-steel-800/50">
            <h3 className="text-2xl font-bold text-steel-500 dark:text-steel-50 mb-6">Props</h3>
            <div className="space-y-4">
              {props.map((prop, index) => (
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
                        <h4 className="font-semibold text-steel-600 dark:text-steel-200 group-hover:text-accent-blue transition-colors">{prop.title}</h4>
                        <p className="text-sm text-steel-600 dark:text-steel-400">{prop.organization}</p>
                      </div>
                    </div>
                    {prop.image && (
                      <div className="w-42 h-24 flex-shrink-0 rounded-lg overflow-hidden border border-steel-300 dark:border-steel-700">
                        <img 
                          src={prop.image} 
                          alt={prop.title}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    )}
                  </a>
                ) : (
                  <div key={index} className="flex items-start justify-between space-x-4">
                    <div className="flex items-start space-x-3 flex-1">
                      <div className="w-2 h-2 bg-accent-cyan rounded-full mt-2 flex-shrink-0"></div>
                      <div>
                        <h4 className="font-semibold text-steel-600 dark:text-steel-200">{prop.title}</h4>
                        <p className="text-sm text-steel-600 dark:text-steel-400">{prop.organization}</p>
                      </div>
                    </div>
                    {prop.image && (
                      <div className="w-42 h-24 flex-shrink-0 rounded-lg overflow-hidden border border-steel-300 dark:border-steel-700">
                        <img 
                          src={prop.image} 
                          alt={prop.title}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    )}
                  </div>
                )
              ))}
            </div>
          </div>
        </div>

        {/* Articles/Publications */}
        <div className="mt-8">
          <h3 className="text-2xl font-bold text-steel-500 dark:text-steel-50 mb-6">Published Articles</h3>
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
                  <span className="text-xs text-steel-600 dark:text-steel-400">{article.publication}</span>
                  <svg className="w-4 h-4 text-steel-500 group-hover:text-accent-blue transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </div>
                <h4 className="font-semibold text-steel-500 dark:text-steel-200 mb-2 group-hover:text-accent-blue transition-colors">
                  {article.title}
                </h4>
                <p className="text-sm text-steel-600 dark:text-steel-500">{article.date}</p>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
