import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Product Review Photo Analyzer",
  description: "Analyze customer review photos for insights. Detect defects, categorize issues, and generate trend reports using AI vision."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="6d8e5054-14e7-4c1a-b81c-02f77d3e0dae"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  );
}
