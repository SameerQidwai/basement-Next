import React from 'react'
import { Button, Col, Row, Typography } from 'antd'
import { PhoneFilled, ClockCircleOutlined, MailOutlined } from '@ant-design/icons'
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
            <Col xs={24} sm={24} md={10} lg={12} xl={6} >
                <Row gutter={[16, 20]}>
                    <Col span={24}>
                        <Title level={4}>ABOUT OUR COMPANY</Title>
                    </Col>
                    <Col span={24}>
                        <img src='footer-logo.png' width={80} height={80}/>
                    </Col>
                    <Col span={24}>
                        <Text>We are specialists in the construction of unique and exclusive properties. Our work inspires. We pride ourselves on delivering outstanding quality and design for leading clients across the world.</Text>
                    </Col>
                    {/* <Col span={24}>
                        <Button >Our Team</Button>
                    </Col> */}
                </Row>
            </Col>
            <Col xs={24} sm={9} md={6}>
                <Row gutter={[16, 5]}>
                    <Col span={24}>
                        <Title level={4}>QUICK LINK</Title>
                    </Col>
                    <Col span={24}>
                        <Text>HOME</Text>
                    </Col>
                    <Col span={24}>
                        <Text>OUR SERVICES</Text>
                    </Col>
                    <Col span={24}>
                        <Text>OUR PROJECTS</Text>
                    </Col>
                    <Col span={24}>
                        <Text>CAREERS</Text>
                    </Col>
                    <Col span={24}>
                        <Text>BLOG</Text>
                    </Col>
                    <Col span={24}>
                        <Text>SERVICE PRICING</Text>
                    </Col>
                    <Col span={24}>
                        <Text>CONTACT US</Text>
                    </Col>
                </Row>
            </Col>
            <Col xs={24} sm={24} md={8} lg={12} xl={6}>
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
        </Row>
        </>
    )
}

export default WidgetFooter