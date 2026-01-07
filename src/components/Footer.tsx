import { useLanguage } from "@/hooks/useLanguage";
import { Facebook, Instagram, Linkedin } from "lucide-react";

const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="bg-foreground text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <img src="/images/logo.png" alt="il Centro" className="h-8 w-auto mb-4" />
            <p className="text-white/70">{t.footer.description}</p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="font-serif text-lg mb-4">{t.footer.navigation}</h3>
            <ul className="space-y-2 text-white/70">
              <li>
                <a href="#chi-siamo" className="hover:text-white transition-colors">
                  {t.nav.about}
                </a>
              </li>
              <li>
                <a href="#servizi" className="hover:text-white transition-colors">
                  {t.nav.services}
                </a>
              </li>
              <li>
                <a href="#galleria" className="hover:text-white transition-colors">
                  {t.nav.gallery}
                </a>
              </li>
              <li>
                <a href="#orari" className="hover:text-white transition-colors">
                  {t.nav.hours}
                </a>
              </li>
              <li>
                <a href="#contatti" className="hover:text-white transition-colors">
                  {t.nav.contact}
                </a>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h3 className="font-serif text-lg mb-4">Social</h3>
            <div className="flex gap-4">
              <a
                href="https://www.facebook.com/ilcentro.ch"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/70 hover:text-white transition-colors"
              >
                <Facebook className="h-6 w-6" />
              </a>
              <a
                href="https://www.instagram.com/ilcentro.ch"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/70 hover:text-white transition-colors"
              >
                <Instagram className="h-6 w-6" />
              </a>
              <a
                href="https://www.linkedin.com/company/il-centro-sa"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/70 hover:text-white transition-colors"
              >
                <Linkedin className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/20 pt-8 text-center text-white/60 text-sm">
          <p>&copy; 2024 il Centro - Specialisti della Salute. {t.footer.copyright}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
