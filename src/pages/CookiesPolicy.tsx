import { Link } from "react-router-dom";
import { ArrowLeft, BookOpen } from "lucide-react";

const CookiesPolicy = () => {
  return (
    <div className="min-h-screen bg-background">
      <header className="border-b border-border bg-card">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center">
                <BookOpen className="w-6 h-6 text-primary-foreground" />
              </div>
              <span className="font-bold text-lg">Gyanam</span>
            </div>
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Back
            </Link>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8 max-w-4xl">
        <div className="edu-card p-6 md:p-8">
          <h1 className="text-3xl font-bold mb-2">Cookies Policy</h1>
          <p className="text-muted-foreground mb-8">Last Updated: July 2026</p>

          <div className="prose prose-sm max-w-none space-y-6 text-foreground">
            <p className="text-lg">
              This Cookies Policy explains how <strong>Gyanam</strong> ("we", "us") uses cookies
              and similar browser storage technologies when you use our app. This page is maintained
              by the Gyanam team to answer common privacy questions.
            </p>

            <section>
              <h2 className="text-xl font-bold mb-3">1. What are cookies?</h2>
              <p className="text-muted-foreground">
                Cookies are small pieces of data stored in your browser. Gyanam also uses{" "}
                <em>localStorage</em> — a similar technology — to remember your preferences and
                keep you signed in.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold mb-3">2. What we store</h2>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li>
                  <strong>Session tokens</strong> — so you stay signed in between visits.
                </li>
                <li>
                  <strong>Language preference</strong> — the language your teacher speaks in
                  (English, Hindi, Hinglish, or Kannada).
                </li>
                <li>
                  <strong>Theme preference</strong> — light or dark mode.
                </li>
                <li>
                  <strong>Onboarding state</strong> — so we don't show the welcome flow twice.
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-bold mb-3">3. What we do NOT use</h2>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li>No third-party advertising cookies.</li>
                <li>No cross-site tracking pixels.</li>
                <li>No selling of student data to marketers.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-bold mb-3">4. Analytics</h2>
              <p className="text-muted-foreground">
                We may use minimal, first-party analytics to understand how the app performs
                (page load times, error rates). No personal identifiers are shared with third
                parties for advertising.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold mb-3">5. Your choices</h2>
              <p className="text-muted-foreground">
                You can clear cookies and localStorage from your browser settings at any time.
                Doing so will sign you out and reset your saved language and theme preferences.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold mb-3">6. Contact</h2>
              <p className="text-muted-foreground">
                Questions about this policy? Reach out to the Gyanam team via the school or
                admin contact provided at signup.
              </p>
            </section>

            <div className="pt-6 border-t border-border">
              <Link to="/terms" className="text-primary hover:underline">
                Read our Terms & Conditions →
              </Link>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default CookiesPolicy;
