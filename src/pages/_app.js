import Mobilenavbar from "@/Components/Navbar/MobileNavbar";
import Navbar from "@/Components/Navbar/Navbar";
import "@/styles/globals.css";

import { useState } from "react";

export default function App({ Component, pageProps }) {
  const [mobNav, setmobNav] = useState(false);

  return (
    <>
      <Navbar mobNav={mobNav} setmobNav={setmobNav} />
      <Mobilenavbar setmobNav={setmobNav} mobNav={mobNav} />
      <Component {...pageProps} mobNav={mobNav} />
    </>
  );
}
