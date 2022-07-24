import React, {useState, useEffect, useRef} from 'react'
import { Col, Row, Typography, Carousel, Divider } from 'antd'
import {  UserOutlined } from '@ant-design/icons'
import { useWindowDimensions } from '../../Component/useFunction'

const {Title , Text} = Typography

const Reviews = () => {
    const ref = useRef()
    const {height, width} = useWindowDimensions() 

    return (
        <div className='bg-f5'>
            <div
                className="reviews-main"
                style={{
                    backgroundImage: 'url(home-parallax.webp)',
                }} 
            >  
                {/* <div className='bg-f5'> */}
                    <div className="reviews-curve-up" >
                        <svg 
                            xmlns="http://www.w3.org/2000/svg" 
                            version="1.1" 
                            width="100%" 
                            height="100" 
                            viewBox="0 0 100 100" 
                            preserveAspectRatio="none" 
                            className="reviews-svg"
                            // fill="rgba(255, 0, 0, 1)"
                            fill="rgba(245,245,245,1)"
                        >
                            <path d="M0 0 C50 180 100 0 100 0 Z" ></path>
                        </svg>
                    </div>
                {/* </div> */}
                <div className='reviews-content'>
                    <Row justify="center" align="middle" gutter={[0, 15]} >
                        <Col span={24}>
                            <Row justify="space-around">
                                <Col>
                                    <Title >What Our Clients Say</Title>
                                </Col>
                            </Row>
                            <Row justify="space-around">
                                <Col>
                                    <Divider className="blue-line"/>
                                </Col>
                            </Row>
                            <Row justify="space-around">
                                <Col >
                                    <UserOutlined />
                                </Col>
                            </Row>
                        </Col>
                        <Col span={24}>
                            <Carousel autoplay adaptiveHeight pauseOnDotsHover >
                                <div >
                                    <Row justify="space-around"  gutter={[0, 30]}>
                                        <Col xs={24} sm={21} md={18} lg={15}>
                                        <Text italic >
                                            “It was a pleasure to work with such professional, honest and caring people throughout my project. They are a team of exceptional individuals, competent in their specific areas of trade. Angelo is extremely detail-oriented, a perfectionist, and a craftsman. He is meticulous with every facet of his work and leaves the work site clean. Thank you for making this remodeling job so painless and for adding so much to our home!”
                                        </Text>
                                        </Col>
                                        <Col span={22}><Title level={4}>RANDY DEANGELIS</Title></Col>
                                    </Row>
                                </div>
                                <div >
                                    <Row justify="space-around"  gutter={[0, 30]}>
                                        <Col xs={24} sm={21} md={18} lg={15}>
                                            <Text italic >
                                                “Anvale Homes did an outstanding job finishing our basement. Angelo listened to what we wanted and was very helpful with design ideas. The crew was very skilled, always on time and did a great job keeping the workplace clean. The entire process was stress-free. Everyone was great to work with and did a great job of keeping it all on schedule and within the budget. I would highly recommend Anvale Homes and Angelo Gerardi to assist in any of your renovations or home building needs.”
                                            </Text>
                                        </Col>
                                        <Col span={22}><Title level={4}>VITO MACRI</Title></Col>
                                    </Row>
                                </div>
                                <div >
                                    <Row justify="space-around"  gutter={[0, 30]}>
                                        <Col xs={24} sm={22} md={20} lg={20} xl={18} xxl={15}>
                                            <Text italic >
                                                “Angelo was a complete joy to work with.  He was attentive to my detailing during the design development process.  He was very accommodating during the build and fairly negotiated changes (both additions and deletions to scope).  His crew of subcontractors were top notch, professional, perfectionists and easy to work with.  The work was performed in a timely fashion with minimal description to the household and no unexpected delays/breaks in work progress …
                                                Good contractors and most importantly good people are hard to find these days so I try to support them as much as I can once i find them.  Anvale Homes gets my full recommendation!”
                                            </Text>
                                        </Col>
                                        <Col span={22}><Title level={4}>PAUL C</Title></Col>
                                    </Row>
                                </div>
                            </Carousel>
                        </Col>
                    </Row>
                </div>
                {/* <div className='bg-f5'> */}
                    <div className="reviews-curve-bottom" >
                        <svg 
                            xmlns="http://www.w3.org/2000/svg" 
                            version="1.1" 
                            width="100%" 
                            height="100" 
                            viewBox="0 0 100 100" 
                            preserveAspectRatio="none" 
                            className="reviews-svg"
                            // fill="rgb(141 139 139), ">
                            fill="rgba(245,245,245,1)">
                                <path  d="M0 100 C50 0 50 0 100 100 Z"></path>
                        </svg>
                    </div>
                {/* </div> */}
            </div> 
        </div>
    )
}


export default Reviews
