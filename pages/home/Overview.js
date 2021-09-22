import React from 'react'
import { Col, Row, Typography, Image } from 'antd'

const {Title , Text} = Typography
function Overview() {
    return (
        <Row justify={'space-around'}  >
            <Col span={24} style={{textAlign: 'center'}}>
                <Title level={3}>COMPANY OVERIVEW</Title> 
            </Col>
            <Col span={24} style={{textAlign: 'center'}}>
                <Title level={1}>Basement Contractors</Title>
            </Col>
        </Row>
    )
}

export default Overview
