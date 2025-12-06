export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-steel-900 via-steel-950 to-black"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(96,165,250,0.1),transparent_50%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(34,211,238,0.1),transparent_50%)]"></div>
      
      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(96,165,250,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(96,165,250,0.03)_1px,transparent_1px)] bg-[size:50px_50px]"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-accent-blue/10 border border-accent-blue/20 mb-8 animate-fade-in">
            <div className="w-2 h-2 bg-accent-blue rounded-full animate-pulse"></div>
            <span className="text-sm font-medium text-accent-blue">Reliable Promising Results</span>
          </div>

          {/* Main heading */}
          <h1 className="text-5xl md:text-7xl font-display font-bold mb-6 leading-tight">
            <span className="text-steel-50">Expert Guidance for</span>
            <br />
            <span className="gradient-text steel-glow">Project Excellence</span>
          </h1>

          {/* Subheading */}
          <p className="text-xl md:text-2xl text-steel-300 mb-12 max-w-2xl mx-auto leading-relaxed">
            Owner representative services that refine and execute your project and risk management strategies with precision.
          </p>

          {/* CTA buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#contact"
              className="px-8 py-4 bg-gradient-to-r from-accent-blue to-accent-cyan rounded-lg text-steel-950 font-semibold hover:shadow-lg hover:shadow-accent-blue/50 transition-all duration-300 transform hover:-translate-y-1"
            >
              Start Your Project
            </a>
            <a
              href="#services"
              className="px-8 py-4 bg-steel-800/50 border border-steel-700 rounded-lg text-steel-100 font-semibold hover:bg-steel-800 transition-all duration-300"
            >
              Explore Services
            </a>
          </div>

          {/* Stats or trust indicators */}
          <div className="grid grid-cols-3 gap-8 mt-20 pt-12 border-t border-steel-800/50">
            <div>
              <div className="text-3xl md:text-4xl font-bold gradient-text mb-2">20+</div>
              <div className="text-steel-400 text-sm md:text-base">Years Experience</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold gradient-text mb-2">100+</div>
              <div className="text-steel-400 text-sm md:text-base">Projects Delivered</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold gradient-text mb-2">50+</div>
              <div className="text-steel-400 text-sm md:text-base">Public Sector Clients</div>
            </div>
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
