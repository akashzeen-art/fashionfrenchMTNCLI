import { useParams, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, Share2 } from "lucide-react";
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import VideoCard from "@/components/VideoCard";
import VideoModal from "@/components/VideoModal";
import { videos, Video } from "@/data/videos";

export default function VideoPlayer() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [activeVideo, setActiveVideo] = useState<Video | null>(null);

  const video = videos.find((v) => v.id === id);

  if (!video) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center"
        >
          <h1 className="text-3xl font-bold mb-4">Vidéo introuvable</h1>
          <button
            onClick={() => navigate("/")}
            className="px-6 py-2 bg-gold-500 text-white rounded-lg hover:bg-gold-600"
          >
            Retour à l'accueil
          </button>
        </motion.div>
      </div>
    );
  }

  const relatedVideos = videos
    .filter((v) => v.category === video.category && v.id !== video.id)
    .slice(0, 6);

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Navbar />

      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="relative pt-24 pb-12 bg-black"
      >
        <div className="max-w-6xl mx-auto px-4 md:px-8">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => navigate("/")}
            className="flex items-center gap-2 text-white hover:text-gold-400 transition-colors mb-6"
          >
            <ArrowLeft className="w-5 h-5" />
            Retour
          </motion.button>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative w-full aspect-video bg-black rounded-2xl overflow-hidden shadow-2xl mb-8"
          >
            <video
              src={video.videoUrl}
              poster={video.thumbnail}
              controls
              controlsList="nodownload"
              className="w-full h-full"
            />

            <div className="absolute top-4 right-4 flex gap-2 z-10">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="p-3 bg-white/10 hover:bg-white/20 rounded-full backdrop-blur-md transition-colors"
                title="Partager"
              >
                <Share2 className="w-5 h-5 text-white" />
              </motion.button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mb-8"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-3">
              {video.title}
            </h1>
            <div className="flex flex-wrap items-center gap-4 mb-4">
              <span className="inline-block px-4 py-1 bg-gold-500/20 text-gold-300 rounded-full text-sm font-semibold">
                {video.category}
              </span>
              <span className="text-white/60">{video.designer}</span>
              <span className="text-white/60">•</span>
              <span className="text-white/60">{video.duration}</span>
            </div>
            <motion.p className="text-white/70 text-lg leading-relaxed max-w-3xl">
              {video.description}
            </motion.p>
          </motion.div>
        </div>
      </motion.section>

      {relatedVideos.length > 0 && (
        <motion.section
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="py-16 px-4 md:px-8"
        >
          <div className="max-w-7xl mx-auto">
            <motion.h2
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="text-3xl md:text-4xl font-bold text-foreground mb-2"
            >
              Vidéos similaires
            </motion.h2>
            <motion.div className="h-1 w-24 bg-gradient-to-r from-gold-500 to-gold-400 rounded mb-8" />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {relatedVideos.map((v) => (
                <VideoCard key={v.id} video={v} variant="stories" onPlay={setActiveVideo} />
              ))}
            </div>
          </div>
        </motion.section>
      )}

      <VideoModal video={activeVideo} onClose={() => setActiveVideo(null)} />
      <Footer />
    </div>
  );
}
