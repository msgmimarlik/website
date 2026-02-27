import { PenTool, Hammer, Compass, Ruler, ChevronLeft, ChevronRight, X } from "lucide-react";
import drawingImg from "@/assets/project-drawing.jpg";
import implementationImg from "@/assets/project-implementation.jpg";
import drawing1 from "@/assets/drawing-technique.jpg";
import drawing2 from "@/assets/floor-plan.jpg";
import drawing3 from "@/assets/section-details.jpg";
import drawing4 from "@/assets/perspective-view.jpg";
import drawing5 from "@/assets/sketch-work.jpg";
import drawing6 from "@/assets/3d-modeling.jpg";
import uyg1 from "@/assets/uygulama1.jpg";
import uyg2 from "@/assets/uygulama2.jpg";
import uyg3 from "@/assets/uygulama3.jpg";
import uyg4 from "@/assets/uygulama4.jpg";
import uyg5 from "@/assets/uygulama5.jpg";
import uyg6 from "@/assets/uygulama6.jpg";
import { useState, useEffect, useCallback } from "react";

interface DrawingImage {
  id: string;
  title: string;
  description: string;
  image: string;
}

const drawingImages: DrawingImage[] = [
  {
    id: "1",
    title: "Perspektif Çizim Tekniği",
    description: "Mimari görselleştirme ve tasarım prensipleri",
    image: drawing1,
  },
  {
    id: "2",
    title: "Floor Plan - Zemin Planı",
    description: "Mekansal düzenleme ve tasarım detayları",
    image: drawing2,
  },
  {
    id: "3",
    title: "Kesit Çizimleri",
    description: "Yapısal detay ve kat kesitleri",
    image: drawing3,
  },
  {
    id: "4",
    title: "3D Perspektif Görünüm",
    description: "İçmekan ve dış mekan tasarımı",
    image: drawing4,
  },
    {
      id: "5",
      title: "Eskiz Çalışması",
      description: "Mimari eskiz ve konsept geliştirme",
      image: drawing5,
    },
    {
      id: "6",
      title: "3D Modelleme",
      description: "Mimari projelerde 3D modelleme ve sunum",
      image: drawing6,
    },
];

const uygulamaImages: DrawingImage[] = [
  { id: "u1", title: "Uygulama - Perspektif", description: "İç ve dış mekan perspektif görselleri", image: uyg1 },
  { id: "u2", title: "Uygulama - Zemin Planı", description: "Detaylı uygulama zemin planı görüntüsü", image: uyg2 },
  { id: "u3", title: "Uygulama - Kesit", description: "Kesit çizimi ve yapı detayları", image: uyg3 },
  { id: "u4", title: "Uygulama - 3D Model", description: "Çalışmanın 3B model görselleştirmesi", image: uyg4 },
  { id: "u5", title: "Uygulama - Uygulama Detayı", description: "Uygulama aşamasından fotoğraf ve detaylar", image: uyg5 },
  { id: "u6", title: "Uygulama - Son Durum", description: "Tamamlanmış uygulama projelerinden örnek", image: uyg6 },
];

const services = [
  {
    icon: PenTool,
    title: "Mimari Çizim",
    description:
      "İlk taslaktan ayrıntılı teknik çizimlerine kadar, vizyonu inşaatın her aşamasını yönlendiren kesin belgelere çeviririz.",
    image: drawingImg,
    imageAlt: "Architectural drawing sketch of a modern building",
    isCarousel: true,
  },
  {
    icon: Hammer,
    title: "Uygulama",
    description:
      "İnşaat sürecini temelden sona kadar denetler, her detayın özgün tasarım amacıyla uyumlu olmasını ve vazgeçilmez kaliteyle sağlarız.",
    image: implementationImg,
    imageAlt: "Modern building under construction with concrete structure",
    isCarousel: false,
  },
];

const capabilities = [
  { icon: Compass, label: "Konseptsel Tasarım" },
  { icon: Ruler, label: "Teknik Çizimler" },
  { icon: PenTool, label: "3D Görselleştirme" },
  { icon: Hammer, label: "Şantiye Denetimi" },
];

