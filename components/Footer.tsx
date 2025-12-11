export default function Footer() {
  return (
    <footer className="bg-steel-100 dark:bg-steel-950 border-t border-steel-300 dark:border-steel-800/50 py-12">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <h3 className="text-2xl font-display font-bold gradient-text mb-4">
              Sheel Advisory Services
            </h3>
            <p className="text-steel-600 dark:text-steel-400 leading-relaxed mb-4">
              Expert owner representative services for project and risk management excellence 
              in the public sector.
            </p>
            <p className="text-sm text-steel-700 dark:text-steel-500">
              Reliable Promising Results
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-steel-600 dark:text-steel-300 mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#services" className="text-steel-600 dark:text-steel-400 hover:text-accent-blue transition-colors">
                  Services
                </a>
              </li>
              <li>
                <a href="#about" className="text-steel-600 dark:text-steel-400 hover:text-accent-blue transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="#props" className="text-steel-600 dark:text-steel-400 hover:text-accent-blue transition-colors">
                  Podcast
                </a>
              </li>
              <li>
                <a href="#contact" className="text-steel-600 dark:text-steel-400 hover:text-accent-blue transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold text-steel-600 dark:text-steel-300 mb-4">Services</h4>
            <ul className="space-y-2 text-steel-600 dark:text-steel-400 text-sm">
              <li>Owner Representative</li>
              <li>Project Management</li>
              <li>Risk Management</li>
              <li>Procurement</li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-steel-800/50 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-steel-600 dark:text-steel-500 text-sm">
            © {new Date().getFullYear()} Sheel Advisory Services. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <a href="#" className="text-steel-600 dark:text-steel-500 hover:text-accent-blue transition-colors text-sm">
              Privacy Policy
            </a>
            <a href="#" className="text-steel-600 dark:text-steel-500 hover:text-accent-blue transition-colors text-sm">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
