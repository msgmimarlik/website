import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import NotFound from "./NotFound";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import residentialImg from "@/assets/project-residential.jpg";
import girisImg from "@/assets/giris.jpg";
import arkaCepheImg from "@/assets/arka cephe.jpg";
import renderOneImg from "@/assets/r1.png";
import renderTwoImg from "@/assets/r2.png";
import asmaKatImg from "@/assets/asma kat.jpg";
import araKatImg from "@/assets/ara kat.jpg";
import terasKatImg from "@/assets/teras kat.jpg";
import kesitImg from "@/assets/2-2 kesiti.jpg";
import projectCommercialImg from "@/assets/project-commercial.png";
import floryaMainImg from "@/assets/10.jpg";
import florya7002PosterImg from "@/assets/IMG_7013.jpg";
import florya7006PosterImg from "@/assets/IMG_7009.PNG";
import florya7004PosterImg from "@/assets/IMG_7010.png";
import floryaLivingImg1 from "@/assets/8.jpg";
import floryaLivingImg2 from "@/assets/9.jpg";
import floryaInteriorVideo from "@/assets/IMG_7002.MOV";
import floryaAddedImg1 from "@/assets/6.jpg";
import floryaAddedImg2 from "@/assets/12.jpg";
import floryaAddedVideo from "@/assets/IMG_7006.MOV";
import floryaBottomImg from "@/assets/17.JPG";
import floryaBottomVideo from "@/assets/IMG_7004.MOV";
import floryaGridVideo1 from "@/assets/IMG_7001.MOV";
import floryaGridVideo3 from "@/assets/IMG_7003.MOV";
import floryaGridVideo5 from "@/assets/IMG_7005.MOV";
import floryaGridVideo1PosterImg from "@/assets/16.jpg";
import floryaGridVideo3PosterImg from "@/assets/IMG_7011.PNG";
import floryaGridVideo5PosterImg from "@/assets/IMG_7008.PNG";
import masterplanDiagramImg from "@/assets/1.jpg";
import floorPlan1Img from "@/assets/hplan1.jpg";
import floorPlan2Img from "@/assets/hplan2.jpg";
import floorPlan3Img from "@/assets/hplan3.jpg";
import sectionAImg from "@/assets/hkesit a.jpg";
import sectionTImg from "@/assets/kesitt.jpg";
import elevationAImg from "@/assets/hga.jpg";
import elevationBImg from "@/assets/hgg.jpg";
import elevationKImg from "@/assets/hgk.jpg";

type PreviewImage = {
  src: string;
  alt: string;
};

type ProjectSection = {
  label: string;
  images: PreviewImage[];
};

type ProjectData = {
  title: string;
  category: string;
  year: string;
  status: string;
  location: string;
  typology: string;
  summary: string;
  hero: PreviewImage;
  sections: ProjectSection[];
};

const normalizeProjectSlug = (slug: string) =>
  slug
    .trim()
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/ı/g, "i")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");

type PreviewImageProps = {
  src: string;
  alt: string;
  className: string;
  loading?: "lazy" | "eager";
  onPreview: () => void;
};

const ClickableImage = ({ src, alt, className, loading = "lazy", onPreview }: PreviewImageProps) => (
  <button
    type="button"
    onClick={onPreview}
    className="block w-full text-left cursor-zoom-in"
  >
    <img src={src} alt={alt} className={className} loading={loading} />
  </button>
);

