import { useEffect, useState } from "react";
import { motion } from "framer-motion";

interface IntroScreenProps {
  onComplete: () => void;
}

export default function IntroScreen({ onComplete }: IntroScreenProps) {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
      setTimeout(onComplete, 500);
    }, 5000);

    return () => clearTimeout(timer);
  }, [onComplete]);

  if (!isVisible) {
    return null;
  }

  const particles = Array.from({ length: 20 }, (_, i) => i);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
      className="fixed inset-0 z-50 bg-gradient-to-br from-black via-amber-950 to-black overflow-hidden"
    >
      {/* Floating Particles */}
      {particles.map((i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-gold-500 rounded-full"
          initial={{
            x: Math.random() * window.innerWidth,
            y: Math.random() * window.innerHeight,
            opacity: Math.random() * 0.5,
          }}
          animate={{
            y: Math.random() * window.innerHeight,
            x: Math.random() * window.innerWidth,
            opacity: [Math.random() * 0.5, 1, Math.random() * 0.5],
          }}
          transition={{
            duration: 4 + Math.random() * 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}

      <div className="absolute inset-0 flex flex-col items-center justify-center">
        {/* Main Logo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-center"
        >
          <motion.h1
            className="text-7xl md:text-8xl font-bold text-white mb-4 tracking-wider"
            initial={{ letterSpacing: "1em", opacity: 0 }}
            animate={{ letterSpacing: "0.05em", opacity: 1 }}
            transition={{ duration: 1.2 }}
          >
            TELE MODE
          </motion.h1>

          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            transition={{ duration: 1, delay: 0.5 }}
            className="h-1 bg-gradient-to-r from-transparent via-gold-500 to-transparent my-6"
          />

          <motion.h2
            className="text-2xl md:text-3xl text-gold-300 font-light tracking-widest"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            MODE PREMIUM
          </motion.h2>
        </motion.div>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="absolute bottom-16 text-center text-gold-200 text-sm tracking-widest max-w-md"
        >
          Explorez la collection exclusive de videos de mode premium
        </motion.p>

        {/* Loading Indicator */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 4.5, delay: 0.5 }}
          className="absolute bottom-8 h-0.5 w-32 bg-gradient-to-r from-gold-500 to-gold-300 origin-left"
        />
      </div>

      {/* Cinematic Light Streaks */}
      <motion.div
        className="absolute top-0 left-1/4 w-96 h-96 bg-gold-500/20 rounded-full filter blur-3xl"
        animate={{
          y: [0, 50, 0],
          opacity: [0.3, 0.1, 0.3],
        }}
        transition={{ duration: 4, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-0 right-1/4 w-96 h-96 bg-gold-600/20 rounded-full filter blur-3xl"
        animate={{
          y: [0, -50, 0],
          opacity: [0.3, 0.1, 0.3],
        }}
        transition={{ duration: 5, repeat: Infinity }}
      />
    </motion.div>
  );
}
