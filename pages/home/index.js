import React, { useState } from 'react'

import Services from './Services'
import SlideCarousel from './SlideCarousel'
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
      <Services/>
      <Welcome/>
      <Choose/>
      <ContactArea/>
      <Projects/>
      <Appointment/>
      <Reviews/>
      <Municipalities/>
    </>
  )
}

export default Index
