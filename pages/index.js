import Head from 'next/head'
import HomeIndex from '../pages/home/index'

export default function Home() {
  
  return (
    <div >
      <Head>
        <title>ELITEOX RENO Building And Renovation Specialist in Ontario</title>
        <meta name="description" content="We offer custom construction and renovation services in Milton, Oakville, Burlington, Halton Hills, Guelph, Mississauga, Toronto, and the GTA. Our services include basement, kitchen, and bathroom renovation, flooring, roofing, painting, custom home building, building permits, and more. Contact us for your next home improvement project and let us build your dream." />
        <meta name="keywords" content="construction, renovation, remodeling, design, basement finishing, kitchen renovation, bathroom renovation, flooring, roofing, painting, custom home building, general contractor, building contractor, residential construction, commercial construction, architectural drawings, building permits, Milton, Oakville, Burlington, Halton Hills, Guelph, Mississauga, Toronto, GTA, custom homes, additions, underpinning, laneway suites, multi-family dwellings, below grade entrances, detached garages, custom cabinetry, countertops, waterproofing, walkout basement." />
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"/>
        <meta property="og:locale" content="en_US"/>
        <meta property="og:description" content="ELITEOX Building and Renovation is a construction and renovation company that provides quality services in Toronto, Mississauga, and the Greater Toronto Area. Our services include basement, kitchen, and bathroom remodeling, flooring and roofing installations, and interior and exterior painting." />
        {/* <meta property="og:url" content="https://mylegalbasement.ca/our-services/"/> */}
        <meta property="og:site_name" content="ELITEOX RENO"/>
        <meta property="og:type" content="website"/>
        <meta property="og:title" content="Leaders of ELITEOX RENO Specialist in Ontario"/>
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700;800;900&display=swap" rel="stylesheet"/>
        <link rel="icon" href="/favicon_horns.ico" />
      </Head>
      <HomeIndex/>   
     
    </div>     
  )
}


