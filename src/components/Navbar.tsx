import { useState, useRef } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

type Link = {
  label: string;
  path?: string;
  subLinks?: Link[];
};

const links: Link[] = [
  { label: "Hizmetler", path: "#services" },
  { label: "Projeler", path: "#projects" },
  { label: "Hakkında", path: "#about" },
  { label: "İletişim", path: "#contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleMouseEnter = (menuLabel: string) => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    setOpenMenu(menuLabel);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setOpenMenu(null);
    }, 300); // 300ms delay before closing the menu
  };

  const scrollToSection = (targetId: string) => {
    if (targetId === "top") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      setOpenMenu(null);
      return;
    }

    const target = document.getElementById(targetId);
    if (!target) {
      setOpenMenu(null);
      return;
    }

    const navOffset = 96;
    const top = target.getBoundingClientRect().top + window.scrollY - navOffset;

    window.scrollTo({ top: Math.max(top, 0), behavior: "smooth" });
    setOpenMenu(null);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between h-20">
          <button
            type="button"
            onClick={() => scrollToSection("top")}
            className="flex items-center font-display text-xl font-bold tracking-tight uppercase">
            <img
              src="/src/assets/ms-logo.PNG"
              alt="MS"
              className="h-8 mr-3 object-contain"
            />
            <span>
              MSG
              <span className="text-accent ml-1">MIMARLIK</span>
            </span>
          </button>

          {/* Desktop */}
          <div className="hidden md:flex items-center gap-10 relative z-10">
            {links.map((link) =>
              link.subLinks ? (
                <div
                  key={link.label}
                  className="relative group"
                  onMouseEnter={() => handleMouseEnter(link.label)}
                  onMouseLeave={handleMouseLeave}
                >
                  <button
                    type="button"
                    className="font-display text-sm font-medium tracking-widest uppercase text-muted-foreground hover:text-foreground transition-colors duration-300 group-hover:text-foreground">
                    {link.label}
                  </button>
                  {openMenu === link.label && (
                    <div
                      className={`absolute bg-white shadow-lg rounded-md mt-2 z-20 w-72`}
                    >
                      {link.subLinks.map((subLink) =>
                        subLink.subLinks ? (
                          <div
                            key={subLink.label}
                            className="relative group"
                            onMouseEnter={() => handleMouseEnter(subLink.label)}
                            onMouseLeave={handleMouseLeave}
                          >
                            <button
                              type="button"
                              className="font-display text-sm font-medium tracking-widest uppercase text-muted-foreground hover:text-foreground transition-colors duration-300 group-hover:text-foreground">
                              {subLink.label}
                            </button>
                            {openMenu === subLink.label && (
                              <div className="absolute hidden group-hover:block bg-white shadow-lg rounded-md mt-2 z-20 w-72">
                                {subLink.subLinks.map((nestedSubLink) => (
                                  <Link
                                    to={nestedSubLink.path}
                                    key={nestedSubLink.label}
                                    className="block px-4 py-2 text-sm text-muted-foreground hover:text-foreground hover:bg-gray-100">
                                    {nestedSubLink.label}
                                  </Link>
                                ))}
                              </div>
                            )}
                          </div>
                        ) : (
                          <Link
                            to={subLink.path}
                            key={subLink.label}
                            className="block px-4 py-2 text-sm text-muted-foreground hover:text-foreground hover:bg-gray-100">
                            {subLink.label}
                          </Link>
                        )
                      )}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  to={link.path}
                  key={link.label}
                  className="font-display text-sm font-medium tracking-widest uppercase text-muted-foreground hover:text-foreground transition-colors duration-300">
                  {link.label}
                </Link>
              )
            )}
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-foreground"
            aria-label="Toggle menu">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <div className="md:hidden pb-8 animate-fade-in">
            {links.map((link) =>
              link.subLinks ? (
                <div key={link.label} className="mb-4">
                  <button
                    type="button"
                    className="block w-full text-left py-3 font-display text-sm font-medium tracking-widest uppercase text-muted-foreground hover:text-foreground">
                    {link.label}
                  </button>
                  <div className="pl-4">
                    {link.subLinks.map((subLink) =>
                      subLink.subLinks ? (
                        <div
                          key={subLink.label}
                          className="mb-4"
                          onMouseEnter={() => handleMouseEnter(subLink.label)}
                          onMouseLeave={handleMouseLeave}
                        >
                          <button
                            type="button"
                            className="block w-full text-left py-3 font-display text-sm font-medium tracking-widest uppercase text-muted-foreground hover:text-foreground">
                            {subLink.label}
                          </button>
                          {openMenu === subLink.label && (
                            <div className="pl-4">
                              {subLink.subLinks.map((nestedSubLink) => (
                                <Link
                                  to={nestedSubLink.path}
                                  key={nestedSubLink.label}
                                  className="block py-2 text-sm text-muted-foreground hover:text-foreground">
                                  {nestedSubLink.label}
                                </Link>
                              ))}
                            </div>
                          )}
                        </div>
                      ) : (
                        <Link
                          to={subLink.path}
                          key={subLink.label}
                          className="block py-2 text-sm text-muted-foreground hover:text-foreground">
                          {subLink.label}
                        </Link>
                      )
                    )}
                  </div>
                </div>
              ) : (
                <Link
                  to={link.path}
                  key={link.label}
                  className="block py-3 font-display text-sm font-medium tracking-widest uppercase text-muted-foreground hover:text-foreground">
                  {link.label}
                </Link>
              )
            )}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;