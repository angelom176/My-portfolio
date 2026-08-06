import { Inter, Geist_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
});

export const metadata = {
  title: "Ângelo's Portfolio",
  description:
    "Computing Science student focused on web development, software engineering and modern applications.",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={geistMono.variable}
      data-scroll-behavior="smooth"
    >
      <body className={inter.className}>{children}</body>
    </html>
  );
}