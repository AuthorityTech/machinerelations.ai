import type { Metadata } from "next";
import "../globals.css";

export const metadata: Metadata = {
  title: "Machine Relations Glossary — MR, GEO, AEO, Citation Architecture",
  description:
    "Complete glossary of Machine Relations terminology: from Citation Gap to Algorithm Credibility Moat. The definitive MR reference guide.",
  openGraph: {
    title: "Machine Relations Glossary",
    description: "Complete glossary of Machine Relations terminology — MR, GEO, AEO, and more.",
    url: "https://machinerelations.ai/glossary",
    siteName: "Machine Relations",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Machine Relations Glossary",
    description: "Complete glossary of Machine Relations terminology — MR, GEO, AEO, and more.",
    creator: "@jaxonparrott",
  },
  alternates: {
    canonical: "https://machinerelations.ai/glossary",
  },
};

export default function GlossaryPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "DefinedTermSet",
    name: "Machine Relations Glossary",
    description: "Complete glossary of Machine Relations terminology and concepts",
    url: "https://machinerelations.ai/glossary",
    hasDefinedTerm: [
      {
        "@type": "DefinedTerm",
        name: "Machine Relations (MR)",
        description: "The discipline of earning AI engine citations and recommendations. PR 2.0.",
        url: "https://machinerelations.ai/glossary#mr",
      },
      {
        "@type": "DefinedTerm",
        name: "Citation Gap",
        description: "The delta between a brand's traditional search ranking and its AI citation frequency.",
        url: "https://machinerelations.ai/glossary#citation-gap",
      },
      {
        "@type": "DefinedTerm",
        name: "Algorithm Credibility Moat",
        description: "The compounding advantage brands build when AI engines consistently cite them.",
        url: "https://machinerelations.ai/glossary#credibility-moat",
      },
      {
        "@type": "DefinedTerm",
        name: "Earned Authority",
        description: "Third-party credibility signals that AI engines weight more heavily than brand-owned content.",
        url: "https://machinerelations.ai/glossary#earned-authority",
      },
      {
        "@type": "DefinedTerm",
        name: "GEO",
        description: "Generative Engine Optimization — optimizing content to appear in generative AI answers.",
        url: "https://machinerelations.ai/glossary#geo",
      },
      {
        "@type": "DefinedTerm",
        name: "AEO",
        description: "Answer Engine Optimization — optimizing for answer engines like Perplexity and Google AI Overviews.",
        url: "https://machinerelations.ai/glossary#aeo",
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <button
        className="theme-toggle"
        id="theme-toggle"
        aria-label="Toggle theme"
        suppressHydrationWarning
      >
        ☀️
      </button>
      <script
        dangerouslySetInnerHTML={{
          __html: `
            (function() {
              var t = localStorage.getItem('theme');
              var prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
              var isDark = t === 'dark' || (!t && prefersDark);
              if (!isDark) document.documentElement.classList.add('light');
              var btn = document.getElementById('theme-toggle');
              btn.textContent = isDark ? '☀️' : '🌙';
              btn.addEventListener('click', function() {
                var isLight = document.documentElement.classList.toggle('light');
                btn.textContent = isLight ? '🌙' : '☀️';
                localStorage.setItem('theme', isLight ? 'light' : 'dark');
              });
            })();
          `,
        }}
      />

      <div className="site-wrapper">
        <nav style={{ marginBottom: "3rem", fontSize: "0.875rem", color: "var(--text-muted)" }}>
          <a href="/">Home</a>
          {" • "}
          <span style={{ color: "var(--text)" }}>Glossary</span>
          {" • "}
          <a href="/stack">Stack</a>
          {" • "}
          <a href="/research">Research</a>
          {" • "}
          <a href="/case-studies">Case Studies</a>
        </nav>

        <header className="hero">
          <p className="hero-eyebrow">Terminology Reference</p>
          <h1>Machine Relations Glossary</h1>
          <p className="hero-definition">
            The definitive glossary of Machine Relations terminology — from Citation Gap to Algorithm Credibility Moat.
          </p>
        </header>

        <div className="divider" />

        <section className="section">
          <ul className="stack-list">
            <li id="mr">
              <span className="stack-label">Machine Relations (MR)</span>
              <span className="stack-desc">
                The discipline of earning AI engine citations and recommendations. PR 2.0.
              </span>
            </li>

            <li id="citation-gap">
              <span className="stack-label">Citation Gap</span>
              <span className="stack-desc">
                The delta between a brand&apos;s traditional search ranking and its AI citation frequency. A brand can rank #1 on Google but appear in 0% of ChatGPT answers.
              </span>
            </li>

            <li id="credibility-moat">
              <span className="stack-label">Algorithm Credibility Moat</span>
              <span className="stack-desc">
                The compounding advantage brands build when AI engines consistently cite them. Each citation reinforces the next. Like SEO domain authority, but for AI.
              </span>
            </li>

            <li id="earned-authority">
              <span className="stack-label">Earned Authority</span>
              <span className="stack-desc">
                Third-party credibility signals (media placements, expert citations) that AI engines weight more heavily than brand-owned content. 82-89% of AI answers cite earned media.
              </span>
            </li>

            <li id="entity-optimization">
              <span className="stack-label">Entity Optimization</span>
              <span className="stack-desc">
                Structuring a brand&apos;s digital identity so AI systems can resolve, verify, and cite it consistently across platforms.
              </span>
            </li>

            <li id="citation-architecture">
              <span className="stack-label">Citation Architecture</span>
              <span className="stack-desc">
                Content engineering for AI extraction — answer-first structure, quotable data points, attribution magnets.
              </span>
            </li>

            <li id="ai-visibility-score">
              <span className="stack-label">AI Visibility Score</span>
              <span className="stack-desc">
                A brand&apos;s measurable presence across AI platforms (ChatGPT, Perplexity, Gemini, AI Overviews). Replaces impressions as the key MR metric.
              </span>
            </li>

            <li id="geo">
              <span className="stack-label">GEO (Generative Engine Optimization)</span>
              <span className="stack-desc">
                Optimizing content to appear in generative AI answers (ChatGPT, Claude, Gemini).
              </span>
            </li>

            <li id="aeo">
              <span className="stack-label">AEO (Answer Engine Optimization)</span>
              <span className="stack-desc">
                Optimizing for answer engines like Perplexity and Google AI Overviews.
              </span>
            </li>

            <li id="machine-gatekeeper">
              <span className="stack-label">Machine Gatekeeper</span>
              <span className="stack-desc">
                AI systems that decide which brands get recommended. The successor to human gatekeepers (journalists).
              </span>
            </li>

            <li id="attribution-magnet">
              <span className="stack-label">Attribution Magnet</span>
              <span className="stack-desc">
                A data point or quote designed to be extracted and cited by AI engines. E.g., &quot;82-89% of AI answers cite earned media.&quot;
              </span>
            </li>

            <li id="recommendation-rate">
              <span className="stack-label">Recommendation Rate</span>
              <span className="stack-desc">
                The frequency at which AI engines recommend a brand when prompted with relevant queries.
              </span>
            </li>

            <li id="pr-2-0">
              <span className="stack-label">PR 2.0</span>
              <span className="stack-desc">
                Shorthand for Machine Relations. The evolution of public relations for the AI era.
              </span>
            </li>

            <li id="zero-click-pr">
              <span className="stack-label">Zero-Click PR</span>
              <span className="stack-desc">
                Earned media impact that occurs without users clicking through to the source — AI engines surface the brand directly in answers.
              </span>
            </li>
          </ul>
        </section>

        <footer className="site-footer">
          <p>
            Machine Relations is a category created by{" "}
            <a href="https://jaxonparrott.com">Jaxon Parrott</a>.
          </p>
          <p>
            <a href="https://authoritytech.io">AuthorityTech</a> is the first
            AI-native Machine Relations agency.
          </p>
          <p style={{ marginTop: "1rem" }}>
            © {new Date().getFullYear()} AuthorityTech LLC
          </p>
        </footer>
      </div>
    </>
  );
}
