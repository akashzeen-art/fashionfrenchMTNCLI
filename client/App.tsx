import "./global.css";

import { useEffect } from "react";
import { Toaster } from "@/components/ui/toaster";
import { createRoot } from "react-dom/client";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Index from "./pages/Index";
import VideoPlayer from "./pages/VideoPlayer";
import Collections from "./pages/Collections";
import Trending from "./pages/Trending";
import MyAccount from "./pages/MyAccount";
import NotFound from "./pages/NotFound";
import {
  SubscriptionProvider,
  useSubscription,
} from "@/context/SubscriptionContext";
import VideoModal from "@/components/VideoModal";

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => { window.scrollTo(0, 0); }, [pathname]);
  return null;
}

const queryClient = new QueryClient();

function AppRoutes() {
  const { activeVideo, closePlayer } = useSubscription();

  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/video/:id" element={<VideoPlayer />} />
        <Route path="/collections" element={<Collections />} />
        <Route path="/trending" element={<Trending />} />
        <Route path="/account" element={<MyAccount />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <VideoModal video={activeVideo} onClose={closePlayer} />
    </>
  );
}

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <SubscriptionProvider>
          <AppRoutes />
        </SubscriptionProvider>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

createRoot(document.getElementById("root")!).render(<App />);