const projectData: Record<string, ProjectData> = {
  "kadikoy-golden-star": {
    title: "KADIKOY GOLDEN STAR",
    category: "HOTEL",
    year: "2018",
    status: "Konsept Tasarım",
    location: "Kadıköy / İstanbul",
    typology: "Otel",
    summary:
      "Kadıköy'ün yoğun kentsel dokusunda konumlanan bu otel projesi, çağdaş cephe dili, fonksiyonel plan kurgusu ve misafir deneyimini merkeze alan iç mekân çözümleri ile tasarlanmıştır.",
    hero: {
      src: renderOneImg,
      alt: "KADIKOY GOLDEN STAR render 1",
    },
    sections: [
      {
        label: "Planlar",
        images: [
          { src: asmaKatImg, alt: "KADIKOY GOLDEN STAR asma kat planı" },
          { src: araKatImg, alt: "KADIKOY GOLDEN STAR ara kat planı" },
          { src: terasKatImg, alt: "KADIKOY GOLDEN STAR teras kat planı" },
        ],
      },
      {
        label: "Kesitler",
        images: [
          { src: kesitImg, alt: "KADIKOY GOLDEN STAR 2-2 kesiti" },
        ],
      },
      {
        label: "Görünüşler",
        images: [
          { src: residentialImg, alt: "KADIKOY GOLDEN STAR render görünüşü" },
          { src: girisImg, alt: "KADIKOY GOLDEN STAR giriş görünüşü" },
          { src: arkaCepheImg, alt: "KADIKOY GOLDEN STAR arka cephe görünüşü" },
        ],
      },
      {
        label: "3D",
        images: [
          { src: renderOneImg, alt: "KADIKOY GOLDEN STAR render 1" },
          { src: renderTwoImg, alt: "KADIKOY GOLDEN STAR render 2" },
        ],
      },
    ],
  },
  "cukurova-havalimani-yarismasi": {
    title: "Çukurova Havalimanı",
    category: "Airport",
    year: "2020",
    status: "Yarışma Projesi",
    location: "Çukurova / Adana-Mersin",
    typology: "Uluslararası Havalimanı Terminali",
    summary:
      "Çukurova Havalimanı, sıcak ve güneş yükü yüksek iklim koşullarına yanıt veren gölgelikli cepheler, geçirgen bekleme avluları ve doğal hava akışını destekleyen terminal kurgusuyla tasarlanmıştır.",
    hero: {
      src: projectCommercialImg,
      alt: "Çukurova Havalimanı dış cephe görünüşü",
    },
    sections: [
      {
        label: "Diyagramlar",
        images: [
          { src: masterplanDiagramImg, alt: "Çukurova Havalimanı masterplan diyagramı" },
        ],
      },
      {
        label: "Planlar",
        images: [
          { src: floorPlan1Img, alt: "Çukurova Havalimanı plan paftası 1" },
          { src: floorPlan2Img, alt: "Çukurova Havalimanı plan paftası 2" },
          { src: floorPlan3Img, alt: "Çukurova Havalimanı plan paftası 3" },
        ],
      },
      {
        label: "Kesitler",
        images: [
          { src: sectionAImg, alt: "Çukurova Havalimanı kesit A" },
          { src: sectionTImg, alt: "Çukurova Havalimanı kesit T" },
        ],
      },
      {
        label: "Görünüşler",
        images: [
          { src: elevationAImg, alt: "Çukurova Havalimanı görünüş A" },
          { src: elevationBImg, alt: "Çukurova Havalimanı görünüş B" },
          { src: elevationKImg, alt: "Çukurova Havalimanı görünüş K" },
        ],
      },
    ],
  },
  "florya-ic-dizayn": {
    title: "Florya İç Dizayn",
    category: "İç Mekân",
    year: "2023",
    status: "Uygulama Projesi",
    location: "Florya / İstanbul",
    typology: "Konut İç Mekân Tasarımı",
    summary:
      "Florya İç Dizayn projesi; oturma alanı, mutfak ve şömine nişini aynı tasarım dili içinde birleştiren modern bir konut iç mekân kurgusuna odaklanır. Koyu tuğla dokusu, beyaz yüzeyler, ahşap çıta detayları ve sıcak lineer aydınlatmalar birlikte kullanılarak dengeli, sakin ve karakterli bir yaşam atmosferi hedeflenmiştir.",
    hero: {
      src: floryaMainImg,
      alt: "Florya İç Dizayn şömine ve ahşap iç mekân detayı",
    },
    sections: [],
  },
};

