import React from 'react'
import { Col, Row, Typography, Button, Divider } from 'antd'
import {useRouter} from 'next/router';

const {Title , Text} = Typography
const  Welcome = () => {
    const router = useRouter()
    return (
        <>
            <Row justify={'space-around'} className="welcome" >
                <Col> <Title level={2} className="welcome-title"> Need Help With A Project? </Title> </Col>
            </Row>
            <Row justify={'space-around'} className="welcome-btn">
                <Col> <Button onClick={() => router.push('/get-Qoute')}>Get a free consultation</Button> </Col>
            </Row>
            <Row className="welcome-overview" justify="space-around" align="top">
                <Col span={24}>
                    <Row justify="space-around">
                        <Col span={16}>
                            <Title> Your Toronto Custom Home & Design Team</Title>
                        </Col>
                    </Row>
                </Col>
                <Col>
                    <Divider className="blue-line"/>
                </Col>
                <Col span={24}>
                    <Row justify="space-around">
                        <Col xs={20} sm={16} lg={15}>
                            <Text> With over 50+ years of combined experience in the real estate, design and construction industries, 
                                Angelo Gerardi &
                                his team makes all the right fits to bring your home renovation or custom build dreams come to life.
                            </Text>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </>
    )
}

export default Welcome
