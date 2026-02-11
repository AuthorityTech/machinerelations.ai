import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "The Machine Relations Stack — 5 Layers of AI Citation Dominance",
  description:
    "The complete Machine Relations stack: Earned Authority, Entity Optimization, Citation Architecture, GEO/AEO, and AI Visibility Measurement.",
  openGraph: {
    title: "The Machine Relations Stack",
    description: "The 5-layer framework for earning AI citations: Earned Authority, Entity Optimization, Citation Architecture, GEO/AEO, and Measurement.",
    url: "https://machinerelations.ai/stack",
    siteName: "Machine Relations",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "The Machine Relations Stack",
    description: "The 5-layer framework for earning AI citations.",
    creator: "@jaxonparrott",
  },
  alternates: {
    canonical: "https://machinerelations.ai/stack",
  },
};

const layers = [
  {
    num: "01",
    id: "earned-authority",
    name: "Earned Authority",
    tagline: "The foundation layer",
    description: "Tier 1 media placements in publications AI engines trust and cite — Forbes, TechCrunch, Wall Street Journal.",
    why: "Research shows 82–89% of AI-generated answers cite earned media over brand-owned content. AI engines trust third-party validation exponentially more than press releases or brand blogs. Without earned authority, the other four layers have nothing to amplify.",
    example: "A fintech startup securing a TechCrunch feature. When someone asks ChatGPT \"What are the best AI fintech tools?\" — the TechCrunch article becomes a citation source. The brand enters the training corpus and recommendation pipeline.",
    connects: "Feeds Entity Optimization (validating the brand entity across knowledge graphs) and Citation Architecture (creating quotable, AI-extractable content within those placements).",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
        <polyline points="14 2 14 8 20 8" />
      </svg>
    ),
  },
  {
    num: "02",
    id: "entity-optimization",
    name: "Entity Optimization",
    tagline: "The identity layer",
    description: "Structuring a brand's digital identity so AI systems can resolve, verify, and cite it consistently across platforms.",
    why: "AI engines need to resolve your brand as a distinct entity before they can cite it. Inconsistent entity definitions, missing schema markup, or lack of knowledge graph presence means the AI sees your brand as fragmented or unverifiable.",
    example: "A SaaS company with consistent Organization schema, verified knowledge panel, Wikidata entry, and unified entity references across Crunchbase, LinkedIn, and media mentions. AI systems can instantly verify and contextualize the brand.",
    connects: "Turns Earned Authority signals into machine-readable identity proofs. Enables Citation Architecture by giving AI a clear, resolvable brand to cite.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="5" r="2.5" />
        <circle cx="5" cy="18" r="2.5" />
        <circle cx="19" cy="18" r="2.5" />
        <line x1="12" y1="7.5" x2="5" y2="15.5" />
        <line x1="12" y1="7.5" x2="19" y2="15.5" />
        <line x1="7.5" y1="18" x2="16.5" y2="18" />
      </svg>
    ),
  },
  {
    num: "03",
    id: "citation-architecture",
    name: "Citation Architecture",
    tagline: "The content layer",
    description: "Content engineering for AI extraction — attribution magnets, quotable data, answer-first structure.",
    why: "AI engines don't cite entire articles. They extract quotable fragments — statistics, one-sentence definitions, clear attributions. Without clean fragments to extract, even the best earned media results in zero citations.",
    example: "A cybersecurity company's blog post starting with \"74% of enterprise breaches originate from third-party vendor access.\" That sentence is an attribution magnet — clean, quotable, verifiable. AI engines extract it verbatim.",
    connects: "Sits on Entity Optimization (so AI knows who to cite) and Earned Authority (so the source is trusted). Feeds into GEO/AEO by making content extraction-friendly.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="16 18 22 12 16 6" />
        <polyline points="8 6 2 12 8 18" />
      </svg>
    ),
  },
  {
    num: "04",
    id: "geo-aeo",
    name: "GEO & AEO",
    tagline: "The distribution layer",
    description: "Generative Engine Optimization and Answer Engine Optimization — tactical optimization for AI search.",
    why: "Even with earned authority, entity optimization, and citation-ready content, you still need distribution. GEO ensures content appears in ChatGPT, Claude, and Gemini. AEO ensures it appears in Perplexity and Google AI Overviews.",
    example: "A B2B SaaS company ensuring comparison pages and research reports are indexed by AI crawlers with structured markup, optimized sitemaps, and semantic HTML. Perplexity cites them in answer results.",
    connects: "Takes the foundation (Earned Authority), identity (Entity Optimization), and content structure (Citation Architecture) and ensures AI systems can find, parse, and surface it.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <line x1="2" y1="12" x2="22" y2="12" />
        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
      </svg>
    ),
  },
  {
    num: "05",
    id: "measurement",
    name: "AI Visibility Measurement",
    tagline: "The feedback layer",
    description: "Tracking citation frequency, recommendation rate, and brand share of voice across AI platforms.",
    why: "Traditional PR metrics — impressions, AVE, media mentions — are vanity metrics in the AI era. What matters: How often does ChatGPT cite your brand? What's your recommendation rate on Perplexity? What's your share of voice across AI platforms?",
    example: "A startup tracking 50 high-intent queries weekly. They discover a 12% citation rate vs. the category leader's 47% — and use that data to prioritize earned media in specific publications AI engines trust.",
    connects: "Closes the loop. Reveals which layers are working, where citation gaps exist, and what to optimize next. Without measurement, MR is guesswork. With it, it's a compounding system.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <line x1="12" y1="20" x2="12" y2="10" />
        <line x1="18" y1="20" x2="18" y2="4" />
        <line x1="6" y1="20" x2="6" y2="16" />
      </svg>
    ),
  },
];

