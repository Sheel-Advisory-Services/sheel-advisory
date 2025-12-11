export default function Props() {
  const articles = [
    {
      title: "[Article Title Placeholder]",
      publication: "[Publication Name]",
      date: "[Date]",
      link: "#"
    },
    {
      title: "[Article Title Placeholder]",
      publication: "[Publication Name]",
      date: "[Date]",
      link: "#"
    },
    {
      title: "[Article Title Placeholder]",
      publication: "[Publication Name]",
      date: "[Date]",
      link: "#"
    }
  ];

  const awards = [
    {
      title: "[Award Name]",
      organization: "[Awarding Organization]",
      year: "[Year]"
    },
    {
      title: "[Award Name]",
      organization: "[Awarding Organization]",
      year: "[Year]"
    }
  ];

  return (
    <section id="props" className="py-24 bg-white dark:bg-steel-950">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
            <span className="text-steel-700 dark:text-steel-50">Podcast & Props</span>
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
                  <p className="text-accent-blue font-medium mb-4">New Episodes Weekly</p>
                </div>
              </div>
              <p className="text-steel-600 dark:text-steel-300 leading-relaxed mb-6">
                [Podcast description placeholder - topics covered, target audience, where to listen, etc.]
              </p>
              <a
                href="#"
                className="inline-flex items-center px-6 py-3 bg-accent-blue/10 border border-accent-blue/30 rounded-lg text-accent-blue hover:bg-accent-blue/20 transition-all duration-200 font-medium"
              >
                Listen Now
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          </div>

          {/* Awards */}
          <div className="p-8 rounded-xl bg-steel-50 dark:bg-steel-900/50 border border-steel-200 dark:border-steel-800/50">
            <h3 className="text-2xl font-bold text-steel-500 dark:text-steel-50 mb-6">Awards & Recognition</h3>
            <div className="space-y-6">
              {awards.map((award, index) => (
                <div key={index} className="pb-6 border-b border-steel-00/50 last:border-0 last:pb-0">
                  <div className="flex items-start space-x-3 mb-2">
                    <svg className="w-5 h-5 text-accent-cyan flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                    </svg>
                    <div>
                      <h4 className="font-semibold text-steel-500 dark:text-steel-200">{award.title}</h4>
                      <p className="text-sm text-steel-600 dark:text-steel-400">{award.organization}</p>
                      <p className="text-sm text-accent-blue mt-1">{award.year}</p>
                    </div>
                  </div>
                </div>
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
                className="group p-6 rounded-xl bg-steel-50 dark:bg-steel-900/30 border border-steel-200 dark:border-steel-800/50 hover:border-accent-blue/30 transition-all duration-300 hover:-translate-y-1"
              >
                <div className="flex items-start justify-between mb-3">
                  <span className="text-xs text-accent-cyan font-medium">{article.publication}</span>
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
