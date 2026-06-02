export default function Footer() {
  return (
    <footer className="bg-steel-100 dark:bg-steel-950 border-t border-steel-300 dark:border-steel-800/50 py-12">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <h3 className="text-2xl font-display font-bold mb-4 text-steel-700 dark:text-steel-50">
              Sheel Advisory Services
            </h3>
            <p className="text-steel-600 dark:text-steel-400 leading-relaxed mb-4">
              Practical owner representative services for BC's public sector.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-steel-600 dark:text-steel-300 mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#services" className="text-steel-600 dark:text-steel-400 hover:text-accent-blue dark:hover:text-accent-cyan transition-colors">
                  Services
                </a>
              </li>
              <li>
                <a href="#about" className="text-steel-600 dark:text-steel-400 hover:text-accent-blue dark:hover:text-accent-cyan transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="#props" className="text-steel-600 dark:text-steel-400 hover:text-accent-blue dark:hover:text-accent-cyan transition-colors">
                  Props
                </a>
              </li>
              <li>
                <a href="#contact" className="text-steel-600 dark:text-steel-400 hover:text-accent-blue dark:hover:text-accent-cyan transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold text-steel-600 dark:text-steel-300 mb-4">Services</h4>
            <ul className="space-y-2 text-steel-600 dark:text-steel-400 text-sm">
              <li><a href="/municipalities" className= "text-steel-600 dark:text-steel-400 hover:text-accent-blue dark:hover:text-accent-cyan transition-colors">Municipalities</a></li>
              <li><a href="/regional-districts" className="text-steel-600 dark:text-steel-400 hover:text-accent-blue dark:hover:text-accent-cyan transition-colors">Regional Districts</a></li>
              <li><a href="/school-districts" className="text-steel-600 dark:text-steel-400 hover:text-accent-blue dark:hover:text-accent-cyan transition-colors">School Districts</a></li>
              <li><a href="/non-profits" className="text-steel-600 dark:text-steel-400 hover:text-accent-blue dark:hover:text-accent-cyan transition-colors">Non-Profits</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-steel-800/50 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-steel-600 dark:text-steel-500 text-sm">
            © {new Date().getFullYear()} Sheel Advisory Services. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
