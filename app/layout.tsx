import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/content/Navbar";
import { Footer } from "@/components/content/Footer";
import { NavigationData } from "@/lib/data/navigations";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Sarah Cornelio",
  description: "Personal website showcasing my work and skills",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <main className="min-h-screen bg-gray-50">{children}</main>
        <Footer data={NavigationData.footer.data} />
      </body>
    </html>
  );
}
