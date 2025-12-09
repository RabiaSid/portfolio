//===== Meta Data =====
export const metadata = {
  //===== Meta Tags =====
  title: "Rabia Azhar | Thank You",
  description:
    "Thank you for getting in touch! Your message has been received, and I will respond shortly. — Rabia Azhar, MERN Stack Developer.",

  //===== OG Tags =====
  openGraph: {
    title: "Rabia Azhar | Thank You",
    description:
      "Thank you for contacting me. I appreciate your message and will get back to you soon. — MERN Stack Developer, Rabia Azhar.",
    url: "/thank-you",
    siteName: "Rabia Azhar Portfolio",
    locale: "en_US",
    type: "website",
  },

  //===== Canonical =====
  alternates: { canonical: "/thank-you" },
};

export default function RootLayout({ children }) {
  return children;
}
