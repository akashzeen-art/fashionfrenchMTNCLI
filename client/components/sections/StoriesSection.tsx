import { motion } from "framer-motion";
import VideoCard from "@/components/VideoCard";
import { videos } from "@/data/videos";
import { useSubscription } from "@/context/SubscriptionContext";

export default function StoriesSection() {
  const storiesVideos = videos.slice(25, 32);
  const { requestPlay } = useSubscription();

  return (
    <section className="relative py-20 overflow-hidden">
      <div className="absolute inset-0 gradient-soft" />

      <motion.div
        className="absolute top-20 left-1/4 w-64 h-64 glass rounded-full opacity-30"
        animate={{ y: [0, 30, 0], x: [0, 20, 0] }}
        transition={{ duration: 6, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-20 right-1/4 w-72 h-72 glass rounded-full opacity-20"
        animate={{ y: [0, -30, 0], x: [0, -20, 0] }}
        transition={{ duration: 7, repeat: Infinity, delay: 1 }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <motion.h2
            className="text-5xl md:text-6xl font-bold text-foreground mb-4"
            initial={{ letterSpacing: "0.1em" }}
            whileInView={{ letterSpacing: "0.02em" }}
            viewport={{ once: true }}
          >
            Histoires de Mode
          </motion.h2>
          <motion.div className="h-1 w-32 bg-gradient-to-r from-gold-500 to-gold-400 rounded mx-auto" />
          <p className="text-foreground/60 mt-6 text-lg font-light max-w-2xl mx-auto">
            Découvrez les récits exclusifs derrière les plus grandes créations
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {storiesVideos.map((video) => (
            <div key={video.id} className="group">
              <motion.div whileHover={{ y: -10 }} transition={{ duration: 0.3 }}>
                <VideoCard video={video} variant="stories" />

                <div className="mt-4 p-4 glass rounded-lg backdrop-blur-md">
                  <h3 className="font-serif text-lg text-foreground mb-2">
                    {video.designer}
                  </h3>
                  <p className="text-foreground/60 text-sm line-clamp-2">
                    {video.description}
                  </p>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => requestPlay(video)}
                    className="mt-3 px-4 py-2 bg-gold-500/20 text-gold-700 hover:bg-gold-500/30 rounded-lg text-sm font-semibold transition-all"
                  >
                    Regarder
                  </motion.button>
                </div>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
