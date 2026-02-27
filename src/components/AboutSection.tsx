const stats = [
  { value: "10+", label: "Yıl Deneyim" },
  { value: "40+", label: "Teslim Edilen Proje" },
  { value: "98%", label: "Müşteri Memnuniyeti" },
];

const AboutSection = () => {
  return (
    <section id="about" className="scroll-mt-24 py-24 lg:py-32 bg-background">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Text */}
          <div>
            <p className="font-display text-sm tracking-[0.3em] uppercase text-accent mb-4">
              Felsefemiz
            </p>
            <h2 className="font-display text-3xl md:text-5xl font-bold tracking-tight text-foreground mb-8">
              Amaçlı
              <br />
              Tasarım
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Mimarlığın yapıdan daha fazla olduğuna inanıyoruz — bu bir deneyimdir. Çizdiğimiz her çizginin bir amacı vardır. Seçtiğimiz her malzeme bir hikaye anlatır. İlk konseptsel taslaktan son inşaat detayına kadar, sürecimiz sanatsal vizyonu mühendislik titizliğiyle birleştirir.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Mimar ve mühendislerden oluşan ekibimiz müşterilerle yakından işbirliği yaparak iddialı fikirleri inşa edil-miş gerçekliğe dönüştürüyor. Sadece binalar tasarlamıyoruz — ilham veren, dayanikli ve toplumları dönüştüren alanlar yaratıyoruz.
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 gap-8">
            {stats.map((stat) => (
              <div key={stat.label} className="border-l-2 border-accent pl-6 py-2">
                <span className="font-display text-4xl md:text-5xl font-bold text-foreground block mb-2">
                  {stat.value}
                </span>
                <span className="text-sm text-muted-foreground tracking-wide">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
