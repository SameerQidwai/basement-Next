import React, { useRef } from 'react'
import { Button, Col, Divider, Row, Typography,  } from 'antd'
import { useWindowDimensions } from '../../Component/useFunction'

const {Title , Text} = Typography
const Conclusion = () => {
    const ref = useRef()
    const {height, width} = useWindowDimensions()

    return (
        <div >
            <div
                className="conclusion-main"
                style={{
                    backgroundImage: 'url(call-to-action.webp)',
                }}
            >  
               <Row justify="space-between"  gutter={[50, 50]} ref={ref} >
                   <Col xs={24} sm={24} md={24} lg={13}>
                        <Row >
                            <Col span={24}>
                                <Title > Helping Build Your Dreams </Title>
                            </Col>
                            <Col span={6}>
                                <Divider className="blue-line"/>
                            </Col>
                            <Col span={24}>
                                <Text > 
                                    whether its your dream home or your next bathroom renovation - let Anvale Homes show you how to get there
                                </Text>
                            </Col>
                        </Row>
                    </Col>
                    <Col xs={24} sm={24} md={24} lg={8}>
                        <Row gutter={[0,30]} >
                            <Col >
                                <Button block className="consultant-btn">GET A FREE CONSULTATION</Button>
                            </Col>
                            <Col span={20}>
                                <Text >
                                    We Are Here To Listen
                                </Text>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </div>
        </div>
    )
}


export default Conclusion