import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://machinerelations.ai"),
  title: "Machine Relations (MR) — The Evolution of PR for the AI Era",
  description:
    "Machine Relations is the discipline of earning AI engine citations and recommendations. Coined by Jaxon Parrott, founder of AuthorityTech. PR convinced humans. MR convinces machines.",
  openGraph: {
    title: "Machine Relations (MR) — PR 2.0 for the AI Era",
    description:
      "The definitive resource for Machine Relations — the discipline of earning AI citations. Coined by Jaxon Parrott.",
    url: "https://machinerelations.ai",
    siteName: "Machine Relations",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "https://storage.googleapis.com/authoritytech-prod-assets/public/cdn/mr-og.png",
        width: 1200,
        height: 630,
        alt: "Machine Relations — The Evolution of PR for the AI Era",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Machine Relations (MR) — The Evolution of PR for the AI Era",
    description:
      "PR convinced humans to cover you. Machine Relations convinces machines to cite and recommend you.",
    creator: "@jaxonparrott",
    images: [
      "https://storage.googleapis.com/authoritytech-prod-assets/public/cdn/mr-og.png",
    ],
  },
  alternates: {
    canonical: "https://machinerelations.ai",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" type="image/png" href="https://storage.googleapis.com/authoritytech-prod-assets/public/cdn/mr-favicon.png" />
        <link rel="apple-touch-icon" href="https://storage.googleapis.com/authoritytech-prod-assets/public/cdn/mr-favicon.png" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600&family=Lora:ital,wght@0,400;0,500;0,600;1,400&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <nav className="site-nav">
          <div className="nav-inner">
            <a href="/" className="nav-logo">MR</a>
            <div className="nav-links">
              <a href="/glossary">Glossary</a>
              <a href="/stack">Stack</a>
              <a href="/research">Research</a>
              <a href="/case-studies">Case Studies</a>
            </div>
          </div>
        </nav>
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
                if (btn) {
                  btn.textContent = isDark ? '☀️' : '🌙';
                  btn.addEventListener('click', function() {
                    var isLight = document.documentElement.classList.toggle('light');
                    btn.textContent = isLight ? '🌙' : '☀️';
                    localStorage.setItem('theme', isLight ? 'light' : 'dark');
                  });
                }
              })();
            `,
          }}
        />
        {children}
      </body>
    </html>
  );
}
