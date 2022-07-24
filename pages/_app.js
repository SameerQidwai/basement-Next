import React, { useState } from "react";
import App from "next/app";

import "antd/dist/antd.css"
import '../styles/header.css'
import '../styles/slideCarousel.css'
import '../styles/globals.css'
import '../styles/footer.css'
import '../styles/welcome.css'
import '../styles/service.css'
import "../styles/serviceImg.css";
import "../styles/success.css";
import "../styles/process.css";
import "../styles/conclusion.css";
import "../styles/reviews.css";
import "../styles/work.css";
import "../styles/modal.css";
import "../styles/general.css";
import "../styles/team.css";

import Layout from "../Component/Basic/PageLayout";
import EModal from "../Component/Modals/EModal";

const MyApp = ({ Component, pageProps })=> {
  const [open, setOpen] = useState(false)

  return <>
    <Layout openContact={()=>setOpen(true)} >
      <Component {...pageProps}  openContact={()=>setOpen(true)} />
    </Layout>
    <EModal visible={open} close={()=>setOpen(false)}/>
  </>
}
 // https://nextjs.org/docs/basic-features/layouts
     // "heroku-postbuild": "npm run build",
// 
export default MyApp
