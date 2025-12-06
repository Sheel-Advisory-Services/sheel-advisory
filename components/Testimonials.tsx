export default function Testimonials() {
  const testimonials = [
    {
      quote: "[Client testimonial placeholder - describe the quality of service, professionalism, results achieved, etc.]",
      name: "[Client Name]",
      title: "[Position]",
      organization: "[Organization Name]"
    },
    {
      quote: "[Client testimonial placeholder - describe the quality of service, professionalism, results achieved, etc.]",
      name: "[Client Name]",
      title: "[Position]",
      organization: "[Organization Name]"
    },
    {
      quote: "[Client testimonial placeholder - describe the quality of service, professionalism, results achieved, etc.]",
      name: "[Client Name]",
      title: "[Position]",
      organization: "[Organization Name]"
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-steel-950 to-steel-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
            <span className="gradient-text">Client</span>{' '}
            <span className="text-steel-50">Testimonials</span>
          </h2>
          <p className="text-xl text-steel-400 max-w-2xl mx-auto">
            Trusted by leading public sector organizations across British Columbia
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="p-8 rounded-xl bg-steel-900/50 border border-steel-800/50 hover:border-accent-blue/30 transition-all duration-300"
            >
              {/* Quote icon */}
              <svg className="w-10 h-10 text-accent-blue/30 mb-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>

              {/* Quote */}
              <p className="text-steel-300 leading-relaxed mb-6 italic">
                "{testimonial.quote}"
              </p>

              {/* Attribution */}
              <div className="pt-6 border-t border-steel-800/50">
                <p className="font-semibold text-steel-100">{testimonial.name}</p>
                <p className="text-sm text-steel-400">{testimonial.title}</p>
                <p className="text-sm text-accent-cyan mt-1">{testimonial.organization}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
