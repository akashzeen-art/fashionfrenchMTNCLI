import { motion } from "framer-motion";
import { Play } from "lucide-react";
import { Video } from "@/data/videos";

interface VideoCardProps {
  video: Video;
  variant?: "trending" | "paris" | "runway" | "stories";
  onPlay: (video: Video) => void;
}

export default function VideoCard({
  video,
  variant = "stories",
  onPlay,
}: VideoCardProps) {
  const variants = {
    trending: "group relative overflow-hidden rounded-lg h-64 cursor-pointer",
    paris: "group relative overflow-hidden rounded-2xl h-72 shadow-lg cursor-pointer",
    runway: "group relative overflow-hidden rounded-xl h-80 shadow-xl cursor-pointer",
    stories: "group relative overflow-hidden rounded-xl h-80 cursor-pointer",
  };

  const gradients = {
    trending: "from-black/40 to-black/80",
    paris: "from-black/20 to-black/60",
    runway: "from-purple-900/40 to-black/80",
    stories: "from-black/30 to-black/70",
  };

  return (
    <motion.div
      className={variants[variant]}
      whileHover={{ scale: 1.03 }}
      transition={{ duration: 0.3 }}
      onClick={() => onPlay(video)}
    >
      {/* Background Image */}
      <img
        src={video.thumbnail}
        alt={video.title}
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
      />

      {/* Overlay Gradient */}
      <div className={`absolute inset-0 bg-gradient-to-t ${gradients[variant]}`} />

      {/* Content */}
      <div className="absolute inset-0 p-4 flex flex-col justify-between">
        {/* Top Badge */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          whileHover={{ opacity: 1, y: 0 }}
          className="self-start"
        >
          <span className="inline-block px-3 py-1 bg-gold-500/80 text-white text-xs font-semibold rounded-full backdrop-blur-sm">
            {video.category}
          </span>
        </motion.div>

        {/* Bottom Content */}
        <motion.div
          initial={{ opacity: 0 }}
          whileHover={{ opacity: 1 }}
          transition={{ duration: 0.2 }}
        >
          <h3 className="text-white font-bold text-lg mb-2 line-clamp-2">{video.title}</h3>
          <p className="text-white/70 text-xs mb-3 line-clamp-2">{video.description}</p>
          <div className="flex items-center justify-between text-white/60 text-xs">
            <span>{video.designer}</span>
            <span>{video.duration}</span>
          </div>
        </motion.div>

        {/* Play Button */}
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          whileHover={{ opacity: 1, scale: 1 }}
          className="absolute inset-0 flex items-center justify-center"
        >
          <motion.div
            className="w-16 h-16 bg-gold-500 rounded-full flex items-center justify-center shadow-2xl"
            whileHover={{ scale: 1.15 }}
            whileTap={{ scale: 0.95 }}
          >
            <Play className="w-7 h-7 text-white fill-white" />
          </motion.div>
        </motion.div>
      </div>

      {/* Glow Effect */}
      <motion.div
        className="absolute inset-0 rounded-lg border border-gold-500/0 group-hover:border-gold-500/50"
        whileHover={{ boxShadow: "0 0 30px rgba(184, 148, 90, 0.4)" }}
      />
    </motion.div>
  );
}
