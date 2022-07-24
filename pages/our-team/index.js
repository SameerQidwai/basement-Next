import React from 'react'
import { Col, Divider, Image, Row, Typography } from 'antd'
const {Title, Text, Paragraph} = Typography

const  Index = (props) =>{
  // const [open, setOpen] = useState(false)
  return (
    <div className="pt-30">
      <div className='bg-f5 pb-80 px-30 '>
        <div className="counter-curve-up" >
            <svg 
                xmlns="http://www.w3.org/2000/svg" 
                version="1.1" 
                width="100%" 
                height="100" 
                viewBox="0 0 100 100" 
                preserveAspectRatio="none" 
                className="counter-svg"
                // fill="rgba(255, 0, 0, 1)"
                fill="rgba(255,255,255,1)"
            >
                <path d="M0 0 C50 180 100 0 100 0 Z" ></path>
            </svg>
        </div>
        <Row  justify="center" align="top">
            <Col span={24} className="mt-80">
                <Row justify="space-around">
                    <Col>
                        <Title className='main-light-title'>Meet Angelo</Title>
                    </Col>
                </Row>
            </Col>
            <Col span={24}>
                <Row justify="space-around">
                    <Col >
                        <Divider className="blue-line"/>
                    </Col>
                </Row>
            </Col>
            <Col span={24} className="mb-30">
                <Row justify="space-around">
                    <Col xs={22} sm={19} md={19} lg={18} xl={14} className="c-74 fs-15 lh-2_27 mb-20">
                        <Paragraph><a>Anvale Homes</a>  was founded in 2007 by Angelo Gerardi who with a unique set of acquired skills and passion in home building and creating high quality crafted homes and spaces understands that building or renovating a home is as much of a financial investment as it is an emotional one.  This is why Anvale Homes goes beyond simply building your dream house; we are dedicated to creating a space you’d be proud to call home.</Paragraph>
                        <Paragraph>Angelo has a hands-on approach to building your home.  He personally hand-picks and works with a team of designers, suppliers and subcontractors to ensure that each home is constructed with the utmost skill, quality and craftsmanship suited to your needs, decorative taste and lifestyle.</Paragraph>
                        <Paragraph>Angelo works with you through every stage of the project in order to ensure that you enjoy every bit of customizing your home. From providing floor plans to picking the perfect back splash, no detail is too small to go unnoticed.</Paragraph>
                        <Paragraph>No matter how extensive your project is, Angelo offers an in-home preliminary consultation to discuss potential plans, budget, and wish list.</Paragraph>
                        <Paragraph>Anvale Homes is a member of <a className='cursor-text'>Renomark, BILD, Renovantage, SOFA, and Tarion Warranty</a> in order to ensure that they provide you with high-quality and up-to-date products and designs. </Paragraph>
                    </Col>
                </Row>
            </Col>
            <Col span={24}>
                <Row justify="space-around">
                    <Col className='person-img-container hover-type-zoomin'> 
                        <Image src="angelo_hs.jpg" preview={false}/> 
                    </Col>
                </Row>
            </Col>
            <Col span={24} className='c-33 fs-18 fw-4 lh-1_52'>
                <Row justify='space-around' >
                    <Col md={24} lg={24} xl={18} className='bg-ff py-40 txt-center'>
                        <Row justify='space-around'>
                            <Col>
                                <Text>Angelo Gerardi</Text>
                            </Col>
                        </Row>
                        <Row justify='space-around'>
                            <Col>
                                <Text>Founder & Experience Manager</Text>
                            </Col>
                        </Row>
                        <Row justify='space-around'>
                            <Col xs={20} sm={21} md={23} lg={22} xl={22} className="c-74 fs-15 lh-2_27 mb-20 txt-center mt-25">
                                <Paragraph >Experienced in masonry, carpentry, roofing, plumbing, interior custom millwork, and architectural and mechanical engineering, Angelo has the ability and knowledge to oversee all stages of a project. Whether you’re looking to add an extension to your home or build a house from the ground up, Angelo oversees every detail to ensure quality, as well as the objective budget and schedule, are met.</Paragraph>
                                <Paragraph>As a strong on-site project manager, Angelo takes on the responsibility of hiring, scheduling, coordinating, supervising and motivating in-house employees and subcontracted craftsmen in order to create a stress-free process for the client during the duration of the project. Proficient in interpreting blueprints and Ontario Building Codes, Angelo collaborates with architects, engineers and building inspectors to assure regulations and standards are met.</Paragraph>
                                <Paragraph>As part of his commitment to quality, he uses only the finest construction materials, follows best building practices and can offer you environmentally friendly products and materials. You will benefit from optimal results that can only be the result of experienced designers, managers and builders who share a vested interest in the construction of your dream home.</Paragraph>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Col>
        </Row>
      </div>
    </div>
  )
}

export default Index
