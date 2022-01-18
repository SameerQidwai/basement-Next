import React from 'react'
import { Col, Row, Typography, Image, Card } from 'antd'
import { CheckOutlined } from "@ant-design/icons";
const {Title , Text} = Typography
function Services() {
    return (
        <Row justify={"space-around"} >
            <Col sm={24} sm={24} md={24} lg={11} className="service-col service">
                <Row
                    style={{fontSize: "large" }}
                    justify="center"
                    className="service-title-col"
                >
                    <Col sm={24} md={24} lg={24} >
                        <Title className={"service-title"}>Services We Provide</Title>
                    </Col>
                    <Col sm={24} md={24} lg={24} >
                        <Row 
                            gutter={[10, 40]}
                            style={{fontSize: "large" }}
                            justify="start"
                        >
                            
                            <Col xs={12} sm={12} md={12} lg={12}>
                                <CheckOutlined style={{ fontSize: 20 }} />
                                <Text code> CONSECTETUR</Text>
                            </Col>
                            <Col xs={12} sm={12} md={12} lg={12}>
                                <CheckOutlined style={{ fontSize: 20 }} />
                                <Text code>ADIPISCING</Text>
                            </Col>
                            <Col xs={12} sm={12} md={12} lg={12}>
                                <CheckOutlined style={{ fontSize: 20 }} />
                                <Text code>VOLUPTATE</Text>
                            </Col>
                            <Col xs={12} sm={12} md={12} lg={12}>
                                <CheckOutlined style={{ fontSize: 20 }} />
                                <Text code>CUPIDATAT</Text>
                            </Col>
                            <Col xs={12} sm={12} md={12} lg={12}>
                                <CheckOutlined style={{ fontSize: 20 }} />
                                <Text code>EXCEPTEUR</Text>
                            </Col>
                            <Col xs={12} sm={12} md={12} lg={12}>
                                <CheckOutlined style={{ fontSize: 20 }} />
                                <Text code>DESERUNT</Text>
                            </Col>
                            <Col xs={12} sm={12} md={12} lg={12}>
                                <CheckOutlined style={{ fontSize: 20 }} />
                                <Text code>NOSTURD</Text>
                            </Col>
                            <Col xs={12} sm={12} md={12} lg={12}>
                                <CheckOutlined style={{ fontSize: 20 }} />
                                <Text code>NOSTURD</Text>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Col>
            <Col xs={12} sm={12} md={12} lg={8} className="service-image">
                {/* <Card hoverable style={{ background: "transparent" }}> */}
                    {/* <Image src={"/house.png"} preview={false} /> */}
                    <div className="about-left-side mt-30">
                        <div 
                            data-tilt="" 
                            data-tilt-perspective="3000" 
                            style={{
                                willChange: "transform", 
                                transform: 'perspective(3000px) rotateX(0deg) rotateY(0deg)', 
                                color: 'rgb(247, 251, 255)'
                            }}
                        >
                            <Image
                                className="about-thumb-big" 
                                src="https://pineorchardpgh.com/wp-content/uploads/2020/12/470B451.jpg" alt=""
                            />
                        </div>
                        {/* <div 
                            className="about-thumb-mid" 
                            data-tilt=""
                            data-tilt-perspective="3000" 
                            style={{
                                willChange: 'transform', 
                                transform: 'perspective(3000px) rotateX(0deg) rotateY(0deg)'
                                }}
                            >
                            <Image src="https://pineorchardpgh.com/wp-content/uploads/2020/12/311b251.jpg" alt=""/>
                        </div> */}
                        <div className="about-thumb" >
                        <div 
                                className="about-thumb-sml-xs" 
                                data-tilt="" 
                                data-tilt-perspective="3000"
                            >
                                <Image src="https://pineorchardpgh.com/wp-content/uploads/2020/12/165b133.jpg" alt=""/>
                            </div>
                        <div 
                            className="about-thumb-sml" 
                            data-tilt="" 
                            data-tilt-perspective="3000"
                        >
                                <Image src="https://pineorchardpgh.com/wp-content/uploads/2020/12/185By133.jpg" alt="" />
                        </div>
                            
                        </div>
                    </div>
                {/* </Card> */}
            </Col>
            <Col span={2}></Col>
        </Row>
    );
}

export default Services
