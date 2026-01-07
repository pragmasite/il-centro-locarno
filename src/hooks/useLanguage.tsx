import { createContext, useContext, ReactNode } from "react";
import { useLocation } from "react-router-dom";
import { translations, Language } from "@/lib/translations";

interface LanguageContextType {
  lang: Language;
  t: typeof translations.it;
  otherLanguages: Language[];
  getLangPath: (lang: Language) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const location = useLocation();

  // Determine language from URL path
  let lang: Language = "it"; // default to Italian
  if (location.pathname.startsWith("/de")) {
    lang = "de";
  } else if (location.pathname.startsWith("/en")) {
    lang = "en";
  }

  const t = translations[lang];
  const otherLanguages: Language[] = (["it", "de", "en"] as Language[]).filter(l => l !== lang);

  const getLangPath = (targetLang: Language) => {
    if (targetLang === "it") return "/";
    return `/${targetLang}`;
  };

  return (
    <LanguageContext.Provider value={{ lang, t, otherLanguages, getLangPath }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) throw new Error("useLanguage must be used within LanguageProvider");
  return context;
};
