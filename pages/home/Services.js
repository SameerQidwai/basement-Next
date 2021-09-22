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
            <Col span={11} style={{ paddingRight: 160 }}>
                <Card hoverable style={{ background: "transparent" }}>
                    <Image src={"/house.png"} preview={false} />
                </Card>
            </Col>
        </Row>
    );
}

export default Services
