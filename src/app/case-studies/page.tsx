import type { Metadata } from "next";

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

const cases = [
  {
    id: "fintech",
    industry: "Fintech SaaS",
    stage: "Series B",
    timeline: "14 days",
    challenge: "Needed credibility signal for enterprise sales cycle. Target: Tier 1 tech media coverage.",
    placements: "TechCrunch feature coverage secured via guaranteed placement model.",
    results: [
      { metric: "0% → 34%", label: "AI citation rate for fintech tool queries" },
      { metric: "$2.3M", label: "closed pipeline attributed to coverage" },
      { metric: "48 hrs", label: "to ChatGPT + Perplexity indexing" },
      { metric: "6 RFPs", label: "cited coverage within 30 days" },
    ],
  },
  {
    id: "ai-startup",
    industry: "AI Infrastructure",
    stage: "Early-stage",
    timeline: "90 days",
    challenge: "Invisible in AI search despite strong product-market fit. Zero ChatGPT citations, zero Perplexity recommendations.",
    placements: "5 Tier 1 placements (Forbes, VentureBeat, TechCrunch) + entity optimization + citation architecture.",
    results: [
      { metric: "0% → 47%", label: "AI citation rate across 50 queries" },
      { metric: "52%", label: "Perplexity recommendation rate" },
      { metric: "3.2×", label: "increase in organic inbound demos" },
      { metric: "4/10", label: "ChatGPT prompts now cite brand" },
    ],
  },
  {
    id: "enterprise",
    industry: "Enterprise B2B SaaS",
    stage: "Growth-stage",
    timeline: "6 months",
    challenge: "Strong sales team but weak brand authority. Losing deals to competitors with better media presence.",
    placements: "12 Tier 1 placements — Forbes, Inc., Business Insider, Wall Street Journal.",
    results: [
      { metric: "27%", label: "faster deal close with media exposure" },
      { metric: "+14pt", label: "win rate increase" },
      { metric: "41%", label: "AI citation rate in category" },
      { metric: "6/10", label: "AI competitive analyses cite brand" },
    ],
  },
];

