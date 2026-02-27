import { ArrowRight, Mail, MessageCircle, MapPin } from "lucide-react";
import { useState } from "react";

const ContactSection = () => {
  const [showMenu, setShowMenu] = useState(false);

  const handleGetInTouch = () => {
    setShowMenu(!showMenu);
  };

  return (
    <section id="contact" className="scroll-mt-24 py-24 lg:py-32 bg-primary text-primary-foreground">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="max-w-3xl mx-auto text-center">
          <p className="font-display text-sm tracking-[0.3em] uppercase text-accent mb-6">
            Proje Başlat
          </p>
          <h2 className="font-display text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-8">
            Harika Birşey
            <br />
            <span className="text-accent">Inşa Edelim</span>
          </h2>
          <p className="text-primary-foreground/60 text-lg leading-relaxed mb-12 max-w-xl mx-auto">
            Net bir vizyonunuz olsun ya da sadece bir fikrin tohumu olsun, sizden haber almaktan seviniriz. Bir sonraki projenizi birlikte şekillendirmeye çalışalim.
          </p>
          <div className="relative inline-block">
            <button
              onClick={handleGetInTouch}
              className="inline-flex items-center gap-3 px-10 py-5 bg-accent text-accent-foreground font-display text-sm font-semibold tracking-widest uppercase hover:opacity-90 transition-opacity group"
            >
              Bize Ulaşın
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </button>

            {showMenu && (
              <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-4 bg-primary border border-accent/30 rounded shadow-lg z-50 min-w-max">
                <a
                  href="mailto:info@msgmimarlik.com"
                  className="flex items-center gap-3 px-6 py-4 text-primary-foreground hover:bg-primary-foreground/10 text-sm font-display tracking-widest uppercase transition-colors"
                >
                  <Mail className="w-4 h-4" />
                  E-posta
                </a>
                <a
                  href="https://wa.me/905442178662"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 px-6 py-4 text-primary-foreground hover:bg-primary-foreground/10 text-sm font-display tracking-widest uppercase border-t border-primary-foreground/20 transition-colors"
                >
                  <MessageCircle className="w-4 h-4" />
                  WhatsApp
                </a>
                <a
                  href="https://maps.app.goo.gl/HA4aWBy4WqmnuGJn6"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 px-6 py-4 text-primary-foreground hover:bg-primary-foreground/10 text-sm font-display tracking-widest uppercase border-t border-primary-foreground/20 transition-colors"
                >
                  <MapPin className="w-4 h-4" />
                  Ulaşım
                </a>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
