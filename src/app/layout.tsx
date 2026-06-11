import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme/ThemeProvider";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Rishab Vempati | CS & AI",
  description:
    "Portfolio of Rishab Vempati, a CS & AI student at Purdue University.",
};

// Applies the saved theme before paint to avoid a flash of the wrong theme.
const themeScript = `
  try {
    if (localStorage.getItem('theme') === 'dark') {
      document.documentElement.classList.add('dark');
    }
  } catch (e) {}
`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body
        className={`${inter.variable} bg-background text-foreground antialiased selection:bg-accent/20`}
      >
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
