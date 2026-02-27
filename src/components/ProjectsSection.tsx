import renderOneImg from "@/assets/r1.png";
import commercialImg from "@/assets/project-commercial.png";
import floryaMainImg from "@/assets/10.jpg";
import { Link } from "react-router-dom";

const projects = [
  {
    slug: "kadikoy-golden-star",
    title: "KADIKOY GOLDEN STAR",
    category: "HOTEL",
    year: "2025",
    image: renderOneImg,
    alt: "Modern residential architecture with warm concrete and glass",
  },
  {
    slug: "cukurova-havalimani-yarismasi",
    title: "Çukurova Havalimanı",
    category: "Airport",
    year: "2024",
    image: commercialImg,
    alt: "Minimalist commercial building with glass facades",
  },
  {
    slug: "florya-ic-dizayn",
    title: "Florya İç Dizayn",
    category: "İç Mekân",
    year: "2023",
    image: floryaMainImg,
    alt: "Florya İç Dizayn şömine ve ahşap iç mekân detayı",
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="scroll-mt-24 py-24 lg:py-32 bg-card">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-16">
          <div>
            <p className="font-display text-sm tracking-[0.3em] uppercase text-accent mb-4">
              Seçili Çalışmalar
            </p>
            <h2 className="font-display text-3xl md:text-5xl font-bold tracking-tight text-foreground">
              Öne Çıkan Projeler
            </h2>
          </div>
          <p className="text-muted-foreground mt-4 md:mt-0 max-w-sm leading-relaxed">
            Her proje, düşünceli tasarım ve titiz uygulamaya olan bağlılığımızı yansıtır.
          </p>
        </div>

        {/* Projects grid */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {projects.map((project, index) => (
            <Link
              key={project.title}
              to={`/projeler/${project.slug}`}
              className="group cursor-pointer"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div className="relative overflow-hidden mb-5">
                <img
                  src={project.image}
                  alt={project.alt}
                  className="w-full aspect-[3/4] object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/60 to-transparent p-3">
                  <span className="font-display text-xs tracking-[0.2em] uppercase text-white">
                    {project.title}
                  </span>
                </div>
              </div>
              <div className="flex items-center justify-between mb-2">
                <span className="font-display text-xs tracking-[0.2em] uppercase text-accent">
                  {project.category}
                </span>
                <span className="text-sm text-muted-foreground">
                  {project.year}
                </span>
              </div>
              <h3 className="font-display text-lg font-semibold tracking-tight text-foreground group-hover:text-accent transition-colors duration-300">
                {project.title}
              </h3>
            </Link>
          ))}
        </div>

        {/* Uygulama slideshow removed per request */}
      </div>
    </section>
  );
};

export default ProjectsSection;
