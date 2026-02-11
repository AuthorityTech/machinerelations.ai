import type { Metadata } from "next";
import "../globals.css";

export const metadata: Metadata = {
  title: "Machine Relations Case Studies — AuthorityTech Client Results",
  description:
    "Machine Relations case studies from AuthorityTech: Tier 1 media placements, AI citation growth, and measurable business outcomes.",
  openGraph: {
    title: "Machine Relations Case Studies",
    description: "Real-world Machine Relations results: Tier 1 placements, AI citation growth, and business impact.",
    url: "https://machinerelations.ai/case-studies",
    siteName: "Machine Relations",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Machine Relations Case Studies",
    description: "Real-world Machine Relations results from AuthorityTech clients.",
    creator: "@jaxonparrott",
  },
  alternates: {
    canonical: "https://machinerelations.ai/case-studies",
  },
};

export default function CaseStudiesPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Machine Relations Case Studies",
    description: "Client results and case studies from AuthorityTech's Machine Relations campaigns",
    url: "https://machinerelations.ai/case-studies",
    publisher: {
      "@type": "Organization",
      name: "AuthorityTech",
      url: "https://authoritytech.io",
    },
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
          <a href="/glossary">Glossary</a>
          {" • "}
          <a href="/stack">Stack</a>
          {" • "}
          <a href="/research">Research</a>
          {" • "}
          <span style={{ color: "var(--text)" }}>Case Studies</span>
        </nav>

        <header className="hero">
          <p className="hero-eyebrow">Client Results</p>
          <h1>Machine Relations Case Studies</h1>
          <p className="hero-definition">
            Real-world Machine Relations results from AuthorityTech campaigns — Tier 1 media placements, AI citation growth, and measurable business outcomes.
          </p>
        </header>

        <div className="divider" />

        <section className="section">
          <p style={{ fontSize: "0.95rem", color: "var(--text-muted)", marginBottom: "2rem" }}>
            Full case studies with client names and detailed attribution coming soon. For now, here are anonymized results from AuthorityTech&apos;s 8-year track record.
          </p>
        </section>

        <section className="section">
          <h2>Fintech SaaS</h2>
          <p>
            <strong>Challenge:</strong> Series B fintech company needed credibility signal for enterprise sales cycle. Target: Tier 1 tech media coverage.
          </p>
          <p>
            <strong>Result:</strong> TechCrunch feature coverage secured in 14 days via guaranteed placement model. Coverage cited in 6 competitive RFPs within 30 days, contributing to $2.3M in closed pipeline.
          </p>
          <p>
            <strong>Machine Relations impact:</strong> TechCrunch placement indexed by ChatGPT and Perplexity within 48 hours. Brand now appears in AI-generated fintech tool recommendations 34% of the time (up from 0% pre-campaign).
          </p>
        </section>

        <div className="divider" />

        <section className="section">
          <h2>AI Startup</h2>
          <p>
            <strong>Challenge:</strong> Early-stage AI infrastructure company invisible in AI search results despite strong product-market fit. Zero ChatGPT citations, zero Perplexity recommendations.
          </p>
          <p>
            <strong>Result:</strong> 90-day Machine Relations campaign: 5 Tier 1 placements (Forbes, VentureBeat, TechCrunch), entity optimization, and citation architecture implementation.
          </p>
          <p>
            <strong>Machine Relations impact:</strong> AI citation rate increased from 0% to 47% across 50 high-intent category queries. ChatGPT now cites the brand in 4 out of 10 relevant prompts. Perplexity recommendation rate: 52%. Organic inbound demo requests increased 3.2x.
          </p>
        </section>

        <div className="divider" />

        <section className="section">
          <h2>Enterprise B2B SaaS</h2>
          <p>
            <strong>Challenge:</strong> Growth-stage B2B company with strong sales team but weak brand authority. Losing deals to competitors with better media presence.
          </p>
          <p>
            <strong>Result:</strong> 6-month earned media blitz: 12 Tier 1 placements including Forbes, Inc., Business Insider, and Wall Street Journal. Media coverage integrated into sales enablement, email sequences, and LinkedIn outreach.
          </p>
          <p>
            <strong>Machine Relations impact:</strong> Deals with earned media exposure in the sales cycle closed 27% faster than deals without. Win rate increased 14 points. AI citation rate (ChatGPT + Perplexity) reached 41% within category. Brand now cited as an industry leader in 6 out of 10 AI-generated competitive analyses.
          </p>
        </section>

        <div className="divider" />

        <section className="section">
          <h2>Your Brand Here</h2>
          <p>
            AuthorityTech&apos;s Machine Relations campaigns combine guaranteed Tier 1 media placements with GEO/AEO optimization to deliver measurable AI citation growth.
          </p>
          <p>
            <strong>What you get:</strong>
          </p>
          <ul style={{ listStyle: "disc", paddingLeft: "1.5rem", color: "var(--text-muted)", marginTop: "1rem", lineHeight: "1.8" }}>
            <li>Guaranteed Tier 1 media placements (Forbes, TechCrunch, WSJ, Entrepreneur, Inc.)</li>
            <li>Entity optimization and knowledge graph integration</li>
            <li>Citation-ready content architecture</li>
            <li>GEO/AEO implementation for AI search visibility</li>
            <li>AI citation tracking across ChatGPT, Perplexity, Gemini, and AI Overviews</li>
            <li>Performance-based pricing: results or full refund</li>
          </ul>

          <div
            style={{
              background: "var(--bg-elevated)",
              border: "1px solid var(--border)",
              borderRadius: "8px",
              padding: "2rem",
              marginTop: "2.5rem",
              textAlign: "center",
            }}
          >
            <h3
              style={{
                fontFamily: "var(--serif)",
                fontSize: "1.25rem",
                fontWeight: 400,
                marginBottom: "1rem",
                color: "var(--text)",
              }}
            >
              Get Your AI Visibility Audit
            </h3>
            <p style={{ color: "var(--text-muted)", marginBottom: "1.5rem" }}>
              See exactly how often your brand is cited across AI platforms — and where the citation gaps are.
            </p>
            <a
              href="https://app.authoritytech.io/visibility-audit"
              style={{
                display: "inline-block",
                background: "var(--accent)",
                color: "var(--bg)",
                padding: "0.75rem 1.5rem",
                borderRadius: "6px",
                fontWeight: 500,
                textDecoration: "none",
                transition: "all 0.2s ease",
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.background = "var(--gold)";
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.background = "var(--accent)";
              }}
            >
              Request Free Audit →
            </a>
          </div>
        </section>

        <div className="divider" />

        <section className="section">
          <h2>Why AuthorityTech</h2>
          <p>
            <strong>8 years.</strong> 20+ unicorns. 1,000+ Tier 1 placements. 99.9% delivery rate.
          </p>
          <p>
            AuthorityTech is the first AI-native Machine Relations agency. We pioneered performance-based earned media in 2018, and we&apos;ve been iterating on the Machine Relations stack since before the term existed.
          </p>
          <p>
            <strong>No retainers. No pay-to-play. Results or refund.</strong>
          </p>
          <p style={{ marginTop: "1.5rem" }}>
            <a href="https://authoritytech.io">Learn more at authoritytech.io →</a>
          </p>
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
