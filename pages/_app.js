import React from "react";
import App from "next/app";
import '../styles/globals.css'
import '../styles/footer.css'
import '../styles/header.css'
import '../styles/welcome.css'
import '../styles/service.css'
import "antd/dist/antd.css";
import "../styles/serviceImg.css";

const MyApp = ({ Component, pageProps })=> {
  return <Component {...pageProps} />
}

export default MyApp
