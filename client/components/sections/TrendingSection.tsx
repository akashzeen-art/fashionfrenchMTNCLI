import { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";
import VideoCard from "@/components/VideoCard";
import VideoModal from "@/components/VideoModal";
import { videos, Video } from "@/data/videos";

export default function TrendingSection() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScroll, setCanScroll] = useState(false);

  useEffect(() => {
    if (scrollRef.current) {
      setCanScroll(
        scrollRef.current.scrollWidth > scrollRef.current.clientWidth
      );
    }
  }, []);

  const [activeVideo, setActiveVideo] = useState<Video | null>(null);
  const trendingVideos = videos.slice(0, 6);

  return (
    <section className="relative py-20 overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 gradient-gold opacity-5" />

      {/* Particles */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gold-500/10 rounded-full filter blur-3xl animate-pulse" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-black/20 rounded-full filter blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <motion.h2
            className="text-4xl md:text-5xl font-bold text-black mb-3"
            initial={{ letterSpacing: "0.05em" }}
            whileInView={{ letterSpacing: "0.02em" }}
          >
            Mode Tendance
          </motion.h2>
          <motion.div className="h-1 w-24 bg-gradient-to-r from-gold-500 to-gold-400 rounded" />
          <p className="text-foreground/60 mt-4 text-lg font-light">
            Les collections les plus prestigieuses du moment
          </p>
        </motion.div>

        {/* Horizontal Scroll Cards */}
        <motion.div
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto pb-4 scroll-smooth"
          style={{
            scrollBehavior: "smooth",
            WebkitOverflowScrolling: "touch",
          }}
        >
          {trendingVideos.map((video, index) => (
            <motion.div
              key={video.id}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="flex-shrink-0 w-80"
            >
              <VideoCard video={video} variant="trending" onPlay={setActiveVideo} />
            </motion.div>
          ))}
        </motion.div>

        {/* Scroll Hint */}
        {canScroll && (
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="text-foreground/40 text-sm mt-4 flex items-center gap-2"
          >
            <motion.span animate={{ x: [0, 5, 0] }} transition={{ repeat: Infinity, duration: 2 }}>
              →
            </motion.span>
            Défiler pour explorer
          </motion.p>
        )}
      </div>
      <VideoModal video={activeVideo} onClose={() => setActiveVideo(null)} />
    </section>
  );
}
