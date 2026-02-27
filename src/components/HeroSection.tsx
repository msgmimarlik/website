import heroImage from "@/assets/hero-architecture.png";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-end pb-20 pt-32 overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Modern architectural building with geometric concrete forms"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-foreground/90 via-foreground/40 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 lg:px-12">
        <div className="max-w-3xl">
          <p
            className="font-display text-sm tracking-[0.3em] uppercase text-accent mb-6 opacity-0 animate-fade-up"
            style={{ animationDelay: "0.2s" }}
          >
            Mimarlık · Çizim · Uygulama
          </p>
          <h1
            className="font-display text-4xl md:text-6xl lg:text-7xl font-bold leading-[1.05] tracking-tight text-primary-foreground mb-8 opacity-0 animate-fade-up"
            style={{ animationDelay: "0.4s" }}
          >
            Alanı Şekillendiriyoruz
            <br />
            <span className="text-accent">Deneyime Dönüştürüyoruz</span>
          </h1>
          <p
            className="text-lg md:text-xl text-primary-foreground/70 max-w-xl leading-relaxed mb-10 opacity-0 animate-fade-up"
            style={{ animationDelay: "0.6s" }}
          >
            Konseptsel çizimlerden tamamen gerçekleştirilmiş yapılara — amacı ve kesinliği yansıtan mimarlık yaratıyoruz.
          </p>
          <div
            className="flex flex-col sm:flex-row gap-4 opacity-0 animate-fade-up"
            style={{ animationDelay: "0.8s" }}
          >
            <a
              href="#projects"
              className="inline-flex items-center justify-center px-8 py-4 bg-accent text-accent-foreground font-display text-sm font-semibold tracking-widest uppercase hover:opacity-90 transition-opacity"
            >
              Projeleri Görüntüle
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center px-8 py-4 border border-primary-foreground/30 text-primary-foreground font-display text-sm font-semibold tracking-widest uppercase hover:bg-primary-foreground/10 transition-colors"
            >
              Bize Ulaşın
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
