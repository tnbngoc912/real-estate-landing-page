import "@styles/globals.scss";
import { Inter } from "next/font/google";
import { Space_Grotesk } from "next/font/google";
import localFont from "next/font/local";

export const inter = Inter({ subsets: ["latin"] });

export const spaceGrotesk = Space_Grotesk({ subsets: ["latin"] });

const amulya = localFont({
  src: [
    {
      path: "../public/fonts/amulya-regular.woff2",
      weight: "400"
    },
    {
      path: "../public/fonts/amulya-medium.woff2",
      weight: "500"
    }
  ]
});

export default function App({ Component, pageProps }) {
  return (
    <>
      <style jsx global>{`
        :root {
          --amulya-font: ${amulya.style.fontFamily};
        }
      `}</style>
      <main>
        <Component {...pageProps} />
      </main>
    </>
  );
}
