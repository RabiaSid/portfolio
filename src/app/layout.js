//===== Import Fonts =====
import { Sora } from "next/font/google";
const sora = Sora({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
  display: "swap",
  variable: "--font-sora",
});
//===== Import Components =====
import { Header, Nav } from "@/components";
//===== Import Css =====
import "./globals.css";
//===== Meta Data =====
export const metadata = {
  metadataBase: new URL("https://rabia-azhar-portfolio.vercel.app/"),
  
  //===== Meta Tags =====
  title: "Rabia Azhar | MERN Stack Developer",
  description:
    "MERN Stack Developer with 3.5+ years of experience building modern, scalable, and responsive web applications. I specialize in React.js, Next.js, Node.js, and intuitive UI/UX experiences.",
  
  //===== OG Tags =====
  openGraph: {
    title: "Rabia Azhar | MERN Stack Developer",
    description:
      "Experienced MERN Stack Developer skilled in React.js, Next.js, Node.js, API integration, and creating clean, user-friendly front-end interfaces.",
    url: "/",
    siteName: "Rabia Azhar Portfolio",
    locale: "en_US",
    type: "website",
  },

  //===== Canonical =====
  alternates: { canonical: "/" },

  //===== Robots =====
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: true,
      "max-snippet": -1,
      "max-video-preview": -1,
      "max-image-preview": "large",
    },
  },

  //===== GEO Tags (Optional — can add country/city later) =====
  other: {},

  //===== Google Verification (Optional) =====
  verification: {
    other: {
      "": [""],
    },
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`page bg-site text-white bg-cover bg-no-repeat ${sora.variable} font-sora relative`}
      >
        <Nav />
        <Header />
        {children}
      </body>
    </html>
  );
}
