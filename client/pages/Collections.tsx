import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import VideoCard from "@/components/VideoCard";
import { videos, categories } from "@/data/videos";
import { motion } from "framer-motion";
import { useState } from "react";

export default function Collections() {
  const [selected, setSelected] = useState<string>("Tout");

  const filtered =
    selected === "Tout" ? videos : videos.filter((v) => v.category === selected);

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Navbar />
      <div className="pt-28 pb-16 px-4 max-w-7xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-black to-gold-600 bg-clip-text text-transparent mb-4"
        >
          Collection
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.1 }}
          className="text-foreground/60 mb-8"
        >
          Explorez toutes nos collections de mode
        </motion.p>

        <div className="flex flex-wrap gap-2 mb-10">
          {["Tout", ...categories].map((cat) => (
            <button
              key={cat}
              onClick={() => setSelected(cat)}
              className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all ${
                selected === cat
                  ? "bg-gold-500 text-white"
                  : "bg-white/10 text-foreground hover:bg-white/20"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filtered.map((video, i) => (
            <motion.div
              key={video.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.03 }}
            >
              <VideoCard video={video} variant="stories" />
            </motion.div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}
