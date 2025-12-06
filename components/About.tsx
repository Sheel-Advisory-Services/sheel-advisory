export default function About() {
  return (
    <section id="about" className="py-24 bg-gradient-to-b from-steel-900 to-steel-950">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Image placeholder */}
            <div className="relative">
              <div className="aspect-square rounded-2xl overflow-hidden border border-steel-700">
                <img 
                  src="/profile.png" 
                  alt="Professional headshot"
                  className="max-w-full max-h-full object-contain"
                />
              </div>
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-accent-blue/20 rounded-full blur-2xl"></div>
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-accent-cyan/20 rounded-full blur-2xl"></div>
            </div>

            {/* Content */}
            <div>
              <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
                <span className="text-steel-50">About</span>{' '}
                <span className="gradient-text">Sheel Advisory</span>
              </h2>
              
              <div className="space-y-4 text-steel-300 leading-relaxed">
                <p>
                  [Placeholder: Add professional biography highlighting experience in project and risk management, 
                  specific expertise in owner representative services, and track record with public sector clients.]
                </p>
                <p>
                  [Placeholder: Include educational background, professional certifications, and years of experience 
                  serving municipalities, regional districts, school districts, and non-profit organizations.]
                </p>
                <p>
                  [Placeholder: Describe approach to client relationships, commitment to transparency and reliability, 
                  and what makes the advisory services unique in the marketplace.]
                </p>
              </div>

              {/* Credentials highlights */}
              <div className="grid grid-cols-2 gap-4 mt-8">
                <div className="p-4 rounded-lg bg-steel-900/50 border border-steel-800/50">
                  <div className="text-2xl font-bold text-accent-blue mb-1">[XX]+</div>
                  <div className="text-sm text-steel-400">Years Experience</div>
                </div>
                <div className="p-4 rounded-lg bg-steel-900/50 border border-steel-800/50">
                  <div className="text-2xl font-bold text-accent-blue mb-1">[XXX]+</div>
                  <div className="text-sm text-steel-400">Projects Completed</div>
                </div>
              </div>

              {/* Professional affiliations placeholder */}
              <div className="mt-8 pt-8 border-t border-steel-800/50">
                <h4 className="text-sm font-semibold text-steel-400 mb-3">Professional Affiliations</h4>
                <div className="text-steel-500 text-sm">
                  [Add professional certifications, memberships, and affiliations]
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
