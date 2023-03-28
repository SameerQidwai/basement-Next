import React, { useState } from 'react'

import Intoduction from './Intoduction'
import Process from './Process'
import Services from './Services'
import SlideCarousel from './SlideCarousel'
import Success from './Success'
import Work from './Work'
import Blogs from './Blogs'
import Conclusion from './Conclusion'
import Reviews from './Reviews'
import Welcome from './Welcome'
import Choose from './Choose'
import ContactArea from './ContactArea'
import Appointment from './Appointment'
import Municipalities from './Municipalities'
import NewsLetter from './NewsLetter'

const  Index = (props) =>{
  // const [open, setOpen] = useState(false)
  return (
    <>
      <SlideCarousel/>
      <Intoduction />
      <Services/>
      <Welcome/>
      {/* <Work /> */}
      <Choose/>
      <ContactArea/>
      <Appointment/>
      <Reviews/>
      <Municipalities/>
      <Blogs />
      <NewsLetter/>
      {/* <Success />
      <Process />
      <Conclusion /> */}
      {/* <EModal visible={open} close={()=>setOpen(false)}/> */}
    </>
  )
}

export default Index
