import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Non-Profit Organizations | SAS",
  description:
    "Owner representative services for non-profit organizations across British Columbia."
};

export default function NonProfitsPage() {
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
              <svg
                className="w-4 h-4 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 19l-7-7m0 0l7-7m-7 7h18"
                />
              </svg>
              Back to Organizations We Serve
            </Link>

            <h1 className="text-4xl md:text-5xl font-display font-bold text-steel-600 dark:text-steel-100">
              Non-Profit Organizations
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
                  Owner Representative Services for BC Non-Profit
                  Organizations
                </h2>
                <div className="prose prose-lg dark:prose-invert">
                  <p className="text-steel-600 dark:text-steel-300 leading-relaxed mb-4">
                    In British Columbia, a BC Society is often a
                    Non-profit operating for purpose beyond profit.
                    They can promote social welfare or provide
                    structure for recreational sporting groups.
                    Surplus money raised or saved gets invested back
                    into achieving its goals.
                  </p>
                  <p className="text-steel-600 dark:text-steel-300 leading-relaxed">
                    Non-profits often lean heavily on Volunteers to
                    function and can lack specialized skills or
                    resources available to others. Doing more with
                    less and achieving best value for dollar is a
                    necessity, not a philosophy. These organizations
                    often benefit from assistance with project
                    planning, grant applications and project
                    management for required Capital Improvements.
                  </p>
                </div>
              </div>

              {/* Key Services */}
              <div>
                <h2 className="text-3xl font-bold text-steel-600 dark:text-steel-50 mb-6">
                  Professional Services We Provide
                </h2>
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="p-6 rounded-xl bg-white dark:bg-steel-800/50 border border-steel-300 dark:border-steel-700">
                    <h3 className="text-xl font-bold text-steel-600 dark:text-steel-100 mb-3">
                      Project Feasibility and Planning
                    </h3>
                    <p className="text-steel-600 dark:text-steel-300">
                      Strategic assessment and planning to ensure your
                      capital improvement projects are viable,
                      cost-effective, and aligned with organizational
                      goals.
                    </p>
                  </div>
                  <div className="p-6 rounded-xl bg-white dark:bg-steel-800/50 border border-steel-300 dark:border-steel-700">
                    <h3 className="text-xl font-bold text-steel-600 dark:text-steel-100 mb-3">
                      Grant Writing and Submission
                    </h3>
                    <p className="text-steel-600 dark:text-steel-300">
                      Expert assistance with identifying funding
                      opportunities, crafting compelling grant
                      applications, and navigating submission
                      requirements.
                    </p>
                  </div>
                  <div className="p-6 rounded-xl bg-white dark:bg-steel-800/50 border border-steel-300 dark:border-steel-700">
                    <h3 className="text-xl font-bold text-steel-600 dark:text-steel-100 mb-3">
                      Project Management and Reporting
                    </h3>
                    <p className="text-steel-600 dark:text-steel-300">
                      Comprehensive project oversight and
                      documentation to ensure accountability,
                      transparency, and successful delivery of capital
                      improvements.
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
                    Let's discuss how we can support your
                    organization's goals.
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
