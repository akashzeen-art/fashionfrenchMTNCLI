import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import VideoCard from "@/components/VideoCard";
import VideoModal from "@/components/VideoModal";
import { videos, Video } from "@/data/videos";

export default function RunwaySection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  const [activeVideo, setActiveVideo] = useState<Video | null>(null);
  const runwayVideos = videos.slice(15, 25);

  const scroll = (direction: "left" | "right") => {
    const newIndex =
      direction === "left"
        ? Math.max(0, currentIndex - 1)
        : Math.min(runwayVideos.length - 1, currentIndex + 1);
    setCurrentIndex(newIndex);

    if (containerRef.current) {
      containerRef.current.scrollTo({
        left: newIndex * 400,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="relative py-20 overflow-hidden">
      {/* Neon Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-900/20 via-pink-900/20 to-blue-900/20" />
      <div className="absolute inset-0 gradient-neon opacity-5" />

      {/* Animated Glow Elements */}
      <motion.div
        className="absolute top-1/4 left-0 w-96 h-96 bg-purple-500/15 rounded-full filter blur-3xl"
        animate={{
          x: [0, 100, 0],
          y: [0, 50, 0],
        }}
        transition={{ duration: 8, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-1/4 right-0 w-96 h-96 bg-pink-500/15 rounded-full filter blur-3xl"
        animate={{
          x: [0, -100, 0],
          y: [0, -50, 0],
        }}
        transition={{ duration: 8, repeat: Infinity, delay: 1 }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <motion.h2 className="text-5xl md:text-6xl font-bold text-white mb-3">
            Collection Défilé
          </motion.h2>
          <motion.div className="h-1 w-32 bg-gradient-to-r from-pink-500 to-purple-500 rounded" />
          <p className="text-white/70 mt-4 text-lg font-light">
            Les derniers défilés et collections du moment
          </p>
        </motion.div>

        {/* Slider Container */}
        <div className="relative">
          <motion.div
            ref={containerRef}
            className="flex gap-6 overflow-x-hidden pb-4 scroll-smooth"
          >
            {runwayVideos.map((video, index) => (
              <motion.div
                key={video.id}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.05 }}
                viewport={{ once: true }}
                className="flex-shrink-0 w-96"
              >
                <VideoCard video={video} variant="runway" onPlay={setActiveVideo} />
              </motion.div>
            ))}
          </motion.div>

          {/* Navigation Buttons */}
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => scroll("left")}
            className="absolute -left-6 top-1/2 -translate-y-1/2 z-20 p-3 bg-white/10 hover:bg-white/20 rounded-full backdrop-blur-sm transition-colors"
          >
            <ChevronLeft className="w-6 h-6 text-white" />
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => scroll("right")}
            className="absolute -right-6 top-1/2 -translate-y-1/2 z-20 p-3 bg-white/10 hover:bg-white/20 rounded-full backdrop-blur-sm transition-colors"
          >
            <ChevronRight className="w-6 h-6 text-white" />
          </motion.button>
        </div>

        {/* Progress Indicator */}
        <motion.div className="flex gap-2 mt-8 justify-center">
          {runwayVideos.map((_, index) => (
            <motion.div
              key={index}
              className="h-1 bg-white/20 rounded-full"
              animate={{
                width: currentIndex === index ? 32 : 8,
                backgroundColor:
                  currentIndex === index ? "rgb(236 72 153)" : "rgba(255 255 255 / 0.2)",
              }}
              transition={{ duration: 0.3 }}
            />
          ))}
        </motion.div>
      </div>
      <VideoModal video={activeVideo} onClose={() => setActiveVideo(null)} />
    </section>
  );
}
