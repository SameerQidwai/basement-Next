import React from 'react'
import { Button, Col, Row, Typography } from 'antd'
import { PhoneFilled, ClockCircleOutlined, GlobalOutlined } from '@ant-design/icons'
// import GMap from "../../Core/GMap" 
const {Title , Text} = Typography

const WidgetFooter = () => {
    return (
        <>
        <Row
            className='top-footer'
            justify='space-between'
            gutter={[16, 40]}
        > 
            <Col xs={24} sm={24} md={12} lg={12} xl={6} >
                <Row gutter={[16, 40]}>
                    <Col span={24}>
                        <img src='footer-logo.png' width={150} height={150}/>
                    </Col>
                    <Col span={24}>
                        <Text>We are specialists in the construction of unique and exclusive properties. Our work inspires. We pride ourselves on delivering outstanding quality and design for leading clients across the world.</Text>
                    </Col>
                    {/* <Col span={24}>
                        <Button >Our Team</Button>
                    </Col> */}
                </Row>
            </Col>
            <Col xs={24} sm={9} md={5}>
                <Row gutter={[16, 20]}>
                    <Col span={24}>
                        <Title level={4}>LATEST TWEETS</Title>
                    </Col>
                    <Col span={24}>
                        <Text>Tweets by anvalehomes</Text>
                    </Col>
                </Row>
            </Col>
            <Col xs={24} sm={24} md={12} lg={12} xl={6}>
                <Row gutter={[16, 20]}>
                    <Col span={24}>
                        <Title level={4}>CONTACT US TODAY</Title>
                    </Col>
                    <Col span={24}>
                        <Row gutter={[0, 10]}>
                            <Col span={24}>
                                <Row justify="space-around">
                                    <Col><MailOutlined /></Col>
                                    <Col span={22} >
                                        <Text >azim.qidwai@gmail.com</Text>
                                    </Col>
                                </Row>
                            </Col>
                            <Col span={24}>
                                <Row justify="space-between">
                                    <Col> <PhoneFilled /> </Col>
                                    <Col span={22}>
                                        <Text>905-669-0471</Text>
                                    </Col>
                                </Row>
                            </Col>
                            <Col span={24}>
                                <Row justify="space-between">
                            <Col> <ClockCircleOutlined /> </Col>
                            <Col span={22}>
                                <Text>Monday - Friday: 9:00 AM - 6:00 PM</Text>
                            </Col>
                            </Row>
                            </Col>
                            <Col span={24}>
                                <Row justify="space-between">
                            <Col> <ClockCircleOutlined /> </Col>
                            <Col span={22}>
                                <Text>Saturday: 9:00 AM - 12:00 PM</Text>
                            </Col>
                            </Row>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Col>
            {/* <Col xs={24} sm={24} md={12} lg={12} xl={6}>
                <Row gutter={[0, 20]}>
                    <Col span={24}>
                        <Title level={4}>FIND US</Title>
                    </Col>
                    <Col span={24}>
                    <GMap
                        googleMapURL={`https://maps.googleapis.com/maps/api/js?key=AIzaSyC3te5IVkEUMgEcDH6d5l1ofxmsq3oUnVU&#038;language=en&#038;ver=1`}
                        loadingElement={<div style={{ height: `100%` }} />}
                        containerElement={<div style={{ height: `275px` }} />}
                        mapElement={<div style={{ height: `100%` }} />}
                    />
                    </Col>
                </Row>
            </Col> */}
        </Row>
        </>
    )
}

export default WidgetFooter