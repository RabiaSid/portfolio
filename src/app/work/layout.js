//===== Meta Data =====
export const metadata = {
  //===== Meta Tags =====
  title: "Rabia Azhar | MERN Stack Developer",
  description:
    "MERN Stack Developer with 3.5+ years of experience creating responsive, scalable, and user-friendly web applications using React.js, Next.js, Node.js, Express.js, and MongoDB.",

  //===== OG Tags =====
  openGraph: {
    title: "Rabia Azhar | MERN Stack Developer",
    description:
      "Experienced MERN Stack Developer specializing in React.js, Next.js, Node.js, and clean modern UI design.",
    url: "/work",
    siteName: "Rabia Azhar Portfolio",
    locale: "en_US",
    type: "website",
  },

  //===== Canonical =====
  alternates: { canonical: "/work" },
};

export default function RootLayout({ children }) {
  return children;
}
