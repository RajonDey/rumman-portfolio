import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://rumman-portfolio.vercel.app"),
  title: "Rumman Ahmed | Business Analyst · Educator · Researcher",
  description:
    "Professional portfolio of Rumman Ahmed - Business Analyst, Educator, and Researcher. Expertise in data analytics, automation, and business research. Based in Sylhet, Bangladesh.",
  keywords:
    "Business Analyst, Data Analytics, Education, Research, Python, R, SPSS, IGCSE, A-Level, Staff Asia, SUST, Bangladesh",
  authors: [{ name: "Rumman Ahmed" }],
  creator: "Rumman Ahmed",
  publisher: "Rumman Ahmed",
  robots: "index, follow",
  openGraph: {
    title: "Rumman Ahmed | Business Analyst · Educator · Researcher",
    description:
      "Dynamic Business Graduate with expertise in data analytics, automation, and research. Teaching IGCSE & A-Level Business and Economics.",
    type: "website",
    locale: "en_US",
    url: "https://rumman-portfolio.vercel.app",
    siteName: "Rumman Ahmed Portfolio",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Rumman Ahmed - Business Analyst, Educator, Researcher",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Rumman Ahmed | Business Analyst · Educator · Researcher",
    description:
      "Dynamic Business Graduate with expertise in data analytics, automation, and research.",
    images: ["/images/og-image.jpg"],
  },
  alternates: {
    canonical: "https://rumman-portfolio.vercel.app",
  },
  category: "portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Rumman Ahmed",
              jobTitle: "Business Analyst · Educator · Researcher",
              description:
                "Dynamic Business Graduate with experience teaching IGCSE & IAL Business and Economics, and working as a Business Analyst with Staff Asia.",
              email: "ahmedrumman546@gmail.com",
              telephone: "+8801758127395",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Sylhet",
                addressCountry: "Bangladesh",
              },
              alumniOf: "Shahjalal University of Science and Technology",
              knowsAbout: [
                "Data Analytics",
                "Business Research",
                "Education",
                "Python",
                "R",
                "SPSS",
              ],
              worksFor: {
                "@type": "Organization",
                name: "Staff Asia",
              },
              url: "https://rumman-portfolio.vercel.app",
            }),
          }}
        />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
