import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Globe, Phone, Menu, X } from "lucide-react";
import { useLanguage } from "@/hooks/useLanguage";
import { Button } from "@/components/ui/button";

const Header = () => {
  const { t, lang, otherLanguages, getLangPath } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const sections = [
    { id: "chi-siamo", label: t.nav.about },
    { id: "servizi", label: t.nav.services },
    { id: "galleria", label: t.nav.gallery },
    { id: "orari", label: t.nav.hours },
    { id: "contatti", label: t.nav.contact },
  ];

  return (
    <header className={`fixed inset-x-0 top-0 z-40 transition-all ${isScrolled ? "bg-background/95 backdrop-blur-md shadow-soft" : "bg-transparent"}`}>
      <div className="container mx-auto flex items-center justify-between px-4 py-4">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2">
          <img src="/images/logo.png" alt="il Centro" className="h-10 w-auto" />
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          {sections.map((section) => (
            <a
              key={section.id}
              href={`#${section.id}`}
              className={`text-sm font-medium transition-colors ${isScrolled ? "text-foreground hover:text-primary" : "text-white hover:text-accent"}`}
            >
              {section.label}
            </a>
          ))}
        </nav>

        {/* Right Side - Language Switcher & Call */}
        <div className="hidden md:flex items-center gap-4">
          {/* Language Dropdown */}
          <div className="relative group">
            <button className={`flex items-center gap-1.5 text-sm font-medium transition-colors ${isScrolled ? "text-foreground hover:text-primary" : "text-white hover:text-accent"}`}>
              <Globe className="h-4 w-4" />
              {lang.toUpperCase()}
            </button>
            <div className="absolute right-0 mt-0 w-32 bg-background rounded-lg shadow-medium opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all">
              {otherLanguages.map((otherLang) => (
                <Link
                  key={otherLang}
                  to={getLangPath(otherLang)}
                  className="block px-4 py-2 text-sm hover:bg-muted rounded-lg first:rounded-t-lg last:rounded-b-lg"
                >
                  {otherLang.toUpperCase()}
                </Link>
              ))}
            </div>
          </div>

          <Button asChild className="gap-2">
            <a href="tel:+41912210204">
              <Phone className="h-4 w-4" />
              {t.nav.call}
            </a>
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? (
            <X className={`h-6 w-6 ${isScrolled ? "text-foreground" : "text-white"}`} />
          ) : (
            <Menu className={`h-6 w-6 ${isScrolled ? "text-foreground" : "text-white"}`} />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-background border-t">
          <div className="container mx-auto px-4 py-4 space-y-3">
            {sections.map((section) => (
              <a
                key={section.id}
                href={`#${section.id}`}
                className="block text-sm font-medium text-foreground hover:text-primary py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {section.label}
              </a>
            ))}
            <div className="border-t pt-3">
              <p className="text-xs text-muted-foreground mb-2">{t.nav.profession}</p>
              <div className="flex gap-2 mb-3">
                {otherLanguages.map((otherLang) => (
                  <Link
                    key={otherLang}
                    to={getLangPath(otherLang)}
                    className="px-2 py-1 text-xs bg-muted rounded hover:bg-primary hover:text-primary-foreground"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {otherLang.toUpperCase()}
                  </Link>
                ))}
              </div>
              <Button asChild className="w-full gap-2">
                <a href="tel:+41912210204">
                  <Phone className="h-4 w-4" />
                  {t.nav.call}
                </a>
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
