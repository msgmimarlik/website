import { FC, useState, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

interface ArchitectureImage {
  id: string;
  title: string;
  description: string;
  image: string;
}

const ArchitectureCarousel: FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  const images: ArchitectureImage[] = [
    {
      id: "1",
      title: "Perspektif Çizim Tekniği",
      description: "Mimari görselleştirme ve tasarım prensipleri",
      image: "https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=1200&h=700&fit=crop",
    },
    {
      id: "2",
      title: "Floor Plan - Zemin Planı",
      description: "Mekansal düzenleme ve tasarım detayları",
      image: "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=1200&h=700&fit=crop",
    },
    {
      id: "3",
      title: "Kesit Çizimleri",
      description: "Yapısal detay ve kat kesitleri",
      image: "https://images.unsplash.com/photo-1486325212027-8081e485255e?w=1200&h=700&fit=crop",
    },
    {
      id: "4",
      title: "3D Perspektif Görünüm",
      description: "İçmekan ve dış mekan tasarımı",
      image: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=1200&h=700&fit=crop",
    },
    {
      id: "5",
      title: "Modern Yapı Tasarımı",
      description: "Çomutlu mimari ve peyzaj entegrasyonu",
      image: "https://images.unsplash.com/photo-1449844908441-8829872d2607?w=1200&h=700&fit=crop",
    },
  ];

  // Auto-play carousel
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [images.length]);

  const handlePrev = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  }, [images.length]);

  const handleNext = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  }, [images.length]);

  const openModal = (index: number) => {
    setSelectedImageIndex(index);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleModalPrev = useCallback(() => {
    setSelectedImageIndex(
      (prev) => (prev - 1 + images.length) % images.length
    );
  }, [images.length]);

  const handleModalNext = useCallback(() => {
    setSelectedImageIndex((prev) => (prev + 1) % images.length);
  }, [images.length]);

  return (
    <section id="gallery" className="py-24 lg:py-32 bg-background">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="mb-16">
          <p className="font-display text-sm tracking-[0.3em] uppercase text-accent mb-4">
            Tasarımlar
          </p>
          <h2 className="font-display text-3xl md:text-5xl font-bold tracking-tight text-foreground">
            Mimari Portföy
          </h2>
        </div>

        {/* Carousel */}
        <div className="relative max-w-5xl mx-auto group">
          <div className="relative h-96 md:h-[500px] lg:h-[600px] overflow-hidden rounded-lg">
            {/* Images Container */}
            <div className="relative w-full h-full">
              {images.map((image, index) => (
                <div
                  key={image.id}
                  className={`absolute inset-0 transition-opacity duration-1000 ${
                    index === currentIndex ? "opacity-100" : "opacity-0"
                  }`}
                >
                  <img
                    src={image.image}
                    alt={image.title}
                    onClick={() => openModal(index)}
                    className="w-full h-full object-cover cursor-pointer transition-transform duration-500 hover:scale-105"
                  />
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 via-transparent to-transparent" />

                  {/* Content Overlay */}
                  <div className="absolute bottom-0 left-0 right-0 p-8 text-primary-foreground">
                    <p className="text-sm text-primary-foreground/80 mb-2">
                      {image.description}
                    </p>
                    <h3 className="font-display text-2xl md:text-3xl font-bold tracking-tight">
                      {image.title}
                    </h3>
                  </div>
                </div>
              ))}
            </div>

            {/* Navigation Buttons - Desktop */}
            <button
              onClick={handlePrev}
              className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-accent/80 hover:bg-accent p-3 rounded-full transition-all transform opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 duration-300"
              aria-label="Önceki"
            >
              <ChevronLeft className="w-6 h-6 text-accent-foreground" />
            </button>

            <button
              onClick={handleNext}
              className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-accent/80 hover:bg-accent p-3 rounded-full transition-all transform opacity-0 group-hover:opacity-100 translate-x-2 group-hover:translate-x-0 duration-300"
              aria-label="Sonraki"
            >
              <ChevronRight className="w-6 h-6 text-accent-foreground" />
            </button>
          </div>

          {/* Indicator Dots */}
          <div className="flex justify-center gap-2 mt-8">
            {images.map((_, index) => (
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

          {/* Counter */}
          <div className="text-center mt-6">
            <p className="font-display text-sm tracking-[0.3em] uppercase text-muted-foreground">
              {currentIndex + 1} / {images.length}
            </p>
          </div>
        </div>
      </div>

      {/* Lightbox Modal */}
      {isModalOpen && (
        <div
          className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4"
          onClick={closeModal}
        >
          <div
            className="relative w-full h-full flex items-center justify-center max-w-6xl max-h-[90vh]"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 z-50 bg-accent/80 hover:bg-accent p-2 rounded-full transition-colors"
              aria-label="Kapat"
            >
              <X className="w-6 h-6 text-accent-foreground" />
            </button>

            {/* Image */}
            <img
              src={images[selectedImageIndex].image}
              alt={images[selectedImageIndex].title}
              className="max-w-full max-h-[80vh] object-contain rounded-lg"
            />

            {/* Navigation Buttons */}
            <button
              onClick={handleModalPrev}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-accent/80 hover:bg-accent p-3 rounded-full transition-colors"
              aria-label="Önceki"
            >
              <ChevronLeft className="w-8 h-8 text-accent-foreground" />
            </button>

            <button
              onClick={handleModalNext}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-accent/80 hover:bg-accent p-3 rounded-full transition-colors"
              aria-label="Sonraki"
            >
              <ChevronRight className="w-8 h-8 text-accent-foreground" />
            </button>

            {/* Modal Counter */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/60 px-4 py-2 rounded-full">
              <p className="font-display text-sm tracking-[0.3em] uppercase text-white">
                {selectedImageIndex + 1} / {images.length}
              </p>
            </div>

            {/* Image Info */}
            <div className="absolute bottom-20 left-1/2 -translate-x-1/2 text-center text-white">
              <h3 className="font-display text-lg font-semibold mb-1">
                {images[selectedImageIndex].title}
              </h3>
              <p className="text-sm text-white/70">
                {images[selectedImageIndex].description}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default ArchitectureCarousel;
