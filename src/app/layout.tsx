import type { Metadata } from "next";

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
  },
  twitter: {
    card: "summary_large_image",
    title: "Machine Relations (MR) — The Evolution of PR for the AI Era",
    description:
      "PR convinced humans to cover you. Machine Relations convinces machines to cite and recommend you.",
    creator: "@jaxonparrott",
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
      <body>{children}</body>
    </html>
  );
}
