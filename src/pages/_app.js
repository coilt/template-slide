import "@/styles/globals.css";
import "@/styles/styles.css";
import Link from "next/link";
import { AnimatePresence } from "framer-motion";

export default function App({ Component, pageProps, router }) {
  return (
    <div className="main">
      <div className="header">
        <Link className="nav" href="/">
          Home
        </Link>
        <Link className="nav" href="/about">
          About
        </Link>
        <Link className="nav" href="/contact">
          Contact
        </Link>
      </div>
      <AnimatePresence mode="wait">
        <Component key={router.route} {...pageProps} />
      </AnimatePresence>
    </div>
  );
}
