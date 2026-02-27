import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { useEffect } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation, Navigate } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import ProjectDetail from "./pages/ProjectDetail";
import TourismHousing from "./pages/TourismHousing";

const queryClient = new QueryClient();

const ScrollToTop = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const target = document.querySelector(hash);
      if (target) {
        const y = target.getBoundingClientRect().top + window.scrollY - 40;
        window.scrollTo({ top: y, left: 0, behavior: "auto" });
        return;
      }
    }

    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, [pathname, hash]);

  return null;
};

const MediaProtection = () => {
  useEffect(() => {
    const blockContextMenu = (event: MouseEvent) => {
      const target = event.target as HTMLElement | null;
      if (target?.closest("img, video")) {
        event.preventDefault();
      }
    };

    const blockDragStart = (event: DragEvent) => {
      const target = event.target as HTMLElement | null;
      if (target?.closest("img, video")) {
        event.preventDefault();
      }
    };

    document.addEventListener("contextmenu", blockContextMenu);
    document.addEventListener("dragstart", blockDragStart);

    return () => {
      document.removeEventListener("contextmenu", blockContextMenu);
      document.removeEventListener("dragstart", blockDragStart);
    };
  }, []);

  return null;
};

const architectureDomains = (
  import.meta.env.VITE_ARCHITECTURE_DOMAINS ?? "msgmimarlik.com,www.msgmimarlik.com"
)
  .split(",")
  .map((domain) => domain.trim().toLowerCase())
  .filter(Boolean);

const isArchitectureDomain = (hostname: string) =>
  architectureDomains.includes(hostname.toLowerCase());

const BrandTitle = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }

    document.title = isArchitectureDomain(window.location.hostname)
      ? "MSG MIMARLIK"
      : "MS DANISMANLIK";
  }, [pathname]);

  return null;
};

const HomeEntry = () => {
  if (typeof window === "undefined") {
    return <TourismHousing />;
  }

  const isArchitectureHost = isArchitectureDomain(window.location.hostname);

  return isArchitectureHost ? <Index /> : <TourismHousing />;
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <MediaProtection />
        <ScrollToTop />
        <BrandTitle />
        <Routes>
          <Route path="/" element={<HomeEntry />} />
          <Route path="/mimarlik" element={<Index />} />
          <Route path="/mimarlik/" element={<Index />} />
          <Route path="/projeler/:projectSlug" element={<ProjectDetail />} />
          <Route path="/danismanlik" element={<Navigate to="/" replace />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
