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
      "GEO statistics",
      "AEO metrics",
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
          <a href="/glossary">Glossary</a>
          {" • "}
          <a href="/stack">Stack</a>
          {" • "}
          <span style={{ color: "var(--text)" }}>Research</span>
          {" • "}
          <a href="/case-studies">Case Studies</a>
        </nav>

        <header className="hero">
          <p className="hero-eyebrow">Data & Statistics</p>
          <h1>Machine Relations Research</h1>
          <p className="hero-definition">
            Authoritative statistics and industry data on AI search adoption, citation rates, and Machine Relations performance.
          </p>
        </header>

        <div className="divider" />

        <section className="section">
          <h2>AI Search Adoption</h2>
          <ul className="stack-list">
            <li>
              <span className="stack-label">ChatGPT: 810M monthly users (2026)</span>
              <span className="stack-desc">
                Source: OpenAI investor presentations, industry reporting
              </span>
            </li>
            <li>
              <span className="stack-label">Google Gemini: 750M monthly users</span>
              <span className="stack-desc">
                Source: Google Alphabet earnings calls, The Information
              </span>
            </li>
            <li>
              <span className="stack-label">AI search traffic growing 9.7x YoY</span>
              <span className="stack-desc">
                Source: Similarweb, Cloudflare Radar, industry analytics
              </span>
            </li>
            <li>
              <span className="stack-label">Gartner: traditional search traffic to decline 25-50% by 2028</span>
              <span className="stack-desc">
                Source: Gartner Predicts 2024: The Future of Search
              </span>
            </li>
          </ul>
        </section>

        <div className="divider" />

        <section className="section">
          <h2>Citation &amp; Earned Media</h2>
          <ul className="stack-list">
            <li>
              <span className="stack-label">82-89% of AI-generated answers cite earned media over brand-owned content</span>
              <span className="stack-desc">
                Source: Stanford WebGPT research, OpenAI retrieval studies, Princeton NLP Lab
              </span>
            </li>
            <li>
              <span className="stack-label">Brands producing 12+ optimized pieces/month achieve 200x faster AI visibility gains</span>
              <span className="stack-desc">
                Source: AuthorityTech internal client performance data (2024-2026)
              </span>
            </li>
            <li>
              <span className="stack-label">34% of AI citations go to a single publisher per category</span>
              <span className="stack-desc">
                Source: Citation concentration analysis across 500+ AI-generated answers (AuthorityTech research)
              </span>
            </li>
          </ul>
        </section>

        <div className="divider" />

        <section className="section">
          <h2>Industry Disruption</h2>
          <ul className="stack-list">
            <li>
              <span className="stack-label">Edelman US revenue down 8.1% (2025) — third consecutive year of decline</span>
              <span className="stack-desc">
                Source: PRWeek, Edelman earnings reports
              </span>
            </li>
            <li>
              <span className="stack-label">Publicis forecasting 4-5% growth driven by AI/data capabilities</span>
              <span className="stack-desc">
                Source: Publicis Groupe investor presentations, Ad Age
              </span>
            </li>
            <li>
              <span className="stack-label">76% of PR professionals report using AI tools in daily workflows</span>
              <span className="stack-desc">
                Source: PRCA AI Adoption Survey 2025, Muck Rack State of Journalism
              </span>
            </li>
            <li>
              <span className="stack-label">Zero-click searches now 83% of Google queries</span>
              <span className="stack-desc">
                Source: SparkToro Zero-Click Study, Similarweb Search Data
              </span>
            </li>
          </ul>
        </section>

        <div className="divider" />

        <section className="section">
          <h2>AuthorityTech Track Record</h2>
          <ul className="stack-list">
            <li>
              <span className="stack-label">8 years in business</span>
              <span className="stack-desc">
                Founded 2018 by Jaxon Parrott and Christian Lehman
              </span>
            </li>
            <li>
              <span className="stack-label">20+ unicorn clients</span>
              <span className="stack-desc">
                Including venture-backed startups valued at $1B+
              </span>
            </li>
            <li>
              <span className="stack-label">~200 startups served</span>
              <span className="stack-desc">
                Across fintech, AI/ML, SaaS, cybersecurity, and enterprise software
              </span>
            </li>
            <li>
              <span className="stack-label">1,000+ Tier 1 media placements</span>
              <span className="stack-desc">
                Forbes, TechCrunch, Wall Street Journal, Entrepreneur, Inc., Business Insider, Fast Company
              </span>
            </li>
            <li>
              <span className="stack-label">99.9% delivery rate (1 refund in 8 years)</span>
              <span className="stack-desc">
                Performance-based model: guaranteed placements or full refund
              </span>
            </li>
            <li>
              <span className="stack-label">Performance-based pricing: guaranteed placements or refund</span>
              <span className="stack-desc">
                No retainers. No pay-to-play. Results or refund.
              </span>
            </li>
          </ul>
        </section>

        <div className="divider" />

        <section className="section">
          <h2>Key Research Insights</h2>
          <p>
            The data reveals a clear pattern: AI systems overwhelmingly prefer earned media over brand-owned content, and the shift from traditional search to AI search is accelerating faster than most brands are prepared for.
          </p>
          <p>
            Brands that invest in Machine Relations now — earning citations across ChatGPT, Perplexity, Gemini, and AI Overviews — are building compounding advantages. Those that wait risk citation invisibility as AI search becomes the dominant discovery layer.
          </p>
          <p>
            AuthorityTech&apos;s 8-year track record and 99.9% delivery rate demonstrate that performance-based Machine Relations is not just viable — it&apos;s the future of how brands earn authority in the AI era.
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