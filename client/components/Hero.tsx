import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative h-screen bg-black overflow-hidden pt-20">
      {/* Video Background */}
      <video
        autoPlay
        muted
        loop
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source
          src="https://api.ameora.fun/content/GalaxiWebsite/FASHION-24/v1.mp4"
          type="video/mp4"
        />
      </video>

      {/* Overlay Gradients */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

      {/* Content */}
      <div className="relative h-full flex flex-col items-start justify-center px-4 md:px-12 lg:px-20">
        {/* Main Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="max-w-2xl"
        >
          <motion.h1
            className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-4 leading-tight tracking-tight"
            initial={{ letterSpacing: "0.1em" }}
            animate={{ letterSpacing: "0.02em" }}
            transition={{ duration: 1.2, delay: 0.2 }}
          >
            Découvrez
          </motion.h1>
          <motion.h1
            className="text-5xl md:text-7xl lg:text-8xl font-bold bg-gradient-to-r from-gold-300 via-gold-500 to-gold-400 bg-clip-text text-transparent leading-tight"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
          >
            La Mode Premium
          </motion.h1>
        </motion.div>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-white/80 text-lg md:text-xl max-w-md mt-6 font-light"
        >
          Histoires cinématiques de la mode de luxe avec des vidéos exclusives
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-col sm:flex-row gap-4 mt-8"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => window.scrollTo({ top: window.innerHeight, behavior: "smooth" })}
            className="px-8 py-4 border-2 border-white/30 text-white font-semibold rounded-lg hover:border-gold-500 hover:bg-white/5 transition-all backdrop-blur-sm"
          >
            Explorer
          </motion.button>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <ChevronDown className="w-8 h-8 text-gold-400" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
