import { motion } from "framer-motion";
import VideoCard from "@/components/VideoCard";
import { videos } from "@/data/videos";

export default function ParisStreetSection() {
  const parisVideos = videos.slice(6, 15);

  const masonryLayout = [
    { col: "col-span-1 row-span-1" },
    { col: "col-span-2 row-span-1" },
    { col: "col-span-1 row-span-1" },
    { col: "col-span-1 row-span-2" },
    { col: "col-span-1 row-span-1" },
    { col: "col-span-2 row-span-1" },
    { col: "col-span-1 row-span-1" },
    { col: "col-span-1 row-span-1" },
    { col: "col-span-1 row-span-1" },
  ];

  return (
    <section className="relative py-20 bg-gradient-cream">
      <motion.div
        className="absolute top-0 left-0 w-96 h-96 bg-orange-200/20 rounded-full filter blur-3xl"
        animate={{ y: [0, 30, 0] }}
        transition={{ duration: 6, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-0 right-0 w-80 h-80 bg-yellow-200/20 rounded-full filter blur-3xl"
        animate={{ y: [0, -30, 0] }}
        transition={{ duration: 7, repeat: Infinity }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <motion.h2
            className="text-5xl md:text-6xl font-bold text-foreground mb-3"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            Style Parisien
          </motion.h2>
          <motion.div className="h-1 w-32 bg-gradient-to-r from-amber-600 to-orange-500 rounded" />
          <p className="text-foreground/60 mt-4 text-lg font-serif">
            L'élégance intemporelle des rues de Paris
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 auto-rows-max">
          {parisVideos.map((video, index) => (
            <motion.div
              key={video.id}
              className={`${masonryLayout[index]?.col || "col-span-1"}`}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.08 }}
              viewport={{ once: true }}
            >
              <VideoCard video={video} variant="paris" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
