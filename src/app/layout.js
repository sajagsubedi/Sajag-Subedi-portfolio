import "@/styles/globals.css";
import { Header, Footer, ScrollTop } from "@/components";

export const metadata = {
  title: "Sajag Subedi: Innovative Web Developer",
  description:
  "Sajag,full stack web developer. Discover the realm of cutting-edge tech solutions and explore the services offered by this passionate and skilled professional.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta
          name="google-site-verification"
          content="8AAWKlJicFQHfFOrKE_U6c5NXefY5ev3ZMlZedRGwYA"
        />
         <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="57x57" href="favicon.ico" />
        <link
          href="https://fonts.googleapis.com/css2?family=Fuzzy+Bubbles&display=swap"
          rel="stylesheet"
        />
        </head>
        <body>
        <ScrollTop />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}

