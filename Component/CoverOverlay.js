import React from 'react'
import { Avatar, Col, Row, Typography } from 'antd'
import { LinkOutlined, SearchOutlined } from '@ant-design/icons'

const {Text, Title} = Typography

const CoverOverlay = ({img, type, title}) =>{
    return (
    <div className="card-Q-cover">
        <img alt={img} src={img} className="card-Q-image"/>
        <div className="card-Q-overlay">
            <div className="card-Q-text">
            <Row justify='center' className='mb-10' gutter={16}>
                <Col>
                    <Avatar
                        className='service-avatar'
                        size={61} 
                        icon={<LinkOutlined />}
                    />
                </Col>
                <Col>
                    <Avatar 
                        className='service-avatar'
                        size={61} 
                        icon={<SearchOutlined />}
                    />
                </Col>
            </Row>
            <Row >
                <Col span={24}>
                    <Title level={4} >{title}</Title>
                </Col>
            </Row> 
            <Row justify="center">
                <Col><Text style={{fontSize: 14}} >{type}</Text></Col>
            </Row> 
            </div>
        </div>
    </div>)
}

export default CoverOverlay