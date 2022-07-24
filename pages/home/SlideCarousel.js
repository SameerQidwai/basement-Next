import React, {useState, useEffect } from 'react'
import { Button, Carousel, Col, Row, Typography } from 'antd';
import { useWindowDimensions } from '../../Component/useFunction';
const { Title, Text } = Typography;


const SlideCarousel = () => {
    const {height, width} = useWindowDimensions()
    return (
        <Carousel  > 
            <div >
                <div style={{...style.contentStyle(width), ...style.carousel1}} className="carousel" >
                    <div>
                        <Row justify="center" align="bottom" gutter={[0, 5]} className="margin-top-vw">
                            <Col span={24} >
                                <Row justify="center">
                                    <Col className="carousel-heading">
                                        <Title className='carousel-title'> HELPING BUILD YOUR DREAMS </Title> 
                                    </Col>
                                </Row>
                            </Col>
                            <Col span={24} >
                                <Row justify='center'>
                                    <Col className="carousel-subheading carousel-heading">
                                        <Text className='carousel-text'  > 
                                            Together We Design & Build Inspiring Dream Homes
                                        </Text>
                                    </Col>

                                </Row>
                            </Col>
                            <Col span={24}>
                                <Row justify="center" align="middle" gutter={[25]} className="padding-top-vw">
                                    <Col className='carousel-btn-col'> <Button size="large" className='carousel-btn1 carousel-btn'> SEE ARE PROCESS</Button> </Col>
                                    <Col className='carousel-btn-col'> <Button size="large" className='carousel-btn2 carousel-btn'> GET A QOUTE TODAY</Button> </Col>
                                </Row>
                            </Col>
                        </Row>
                    </div>
                </div>
            </div>
            <div > 
                <div style={{...style.contentStyle(width), ...style.carousel2}} className="carousel" >
                    <div>
                        <Row justify="center" align="bottom" gutter={[0, 5]} className="margin-top-vw" >
                            <Col span={24} >
                                <Row justify="center">
                                    <Col style={{backgroundColor: 'rgba(0,0,0,0.4)'}} className="carousel-heading">
                                        <Title className='carousel-title' > HOW DREAMS COME TOGETHER </Title> 
                                    </Col>
                                </Row>
                            </Col>
                            <Col span={24} >
                                <Row justify='center'>
                                    <Col className="carousel-subheading carousel-heading">
                                        <Text className='carousel-text'  > 
                                            Helping you through your plans and ideas
                                        </Text>
                                    </Col>

                                </Row>
                            </Col>
                            <Col span={24}>
                                <Row justify="center" align="middle" gutter={[25]} className="padding-top-vw">
                                    <Col > <Button size="large" className='carousel-btn1 carousel-btn'> EXPLORE OUR WORK</Button> </Col>
                                    <Col> <Button size="large" className='carousel-btn2 carousel-btn'> GET A QOUTE TODAY</Button> </Col>
                                </Row>
                            </Col>
                        </Row>
                    </div>
                </div>
            </div>
        </Carousel>
    )
}
export default SlideCarousel


const style = {
    carousel1: {
        backgroundImage: 'url(FP-92873F.jpg)'
    },
    carousel2: {
        backgroundImage: 'url(29-1133.jpg)'
    },
    contentStyle: (width)=>({
        height: width * 0.6 <1000 ?width * 0.6 :1000,
    }),
}