const ProjectDetail = () => {
  const { projectSlug } = useParams<{ projectSlug: string }>();
  const [previewState, setPreviewState] = useState<{
    group: PreviewImage[];
    index: number;
  } | null>(null);
  const [videoPreviewSrc, setVideoPreviewSrc] = useState<string | null>(null);

  const normalizedSlug = projectSlug ? normalizeProjectSlug(projectSlug) : "";

  if (!normalizedSlug || !projectData[normalizedSlug]) {
    return <NotFound />;
  }

  const project = projectData[normalizedSlug];
  const isCukurovaAirport = normalizedSlug === "cukurova-havalimani-yarismasi";
  const isFloryaInterior = normalizedSlug === "florya-ic-dizayn";
  const architecturalApproachText = isCukurovaAirport
    ? "Tasarım yaklaşımı, sıcak bölgelerde yolcu konforunu artırmak için güneş kontrolünü ve pasif iklimlendirmeyi merkezine alır. Derin saçaklar, yarı açık dolaşım bantları ve gölgelikli drop-off alanları günün yoğun saatlerinde ısı kazanımını azaltır. Terminal kütlesi, hâkim rüzgâr yönünü kullanacak biçimde parçalı olarak kurgulanmış; dış mekânla kurulan kontrollü geçişler sayesinde iç mekânda dengeli bir mikroiklim hedeflenmiştir."
    : isFloryaInterior
    ? "İç mimari yaklaşım, farklı mekânlarda ortak bir malzeme dili kuracak biçimde ele alınmıştır: oturma alanında koyu tuğla doku ve yumuşak formlu açık renk duvar; mutfakta beyaz düz kapak yüzeyler ve lineer ahşap tavan detayı; şömine bölümünde ise düşey ahşap çıtalarla güçlenen odak duvarı. Siyah metal aksesuarlar ve sıcak ışık bantları, bu katmanlar arasında görsel süreklilik sağlar."
    : "Proje, zemin katta kamusal kullanımı güçlendiren şeffaf bir kurgu; üst katlarda ise konaklama birimlerine mahremiyet ve gün ışığı sağlayan dengeli bir cephe ritmi üzerine kurgulanmıştır. Kütle oranları, çevre yapı yüksekliği ve sokak silüeti ile uyumlu olacak biçimde ele alınmıştır. Çevre düzenlemesi, ortak olanların kamu tarafından kullanılabilmesi adına sokakla bütünsellik içinde ele alınmıştır.";
  const interiorLayoutText = isCukurovaAirport
    ? "İç mekân kurgusunda geliş-gidiş yolcu akışları net biçimde ayrıştırılmış; güvenlik, check-in, pasaport ve bagaj hatları kısa yürüme mesafeleriyle birbirine bağlanmıştır. Geniş bekleme holleri, doğal ışığı filtreleyen tavan açıklıkları ve yüksek tavanlı gölgelikli alanlarla desteklenmiştir. Ticari birimler ve servis çekirdekleri, pik saatlerde yığılmayı azaltacak şekilde lineer yerine dağıtık bir düzende konumlandırılmıştır."
    : isFloryaInterior
    ? "Yerleşim kurgusunda oturma bölümü, mutfak ve şömine köşesi birbirini kesmeyen net dolaşım akslarıyla ilişkilendirilmiştir. Mutfakta lineer tezgâh düzeni ve üst dolap altı aydınlatmalar günlük kullanım ergonomisini artırırken, şömine çevresindeki raf nişleri mekâna hem depolama hem sergileme esnekliği kazandırır. Farklı fonksiyonlar arasında kurulan bu sade geçişler, konutun bütününde sakin ve düzenli bir kullanım senaryosu üretir."
    : "Lobi, restoran ve ortak alanlar ziyaretçiyi karşılayan güçlü bir giriş aksı etrafında organize edilmiştir. Odalarda malzeme sürekliliği, akustik konfor ve doğal ışık kullanımı önceliklendirilmiş; servis alanları operasyonel akışı kesintiye uğratmayacak şekilde planlanmıştır.";
  const floryaInteriorImages = isFloryaInterior
    ? [
        { src: floryaLivingImg1, alt: "Florya İç Dizayn salon görünümü 1" },
        { src: floryaLivingImg2, alt: "Florya İç Dizayn salon görünümü 2" },
      ]
    : [];
  const floryaAddedImages = isFloryaInterior
    ? [
        { src: floryaAddedImg1, alt: "Florya İç Dizayn yatak odası üst görünüm" },
        { src: floryaAddedImg2, alt: "Florya İç Dizayn yatak odası ön görünüm" },
      ]
    : [];
  const floryaBottomImage = {
    src: floryaBottomImg,
    alt: "Florya İç Dizayn banyo görünümü",
  };
  const floryaBottomVideos = isFloryaInterior
    ? [floryaGridVideo1, floryaGridVideo3, floryaGridVideo5]
    : [];
  const floryaBottomVideoPosterMap: Record<string, string> = {
    [floryaGridVideo1]: floryaGridVideo1PosterImg,
    [floryaGridVideo3]: floryaGridVideo3PosterImg,
    [floryaGridVideo5]: floryaGridVideo5PosterImg,
  };
  const interiorPreviewImages = [project.hero, ...floryaInteriorImages];
  const currentPreview = previewState?.group[previewState.index];
  const applyPreviewVideoSpeed = (videoElement: HTMLVideoElement) => {
    videoElement.defaultPlaybackRate = 0.7;
    videoElement.playbackRate = 0.7;
  };

  return (
    <main className="min-h-screen bg-background">
      <div className="container mx-auto px-6 lg:px-12 py-16 lg:py-24">
          <Link
            to="/#projects"
            className="inline-block font-display text-xs tracking-[0.25em] uppercase text-accent hover:opacity-80 transition-opacity mb-8"
          >
            Ana sayfaya dön
          </Link>

          <header className="mb-10 lg:mb-14">
            <p className="font-display text-sm tracking-[0.3em] uppercase text-accent mb-4">
              {project.category}
            </p>
            <h1 className="font-display text-3xl md:text-5xl font-bold tracking-tight text-foreground mb-5">
              {project.title}
            </h1>
            <p className="text-muted-foreground max-w-3xl leading-relaxed">
              {project.summary}
            </p>
          </header>

          <section className="grid lg:grid-cols-12 gap-8 lg:gap-10 mb-10 lg:mb-12 items-start">
            <div className="lg:col-span-8">
              <ClickableImage
                src={project.hero.src}
                alt={project.hero.alt}
                className="w-full aspect-[16/10] object-cover"
                loading="eager"
                onPreview={() => setPreviewState({
                  group: interiorPreviewImages,
                  index: 0,
                })}
              />
            </div>

            <div className="lg:col-span-4 space-y-8">
              <aside className="border border-border bg-card p-6 space-y-4 h-fit">
                <h3 className="font-display text-lg font-semibold text-foreground">Proje Bilgileri</h3>
                <div className="space-y-3 text-sm">
                  <div className="flex items-start justify-between gap-4">
                    <span className="text-muted-foreground">Lokasyon</span>
                    <span className="text-foreground">{project.location}</span>
                  </div>
                  <div className="flex items-start justify-between gap-4">
                    <span className="text-muted-foreground">Tipoloji</span>
                    <span className="text-foreground">{project.typology}</span>
                  </div>
                  <div className="flex items-start justify-between gap-4">
                    <span className="text-muted-foreground">Yıl</span>
                    <span className="text-foreground">{project.year}</span>
                  </div>
                  <div className="flex items-start justify-between gap-4">
                    <span className="text-muted-foreground">Durum</span>
                    <span className="text-foreground">{project.status}</span>
                  </div>
                </div>
              </aside>

              <div className="space-y-6">
                <div>
                  <h2 className="font-display text-2xl md:text-3xl font-semibold tracking-tight text-foreground mb-3">
                    Mimari Yaklaşım
                  </h2>
                  <p className="text-muted-foreground leading-relaxed">
                    {architecturalApproachText}
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section className="mb-12 lg:mb-16">
            <h2 className="font-display text-2xl md:text-3xl font-semibold tracking-tight text-foreground mb-3">
              İç Mekân Kurgusu
            </h2>
            <p className="text-muted-foreground leading-relaxed max-w-none">
              {interiorLayoutText}
            </p>

            {isFloryaInterior && (
              <>
                <div className="grid md:grid-cols-2 gap-5 lg:gap-6 mt-6 items-start">
                  <div className="space-y-5 lg:space-y-6">
                    {floryaInteriorImages.map((image, index) => (
                      <div key={`${image.src}-${index}`}>
                        <ClickableImage
                          src={image.src}
                          alt={image.alt}
                          className="w-full h-64 object-cover"
                          loading="lazy"
                          onPreview={() => setPreviewState({ group: interiorPreviewImages, index: index + 1 })}
                        />
                      </div>
                    ))}
                  </div>
                  <button
                    type="button"
                    onClick={() => setVideoPreviewSrc(floryaInteriorVideo)}
                    className="group relative block w-full h-64 md:h-[34rem] text-left cursor-zoom-in overflow-hidden"
                  >
                    <video
                      src={floryaInteriorVideo}
                      className="w-full h-full object-cover"
                      poster={florya7002PosterImg}
                      controlsList="nodownload noremoteplayback"
                      disablePictureInPicture
                      loop
                      muted
                      playsInline
                      preload="metadata"
                      onLoadedMetadata={(event) => {
                        applyPreviewVideoSpeed(event.currentTarget);
                      }}
                      onPlay={(event) => {
                        applyPreviewVideoSpeed(event.currentTarget);
                      }}
                    />
                    <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-black/25 opacity-0 group-hover:opacity-100 transition-opacity">
                      <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-background/90 text-foreground text-xl">
                        ▶
                      </span>
                    </div>
                  </button>
                </div>
                <div className="w-full border-t-4 border-black mt-8" />
                <div className="grid md:grid-cols-2 gap-5 lg:gap-6 mt-8 items-start">
                  <div className="space-y-5 lg:space-y-6">
                    {floryaAddedImages.map((image, index) => (
                      <div key={`${image.src}-${index}`}>
                        <ClickableImage
                          src={image.src}
                          alt={image.alt}
                          className="w-full h-64 object-cover"
                          loading="lazy"
                          onPreview={() => setPreviewState({ group: floryaAddedImages, index })}
                        />
                      </div>
                    ))}
                  </div>
                  <button
                    type="button"
                    onClick={() => setVideoPreviewSrc(floryaAddedVideo)}
                    className="group relative block w-full h-64 md:h-[34rem] text-left cursor-zoom-in overflow-hidden"
                  >
                    <video
                      src={floryaAddedVideo}
                      className="w-full h-full object-cover"
                      poster={florya7006PosterImg}
                      controlsList="nodownload noremoteplayback"
                      disablePictureInPicture
                      loop
                      muted
                      playsInline
                      preload="metadata"
                      onLoadedMetadata={(event) => {
                        applyPreviewVideoSpeed(event.currentTarget);
                      }}
                      onPlay={(event) => {
                        applyPreviewVideoSpeed(event.currentTarget);
                      }}
                    />
                    <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-black/25 opacity-0 group-hover:opacity-100 transition-opacity">
                      <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-background/90 text-foreground text-xl">
                        ▶
                      </span>
                    </div>
                  </button>
                </div>
                <div className="w-full border-t-4 border-black mt-8" />
                <div className="grid md:grid-cols-2 gap-5 lg:gap-6 mt-8 items-start">
                  <ClickableImage
                    src={floryaBottomImage.src}
                    alt={floryaBottomImage.alt}
                    className="w-full h-64 md:h-[34rem] object-cover"
                    loading="lazy"
                    onPreview={() => setPreviewState({ group: [floryaBottomImage], index: 0 })}
                  />
                  <button
                    type="button"
                    onClick={() => setVideoPreviewSrc(floryaBottomVideo)}
                    className="group relative block w-full h-64 md:h-[34rem] text-left cursor-zoom-in overflow-hidden"
                  >
                    <video
                      src={floryaBottomVideo}
                      className="w-full h-full object-cover"
                      poster={florya7004PosterImg}
                      controlsList="nodownload noremoteplayback"
                      disablePictureInPicture
                      loop
                      muted
                      playsInline
                      preload="metadata"
                      onLoadedMetadata={(event) => {
                        applyPreviewVideoSpeed(event.currentTarget);
                      }}
                      onPlay={(event) => {
                        applyPreviewVideoSpeed(event.currentTarget);
                      }}
                    />
                    <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-black/25 opacity-0 group-hover:opacity-100 transition-opacity">
                      <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-background/90 text-foreground text-xl">
                        ▶
                      </span>
                    </div>
                  </button>
                </div>
                <div className="w-full border-t-4 border-black mt-8" />
                <div className="grid grid-cols-1 md:grid-cols-3 gap-5 lg:gap-6 mt-8">
                  {floryaBottomVideos.map((videoSrc, index) => (
                    <button
                      key={`${videoSrc}-${index}`}
                      type="button"
                      onClick={() => setVideoPreviewSrc(videoSrc)}
                      className="group relative block w-full text-left cursor-zoom-in overflow-hidden"
                    >
                      <video
                        src={videoSrc}
                        className="w-full h-auto object-contain"
                        poster={floryaBottomVideoPosterMap[videoSrc]}
                        controlsList="nodownload noremoteplayback"
                        disablePictureInPicture
                        loop
                        muted
                        playsInline
                        preload="metadata"
                        onLoadedMetadata={(event) => {
                          applyPreviewVideoSpeed(event.currentTarget);
                        }}
                        onPlay={(event) => {
                          applyPreviewVideoSpeed(event.currentTarget);
                        }}
                      />
                      <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-black/25 opacity-0 group-hover:opacity-100 transition-opacity">
                        <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-background/90 text-foreground text-xl">
                          ▶
                        </span>
                      </div>
                    </button>
                  ))}
                </div>
              </>
            )}
          </section>

          {project.sections.length > 0 && (
          <section>
            <h2 className="font-display text-2xl md:text-3xl font-semibold tracking-tight text-foreground mb-6">
              Çizimler
            </h2>
            <div className="space-y-10 mb-10">
              {project.sections.map((section) => (
                <div key={section.label}>
                  <h3 className="font-display text-sm tracking-[0.22em] uppercase text-black mb-4">
                    {section.label}
                  </h3>
                  <div className="grid grid-cols-1 gap-5 lg:gap-6">
                    {section.images.map((image, index) => (
                      <ClickableImage
                        key={`${section.label}-${image.src}-${index}`}
                        src={image.src}
                        alt={image.alt}
                        className="w-full h-64 object-cover"
                        loading="lazy"
                        onPreview={() => setPreviewState({ group: section.images, index })}
                      />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>
          )}
        </div>

      <Dialog
        open={Boolean(previewState || videoPreviewSrc)}
        onOpenChange={(isOpen) => {
          if (!isOpen) {
            setPreviewState(null);
            setVideoPreviewSrc(null);
          }
        }}
      >
        <DialogContent className="max-w-[95vw] sm:max-w-6xl p-2">
          <DialogTitle className="sr-only">{videoPreviewSrc ? "Video önizleme" : currentPreview?.alt ?? "Görsel önizleme"}</DialogTitle>
          {videoPreviewSrc ? (
            <video
              src={videoPreviewSrc}
              className="w-full h-auto max-h-[85vh] object-contain"
              poster={
                videoPreviewSrc === floryaInteriorVideo
                  ? florya7002PosterImg
                  : videoPreviewSrc === floryaAddedVideo
                  ? florya7006PosterImg
                  : videoPreviewSrc === floryaBottomVideo
                  ? florya7004PosterImg
                  : videoPreviewSrc === floryaGridVideo1
                  ? floryaGridVideo1PosterImg
                  : videoPreviewSrc === floryaGridVideo3
                  ? floryaGridVideo3PosterImg
                  : videoPreviewSrc === floryaGridVideo5
                  ? floryaGridVideo5PosterImg
                  : undefined
              }
              controls
              controlsList="nodownload noremoteplayback"
              disablePictureInPicture
              autoPlay
              loop
              muted
              playsInline
              onLoadedMetadata={(event) => {
                event.currentTarget.muted = true;
                event.currentTarget.defaultMuted = true;
                event.currentTarget.volume = 0;
                applyPreviewVideoSpeed(event.currentTarget);
              }}
              onVolumeChange={(event) => {
                event.currentTarget.muted = true;
                event.currentTarget.defaultMuted = true;
                event.currentTarget.volume = 0;
                applyPreviewVideoSpeed(event.currentTarget);
              }}
              onPlay={(event) => {
                applyPreviewVideoSpeed(event.currentTarget);
              }}
            />
          ) : currentPreview && (
            <div className="relative">
              <img
                src={currentPreview.src}
                alt={currentPreview.alt}
                className="w-full h-auto max-h-[85vh] object-contain"
              />
              {previewState.group.length > 1 && (
                <>
                  <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 flex items-center justify-between px-4">
                    <button
                      type="button"
                      onClick={() =>
                        setPreviewState((prev) =>
                          prev
                            ? {
                                ...prev,
                                index: (prev.index - 1 + prev.group.length) % prev.group.length,
                              }
                            : prev,
                        )
                      }
                      className="rounded-full border border-border bg-background/90 px-4 py-2 text-sm font-medium shadow"
                    >
                      ←
                    </button>
                    <button
                      type="button"
                      onClick={() =>
                        setPreviewState((prev) =>
                          prev
                            ? {
                                ...prev,
                                index: (prev.index + 1) % prev.group.length,
                              }
                            : prev,
                        )
                      }
                      className="rounded-full border border-border bg-background/90 px-4 py-2 text-sm font-medium shadow"
                    >
                      →
                    </button>
                  </div>
                  <div className="absolute inset-x-0 bottom-4 flex justify-center">
                    <span className="rounded-full border border-border bg-background/90 px-3 py-1 text-xs text-muted-foreground shadow">
                      {previewState.index + 1} / {previewState.group.length}
                    </span>
                  </div>
                </>
              )}
            </div>
          )}
        </DialogContent>
      </Dialog>
    </main>
  );
};

export default ProjectDetail;
