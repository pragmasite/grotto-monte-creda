import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Phone, Menu, X } from "lucide-react";
import { useLanguage } from "@/hooks/useLanguage";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const Header = () => {
  const { t, lang } = useLanguage();
  const navigate = useNavigate();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLanguageChange = (newLang: string) => {
    if (newLang === "it") {
      navigate("/");
    } else {
      navigate(`/${newLang}`);
    }
  };

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 transition-all duration-300 ${
        isScrolled ? "bg-background/95 backdrop-blur-md shadow-soft" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between px-4 py-4">
        <a href="#" className="flex flex-col">
          <span className={`font-serif text-xl transition-colors ${isScrolled ? "text-primary" : "text-white"}`}>
            Grotto Monte Creda
          </span>
          <span
            className={`text-xs tracking-widest transition-colors ${
              isScrolled ? "text-muted-foreground" : "text-white/70"
            }`}
          >
            {t.nav.profession}
          </span>
        </a>

        <nav className="hidden md:flex items-center gap-6">
          <a
            href="#chi-siamo"
            className={`text-sm hover:text-primary transition-colors ${
              isScrolled ? "text-foreground" : "text-white"
            }`}
          >
            {t.nav.about}
          </a>
          <a
            href="#servizi"
            className={`text-sm hover:text-primary transition-colors ${
              isScrolled ? "text-foreground" : "text-white"
            }`}
          >
            {t.nav.services}
          </a>
          <a
            href="#galleria"
            className={`text-sm hover:text-primary transition-colors ${
              isScrolled ? "text-foreground" : "text-white"
            }`}
          >
            {t.nav.gallery}
          </a>
          <a
            href="#orari"
            className={`text-sm hover:text-primary transition-colors ${
              isScrolled ? "text-foreground" : "text-white"
            }`}
          >
            {t.nav.hours}
          </a>
          <a
            href="#contatto"
            className={`text-sm hover:text-primary transition-colors ${
              isScrolled ? "text-foreground" : "text-white"
            }`}
          >
            {t.nav.contact}
          </a>

          <Select value={lang} onValueChange={handleLanguageChange}>
            <SelectTrigger
              className={`w-[80px] h-9 ${
                isScrolled
                  ? "border-border bg-background text-foreground"
                  : "border-white/30 bg-white/10 text-white backdrop-blur-sm"
              }`}
            >
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="it">IT</SelectItem>
              <SelectItem value="de">DE</SelectItem>
            </SelectContent>
          </Select>

          <Button asChild size="sm">
            <a href="tel:+41919431195">
              <Phone className="h-4 w-4 mr-2" />
              {t.nav.call}
            </a>
          </Button>
        </nav>

        <button
          className={`md:hidden ${isScrolled ? "text-foreground" : "text-white"}`}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden bg-background/98 backdrop-blur-md border-t">
          <nav className="container mx-auto flex flex-col gap-4 px-4 py-6">
            <a href="#chi-siamo" className="text-sm hover:text-primary" onClick={() => setIsMobileMenuOpen(false)}>
              {t.nav.about}
            </a>
            <a href="#servizi" className="text-sm hover:text-primary" onClick={() => setIsMobileMenuOpen(false)}>
              {t.nav.services}
            </a>
            <a href="#galleria" className="text-sm hover:text-primary" onClick={() => setIsMobileMenuOpen(false)}>
              {t.nav.gallery}
            </a>
            <a href="#orari" className="text-sm hover:text-primary" onClick={() => setIsMobileMenuOpen(false)}>
              {t.nav.hours}
            </a>
            <a href="#contatto" className="text-sm hover:text-primary" onClick={() => setIsMobileMenuOpen(false)}>
              {t.nav.contact}
            </a>

            <Select value={lang} onValueChange={handleLanguageChange}>
              <SelectTrigger className="w-full">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="it">IT</SelectItem>
                <SelectItem value="de">DE</SelectItem>
              </SelectContent>
            </Select>

            <Button asChild className="w-full">
              <a href="tel:+41919431195">
                <Phone className="h-4 w-4 mr-2" />
                {t.nav.call}
              </a>
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
