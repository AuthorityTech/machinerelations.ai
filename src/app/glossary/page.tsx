import type { Metadata } from "next";

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

const terms = [
  {
    id: "mr",
    term: "Machine Relations (MR)",
    def: "The discipline of earning AI engine citations and recommendations. PR 2.0.",
    category: "core",
  },
  {
    id: "citation-gap",
    term: "Citation Gap",
    def: "The delta between a brand\u2019s traditional search ranking and its AI citation frequency. A brand can rank #1 on Google but appear in 0% of ChatGPT answers.",
    category: "metrics",
  },
  {
    id: "credibility-moat",
    term: "Algorithm Credibility Moat",
    def: "The compounding advantage brands build when AI engines consistently cite them. Each citation reinforces the next. Like SEO domain authority, but for AI.",
    category: "strategy",
  },
  {
    id: "earned-authority",
    term: "Earned Authority",
    def: "Third-party credibility signals (media placements, expert citations) that AI engines weight more heavily than brand-owned content. 82\u201389% of AI answers cite earned media.",
    category: "core",
  },
  {
    id: "entity-optimization",
    term: "Entity Optimization",
    def: "Structuring a brand\u2019s digital identity so AI systems can resolve, verify, and cite it consistently across platforms.",
    category: "core",
  },
  {
    id: "citation-architecture",
    term: "Citation Architecture",
    def: "Content engineering for AI extraction \u2014 answer-first structure, quotable data points, attribution magnets.",
    category: "core",
  },
  {
    id: "ai-visibility-score",
    term: "AI Visibility Score",
    def: "A brand\u2019s measurable presence across AI platforms (ChatGPT, Perplexity, Gemini, AI Overviews). Replaces impressions as the key MR metric.",
    category: "metrics",
  },
  {
    id: "geo",
    term: "GEO (Generative Engine Optimization)",
    def: "Optimizing content to appear in generative AI answers (ChatGPT, Claude, Gemini).",
    category: "tactics",
  },
  {
    id: "aeo",
    term: "AEO (Answer Engine Optimization)",
    def: "Optimizing for answer engines like Perplexity and Google AI Overviews.",
    category: "tactics",
  },
  {
    id: "machine-gatekeeper",
    term: "Machine Gatekeeper",
    def: "AI systems that decide which brands get recommended. The successor to human gatekeepers (journalists).",
    category: "core",
  },
  {
    id: "attribution-magnet",
    term: "Attribution Magnet",
    def: "A data point or quote designed to be extracted and cited by AI engines. E.g., \u201c82\u201389% of AI answers cite earned media.\u201d",
    category: "tactics",
  },
  {
    id: "recommendation-rate",
    term: "Recommendation Rate",
    def: "The frequency at which AI engines recommend a brand when prompted with relevant queries.",
    category: "metrics",
  },
  {
    id: "pr-2-0",
    term: "PR 2.0",
    def: "Shorthand for Machine Relations. The evolution of public relations for the AI era.",
    category: "core",
  },
  {
    id: "zero-click-pr",
    term: "Zero-Click PR",
    def: "Earned media impact that occurs without users clicking through to the source \u2014 AI engines surface the brand directly in answers.",
    category: "strategy",
  },
];

const categoryLabels: Record<string, string> = {
  core: "Core Concepts",
  metrics: "Metrics & Measurement",
  tactics: "Tactics & Optimization",
  strategy: "Strategy & Frameworks",
};

const categoryOrder = ["core", "tactics", "metrics", "strategy"];

export default function GlossaryPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "DefinedTermSet",
    name: "Machine Relations Glossary",
    description: "Complete glossary of Machine Relations terminology and concepts",
    url: "https://machinerelations.ai/glossary",
    hasDefinedTerm: terms.map((t) => ({
      "@type": "DefinedTerm",
      name: t.term,
      description: t.def,
      url: `https://machinerelations.ai/glossary#${t.id}`,
    })),
  };

  const grouped = categoryOrder.map((cat) => ({
    label: categoryLabels[cat],
    items: terms.filter((t) => t.category === cat),
  }));

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="site-wrapper">
        <header className="hero">
          <p className="hero-eyebrow">Terminology Reference</p>
          <h1>Machine Relations <em>Glossary</em></h1>
          <p className="hero-definition">
            The definitive glossary of Machine Relations terminology — from Citation Gap to Algorithm Credibility Moat. The language of PR 2.0.
          </p>
        </header>

        <div className="divider" />

        {/* Quick jump */}
        <section className="section">
          <div className="callout-block">
            <p className="callout-label">Quick Navigation</p>
            <div className="tag-cloud">
              {terms.map((t) => (
                <a key={t.id} href={`#${t.id}`} className="tag-link">
                  {t.term.replace(/ \(.*\)/, "")}
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* Grouped terms */}
        {grouped.map((group) => (
          <div key={group.label}>
            <div className="divider" />
            <section className="section">
              <h2>{group.label}</h2>
              <div className="glossary-grid">
                {group.items.map((t) => (
                  <div key={t.id} id={t.id} className="glossary-card">
                    <h3 className="glossary-term">{t.term}</h3>
                    <p className="glossary-def">{t.def}</p>
                  </div>
                ))}
              </div>
            </section>
          </div>
        ))}

        {/* Newsletter CTA */}
        <section className="section newsletter-cta">
          <div className="divider" />
          <h2 className="newsletter-title">Get MR Intelligence Weekly</h2>
          <p className="newsletter-desc">
            One insight per week on Machine Relations, AI citations, and the metrics that matter in the post-search era. No noise.
          </p>
          <a href="https://curated.authoritytech.io/#/portal/signup" className="btn-primary">
            Subscribe to Curated
          </a>
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
