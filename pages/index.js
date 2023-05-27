import React from 'react'
import Head from 'next/head'
import HomeIndex from '../pages/home/index'

export default function Home() {
  
  return (
    <div >
      <React.StrictMode>
      <Head>
        <title>Legal Basements | Complete Home Renovations</title>
        <meta name="description" content="EliteOX Reno is your trusted partner for all your home renovation needs. With over 15 years of experience and a team of experts, we specialize in basement renovations, kitchen remodels, home additions, and much more. Contact us today to schedule a consultation and transform your home into your dream space." />
        <meta name="keywords" content="construction, renovation, remodeling, design, basement finishing, kitchen renovation, bathroom renovation, flooring, roofing, painting, custom home building, general contractor, building contractor, residential construction, commercial construction, architectural drawings, building permits, Milton, Oakville, Burlington, Halton Hills, Guelph, Mississauga, Toronto, GTA, custom homes, additions, underpinning, laneway suites, multi-family dwellings, below grade entrances, detached garages, custom cabinetry, countertops, waterproofing, walkout basement." />
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"/>
        <meta name="author" content="sQidwai"/>

        {/* <meta property="og:image" content="https://eliteoxreno.com/meta-img.jpg"/> */}
        <meta property="og:image" content="https://eliteoxreno.com/meta_image4.jpg"/>
        {/* <meta property="og:image" content="https://eliteoxreno.com/myban4.jpg"/> */}
        {/* <meta property="og:image" content="https://eliteoxreno.com/myban.jpg"/> */}
        {/* <meta property="og:image:type" content="image/jpeg"/>*/}
        <meta property="og:image:width" content="1200"/>
        <meta property="og:image:height" content="630"/> 

        <meta property="og:author" content="sQidwai"/>
        <meta property="og:locale" content="en_US"/>
        <meta property="og:description" content="EliteOX Reno is your trusted partner for all your home renovation needs. With over 15 years of experience and a team of experts, we specialize in basement renovations, kitchen remodels, home additions, and much more. Contact us today to schedule a consultation and transform your home into your dream space." />
        <meta property="og:url" content="https://eliteoxreno.com/our-services/"/>
        <meta property="og:site_name" content="ELITEOX RENO"/>
        <meta property="og:type" content="website"/>
        <meta property="og:title" content="Legal Basements | Complete Home Renovations"/>
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700;800;900&display=swap" rel="stylesheet"/>
        <link rel="icon" href="https://eliteoxreno.com/favicon_horns.ico" />
      </Head>
      <HomeIndex/>   
      </React.StrictMode>
    </div>     
  )
}


