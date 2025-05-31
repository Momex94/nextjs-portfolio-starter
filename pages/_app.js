import { useEffect } from "react";


function MyApp({ Component, pageProps }) {
  useEffect(() => {
    if (typeof window !== "undefined" && window.Pi?.init) {
      window.Pi.init({
        version: "2.0",
      });
    }
  }, []);

  return <Component {...pageProps} />;
}

export default MyApp;