// Before/After illustration component
const BeforeAfterIllustration = () => (
  <div style={{ 
    display: 'flex', 
    justifyContent: 'center', 
    alignItems: 'center',
    gap: '1.5rem',
    margin: '1.5rem 0 2rem',
    padding: '1.5rem',
    background: 'var(--bg-elevated)',
    border: '1px solid var(--border)',
    borderRadius: '8px'
  }}>
    {/* Before */}
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.5rem' }}>
      <span style={{ 
        fontSize: '10px', 
        fontWeight: 600, 
        letterSpacing: '0.1em', 
        textTransform: 'uppercase',
        color: 'var(--text-dim)'
      }}>
        Before
      </span>
      <div style={{
        width: '80px',
        height: '96px',
        borderRadius: '8px',
        border: '1px solid var(--border)',
        background: 'var(--bg)',
        padding: '10px',
        display: 'flex',
        flexDirection: 'column',
        gap: '6px',
        position: 'relative'
      }}>
        {/* Document icon with eye-off overlay */}
        <div style={{ height: '8px', width: '40px', borderRadius: '4px', background: 'hsla(38, 32%, 55%, 0.2)' }} />
        <div style={{ height: '4px', width: '100%', borderRadius: '2px', background: 'var(--border)' }} />
        <div style={{ height: '4px', width: '48px', borderRadius: '2px', background: 'var(--border)' }} />
        <div style={{ height: '4px', width: '100%', borderRadius: '2px', background: 'var(--border)' }} />
        
        {/* Eye-off icon overlay */}
        <div style={{ 
          position: 'absolute', 
          bottom: '8px', 
          right: '8px',
          color: 'var(--text-dim)',
          opacity: 0.5
        }}>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94" />
            <path d="M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19" />
            <line x1="1" y1="1" x2="23" y2="23" />
          </svg>
        </div>
      </div>
      <span style={{ fontSize: '9px', color: 'var(--text-dim)', textAlign: 'center', maxWidth: '90px', lineHeight: '1.3' }}>
        No AI visibility
      </span>
    </div>

    {/* Arrow */}
    <div style={{ color: 'var(--gold)', flexShrink: 0 }}>
      <svg width="32" height="16" viewBox="0 0 32 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M0 8 L28 8" />
        <path d="M23 3 L30 8 L23 13" />
      </svg>
    </div>

    {/* After */}
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.5rem' }}>
      <span style={{ 
        fontSize: '10px', 
        fontWeight: 600, 
        letterSpacing: '0.1em', 
        textTransform: 'uppercase',
        color: 'var(--accent-muted)'
      }}>
        After
      </span>
      <div style={{
        width: '80px',
        height: '96px',
        borderRadius: '8px',
        border: '1px solid var(--gold)',
        background: 'rgba(212, 201, 144, 0.05)',
        padding: '10px',
        display: 'flex',
        flexDirection: 'column',
        gap: '6px',
        position: 'relative'
      }}>
        {/* Document icon with checkmark */}
        <div style={{ height: '8px', width: '40px', borderRadius: '4px', background: 'var(--gold)' }} />
        <div style={{ height: '4px', width: '100%', borderRadius: '2px', background: 'hsla(38, 32%, 55%, 0.3)' }} />
        <div style={{ height: '4px', width: '48px', borderRadius: '2px', background: 'hsla(38, 32%, 55%, 0.3)' }} />
        <div style={{ height: '4px', width: '100%', borderRadius: '2px', background: 'hsla(38, 32%, 55%, 0.3)' }} />
        
        {/* Checkmark icon */}
        <div style={{ 
          position: 'absolute', 
          bottom: '8px', 
          right: '8px',
          color: 'var(--gold)'
        }}>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="20 6 9 17 4 12" />
          </svg>
        </div>
        
        {/* Citation marks */}
        <div style={{
          position: 'absolute',
          top: '6px',
          right: '6px',
          fontSize: '10px',
          color: 'var(--gold)',
          opacity: 0.6
        }}>
          &ldquo;&rdquo;
        </div>
      </div>
      <span style={{ fontSize: '9px', color: 'var(--accent-muted)', textAlign: 'center', maxWidth: '90px', lineHeight: '1.3' }}>
        AI-cited authority
      </span>
    </div>
  </div>
);

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

      <div className="site-wrapper">
        <header className="hero">
          <p className="hero-eyebrow">Client Results</p>
          <h1>Machine Relations <em>Case Studies</em></h1>
          <p className="hero-definition">
            Real-world Machine Relations results from AuthorityTech campaigns — Tier 1 media placements, AI citation growth, and measurable business outcomes.
          </p>
        </header>

        <div className="divider" />

        <section className="section">
          <div className="callout-block">
            <p style={{ color: "var(--text-muted)", fontSize: "0.9rem" }}>
              Full case studies with client names and detailed attribution coming soon. These are anonymized results from AuthorityTech&apos;s 8-year track record.
            </p>
          </div>
        </section>

        {/* Case studies */}
        {cases.map((c) => (
          <div key={c.id}>
            <div className="divider" />
            <section className="section" id={c.id}>
              <div className="case-header">
                <div>
                  <h2>{c.industry}</h2>
                  <div className="case-meta">
                    <span className="case-tag">{c.stage}</span>
                    <span className="case-tag">{c.timeline}</span>
                  </div>
                </div>
              </div>

              {/* Before/After Illustration */}
              <BeforeAfterIllustration />

              <div className="detail-grid">
                <div className="detail-card">
                  <p className="detail-label">Challenge</p>
                  <p>{c.challenge}</p>
                </div>
                <div className="detail-card">
                  <p className="detail-label">Placements</p>
                  <p>{c.placements}</p>
                </div>
              </div>

              <div className="results-grid">
                {c.results.map((r) => (
                  <div key={r.label} className="result-card">
                    <p className="result-metric">{r.metric}</p>
                    <p className="result-label">{r.label}</p>
                  </div>
                ))}
              </div>
            </section>
          </div>
        ))}

        <div className="divider" />

        {/* CTA */}
        <section className="section">
          <h2>Your Brand Here</h2>
          <p>
            AuthorityTech&apos;s Machine Relations campaigns combine guaranteed Tier 1 media placements with GEO/AEO optimization to deliver measurable AI citation growth.
          </p>

          <div className="origin-block" style={{ textAlign: "center", marginTop: "2rem" }}>
            <h3 style={{
              fontFamily: "var(--serif)",
              fontSize: "1.25rem",
              fontWeight: 400,
              marginBottom: "1rem",
              color: "var(--text)",
            }}>
              Get Your AI Visibility Audit
            </h3>
            <p style={{ color: "var(--text-muted)", marginBottom: "1.5rem" }}>
              See exactly how often your brand is cited across AI platforms — and where the citation gaps are.
            </p>
            <a href="https://app.authoritytech.io/visibility-audit" className="btn-primary">
              Request Free Audit →
            </a>
          </div>
        </section>

        <div className="divider" />

        <section className="section">
          <h2>Why AuthorityTech</h2>
          <div className="track-grid" style={{ marginTop: "1.5rem" }}>
            <div className="track-card">
              <p className="track-stat">8 yrs</p>
              <p className="track-label">in business</p>
            </div>
            <div className="track-card">
              <p className="track-stat">20+</p>
              <p className="track-label">unicorn clients</p>
            </div>
            <div className="track-card">
              <p className="track-stat">1,000+</p>
              <p className="track-label">Tier 1 placements</p>
            </div>
            <div className="track-card">
              <p className="track-stat">99.9%</p>
              <p className="track-label">delivery rate</p>
            </div>
          </div>
          <p style={{ marginTop: "2rem", textAlign: "center" }}>
            <strong>No retainers. No pay-to-play. Results or refund.</strong>
          </p>
          <p style={{ marginTop: "1rem", textAlign: "center" }}>
            <a href="https://authoritytech.io">Learn more at authoritytech.io →</a>
          </p>
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
