export default function About() {
  return (
    <section id="about" className="pt-32 pb-16 bg-white dark:bg-steel-950">
      <div className="container mx-auto px-6">
        <div className=" mx-auto">
          <div className="grid md:grid-cols-[300px_1fr] gap-16 items-center">
            {/* Image */}
            <div className="relative max-w-xs opacity-80 mx-auto self-start mt-0">
              <div className="aspect-square rounded-2xl overflow-hidden border border-steel-300 dark:border-steel-700">
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
                <span className="text-steel-600 dark:text-steel-50">About Sheel Advisory</span>{' '}
              </h2>
              <p className="text-lg text-steel-700 dark:text-steel-400 mb-6">
                Chris Sheel, NISCL-CSCL, MCIPS, PMP, CRM
              </p>             
              <div className="space-y-4 text-steel-600 dark:text-steel-300 leading-relaxed">
                <p>
                  Chris Sheel is the founder and principal consultant of Sheel Advisory, bringing over 25 years of expertise in procurement, contract management, and project delivery. His career spans diverse sectors including public infrastructure, healthcare, education, and technology, where he has successfully led complex projects from inception to completion.
                </p>
                <p>
                  With a growing body of knowledge and appreciation for collaborative project delivery, Chris brings deep understanding of public sector compliance to every engagement. He delivers informed advice on procurement policy, trade agreements, and contract management strategy, ensuring organizations achieve their objectives while maintaining full regulatory compliance.
                </p>
              </div>

              {/* Credentials highlights */}
              <div className="grid grid-cols-3 gap-4 mt-8">
                <div className="p-4 rounded-lg bg-steel-100 dark:bg-steel-900/50 border border-steel-300 dark:border-steel-800/50 flex items-center gap-3">
                  <div className="text-3xl font-bold text-steel-700 dark:text-accent-blue">25+</div>
                  <div className="text-sm text-steel-600 dark:text-steel-400 tracking-wide">Years Experience</div>
                </div>
                <div className="p-4 rounded-lg bg-steel-100 dark:bg-steel-900/50 border border-steel-300 dark:border-steel-800/50 flex items-center gap-3">
                  <div className="text-3xl font-bold text-steel-700 dark:text-accent-blue">500+</div>
                  <div className="text-sm text-steel-600 dark:text-steel-400 tracking-wide">Projects Completed</div>
                </div>
                <div className="p-4 rounded-lg bg-steel-100 dark:bg-steel-900/50 border border-steel-300 dark:border-steel-800/50 flex items-center gap-3">
                  <div className="text-3xl font-bold text-steel-700 dark:text-accent-blue">BC</div>
                  <div className="text-sm text-steel-600 dark:text-steel-400 tracking-wide">Province-Wide Service</div>
                </div>
              </div>

              {/* Professional certifications */}
              <div className="mt-8 pt-8 border-t border-steel-300 dark:border-steel-800/50">
                <h4 className="text-sm font-semibold text-steel-700 dark:text-steel-400 mb-3">Professional Certifications</h4>
                <ul className="space-y-2 text-steel-600 dark:text-steel-500 text-sm">
                  <li>
                    <a href="https://niscl.ca/" target="_blank" rel="noopener noreferrer" className="hover:text-accent-blue transition-colors">
                      <strong>NISCL-CSCL</strong> - National Institute of Supply Chain Leaders - Certified Supply Chain Leader
                    </a>
                  </li>
                  <li>
                    <a href="https://www.cips.org/" target="_blank" rel="noopener noreferrer" className="hover:text-accent-blue transition-colors">
                      <strong>MCIPS</strong> - Member of the Chartered Institute of Procurement & Supply
                    </a>
                  </li>
                  <li>
                    <a href="https://www.pmi.org/certifications/project-management-pmp" target="_blank" rel="noopener noreferrer" className="hover:text-accent-blue     transition-colors">
                      <strong>PMP</strong> - Project Management Professional
                    </a>
                  </li>
                  <li>
                    <a href="https://www.rims.org/education/professional-designations/crm/about" target="_blank" rel="noopener noreferrer" className="hover:text-accent-blue transition-colors">
                      <strong>CRM</strong> - Canadian Risk Manager
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
