import { FC, useState, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import u1 from "@/assets/uygulama1.jpg";
import u2 from "@/assets/uygulama2.jpg";
import u3 from "@/assets/uygulama3.jpg";
import u4 from "@/assets/uygulama4.jpg";
import u5 from "@/assets/uygulama5.jpg";
import u6 from "@/assets/uygulama6.jpg";

interface CarouselImage {
  id: string;
  title: string;
  description: string;
  image: string;
}

const UygulamaCarousel: FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  const images: CarouselImage[] = [
    {
      id: "u1",
      title: "Uygulama - Perspektif",
      description: "İç ve dış mekan perspektif görselleri",
      image: u1,
    },
    {
      id: "u2",
      title: "Uygulama - Zemin Planı",
      description: "Detaylı uygulama zemin planı görüntüsü",
      image: u2,
    },
    {
      id: "u3",
      title: "Uygulama - Kesit",
      description: "Kesit çizimi ve yapı detayları",
      image: u3,
    },
    {
      id: "u4",
      title: "Uygulama - 3D Model",
      description: "Çalışmanın 3B model görselleştirmesi",
      image: u4,
    },
    {
      id: "u5",
      title: "Uygulama - Uygulama Detayı",
      description: "Uygulama aşamasından fotoğraf ve detaylar",
      image: u5,
    },
    {
      id: "u6",
      title: "Uygulama - Son Durum",
      description: "Tamamlanmış uygulama projelerinden örnek",
      image: u6,
    },
  ];

  // Auto-play
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 2500);
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

  const closeModal = () => setIsModalOpen(false);

  const handleModalPrev = useCallback(() => {
    setSelectedImageIndex((prev) => (prev - 1 + images.length) % images.length);
  }, [images.length]);

  const handleModalNext = useCallback(() => {
    setSelectedImageIndex((prev) => (prev + 1) % images.length);
  }, [images.length]);

  return (
    <section aria-label="Uygulama Slayt Gösterisi" className="mt-12">
      <div className="max-w-5xl mx-auto">
        <div className="relative h-96 md:h-[500px] lg:h-[600px] overflow-hidden rounded-lg group">
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

                <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 via-transparent to-transparent" />

                <div className="absolute bottom-0 left-0 right-0 p-8 text-primary-foreground">
                  <p className="text-sm text-primary-foreground/80 mb-2">{image.description}</p>
                  <h3 className="font-display text-2xl md:text-3xl font-bold tracking-tight">{image.title}</h3>
                </div>
              </div>
            ))}
          </div>

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

        {/* numeric counter removed per request */}
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4" onClick={closeModal}>
          <div className="relative w-full h-full flex items-center justify-center max-w-6xl max-h-[90vh]" onClick={(e) => e.stopPropagation()}>
            <button onClick={closeModal} className="absolute top-4 right-4 z-50 bg-accent/80 hover:bg-accent p-2 rounded-full" aria-label="Kapat">
              <X className="w-6 h-6 text-accent-foreground" />
            </button>

            <img src={images[selectedImageIndex].image} alt={images[selectedImageIndex].title} className="max-w-full max-h-[80vh] object-contain rounded-lg" />

            <button onClick={handleModalPrev} className="absolute left-4 top-1/2 -translate-y-1/2 bg-accent/80 hover:bg-accent p-3 rounded-full" aria-label="Önceki">
              <ChevronLeft className="w-8 h-8 text-accent-foreground" />
            </button>

            <button onClick={handleModalNext} className="absolute right-4 top-1/2 -translate-y-1/2 bg-accent/80 hover:bg-accent p-3 rounded-full" aria-label="Sonraki">
              <ChevronRight className="w-8 h-8 text-accent-foreground" />
            </button>

            {/* modal numeric counter removed per request */}

            <div className="absolute bottom-20 left-1/2 -translate-x-1/2 text-center text-white">
              <h3 className="font-display text-lg font-semibold mb-1">{images[selectedImageIndex].title}</h3>
              <p className="text-sm text-white/70">{images[selectedImageIndex].description}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default UygulamaCarousel;
