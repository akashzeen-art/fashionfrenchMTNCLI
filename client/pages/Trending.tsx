import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import VideoCard from "@/components/VideoCard";
import VideoModal from "@/components/VideoModal";
import { videos, Video } from "@/data/videos";
import { motion } from "framer-motion";
import { useState } from "react";

// Simulate trending by taking every 3rd video starting from index 0
const trendingVideos = videos.filter((_, i) => i % 3 === 0 || i % 5 === 0);

export default function Trending() {
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
          Tendances
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.1 }}
          className="text-foreground/60 mb-10"
        >
          Les vidéos les plus populaires du moment
        </motion.p>

        {/* Featured top 3 */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          {trendingVideos.slice(0, 3).map((video, i) => (
            <motion.div
              key={video.id}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.1 }}
              className="relative"
            >
              <span className="absolute top-3 left-3 z-10 w-8 h-8 bg-gold-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
                {i + 1}
              </span>
              <VideoCard video={video} variant="runway" onPlay={setActiveVideo} />
            </motion.div>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {trendingVideos.slice(3).map((video, i) => (
            <motion.div
              key={video.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.04 }}
            >
              <VideoCard video={video} variant="trending" onPlay={setActiveVideo} />
            </motion.div>
          ))}
        </div>
      </div>
      <VideoModal video={activeVideo} onClose={() => setActiveVideo(null)} />
      <Footer />
    </div>
  );
}
