import { Link } from "react-router-dom";

export default function Footer() {
  const footerLinks = [
    { label: "Accueil", href: "/" },
    { label: "Collection", href: "/collections" },
    { label: "Tendances", href: "/trending" },
  ];

  return (
    <footer className="bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-8 flex flex-col sm:flex-row items-center justify-between gap-6">
        <div>
          <Link to="/">
            <img
              src="/fashionlogo.png"
              alt="Fashion logo"
              className="h-10 w-auto object-contain mb-1"
            />
          </Link>
          <p className="text-white/50 text-xs">Plateforme premium de vidéos de mode française.</p>
        </div>

        <div className="flex items-center gap-6">
          {footerLinks.map((link) => (
            <Link
              key={link.label}
              to={link.href}
              className="text-white/60 hover:text-gold-400 transition-colors text-sm"
            >
              {link.label}
            </Link>
          ))}
        </div>

        <p className="text-white/40 text-xs">© 2026 Télé Mode Parisienne. Tous droits réservés.</p>
      </div>
    </footer>
  );
}
