import React, { useRef } from 'react'
import { Button, Col, Divider, Input, Row, Typography,  } from 'antd'

const {Title , Text} = Typography
const NewsLetter = () => {

    return (
        <Row>
            <Col className="news-letter-background">
                <Row justify='center' >
                    <Col span={10} className="txt-center"><h3>Subscribe To Our Newsletter​</h3></Col>
                </Row>
                <Row justify='center'>
                    <Col><p>Join to get special offers</p></Col>
                </Row>
                <Row justify='center'>
                    <Col span={10} >
                        <Row justify='center' align="stretch" gutter={10}>
                            <Col span={9}>
                                <Input size="large" placeholder='your-email@example.com'/>
                            </Col>
                            <Col>
                                <Button size="large">subscribe</Button>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Col>
        </Row>
    )
}


export default NewsLetter