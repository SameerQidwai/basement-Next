import React from 'react'
import { Col, Row, Space, Typography } from 'antd'
import Image from 'next/image'
// import Title from 'antd/lib/skeleton/Title'
// import Text from 'antd/lib/typography/Text'

const {Title , Text} = Typography
function Welcome() {
    return (
        <Row>
            <Col span={12}>
                <Image src={'/house.png'} layout="fill"/>
            </Col>
            <Col span={12}>
                <Row gutter={4}>
                    <Col span={24}> <Title level={5}>WHO WE ARE</Title> </Col>
                    <Col span={24}> <Title level={2}>WELCOME TO qb</Title> </Col>
                        <Col span={24}> <Text >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
                        incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
                        nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum 
                        dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt 
                        mollit anim id est laborum.</Text> </Col>
                        <Col span={24}
                            style={{marginTop: 15}}
                        >
                        <Text >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                        ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco 
                        laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate 
                        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt 
                        in culpa qui officia deserunt mollit anim id est laborum.</Text>
                        </Col>
                </Row>
            </Col>
        </Row>
    )
}

export default Welcome
