function CTA() {

  return (
    <section id="kontakt" className="py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-brand-600 via-brand-600 to-brand-700 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-brand-500/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-brand-400/20 rounded-full blur-3xl"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight tracking-tight">
            Klar til at komme i gang?
          </h2>
          <p className="text-xl text-brand-100 leading-relaxed mb-8">
            Maksimer dine kunders bookinger med vores AI-drevne, ultrarealistiske stemmeopkaldstjeneste, der arbejder døgnet rundt for at holde deres kalendere fuldt bookede.
          </p>
          <a
            href="https://cal.com/aibooking-booking/intro-voiceagent-aibooking.dk"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-brand-600 bg-white rounded-xl hover:bg-brand-50 transition-all shadow-xl hover:shadow-2xl hover:scale-105"
          >
            Book Gratis Demo
          </a>
        </div>

      </div>
    </section>
  );
}

export default CTA;
