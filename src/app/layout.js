import GoogleAnalytics from "./components/GoogleAnalytics";
import Menu from "./components/menu"; // Falls du eine Navbar hast
import Head from "./head";
import "@/app/styles/global.css"; // Falls du globale Styles hast

export const metadata = {
  title: "Baumgartner Webdesign Development Biel",
  description: "Webentwicklung und digitale Lösungen von Baumgartner Development.",
  keywords: "Webentwicklung, digitale Lösungen, Baumgartner, Webdesign, JavaScript, Next.js, React.js, Biel",
  author: "Bruno Baumgartner",
  openGraph: {
    title: "Baumgartner Development",
    description: "Webentwicklung und digitale Lösungen von Baumgartner Development.",
    url: "https://www.bellu.ch",
    images: [
      {
        url: "https://www.bellu.ch/assets/laptop.png",
        width: 800,
        height: 600,
        alt: "Baumgartner Development Titelbild",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Baumgartner Development",
    description: "Webentwicklung und digitale Lösungen von Baumgartner Development.",
    images: ["https://www.bellu.ch/pen.png"],
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="de">
     <Head /> 
      <body>
        <GoogleAnalytics />
        <Menu /> {/* Menü einfügen */}
        {children}
      </body>
    </html>
  );
}
