//===== Meta Data =====
export const metadata = {
  //===== Meta Tags =====
  title: "Rabia Azhar | MERN Stack Developer",
  description:
    "MERN Stack Developer with 3.5+ years of experience building responsive, scalable, and user-friendly web applications using React.js, Next.js, Node.js, and modern UI frameworks.",

  //===== OG Tags =====
  openGraph: {
    title: "Rabia Azhar | MERN Stack Developer",
    description:
      "Experienced MERN Stack Developer specializing in React.js, Next.js, Node.js, clean UI, and high-performance front-end development.",
    url: "/contact",
    siteName: "Rabia Azhar Portfolio",
    locale: "en_US",
    type: "website",
  },

  //===== Canonical =====
  alternates: { canonical: "/contact" },
};

export default function RootLayout({ children }) {
  return children;
}
