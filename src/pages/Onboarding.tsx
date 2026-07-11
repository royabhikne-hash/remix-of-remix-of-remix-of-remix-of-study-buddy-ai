import { useNavigate } from "react-router-dom";
import { BookOpen, ArrowRight, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage, LANGUAGE_LABELS, Language } from "@/contexts/LanguageContext";
import { useAuth } from "@/hooks/useAuth";

const LANGS: { code: Language; label: string; sub: string; sample: string }[] = [
  { code: "en", label: "English", sub: "English", sample: "Hello, I'm your teacher. Let's begin." },
  { code: "hi", label: "हिन्दी", sub: "Hindi", sample: "नमस्ते, मैं आपका शिक्षक हूँ। चलिए शुरू करें।" },
  { code: "hinglish", label: "Hinglish", sub: "Hindi + English", sample: "Namaste, main aapka teacher hoon. Chaliye shuru karte hain." },
  { code: "kn", label: "ಕನ್ನಡ", sub: "Kannada", sample: "ನಮಸ್ಕಾರ, ನಾನು ನಿಮ್ಮ ಶಿಕ್ಷಕ. ಪ್ರಾರಂಭಿಸೋಣ." },
];

const Onboarding = () => {
  const navigate = useNavigate();
  const { language, setLanguage } = useLanguage();
  const { user } = useAuth();

  const handleContinue = () => {
    localStorage.setItem("onboardingComplete", "true");
    if (user) navigate("/dashboard");
    else navigate("/login");
  };

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <header className="container mx-auto px-4 py-6 flex items-center gap-3">
        <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center">
          <BookOpen className="w-5 h-5 text-primary-foreground" />
        </div>
        <span className="font-bold text-lg">Gyanam</span>
      </header>

      <main className="flex-1 container mx-auto px-4 py-8 max-w-2xl flex flex-col justify-center">
        <div className="mb-8 text-center">
          <h1 className="text-3xl md:text-4xl font-bold mb-3">Namaste 👋</h1>
          <p className="text-muted-foreground text-lg">
            Aapke teacher ko shuru karne se pehle, ek chhoti si baat.
          </p>
          <p className="text-muted-foreground mt-2">
            Which language should your teacher speak in?
          </p>
        </div>

        <div className="grid gap-3">
          {LANGS.map((l) => {
            const active = language === l.code;
            return (
              <button
                key={l.code}
                onClick={() => setLanguage(l.code)}
                className={`text-left rounded-xl border-2 p-4 transition-all ${
                  active
                    ? "border-primary bg-primary/5"
                    : "border-border hover:border-primary/50 bg-card"
                }`}
              >
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-xl font-bold">{l.label}</div>
                    <div className="text-xs text-muted-foreground">{l.sub}</div>
                  </div>
                  {active && (
                    <div className="w-6 h-6 rounded-full bg-primary flex items-center justify-center">
                      <Check className="w-4 h-4 text-primary-foreground" />
                    </div>
                  )}
                </div>
                <p className="text-sm text-muted-foreground mt-2 italic">"{l.sample}"</p>
              </button>
            );
          })}
        </div>

        <Button size="lg" className="mt-8 w-full" onClick={handleContinue}>
          Continue <ArrowRight className="w-4 h-4 ml-2" />
        </Button>

        <p className="text-xs text-muted-foreground text-center mt-4">
          You can change this anytime from the language switcher.
        </p>
      </main>
    </div>
  );
};

export default Onboarding;
