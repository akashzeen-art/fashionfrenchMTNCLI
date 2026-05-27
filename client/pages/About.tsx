import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";

export default function About() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Navbar />
      <div className="pt-28 pb-16 px-4 max-w-4xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-black to-gold-600 bg-clip-text text-transparent mb-6"
        >
          À propos
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15 }}
          className="space-y-6 text-foreground/70 text-lg leading-relaxed"
        >
          <p>
            <span className="text-foreground font-semibold">VOGUE</span> est
            votre destination premium pour découvrir le meilleur de la mode
            parisienne — des défilés haute couture aux tendances street style.
          </p>
          <p>
            Notre plateforme réunit des vidéos exclusives des plus grandes
            maisons de couture, des tutoriels beauté et des documentaires sur
            l'industrie de la mode.
          </p>
          <p>
            Plongez dans l'univers du luxe, de l'élégance et de la créativité
            qui définissent la mode française à travers le monde.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.25 }}
          className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-6"
        >
          {[
            { label: "Vidéos", value: "50+" },
            { label: "Catégories", value: "7" },
            { label: "Créateurs", value: "30+" },
          ].map((stat) => (
            <div
              key={stat.label}
              className="glass rounded-xl p-6 text-center"
            >
              <div className="text-3xl font-bold text-gold-500 mb-1">
                {stat.value}
              </div>
              <div className="text-foreground/60 text-sm">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
      <Footer />
    </div>
  );
}
