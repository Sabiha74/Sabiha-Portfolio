import type { Metadata, Viewport } from "next";
// @ts-ignore Next.js handles this CSS import at build time.
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { personalInfo } from "@/data/portfolioData";

export const metadata: Metadata = {
  title: `${personalInfo.name} | ${personalInfo.role} Portfolio`,
  description: `${personalInfo.role} portfolio of ${personalInfo.name}, a BSc in CSE graduate from ${personalInfo.institution}, ICPC 2024 Dhaka Regional Contestant, and NGPC 2022 Finalist. Proficient in C, C++, Python, JavaScript, React, Next.js, and basic Laravel.`,
  keywords: [
    "Sabiha Mashruha Dipita",
    "Full Stack Developer",
    "Frontend Developer",
    "React Developer",
    "Next.js Developer",
    "Laravel",
    "Python",
    "C++",
    "CSE Graduate",
    "Daffodil International University",
    "ICPC 2024 Dhaka Regional",
    "NGPC 2022 Finalist",
    "Rangpur Bangladesh",
    "Tailwind CSS",
  ],
  authors: [{ name: personalInfo.name }],
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#070B14" },
  ],
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth" suppressHydrationWarning>
      <body className="font-sans antialiased bg-white dark:bg-navy-950 text-slate-900 dark:text-slate-100 transition-colors duration-200">
        <ThemeProvider>
          <div className="flex min-h-screen flex-col">
            <Navbar />
            <div className="flex-1">{children}</div>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}

