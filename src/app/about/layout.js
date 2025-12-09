//===== Meta Data =====
export const metadata = {
  //===== Meta Tags =====
  title: "Rabia Azhar | MERN Stack Developer",
  description:
    "MERN Stack Developer with 3.5+ years of experience building modern, scalable, and user-focused web applications using React.js, Next.js, Node.js, and intuitive UI/UX techniques.",

  //===== OG Tags =====
  openGraph: {
    title: "Rabia Azhar | MERN Stack Developer",
    description:
      "Experienced MERN Stack Developer specializing in React.js, Next.js, Node.js, responsive UI, and clean, high-performance front-end development.",
    url: "/about",
    siteName: "Rabia Azhar Portfolio",
    locale: "en_US",
    type: "website",
  },

  //===== Canonical =====
  alternates: { canonical: "/about" },
};

export default function RootLayout({ children }) {
  return children;
}
