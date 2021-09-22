import React from 'react'
import { Col, Row, Typography, Image, Card } from 'antd'

const {Title , Text} = Typography
function Welcome() {
    return (
        <Row justify={'space-around'} style={{marginTop:100}} >
            <Col span={11} style={{paddingLeft:150}}>
                {/* <Card hoverable bordered={false} style={{background:'transparent'}}>  */}
                {/* <Image src={'/house.png'}  preview={false} class /> */}
                    <Image src={'/house.png'}   preview={false} />  
                {/* </Card>  */}
            </Col>
            <Col span={11} style={{paddingRight:150}}>
                <Card hoverable style={{background:'transparent'}}>
                    <Row gutter={4} style={{fontFamily: 'Lucida',fontSize: 'large'}}>
                        <Col span={24}> <Title level={5}>WHO WE ARE</Title> </Col>
                        <Col span={24}> <Title level={2}>WELCOME TO qb</Title> </Col>
                            <Col span={24}> <Text >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
                            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
                            nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum 
                            dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt 
                            mollit anim id est laborum.</Text> </Col>
                            <Col span={24} style={{marginTop: 15}} >
                            <Text >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                            ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco 
                            laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate 
                            velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt 
                            in culpa qui officia deserunt mollit anim id est laborum.</Text>
                            </Col>
                    </Row>
                </Card>
            </Col>
        </Row>
    )
}

export default Welcome
