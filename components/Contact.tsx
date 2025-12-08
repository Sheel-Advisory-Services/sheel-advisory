'use client';

import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    organization: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement form submission logic
    console.log('Form submitted:', formData);
    alert('Thank you for your inquiry! We will be in touch soon.');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-24 bg-white dark:bg-steel-950">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
              <span className="text-steel-500 dark:text-steel-50">Let's</span>{' '}
              <span className="gradient-text">Chat</span>
            </h2>
            <p className="text-xl text-steel-600 dark:text-steel-400 max-w-2xl mx-auto">
              Ready to elevate your project? Get in touch to discuss how we can help achieve your goals.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="p-8 rounded-xl bg-steel-50 dark:bg-steel-900/50 border border-steel-300 dark:border-steel-800/50">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-steel-600 dark:text-steel-300 mb-2">
                    Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white dark:bg-steel-950 border border-steel-300 dark:border-steel-800 rounded-lg text-steel-900 dark:text-steel-100 focus:outline-none focus:border-accent-blue transition-colors"
                  />
                </div>

                <div>
                  <label htmlFor="organization" className="block text-sm font-medium text-steel-600 dark:text-steel-300 mb-2">
                    Organization *
                  </label>
                  <input
                    type="text"
                    id="organization"
                    name="organization"
                    required
                    value={formData.organization}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white dark:bg-steel-950 border border-steel-300 dark:border-steel-800 rounded-lg text-steel-900 dark:text-steel-100 focus:outline-none focus:border-accent-blue transition-colors"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-steel-600 dark:text-steel-300 mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white dark:bg-steel-950 border border-steel-300 dark:border-steel-800 rounded-lg text-steel-900 dark:text-steel-100 focus:outline-none focus:border-accent-blue transition-colors"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-steel-600 dark:text-steel-300 mb-2">
                    Phone
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white dark:bg-steel-950 border border-steel-300 dark:border-steel-800 rounded-lg text-steel-900 dark:text-steel-100 focus:outline-none focus:border-accent-blue transition-colors"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-steel-600 dark:text-steel-300 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white dark:bg-steel-950 border border-steel-300 dark:border-steel-800 rounded-lg text-steel-900 dark:text-steel-100 focus:outline-none focus:border-accent-blue transition-colors"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full px-8 py-4 bg-gradient-to-r from-accent-blue to-accent-cyan rounded-lg text-white font-semibold hover:shadow-lg hover:shadow-accent-blue/50 transition-all duration-300"
                >
                  Send Message
                </button>
              </form>
            </div>

            {/* Contact Info */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-steel-600 dark:text-steel-50 mb-6">Get in Touch</h3>
                <p className="text-steel-600 dark:text-steel-400 leading-relaxed mb-8">
                  Whether you're planning a new project or need expert guidance on an ongoing initiative, 
                  we're here to help. Reach out to discuss how Sheel Advisory Services can support your success.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 rounded-lg bg-accent-blue/10 border border-accent-blue/20 flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-accent-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-steel-600 dark:text-steel-200 mb-1">Email</h4>
                    <a href="mailto:csheel@outlook.com" className="text-accent-blue hover:text-accent-cyan transition-colors">
                      csheel@outlook.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 rounded-lg bg-accent-blue/10 border border-accent-blue/20 flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-accent-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-steel-600 dark:text-steel-200 mb-1">Phone</h4>
                    <a href="tel:+17785836832" className="text-accent-blue hover:text-accent-cyan transition-colors">
                      1-778-583-6832
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 rounded-lg bg-accent-blue/10 border border-accent-blue/20 flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-accent-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-steel-600 dark:text-steel-200 mb-1">Location</h4>
                    <p className="text-steel-600 dark:text-steel-400">Lake Country, British Columbia</p>
                  </div>
                </div>
              </div>

              <div className="pt-8 border-t border-steel-800/50">
                <h4 className="text-sm font-semibold text-steel-600 dark:text-steel-400 mb-3">Business Hours</h4>
                <p className="text-steel-600 dark:text-steel-400">Monday - Friday: 9:00 AM - 5:00 PM PST</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
