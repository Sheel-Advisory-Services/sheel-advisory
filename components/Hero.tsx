export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background effects */}
      <div className="absolute inset-0 bg-white dark:bg-gradient-to-br dark:from-steel-900 dark:via-steel-950 dark:to-black"></div>
      <div className="absolute inset-0 dark:bg-[radial-gradient(circle_at_30%_50%,rgba(96,165,250,0.1),transparent_50%)]"></div>
      <div className="absolute inset-0 dark:bg-[radial-gradient(circle_at_70%_50%,rgba(34,211,238,0.1),transparent_50%)]"></div>

      {/* Background image - light mode only */}
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-20 dark:hidden"
        style={{ 
          backgroundImage: 'url(/handshake.jpg)',
          backgroundPosition: 'center 20%'
        }}
      ></div>

      {/* Grid pattern overlay - dark mode only */}
      <div className="absolute inset-0 hidden dark:block bg-[linear-gradient(rgba(96,165,250,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(96,165,250,0.03)_1px,transparent_1px)] bg-[size:150px_30px]"></div>

      {/* Floating words background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none select-none">
        {/* Top row */}
        <div className="absolute top-[15%] left-[15%] text-5xl font-bold text-steel-300/40 dark:text-steel-700/20">
          Reliable
        </div>
        <div className="absolute top-[20%] left-[45%] text-5xl font-bold text-steel-300/40 dark:text-steel-700/20">
          Fair
        </div>
        <div className="absolute top-[12%] right-[18%] text-4xl font-bold text-steel-300/40 dark:text-steel-700/20">
          Transparent
        </div>
        
        {/* Middle sides */}
        <div className="absolute top-[35%] left-[8%] text-5xl font-bold text-steel-300/40 dark:text-steel-700/20">
          Practical
        </div>
        <div className="absolute top-[38%] right-[10%] text-5xl font-bold text-steel-300/40 dark:text-steel-700/25">
          Professional
        </div>
        
        {/* Bottom row */}
        <div className="absolute bottom-[18%] left-[20%] text-6xl font-bold text-steel-300/45 dark:text-steel-700/20">
          Experience
        </div>
        <div className="absolute bottom-[15%] right-[15%] text-6xl font-bold text-steel-300/45 dark:text-steel-700/20">
          Promising
        </div>
        <div className="absolute bottom-[20%] left-[45%] text-5xl font-bold text-steel-300/45 dark:text-steel-700/25">
          Accountable
        </div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">

          {/* Main heading */}
          <h1 className="text-5xl md:text-7xl font-display font-bold mb-6 leading-tight">
            <span className="text-steel-600 dark:text-steel-50">Sheel Advisory Services</span>
          </h1>

          {/* Subheading */}
          <p className="text-xl md:text-2xl text-steel-600 dark:text-steel-300 mb-12 max-w-2xl mx-auto leading-relaxed">
            Helping owners achieve reliable and predictable outcomes.
          </p>

          {/* CTA buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#contact"
              className="px-8 py-4 bg-steel-200 dark:bg-steel-800/50 rounded-lg text-steel-700 dark:text-steel-100 font-semibold hover:bg-steel-300 dark:hover:bg-steel-800 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg hover:shadow-steel-400/50"
            >
              Start Your Project
            </a>
            <a
              href="#services"
              className="px-8 py-4 bg-steel-200 dark:bg-steel-800/50 rounded-lg text-steel-700 dark:text-steel-100 font-semibold hover:bg-steel-300 dark:hover:bg-steel-800 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg hover:shadow-steel-400/50"
            >
              Explore Services
            </a>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg className="w-6 h-6 text-steel-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
}
