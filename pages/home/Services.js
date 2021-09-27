import React from 'react'
import { Col, Row, Typography, Image, Card } from 'antd'
import { CheckOutlined } from "@ant-design/icons";
const {Title , Text} = Typography
function Services() {
    return (
        <Row justify={"space-around"} style={{ marginTop: 100 }}>
            <Col span={11} style={{ paddingLeft: 150 }}>
                <Row
                    gutter={[10, 20]}
                    style={{ fontFamily: "Lucida", fontSize: "large" }}
                >
                    <Col span={24}>
                        <Title>Services</Title>
                    </Col>
                    <Col span={12}>
                        <CheckOutlined style={{ fontSize: 20 }} />
                        <Text code> CONSECTETUR</Text>
                    </Col>
                    <Col span={12}>
                        <CheckOutlined style={{ fontSize: 20 }} />
                        <Text code>ADIPISCING</Text>
                    </Col>
                    <Col span={12}>
                        <CheckOutlined style={{ fontSize: 20 }} />
                        <Text code>VOLUPTATE</Text>
                    </Col>
                    <Col span={12}>
                        <CheckOutlined style={{ fontSize: 20 }} />
                        <Text code>CUPIDATAT</Text>
                    </Col>
                    <Col span={12}>
                        <CheckOutlined style={{ fontSize: 20 }} />
                        <Text code>EXCEPTEUR</Text>
                    </Col>
                    <Col span={12}>
                        <CheckOutlined style={{ fontSize: 20 }} />
                        <Text code>DESERUNT</Text>
                    </Col>
                    <Col span={12}>
                        <CheckOutlined style={{ fontSize: 20 }} />
                        <Text code>NOSTURD</Text>
                    </Col>
                    <Col span={12}>
                        <CheckOutlined style={{ fontSize: 20 }} />
                        <Text code>NOSTURD</Text>
                    </Col>
                </Row>
            </Col>
            <Col span={11} style={{ paddingRight: 80 }}>
                {/* <Card hoverable style={{ background: "transparent" }}> */}
                    {/* <Image src={"/house.png"} preview={false} /> */}
                <div class="about-left-side mt-30">
                    <div 
                        class="about-thumb-big" 
                        data-tilt="" 
                        data-tilt-perspective="3000" 
                        style={{
                            willChange: "transform", 
                            transform: 'perspective(3000px) rotateX(0deg) rotateY(0deg)', 
                            color: 'rgb(247, 251, 255)'
                        }}
                    >
                        <Image src="https://pineorchardpgh.com/wp-content/uploads/2020/12/470B451.jpg" alt=""/>
                    </div>
                    {/* <div 
                        class="about-thumb-mid" 
                        data-tilt=""
                        data-tilt-perspective="3000" 
                        style={{
                            willChange: 'transform', 
                            transform: 'perspective(3000px) rotateX(0deg) rotateY(0deg)'
                            }}
                        >
                        <Image src="https://pineorchardpgh.com/wp-content/uploads/2020/12/311b251.jpg" alt=""/>
                    </div> */}
                    <div 
                        class="about-thumb-sml" 
                        data-tilt="" 
                        data-tilt-perspective="3000"
                    >
                        <Image src="https://pineorchardpgh.com/wp-content/uploads/2020/12/185By133.jpg" alt=""/>
                    </div>
                    <div 
                        class="about-thumb-sml-xs" 
                        data-tilt="" 
                        data-tilt-perspective="3000"
                    >
                        <Image src="https://pineorchardpgh.com/wp-content/uploads/2020/12/165b133.jpg" alt=""/>
                    </div>
                </div>
                {/* </Card> */}
            </Col>
        </Row>
    );
}

export default Services