const ServicesSection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [uygModalOpen, setUygModalOpen] = useState(false);
  const [uygIndex, setUygIndex] = useState(0);

  // Auto-play carousel (only when modal is closed)
  useEffect(() => {
    if (isModalOpen) return;
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % drawingImages.length);
    }, 2500);
    return () => clearInterval(timer);
  }, [isModalOpen]);

  // Uygulama autoplay
  useEffect(() => {
    if (uygModalOpen) return;
    const timer = setInterval(() => {
      setUygIndex((prev) => (prev + 1) % 6);
    }, 2500);
    return () => clearInterval(timer);
  }, [uygModalOpen]);

  const handlePrev = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + drawingImages.length) % drawingImages.length);
  }, []);

  const handleNext = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % drawingImages.length);
  }, []);

  const uygPrev = useCallback(() => {
    setUygIndex((prev) => (prev - 1 + 6) % 6);
  }, []);

  const uygNext = useCallback(() => {
    setUygIndex((prev) => (prev + 1) % 6);
  }, []);

  return (
    <section id="services" className="scroll-mt-24 py-24 lg:py-32 bg-background">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="mb-20">
          <p className="font-display text-sm tracking-[0.3em] uppercase text-accent mb-4">
            Yaptıklarımız
          </p>
          <h2 className="font-display text-3xl md:text-5xl font-bold tracking-tight text-foreground max-w-2xl">
            Çizimden Gerçekliğe
          </h2>
        </div>

        {/* Services grid */}
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 mb-20">
          {services.map((service) => (
            <div
              key={service.title}
              className={`group ${service.isCarousel ? "cursor-pointer" : ""}`}
              onClick={service.isCarousel && service.title !== "Uygulama" ? () => {
                setCurrentIndex(0);
                setIsModalOpen(true);
              } : undefined}
            >
              <div className="overflow-hidden mb-6 rounded-lg relative">
                {service.title === "Uygulama" ? (
                  <>
                    {[uyg1, uyg2, uyg3, uyg4, uyg5, uyg6].map((img, index) => (
                      <img
                        key={index}
                        src={img}
                        alt={`Uygulama ${index + 1}`}
                        className={`w-full h-72 object-cover transition-opacity duration-1000 ${
                          index === uygIndex ? "opacity-100" : "opacity-0 absolute inset-0"
                        }`}
                        onClick={(e) => {
                          e.stopPropagation();
                          setUygIndex(index);
                          setUygModalOpen(true);
                        }}
                      />
                    ))}
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors flex items-center justify-center">
                      <div className="opacity-0 group-hover:opacity-100 transition-opacity">
                        <button
                          className="bg-accent/90 hover:bg-accent p-3 rounded-full"
                          onClick={(e) => {
                            e.stopPropagation();
                            setUygIndex(0);
                            setUygModalOpen(true);
                          }}
                        >
                          <ChevronRight className="w-6 h-6 text-accent-foreground" />
                        </button>
                      </div>
                    </div>
                  </>
                ) : service.isCarousel ? (
                  <>
                    {drawingImages.map((image, index) => (
                      <img
                        key={image.id}
                        src={image.image}
                        alt={image.title}
                        className={`w-full h-72 object-cover transition-opacity duration-1000 ${
                          index === currentIndex ? "opacity-100" : "opacity-0 absolute inset-0"
                        }`}
                      />
                    ))}
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors flex items-center justify-center">
                      <div className="opacity-0 group-hover:opacity-100 transition-opacity">
                        <button
                          className="bg-accent/90 hover:bg-accent p-3 rounded-full"
                          onClick={(e) => {
                            e.stopPropagation();
                            setCurrentIndex(0);
                            setIsModalOpen(true);
                          }}
                        >
                          <ChevronRight className="w-6 h-6 text-accent-foreground" />
                        </button>
                      </div>
                    </div>
                  </>
                ) : (
                  <img
                    src={service.image}
                    alt={service.imageAlt}
                    className="w-full h-72 object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                )}
              </div>
              <div className="flex items-center gap-3 mb-4">
                <service.icon className="w-5 h-5 text-accent" />
                <h3 className="font-display text-xl font-semibold tracking-tight text-foreground">
                  {service.title}
                </h3>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>

        {/* Capabilities */}
        <div className="border-t border-border pt-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {capabilities.map((cap) => (
              <div key={cap.label} className="flex items-center gap-3">
                <cap.icon className="w-4 h-4 text-accent" />
                <span className="font-display text-sm font-medium tracking-wide uppercase text-foreground">
                  {cap.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Drawing Carousel Modal */}
      {isModalOpen && (
        <div
          className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4"
          onClick={() => setIsModalOpen(false)}
        >
          <div
            className="relative w-full h-full flex items-center justify-center max-w-6xl max-h-[90vh]"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-4 right-4 z-50 bg-accent/80 hover:bg-accent p-2 rounded-full transition-colors"
              aria-label="Kapat"
            >
              <X className="w-6 h-6 text-accent-foreground" />
            </button>

            {/* Images Carousel */}
            <div className="relative w-full">
              {drawingImages.map((image, index) => (
                <div
                  key={image.id}
                  className={`transition-opacity duration-1000 ${
                    index === currentIndex ? "opacity-100" : "opacity-0 absolute"
                  }`}
                >
                  <img
                    src={image.image}
                    alt={image.title}
                    className="max-w-full max-h-[70vh] object-contain mx-auto rounded-lg"
                  />
                </div>
              ))}
            </div>

            {/* Navigation Buttons */}
            <button
              onClick={handlePrev}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-accent/80 hover:bg-accent p-3 rounded-full transition-colors"
              aria-label="Önceki"
            >
              <ChevronLeft className="w-8 h-8 text-accent-foreground" />
            </button>

            <button
              onClick={handleNext}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-accent/80 hover:bg-accent p-3 rounded-full transition-colors"
              aria-label="Sonraki"
            >
              <ChevronRight className="w-8 h-8 text-accent-foreground" />
            </button>

            {/* Indicator Dots */}
            <div className="absolute bottom-20 left-1/2 -translate-x-1/2 flex gap-2">
              {drawingImages.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`transition-all duration-300 rounded-full ${
                    index === currentIndex
                      ? "bg-accent w-8 h-3"
                      : "bg-accent/30 w-3 h-3 hover:bg-accent/60"
                  }`}
                  aria-label={`Görsele git ${index + 1}`}
                />
              ))}
            </div>

            {/* Counter and Info */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-center">
              <p className="font-display text-sm tracking-[0.3em] uppercase text-white mb-2">
                {currentIndex + 1} / {drawingImages.length}
              </p>
              <h3 className="font-display text-lg font-semibold text-white">
                {drawingImages[currentIndex].title}
              </h3>
              <p className="text-sm text-white/70">
                {drawingImages[currentIndex].description}
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Uygulama Carousel Modal */}
      {uygModalOpen && (
        <div
          className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4"
          onClick={() => setUygModalOpen(false)}
        >
          <div
            className="relative w-full h-full flex items-center justify-center max-w-6xl max-h-[90vh]"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setUygModalOpen(false)}
              className="absolute top-4 right-4 z-50 bg-accent/80 hover:bg-accent p-2 rounded-full transition-colors"
              aria-label="Kapat"
            >
              <X className="w-6 h-6 text-accent-foreground" />
            </button>

            <div className="relative w-full">
              {uygulamaImages.map((image, index) => (
                <div
                  key={image.id}
                  className={`transition-opacity duration-1000 ${
                    index === uygIndex ? "opacity-100" : "opacity-0 absolute"
                  }`}
                >
                  <img
                    src={image.image}
                    alt={image.title}
                    className="max-w-full max-h-[70vh] object-contain mx-auto rounded-lg"
                  />
                </div>
              ))}
            </div>

            <button
              onClick={uygPrev}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-accent/80 hover:bg-accent p-3 rounded-full transition-colors"
              aria-label="Önceki"
            >
              <ChevronLeft className="w-8 h-8 text-accent-foreground" />
            </button>

            <button
              onClick={uygNext}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-accent/80 hover:bg-accent p-3 rounded-full transition-colors"
              aria-label="Sonraki"
            >
              <ChevronRight className="w-8 h-8 text-accent-foreground" />
            </button>

            <div className="absolute bottom-20 left-1/2 -translate-x-1/2 flex gap-2">
              {uygulamaImages.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setUygIndex(index)}
                  className={`transition-all duration-300 rounded-full ${
                    index === uygIndex
                      ? "bg-accent w-8 h-3"
                      : "bg-accent/30 w-3 h-3 hover:bg-accent/60"
                  }`}
                  aria-label={`Görsele git ${index + 1}`}
                />
              ))}
            </div>

            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-center">
              <h3 className="font-display text-lg font-semibold text-white">
                {uygulamaImages[uygIndex].title}
              </h3>
              <p className="text-sm text-white/70">
                {uygulamaImages[uygIndex].description}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default ServicesSection;
