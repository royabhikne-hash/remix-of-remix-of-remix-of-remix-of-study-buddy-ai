import { Languages, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useLanguage, LANGUAGE_LABELS, Language } from "@/contexts/LanguageContext";

const LANGS: Language[] = ["en", "hi", "hinglish", "kn"];

const LanguageToggle = () => {
  const { language, setLanguage } = useLanguage();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="sm" className="gap-2 font-semibold">
          <Languages className="h-4 w-4" />
          <span className="hidden sm:inline">{LANGUAGE_LABELS[language]}</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        {LANGS.map((lang) => (
          <DropdownMenuItem key={lang} onClick={() => setLanguage(lang)}>
            <span className="flex-1">{LANGUAGE_LABELS[lang]}</span>
            {language === lang && <Check className="h-4 w-4 ml-2" />}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default LanguageToggle;
