import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import VideoCard from "@/components/VideoCard";
import VideoModal from "@/components/VideoModal";
import { videos, categories, Video } from "@/data/videos";
import { motion } from "framer-motion";
import { useState } from "react";

export default function Categories() {
  const [activeVideo, setActiveVideo] = useState<Video | null>(null);

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Navbar />
      <div className="pt-28 pb-16 px-4 max-w-7xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-black to-gold-600 bg-clip-text text-transparent mb-4"
        >
          Catégories
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.1 }}
          className="text-foreground/60 mb-12"
        >
          Parcourez nos vidéos par catégorie
        </motion.p>

        {categories.map((cat, ci) => {
          const catVideos = videos.filter((v) => v.category === cat);
          return (
            <motion.section
              key={cat}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: ci * 0.08 }}
              className="mb-14"
            >
              <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-3">
                <span className="w-8 h-0.5 bg-gold-500 inline-block" />
                {cat}
                <span className="text-sm font-normal text-foreground/40">
                  ({catVideos.length})
                </span>
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {catVideos.map((video) => (
                  <VideoCard
                    key={video.id}
                    video={video}
                    variant="paris"
                    onPlay={setActiveVideo}
                  />
                ))}
              </div>
            </motion.section>
          );
        })}
      </div>
      <VideoModal video={activeVideo} onClose={() => setActiveVideo(null)} />
      <Footer />
    </div>
  );
}
