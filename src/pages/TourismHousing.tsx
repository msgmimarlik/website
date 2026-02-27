import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Shield, Mail, MessageCircle, MapPin, X, Building2, BriefcaseBusiness, PencilRuler, ArrowRight } from 'lucide-react';
import heroTourismImage from '@/assets/hero-tourism.jpg';
import residenceImage from '@/assets/IMG_2229.jpg';
import houseImage from '@/assets/DSC_7100t.jpg';
import apartmentImage from '@/assets/yeni1.jpg';
import serviceImage8 from '@/assets/8.jpg';
import belgeImage from '@/assets/belge.jpg';
import resepsiyonImage from '@/assets/resepsiyon.jpg';

const TourismHousing = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const handleGetInTouch = () => {
    setShowMenu(!showMenu);
  };

  const openImageModal = (image: string) => {
    setSelectedImage(image);
  };

  const closeImageModal = () => {
    setSelectedImage(null);
  };

  const serviceCards = [
    {
      title: 'Mimari Tasarım ve Proje Hizmeti',
      description: 'Mülkünüzün tüm yerel güvenlik, imar ve konaklama düzenlemelerine uygun olması için gerekli olması durumunda tüm röleve, plan değişikliği, restorasyon ve iç dizayn desteği sağlıyoruz.',
      image: serviceImage8,
      icon: PencilRuler,
      href: '/mimarlik',
    },
    {
      title: 'Turizm Belgelendirme Danışmanlığı',
      description: 'Özel girişli alanlarda, hazır dekorasyonlu ya da şirketinize özel tasarlanan kurumsal ofisler.',
      image: belgeImage,
      icon: BriefcaseBusiness,
      href: '#process',
    },
    {
      title: 'Turizm Tesisinize İşletme Hizmeti',
      description: 'Kişi sayısına göre değişebilen, taşınmaya hazır ve ortak alan erişimli kapalı ofisler.',
      image: resepsiyonImage,
      icon: Building2,
      href: '#portfolio',
    },
  ];

  return (
    <div id="top" className="min-h-screen w-full bg-background">
      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm border-b border-border">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <a href="#top" className="flex items-center gap-2">
              <Shield className="w-6 h-6 text-accent" />
              <span className="text-xl font-bold text-foreground">MS DANISMANLIK</span>
            </a>
            <div className="hidden md:flex items-center gap-8">
              <a href="#services" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Hizmetler</a>
              <a href="#process" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Süreç</a>
              <a href="#portfolio" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Yaptıklarımız</a>
              <a href="#about" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Hakkımızda</a>
              <a href="#contact" className="text-sm text-muted-foreground hover:text-foreground transition-colors">İletişim</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src={heroTourismImage}
            alt="Lüks Airbnb sahil mülkü"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/40" />
        </div>

        <div className="container mx-auto px-6 py-24 relative z-10 mt-16">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <p className="mb-6 text-sm tracking-wider text-accent uppercase">
                AİRBNB SERTİFİKA DANIŞMANLIĞI
              </p>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                <span className="text-white">Airbnb İşinizi </span>
                <span className="text-accent">Sertifikalı Güvenle Başlatın</span>
              </h1>
              
              <p className="text-lg md:text-xl text-gray-200 mb-8 leading-relaxed">
                Airbnb ev sahiplerinin ve mülk yöneticilerinin gerekli turizm işletme belgelerini almasına yardımcı oluyoruz — uygunluk, evrak ve onay süreçlerini biz yönetirken siz misafirlerinize odaklanırsınız.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="text-base bg-accent text-accent-foreground hover:bg-accent/90 uppercase tracking-wider"
                  asChild
                >
                  <a href="#portfolio">Projeleri Görüntüle</a>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="text-base text-white border-white/50 bg-transparent hover:bg-white/10 hover:text-white uppercase tracking-wider"
                  asChild
                >
                  <a href="#contact">Bize Ulaşın</a>
                </Button>
              </div>
              
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-sm font-semibold text-accent mb-3 tracking-wider">NELER SUNUYORUZ</p>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">Hizmetlerimiz</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Airbnb ev sahiplerinin yasal şekilde faaliyet göstermesi ve kiralama işini büyütmesi için gereken her şey.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            {serviceCards.map((service, index) => {
              const Icon = service.icon;

              return (
                <motion.article
                  key={service.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="overflow-hidden rounded-xl border border-border bg-card"
                >
                  <div className="relative h-44 overflow-hidden">
                    <img src={service.image} alt={service.title} className="h-full w-full object-cover" loading="lazy" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/35 to-black/5" />
                  </div>

                  <div className="relative px-6 pb-6 pt-8">
                    <div className="absolute -top-6 left-6 flex h-16 w-16 items-center justify-center rounded-2xl border border-border bg-background shadow-sm">
                      <Icon className="h-7 w-7 text-accent" />
                    </div>

                    <div className="mb-4">
                      <h3 className="text-2xl font-semibold text-foreground">{service.title}</h3>
                    </div>

                    <p className="mb-6 text-lg text-muted-foreground">{service.description}</p>

                    <a
                      href={service.href}
                      className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors"
                    >
                      İncele
                      <ArrowRight className="h-4 w-4" />
                    </a>
                  </div>
                </motion.article>
              );
            })}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section id="process" className="py-24 bg-[#2C3E50]">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-sm font-semibold text-accent mb-3 tracking-wider">NASIL İŞLER</p>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Belgelendirme Süreci</h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Baştan sona sade ve şeffaf bir süreç.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="relative"
            >
              <div className="text-6xl font-bold text-accent/40 mb-4">01</div>
              <h3 className="text-xl font-semibold mb-3 text-white">Planlama ve İç Dizayn</h3>
              <p className="text-gray-300">
                (Mülkünüz hazır değilse) Gerekli plan değişiklikleri ve iç dizaynı yapıldıktan sonra tasarıma ve işleve uygun eşyalar seçilir.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="relative"
            >
              <div className="text-6xl font-bold text-accent/40 mb-4">02</div>
              <h3 className="text-xl font-semibold mb-3 text-white">Evrak Hazırlığı</h3>
              <p className="text-gray-300">
                Ekibimiz tüm gerekli başvuru, izin ve destekleyici belgeleri hazırlar.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="relative"
            >
              <div className="text-6xl font-bold text-accent/40 mb-4">03</div>
              <h3 className="text-xl font-semibold mb-3 text-white">Resmî Başvuru</h3>
              <p className="text-gray-300">
                Tüm dosyaları ilgili kurumlara iletir, takip süreçlerini yönetiriz.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="relative"
            >
              <div className="text-6xl font-bold text-accent/40 mb-4">04</div>
              <h3 className="text-xl font-semibold mb-3 text-white">Belge Teslimi</h3>
              <p className="text-gray-300">
                Airbnb turizm işletme belgeniz alınır — artık yasal olarak ev sahipliği yapmaya hazırsınız.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="relative"
            >
              <div className="text-6xl font-bold text-accent/40 mb-4">05</div>
              <h3 className="text-xl font-semibold mb-3 text-white">Denetim Aşaması</h3>
              <p className="text-gray-300">
                Belgelendirme sonrasında bakanlık tarafından yapılan denetimin sorunsuz aşılması için gereken tüm belge ve teknik gereklilikleri sağlıyoruz.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <div className="mb-8">
            <p className="text-sm font-semibold text-accent mb-3 tracking-wider">SEÇİLİ ÇALIŞMALAR</p>
            <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-8 mb-16">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
                YAPTIKLARIMIZ
              </h2>
              <p className="text-muted-foreground max-w-md">
                Her belgelendirme, profesyonel hizmet ve başarılı süreç yönetimi konusundaki uzmanlığımızı yansıtır.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Project 1 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="group cursor-pointer"
              onClick={() => openImageModal(residenceImage)}
            >
              <div className="aspect-[4/3] bg-muted rounded-lg mb-4 overflow-hidden">
                <img
                  src={residenceImage}
                  alt="MS RESIDENCE"
                  className="w-full h-full object-cover block transition-transform group-hover:scale-105"
                  loading="lazy"
                />
              </div>
              <div className="flex justify-between items-center mb-2">
                <span className="text-xs font-semibold text-accent tracking-wider">REZIDANS</span>
                <span className="text-sm text-muted-foreground">2025</span>
              </div>
              <h3 className="text-xl font-bold text-foreground group-hover:text-accent transition-colors">
                BEYOGLU-RESIDENCE
              </h3>
            </motion.div>

            {/* Project 2 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="group cursor-pointer"
              onClick={() => openImageModal(apartmentImage)}
            >
              <div className="aspect-[4/3] bg-muted rounded-lg mb-4 overflow-hidden">
                <img
                  src={apartmentImage}
                  alt="SISLI-Daire"
                  className="w-full h-full object-cover block transition-transform group-hover:scale-105"
                  loading="lazy"
                />
              </div>
              <div className="flex justify-between items-center mb-2">
                <span className="text-xs font-semibold text-accent tracking-wider">DAİRE</span>
                <span className="text-sm text-muted-foreground">2024</span>
              </div>
              <h3 className="text-xl font-bold text-foreground group-hover:text-accent transition-colors">
                SISLI-Daire
              </h3>
            </motion.div>

            {/* Project 3 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="group cursor-pointer"
              onClick={() => openImageModal(houseImage)}
            >
              <div className="aspect-[4/3] bg-muted rounded-lg mb-4 overflow-hidden">
                <img
                  src={houseImage}
                  alt="BEYOĞLU-Müstakil Ev"
                  className="w-full h-full object-cover block transition-transform group-hover:scale-105"
                  loading="lazy"
                />
              </div>
              <div className="flex justify-between items-center mb-2">
                <span className="text-xs font-semibold text-accent tracking-wider">EV</span>
                <span className="text-sm text-muted-foreground">2024</span>
              </div>
              <h3 className="text-xl font-bold text-foreground group-hover:text-accent transition-colors">
                BEYOĞLU-Müstakil Ev
              </h3>
            </motion.div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-sm font-semibold text-primary mb-3 tracking-wider">HAKKIMIZDA</p>
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-foreground">
              Airbnb Belgelendirmesinde Güvenilir Uzmanlar
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Kısa dönem kiralama mevzuatı ve Airbnb işletme belgelendirmesinde 10 yılı aşkın deneyimimizle, yüzlerce ev sahibi ve mülk yöneticisinin lisans almasına yardımcı olduk. Turizm uyumluluğunun karmaşık yapısını sizin için sadeleştiriyor, siz de misafir deneyimine odaklanabiliyorsunuz.
              </p>

              <div className="grid grid-cols-3 gap-8 mb-8">
                <div className="text-center">
                  <div className="text-4xl font-bold text-primary mb-2">50+</div>
                  <p className="text-sm text-muted-foreground">Belgelendirilen Ev Sahibi</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-primary mb-2">98%</div>
                  <p className="text-sm text-muted-foreground">Onay Oranı</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-primary mb-2">10+</div>
                  <p className="text-sm text-muted-foreground">Yıl Deneyim</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <img
                src={heroTourismImage}
                alt="Airbnb mülk danışmanlığı"
                className="w-full h-[500px] object-cover rounded-lg shadow-2xl"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact & Footer Section */}
      <section id="contact" className="py-24 bg-[#2C3E50]">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-sm font-semibold text-accent mb-3 tracking-wider">İLETİŞİME GEÇİN</p>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
              Airbnb'nizi Belgelendirmeye Hazır mısınız?
            </h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto mb-8">
              Ücretsiz danışmanlık planlayın ve Airbnb mülkünüzün belgelendirme sürecini bize bırakın.
            </p>
            <div className="relative inline-block">
              <button
                onClick={handleGetInTouch}
                className="px-10 py-4 bg-accent text-white font-semibold text-sm tracking-widest uppercase hover:bg-accent/90 transition-opacity"
              >
                Bize Ulaşın
              </button>

              {showMenu && (
                <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-4 bg-[#2C3E50] border border-accent/30 rounded shadow-lg z-50 min-w-max">
                  <a
                    href="mailto:info@msgmimarlik.com"
                    className="flex items-center gap-3 px-6 py-4 text-white hover:bg-white/10 text-sm font-semibold tracking-widest uppercase transition-colors"
                  >
                    <Mail className="w-4 h-4" />
                    E-posta
                  </a>
                  <a
                    href="https://wa.me/905442178662"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 px-6 py-4 text-white hover:bg-white/10 text-sm font-semibold tracking-widest uppercase border-t border-white/20 transition-colors"
                  >
                    <MessageCircle className="w-4 h-4" />
                    WhatsApp
                  </a>
                  <a
                    href="https://maps.app.goo.gl/HA4aWBy4WqmnuGJn6"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 px-6 py-4 text-white hover:bg-white/10 text-sm font-semibold tracking-widest uppercase border-t border-white/20 transition-colors"
                  >
                    <MapPin className="w-4 h-4" />
                    Ulaşım
                  </a>
                </div>
              )}
            </div>
          </div>

          <div className="flex justify-center mb-12">
            <div className="text-center">
              <div className="flex items-center justify-center gap-2 mb-4">
                <Shield className="w-6 h-6 text-accent" />
                <h3 className="text-lg font-bold text-white">MS DANISMANLIK</h3>
              </div>
              <p className="text-sm text-gray-300">
                Airbnb işletme belgelendirmesi ve kısa dönem kiralama uyumluluğunda güvenilir iş ortağınız.
              </p>
            </div>
          </div>

          <div className="border-t border-white/10 pt-8 text-center text-sm text-gray-400">
            <p>© MS GROUP. Tüm hakları saklıdır.</p>
          </div>
        </div>
      </section>

      {/* Image Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-[100] bg-black/90 flex items-center justify-center p-4"
          onClick={closeImageModal}
        >
          <button
            onClick={closeImageModal}
            className="absolute top-4 right-4 text-white hover:text-accent transition-colors z-[101]"
            aria-label="Close modal"
          >
            <X className="w-8 h-8" />
          </button>
          <img
            src={selectedImage}
            alt="Enlarged view"
            className="max-w-full max-h-full object-contain"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </div>
  );
};

export default TourismHousing;