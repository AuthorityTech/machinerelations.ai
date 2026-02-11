import type { Metadata } from "next";
import "../globals.css";

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

export default function StackPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: "The Machine Relations Stack",
    description: "A five-layer framework for earning AI engine citations and recommendations",
    url: "https://machinerelations.ai/stack",
    step: [
      {
        "@type": "HowToStep",
        name: "Earned Authority",
        text: "Build Tier 1 media placements in publications AI engines trust. 82-89% of AI answers cite earned media over brand-owned content.",
        url: "https://machinerelations.ai/stack#earned-authority",
      },
      {
        "@type": "HowToStep",
        name: "Entity Optimization",
        text: "Structure your brand's digital identity so AI systems can resolve, verify, and cite it consistently across platforms.",
        url: "https://machinerelations.ai/stack#entity-optimization",
      },
      {
        "@type": "HowToStep",
        name: "Citation Architecture",
        text: "Engineer content for AI extraction with attribution magnets, quotable data, and answer-first structure.",
        url: "https://machinerelations.ai/stack#citation-architecture",
      },
      {
        "@type": "HowToStep",
        name: "GEO & AEO",
        text: "Tactically optimize for generative and answer engines to ensure content appears in ChatGPT, Perplexity, Gemini, and AI Overviews.",
        url: "https://machinerelations.ai/stack#geo-aeo",
      },
      {
        "@type": "HowToStep",
        name: "AI Visibility Measurement",
        text: "Track citation frequency, recommendation rate, and brand share of voice across AI platforms.",
        url: "https://machinerelations.ai/stack#measurement",
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
          <a href="/glossary">Glossary</a>
          {" • "}
          <span style={{ color: "var(--text)" }}>Stack</span>
          {" • "}
          <a href="/research">Research</a>
          {" • "}
          <a href="/case-studies">Case Studies</a>
        </nav>

        <header className="hero">
          <p className="hero-eyebrow">Framework</p>
          <h1>The Machine Relations Stack</h1>
          <p className="hero-definition">
            Five interconnected layers that earn AI citations — from earned authority to visibility measurement.
          </p>
        </header>

        <div className="divider" />

        <section className="section">
          <h2>The Five Layers</h2>
          <p>
            Machine Relations is not a single tactic. It is a discipline with five interconnected components, each building on the layer below.
          </p>

          <ul className="stack-list">
            <li>
              <span className="stack-label">1. Earned Authority</span>
              <span className="stack-desc">
                Tier 1 media placements AI engines trust.
              </span>
            </li>
            <li>
              <span className="stack-label">2. Entity Optimization</span>
              <span className="stack-desc">
                Structured identity signals machines verify.
              </span>
            </li>
            <li>
              <span className="stack-label">3. Citation Architecture</span>
              <span className="stack-desc">
                Content engineered for AI extraction.
              </span>
            </li>
            <li>
              <span className="stack-label">4. GEO &amp; AEO</span>
              <span className="stack-desc">
                Tactical optimization for generative and answer engines.
              </span>
            </li>
            <li>
              <span className="stack-label">5. AI Visibility Measurement</span>
              <span className="stack-desc">
                Tracking citation frequency and recommendation rate.
              </span>
            </li>
          </ul>
        </section>

        <div className="divider" />

        <section className="section" id="earned-authority">
          <h2>Layer 1: Earned Authority</h2>
          <p>
            <strong>Definition:</strong> Tier 1 media placements in publications AI engines trust and cite.
          </p>
          <p>
            <strong>Why it matters:</strong> Research shows 82-89% of AI-generated answers cite earned media over brand-owned content. AI engines trust third-party validation — Forbes, TechCrunch, Wall Street Journal — exponentially more than press releases or brand blogs. Without earned authority, the other four layers have nothing to amplify. This is the foundation layer.
          </p>
          <p>
            <strong>What it looks like in practice:</strong> A fintech startup securing a TechCrunch feature on their AI-powered lending platform. When someone asks ChatGPT &quot;What are the best AI fintech tools?&quot; — the TechCrunch article becomes a citation source. The brand is now in the training corpus and recommendation pipeline.
          </p>
          <p>
            <strong>How it connects:</strong> Earned Authority feeds Entity Optimization (validating the brand entity across knowledge graphs) and Citation Architecture (creating quotable, AI-extractable content within those placements).
          </p>
        </section>

        <div className="divider" />

        <section className="section" id="entity-optimization">
          <h2>Layer 2: Entity Optimization</h2>
          <p>
            <strong>Definition:</strong> Structuring a brand&apos;s digital identity so AI systems can resolve, verify, and cite it consistently across platforms.
          </p>
          <p>
            <strong>Why it matters:</strong> AI engines need to <em>resolve</em> your brand as a distinct entity before they can cite it. Inconsistent entity definitions, missing schema markup, or lack of knowledge graph presence means the AI sees your brand as fragmented or unverifiable. If AI can&apos;t resolve your brand entity, it can&apos;t cite you — even if you have earned authority.
          </p>
          <p>
            <strong>What it looks like in practice:</strong> A SaaS company with consistent Organization schema across their site, verified knowledge panel on Google, Wikidata entry, and unified entity references in Crunchbase, LinkedIn, and media mentions. When an AI system encounters the brand name, it can instantly verify and contextualize it.
          </p>
          <p>
            <strong>How it connects:</strong> Entity Optimization turns Earned Authority signals into machine-readable identity proofs. It enables Citation Architecture by giving AI a clear, resolvable brand to cite.
          </p>
        </section>

        <div className="divider" />

        <section className="section" id="citation-architecture">
          <h2>Layer 3: Citation Architecture</h2>
          <p>
            <strong>Definition:</strong> Content engineering for AI extraction — attribution magnets, quotable data, answer-first structure.
          </p>
          <p>
            <strong>Why it matters:</strong> AI engines don&apos;t cite entire articles. They extract <em>quotable fragments</em> — statistics, one-sentence definitions, clear attributions. Citation Architecture is the bridge between what you publish and what AI quotes. Without it, even the best earned media and entity signals result in zero citations because there&apos;s nothing clean to extract.
          </p>
          <p>
            <strong>What it looks like in practice:</strong> A cybersecurity company&apos;s blog post that starts with &quot;74% of enterprise breaches originate from third-party vendor access, according to Vanta&apos;s 2025 Security Report.&quot; That sentence is an attribution magnet — a clean, quotable, verifiable data point that AI engines can extract verbatim. When someone asks an AI about vendor security risks, that stat gets cited.
          </p>
          <p>
            <strong>How it connects:</strong> Citation Architecture sits on top of Entity Optimization (so the AI knows <em>who</em> to cite) and Earned Authority (so the source is trusted). It feeds into GEO/AEO by making content extraction-friendly for AI systems.
          </p>
        </section>

        <div className="divider" />

        <section className="section" id="geo-aeo">
          <h2>Layer 4: GEO &amp; AEO</h2>
          <p>
            <strong>Definition:</strong> Generative Engine Optimization (GEO) and Answer Engine Optimization (AEO) — tactical optimization for AI search.
          </p>
          <p>
            <strong>Why it matters:</strong> Even with earned authority, entity optimization, and citation-ready content, you still need distribution. GEO ensures your content appears in ChatGPT, Claude, and Gemini. AEO ensures it appears in Perplexity and Google AI Overviews. This is the tactical layer — the mechanics of ensuring AI systems can access, parse, and surface your content.
          </p>
          <p>
            <strong>What it looks like in practice:</strong> A B2B SaaS company ensuring their comparison pages, use case studies, and research reports are indexed by AI search engines. They use structured markup, sitemaps optimized for AI crawlers, and semantic HTML that makes extraction trivial. When someone asks Perplexity &quot;What are the best project management tools for remote teams?&quot; — the company appears in the answer with a direct citation.
          </p>
          <p>
            <strong>How it connects:</strong> GEO/AEO is the distribution layer. It takes the foundation (Earned Authority), the identity (Entity Optimization), and the content structure (Citation Architecture) and ensures AI systems can find, parse, and surface it. Without this layer, you&apos;re invisible in AI search.
          </p>
        </section>

        <div className="divider" />

        <section className="section" id="measurement">
          <h2>Layer 5: AI Visibility Measurement</h2>
          <p>
            <strong>Definition:</strong> Tracking citation frequency, recommendation rate, and brand share of voice across AI platforms.
          </p>
          <p>
            <strong>Why it matters:</strong> You can&apos;t optimize what you don&apos;t measure. Traditional PR metrics — impressions, AVE, media mentions — are vanity metrics in the AI era. What matters is: How often does ChatGPT cite your brand? What percentage of relevant queries does Perplexity recommend you for? What is your brand&apos;s share of voice across AI platforms? AI Visibility Measurement replaces vanity metrics with machine-verifiable outcomes.
          </p>
          <p>
            <strong>What it looks like in practice:</strong> A growth-stage startup tracks 50 high-intent queries related to their product category. Every week, they audit: How many times does ChatGPT cite us? How many times does Perplexity recommend us? What is our citation rate vs. competitors? They discover they have a 12% citation rate vs. the category leader&apos;s 47% — and use that data to prioritize earned media in specific publications AI engines trust.
          </p>
          <p>
            <strong>How it connects:</strong> Measurement closes the loop. It tells you which layers are working, where the citation gaps are, and what to optimize next. Without measurement, Machine Relations is guesswork. With it, it&apos;s a repeatable, compounding system.
          </p>
        </section>

        <div className="divider" />

        <section className="section">
          <h2>How the Stack Compounds</h2>
          <p>
            Machine Relations is not linear. Each layer reinforces the others:
          </p>
          <ul style={{ listStyle: "disc", paddingLeft: "1.5rem", color: "var(--text-muted)", marginTop: "1rem" }}>
            <li style={{ marginBottom: "0.5rem" }}>
              <strong style={{ color: "var(--text)" }}>Earned Authority</strong> validates your brand, making Entity Optimization signals trustworthy.
            </li>
            <li style={{ marginBottom: "0.5rem" }}>
              <strong style={{ color: "var(--text)" }}>Entity Optimization</strong> gives AI systems a clear identity to cite, making Citation Architecture effective.
            </li>
            <li style={{ marginBottom: "0.5rem" }}>
              <strong style={{ color: "var(--text)" }}>Citation Architecture</strong> turns content into attribution magnets, making GEO/AEO distribution valuable.
            </li>
            <li style={{ marginBottom: "0.5rem" }}>
              <strong style={{ color: "var(--text)" }}>GEO/AEO</strong> ensures AI systems surface your content, making Measurement actionable.
            </li>
            <li>
              <strong style={{ color: "var(--text)" }}>Measurement</strong> reveals which layers need optimization, creating a feedback loop.
            </li>
          </ul>
          <p style={{ marginTop: "1.5rem" }}>
            The result: an <strong>Algorithm Credibility Moat</strong> — a compounding advantage where each citation makes the next citation more likely. Like SEO domain authority, but for AI.
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
