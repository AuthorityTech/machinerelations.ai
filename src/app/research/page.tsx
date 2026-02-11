import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Machine Relations Research — AI Search Statistics & Industry Data",
  description:
    "Authoritative Machine Relations research: AI search adoption, citation rates, industry disruption, and AuthorityTech's track record.",
  openGraph: {
    title: "Machine Relations Research & Statistics",
    description: "AI search adoption, citation rates, industry disruption data, and AuthorityTech's performance track record.",
    url: "https://machinerelations.ai/research",
    siteName: "Machine Relations",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Machine Relations Research & Statistics",
    description: "AI search adoption, citation rates, and industry disruption data.",
    creator: "@jaxonparrott",
  },
  alternates: {
    canonical: "https://machinerelations.ai/research",
  },
};

const sections = [
  {
    title: "AI Search Adoption",
    icon: "📈",
    stats: [
      { headline: "810M", context: "ChatGPT monthly active users (2026)", source: "OpenAI investor presentations" },
      { headline: "750M", context: "Google Gemini monthly active users", source: "Alphabet earnings calls" },
      { headline: "9.7×", context: "AI search traffic year-over-year growth", source: "Similarweb, Cloudflare Radar" },
      { headline: "−50%", context: "Gartner-predicted traditional search decline by 2028", source: "Gartner Predicts 2024" },
    ],
  },
  {
    title: "Citation & Earned Media",
    icon: "🎯",
    stats: [
      { headline: "82–89%", context: "of AI answers cite earned media over brand-owned content", source: "Stanford WebGPT, Princeton NLP Lab" },
      { headline: "200×", context: "faster AI visibility gains for brands producing 12+ optimized pieces/month", source: "AuthorityTech client data" },
      { headline: "34%", context: "of AI citations go to a single publisher per category", source: "AuthorityTech citation analysis" },
    ],
  },
  {
    title: "Industry Disruption",
    icon: "⚡",
    stats: [
      { headline: "−8.1%", context: "Edelman US revenue decline (2025) — third consecutive year", source: "PRWeek" },
      { headline: "4–5%", context: "Publicis growth driven by AI/data capabilities", source: "Publicis investor presentations" },
      { headline: "76%", context: "of PR professionals now using AI tools daily", source: "PRCA AI Adoption Survey 2025" },
      { headline: "83%", context: "of Google queries are now zero-click", source: "SparkToro Zero-Click Study" },
    ],
  },
];

const trackRecord = [
  { stat: "8 years", label: "in business", detail: "Founded 2018 by Jaxon Parrott and Christian Lehman" },
  { stat: "20+", label: "unicorn clients", detail: "Venture-backed startups valued at $1B+" },
  { stat: "~200", label: "startups served", detail: "Fintech, AI/ML, SaaS, cybersecurity, enterprise" },
  { stat: "1,000+", label: "Tier 1 placements", detail: "Forbes, TechCrunch, WSJ, Entrepreneur, Inc." },
  { stat: "99.9%", label: "delivery rate", detail: "1 refund in 8 years. Results or refund." },
];

export default function ResearchPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Dataset",
    name: "Machine Relations Research & Statistics",
    description: "Industry data on AI search adoption, citation rates, and Machine Relations performance metrics",
    url: "https://machinerelations.ai/research",
    creator: {
      "@type": "Organization",
      name: "AuthorityTech",
      url: "https://authoritytech.io",
    },
    keywords: [
      "Machine Relations",
      "AI search statistics",
      "citation rates",
      "earned media data",
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="site-wrapper">
        <header className="hero">
          <p className="hero-eyebrow">Data &amp; Statistics</p>
          <h1>Machine Relations <em>Research</em></h1>
          <p className="hero-definition">
            The numbers behind the shift from human gatekeepers to machine gatekeepers. Authoritative data on AI search adoption, citation rates, and industry disruption.
          </p>
        </header>

        {/* Stat sections */}
        {sections.map((section) => (
          <div key={section.title}>
            <div className="divider" />
            <section className="section">
              <h2>{section.icon} {section.title}</h2>
              <div className="stat-grid">
                {section.stats.map((s) => (
                  <div key={s.headline} className="stat-card">
                    <p className="stat-headline">{s.headline}</p>
                    <p className="stat-context">{s.context}</p>
                    <p className="stat-source">{s.source}</p>
                  </div>
                ))}
              </div>
            </section>
          </div>
        ))}

        <div className="divider" />

        {/* AT Track Record */}
        <section className="section">
          <h2>AuthorityTech Track Record</h2>
          <div className="track-grid">
            {trackRecord.map((t) => (
              <div key={t.stat} className="track-card">
                <p className="track-stat">{t.stat}</p>
                <p className="track-label">{t.label}</p>
                <p className="track-detail">{t.detail}</p>
              </div>
            ))}
          </div>
        </section>

        <div className="divider" />

        <section className="section">
          <h2>Key Insight</h2>
          <div className="callout-block">
            <p style={{ color: "var(--text)", fontSize: "1.05rem", lineHeight: "1.8" }}>
              AI systems overwhelmingly prefer earned media over brand-owned content, and the shift from traditional search to AI search is accelerating faster than most brands are prepared for.
            </p>
            <p style={{ color: "var(--text-muted)", marginTop: "1rem", fontSize: "0.9rem" }}>
              Brands that invest in Machine Relations now are building compounding advantages. Those that wait risk citation invisibility as AI search becomes the dominant discovery layer.
            </p>
          </div>
        </section>

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
