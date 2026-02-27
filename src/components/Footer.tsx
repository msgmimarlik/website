import { Mail, MessageCircle } from "lucide-react";

const Footer = () => {
  const links = [
    { label: "Hizmetler", targetId: "services" },
    { label: "Projeler", targetId: "projects" },
    { label: "Hakkında", targetId: "about" },
    { label: "İletişim", targetId: "contact" },
  ];

  const scrollToSection = (targetId: string) => {
    if (targetId === "top") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }

    const target = document.getElementById(targetId);
    if (!target) return;

    const navOffset = 96;
    const top = target.getBoundingClientRect().top + window.scrollY - navOffset;
    window.scrollTo({ top: Math.max(top, 0), behavior: "smooth" });
  };

  return (
    <footer className="py-12 bg-primary/80 backdrop-blur-md text-primary-foreground border-t border-primary-foreground/10">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="flex flex-col items-center justify-center gap-8">
          <button type="button" onClick={() => scrollToSection("top")} className="font-display text-lg font-bold tracking-tight uppercase">MSG
            <span className="text-accent">MIMARLIK</span>
          </button>
          
          <div className="flex flex-wrap items-center justify-center gap-8">
            {links.map((link) =>
            <button
              type="button"
              key={link.label}
              onClick={() => scrollToSection(link.targetId)}
              className="font-display text-xs tracking-widest uppercase text-primary-foreground/50 hover:text-primary-foreground transition-colors">
                {link.label}
              </button>
            )}
          </div>

          <div className="flex items-center gap-6">
            <a
              href="mailto:contact@msgmimarlik.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary-foreground/50 hover:text-primary-foreground transition-colors hover:scale-110 transform duration-200"
              title="E-mail">
              <Mail size={20} />
            </a>
            <a
              href="https://wa.me/905551234567"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary-foreground/50 hover:text-primary-foreground transition-colors hover:scale-110 transform duration-200"
              title="WhatsApp">
              <MessageCircle size={20} />
            </a>
          </div>

          <p className="text-xs text-primary-foreground/40">
            © MSG MIMARLIK. Tüm hakları saklıdır.
          </p>
        </div>
      </div>
    </footer>);

};

export default Footer;