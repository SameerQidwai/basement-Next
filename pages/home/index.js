import React, { useState } from 'react'

import Introduction from './Introduction'
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
import Projects from './Projects'

const  Index = (props) =>{
  // const [open, setOpen] = useState(false)
  return (
    <>
      <SlideCarousel/>
      <Introduction />
      <Services/>
      <Welcome/>
      {/* <Work /> */}
      <Choose/>
      <ContactArea/>
      <Projects/>
      <Appointment/>
      <Reviews/>
      <Municipalities/>
      <Blogs />
      {/* <Success />
      <Process />
      <Conclusion /> */}
      {/* <EModal visible={open} close={()=>setOpen(false)}/> */}
    </>
  )
}

export default Index
