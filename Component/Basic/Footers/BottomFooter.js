import React from 'react'
import {  Col, Divider, Row, Tooltip, Typography } from 'antd'
import { LinkedinOutlined, InstagramOutlined, TwitterOutlined, FacebookOutlined } from '@ant-design/icons'

const {Text} = Typography

const BottomFooter = () => {
    return (
        <Row className='bottom-footer' justify="space-between" gutter={[0,10]} align="middle">
            <Col className='left-center h-auto' xs={24} md={24} lg={12}> 
                <Text> 
                    COPYRIGHT ANVALE HOMES  
                    <Divider type="vertical" />   
                    ALL RIGHTS RESERVED   
                    <Divider type="vertical" />
                    Design by Qidwai 
                </Text>
            </Col>
            <Col className='txt-center h-auto' xs={24} md={24} lg={4} xl={3} xxl={2}>
                <Row gutter={[16]} justify="center" className='mt-10'>
                    <Col>
                        <Tooltip title="Facebook" arrowPointAtCenter>
                        <a target={"_blank"} href="https://www.facebook.com/" className='reset-a mb-16'> 
                            <FacebookOutlined /> 
                        </a> 
                        </Tooltip>
                    </Col>
                    <Col>
                        <Tooltip title="Twitter" arrowPointAtCenter>
                        <a target={"_blank"} href="https://www.twitter.com/" className='reset-a mb-16'> 
                            <TwitterOutlined /> 
                        </a> 
                        </Tooltip>
                    </Col>
                    <Col>
                        <Tooltip title="LinkedIn" arrowPointAtCenter>
                        <a target={"_blank"} href="https://www.linkedIn.com/" className='reset-a mb-16'> 
                            <LinkedinOutlined /> 
                        </a> 
                        </Tooltip>
                    </Col>
                    <Col>
                        <Tooltip title="Instagram" arrowPointAtCenter>
                        <a target={"_blank"} href="https://www.instagram.com/" className='reset-a mb-16'> 
                            <InstagramOutlined /> 
                        </a> 
                        </Tooltip>
                    </Col>
                </Row>
            </Col>
        </Row>
    )
}

export default BottomFooter