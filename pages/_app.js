import React from "react";
import App from "next/app";
import '../styles/globals.css'
import "antd/dist/antd.css";
import "../styles/serviceImg.css";

const MyApp = ({ Component, pageProps })=> {
  return <Component {...pageProps} />
}

export default MyApp
