import "@styles/globals.scss";

import localFont from "next/font/local";
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