export default function StackPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: "The Machine Relations Stack",
    description: "A five-layer framework for earning AI engine citations and recommendations",
    url: "https://machinerelations.ai/stack",
    step: layers.map((l) => ({
      "@type": "HowToStep",
      name: l.name,
      text: l.description + " " + l.why,
      url: `https://machinerelations.ai/stack#${l.id}`,
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="site-wrapper">
        <header className="hero">
          <p className="hero-eyebrow">Framework</p>
          <h1>The Machine Relations <em>Stack</em></h1>
          <p className="hero-definition">
            Five interconnected layers that earn AI citations — from earned authority to visibility measurement. Each layer compounds the one below it.
          </p>
        </header>

        <div className="divider" />

        {/* Stack Diagram Illustration */}
        <section className="section">
          <div style={{ 
            display: 'flex', 
            flexDirection: 'column', 
            alignItems: 'center', 
            gap: '0.5rem',
            padding: '2rem 0',
            maxWidth: '400px',
            margin: '0 auto'
          }}>
            {layers.map((layer, i) => (
              <div key={layer.id}>
                {/* Layer card */}
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '1rem',
                  padding: '1rem 1.5rem',
                  background: 'var(--bg-elevated)',
                  border: '1px solid var(--border)',
                  borderRadius: '8px',
                  width: '100%',
                  minWidth: '320px'
                }}>
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: '40px',
                    height: '40px',
                    borderRadius: '8px',
                    border: '1px solid',
                    borderColor: 'var(--border)',
                    background: 'rgba(212, 201, 144, 0.1)',
                    color: 'var(--gold)',
                    flexShrink: 0
                  }}>
                    <div style={{ width: '20px', height: '20px' }}>
                      {layer.icon}
                    </div>
                  </div>
                  <div style={{ flex: 1 }}>
                    <div style={{ 
                      fontSize: '0.95rem', 
                      fontWeight: 500, 
                      color: 'var(--text)',
                      marginBottom: '0.15rem'
                    }}>
                      {layer.name}
                    </div>
                    <div style={{ 
                      fontSize: '0.75rem', 
                      color: 'var(--text-dim)',
                      fontStyle: 'italic'
                    }}>
                      {layer.tagline}
                    </div>
                  </div>
                  <div style={{
                    fontFamily: 'var(--serif)',
                    fontSize: '1.25rem',
                    color: 'var(--gold-dim)',
                    fontWeight: 400
                  }}>
                    {layer.num}
                  </div>
                </div>

                {/* Arrow connector (except after last item) */}
                {i < layers.length - 1 && (
                  <div style={{ 
                    display: 'flex', 
                    justifyContent: 'center',
                    margin: '0.25rem 0'
                  }}>
                    <svg 
                      width="24" 
                      height="20" 
                      viewBox="0 0 24 20" 
                      fill="none" 
                      stroke="var(--border)" 
                      strokeWidth="1.5" 
                      strokeLinecap="round" 
                      strokeLinejoin="round"
                    >
                      <path d="M12 0 L12 14" />
                      <path d="M7 9 L12 16 L17 9" />
                    </svg>
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        <div className="divider" />

        {/* Visual overview */}
        <section className="section">
          <div className="stack-overview">
            {layers.map((l) => (
              <a key={l.id} href={`#${l.id}`} className="stack-overview-item">
                <span className="stack-num">{l.num}</span>
                <span className="stack-overview-name">{l.name}</span>
                <span className="stack-overview-tag">{l.tagline}</span>
              </a>
            ))}
          </div>
        </section>

        {/* Detailed layers */}
        {layers.map((l, i) => (
          <div key={l.id}>
            <div className="divider" />
            <section className="section" id={l.id}>
              <div className="layer-header">
                <span className="layer-num">{l.num}</span>
                <div>
                  <h2 className="layer-title">{l.name}</h2>
                  <p className="layer-tagline">{l.tagline}</p>
                </div>
              </div>

              <p>{l.description}</p>

              <div className="detail-grid">
                <div className="detail-card">
                  <p className="detail-label">Why it matters</p>
                  <p>{l.why}</p>
                </div>
                <div className="detail-card">
                  <p className="detail-label">In practice</p>
                  <p>{l.example}</p>
                </div>
              </div>

              <p className="connects-text">
                <strong>How it connects:</strong> {l.connects}
              </p>
            </section>
          </div>
        ))}

        <div className="divider" />

        {/* Compounding section */}
        <section className="section">
          <h2>How the Stack Compounds</h2>
          <p>
            Machine Relations is not linear. Each layer reinforces the others — creating an <strong>Algorithm Credibility Moat</strong>: a compounding advantage where each citation makes the next citation more likely. Like SEO domain authority, but for AI.
          </p>

          <div className="callout-block" style={{ marginTop: "2rem" }}>
            <p className="callout-label">The Flywheel</p>
            <p style={{ color: "var(--text-muted)", fontSize: "0.9rem", lineHeight: "1.8" }}>
              Earned Authority validates → Entity Optimization resolves → Citation Architecture structures → GEO/AEO distributes → Measurement optimizes → <em>repeat</em>
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
