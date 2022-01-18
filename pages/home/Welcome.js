import React from 'react'
import { Col, Row, Typography, Image, Card } from 'antd'

const {Title , Text} = Typography
function Welcome() {
    return (
        <Row justify={'space-around'} className="welcome" >
            <Col  xs={20} sm={20} md={20} lg={11} >
                <Image src={'/house.png'} preview={false} />  
            </Col>
            <Col xs={18} sm={18} md={18} lg={11} >
                    <Row gutter={4} style={{fontSize: 'large'}}>
                        <Col span={24}> <Title level={5}>WHO WE ARE</Title> </Col>
                        <Col span={24}> <Title level={2}>WELCOME TO qb</Title> </Col>
                        <Col xs={24} sm={24} md={24} lg={18}>
                            <Text >
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
                                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
                                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum 
                                dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt 
                                mollit anim id est laborum.
                            </Text> 
                        </Col>                           
                    </Row>
            </Col>
        </Row>
    )
}

export default Welcome
