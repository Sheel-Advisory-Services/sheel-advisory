import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata = {
  title: "Municipalities | SAS",
  description: "Owner representative services for municipalities across British Columbia. Expert project and risk management for urban development and infrastructure.",
};

export default function MunicipalitiesPage() {
  return (
    <main className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-white dark:bg-steel-950">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            {/* Breadcrumb */}
            <Link 
              href="/#clients" 
              className="inline-flex items-center text-steel-600 dark:text-steel-300 hover:text-accent-cyan dark:hover:text-accent-cyan mb-8 transition-colors"
            >
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              Back to Organizations We Serve
            </Link>

            <h1 className="text-4xl md:text-5xl font-display font-bold text-steel-600 dark:text-steel-100">
              Municipalities
            </h1>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 bg-steel-50 dark:bg-steel-900">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="space-y-12">
              {/* What We Provide */}
              <div>
                <h2 className="text-3xl font-bold text-steel-600 dark:text-steel-50 mb-6">
                  Owner Representative Services for BC Municipalities
                </h2>
                <div className="prose prose-lg dark:prose-invert">
                  <p className="text-steel-600 dark:text-steel-300 leading-relaxed mb-4">
                    SAS assists public owners in bringing experience and third-party consistency to public projects. We represent the interests of public owners and deliver positive project outcomes.
                  </p>
                  <p className="text-steel-600 dark:text-steel-300 leading-relaxed">
                    Cities are administered and governed by the same sets of rules and regulations in British Columbia. The circumstances regarding populations, tax revenue and infrastructure conditions can vary widely. Many municipalities are too small to have economies of scale but are large enough to encounter complex issues and require good solutions. For others, rapid growth or change occurs and City's struggle to maintain qualified staffing and capacity for time sensitive, effective project delivery. SAS provides responsive professional services that deliver consistent and predictable results.
                  </p>
                </div>
              </div>

              {/* Key Services */}
              <div>
                <h2 className="text-3xl font-bold text-steel-600 dark:text-steel-50 mb-6">
                  Professional Services We Provide
                </h2>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="p-6 rounded-xl bg-white dark:bg-steel-800/50 border border-steel-300 dark:border-steel-700">
                    <h3 className="text-xl font-bold text-steel-600 dark:text-steel-100 mb-3">
                      Independent 3rd-Party Subject Review
                    </h3>
                    <p className="text-steel-600 dark:text-steel-300">
                      Objective evaluation and expert analysis to ensure project alignment with organizational goals and industry best practices.
                    </p>
                  </div>
                  <div className="p-6 rounded-xl bg-white dark:bg-steel-800/50 border border-steel-300 dark:border-steel-700">
                    <h3 className="text-xl font-bold text-steel-600 dark:text-steel-100 mb-3">
                      Public Owners' Representative Role
                    </h3>
                    <p className="text-steel-600 dark:text-steel-300">
                      Dedicated representation of municipal interests throughout project delivery, ensuring accountability and alignment.
                    </p>
                  </div>
                  <div className="p-6 rounded-xl bg-white dark:bg-steel-800/50 border border-steel-300 dark:border-steel-700">
                    <h3 className="text-xl font-bold text-steel-600 dark:text-steel-100 mb-3">
                      Project Delivery Model Matching
                    </h3>
                    <p className="text-steel-600 dark:text-steel-300">
                      Strategic selection and implementation of the optimal project delivery approach for your specific needs and constraints.
                    </p>
                  </div>
                  <div className="p-6 rounded-xl bg-white dark:bg-steel-800/50 border border-steel-300 dark:border-steel-700">
                    <h3 className="text-xl font-bold text-steel-600 dark:text-steel-100 mb-3">
                      Project Budgeting and Phase Planning
                    </h3>
                    <p className="text-steel-600 dark:text-steel-300">
                      Comprehensive financial planning and phased approach development to ensure project feasibility and success.
                    </p>
                  </div>
                </div>
              </div>

              {/* CTA */}
              <div className="mt-12 p-8 rounded-xl bg-gradient-to-r from-accent-blue/10 to-accent-cyan/10 border border-accent-blue/30">
                <div className="text-center">
                  <h3 className="text-2xl font-bold text-steel-600 dark:text-steel-50 mb-4">
                    Ready to Start Your Project?
                  </h3>
                  <p className="text-steel-600 dark:text-steel-300 mb-6">
                    Let's discuss how we can support your municipality's goals.
                  </p>
                  <Link
                    href="/#contact"
                    className="inline-block px-8 py-4 bg-steel-200 dark:bg-steel-700 rounded-lg text-steel-700 dark:text-steel-100 font-semibold hover:bg-steel-400 dark:hover:bg-steel-600 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg"
                  >
                    Get in Touch
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}