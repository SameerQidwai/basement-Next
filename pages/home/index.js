import React, { useState } from 'react'

import Welcome from './Welcome'
import Process from './Process'
import Services from './Services'
import SlideCarousel from './SlideCarousel'
import Success from './Success'
import Work from './Work'
import Blogs from './Blogs'
import Conclusion from './Conclusion'
import Reviews from './Reviews'

const  Index = (props) =>{
  // const [open, setOpen] = useState(false)
  return (
    <>
      <SlideCarousel/>
      <Welcome />
      <Services/>
      <Success />
      <Work />
      <Process />
      <Reviews/>
      <Blogs />
      <Conclusion />
      {/* <EModal visible={open} close={()=>setOpen(false)}/> */}
    </>
  )
}

export default Index
