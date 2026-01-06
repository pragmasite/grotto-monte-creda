import { useLanguage } from "@/hooks/useLanguage";
import { Facebook, Instagram } from "lucide-react";

const Footer = () => {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          <div>
            <h3 className="font-serif text-2xl mb-4">Grotto Monte Creda</h3>
            <p className="text-sm text-white/70 mb-4">{t.footer.tagline}</p>
            <p className="text-sm text-white/60 leading-relaxed">{t.footer.description}</p>
          </div>

          <div>
            <h4 className="font-serif text-lg mb-4">{t.footer.navigation}</h4>
            <nav className="space-y-2">
              <a href="#chi-siamo" className="block text-sm text-white/70 hover:text-white transition-colors">
                {t.footer.about}
              </a>
              <a href="#servizi" className="block text-sm text-white/70 hover:text-white transition-colors">
                {t.nav.services}
              </a>
              <a href="#galleria" className="block text-sm text-white/70 hover:text-white transition-colors">
                {t.nav.gallery}
              </a>
              <a href="#orari" className="block text-sm text-white/70 hover:text-white transition-colors">
                {t.nav.hours}
              </a>
              <a href="#contatto" className="block text-sm text-white/70 hover:text-white transition-colors">
                {t.nav.contact}
              </a>
            </nav>
          </div>

          <div>
            <h4 className="font-serif text-lg mb-4">Social</h4>
            <div className="flex gap-4">
              <a
                href="https://www.facebook.com/montecreda"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 hover:bg-white/20 transition-colors"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="https://www.instagram.com/grottomontecreda"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 hover:bg-white/20 transition-colors"
              >
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 text-center">
          <p className="text-sm text-white/60">
            © {currentYear} Grotto Monte Creda. {t.footer.copyright}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
