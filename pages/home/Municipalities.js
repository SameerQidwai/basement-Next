import React from 'react'
import { Col, Row, Typography, Button, Divider } from 'antd'
import {useRouter} from 'next/router';

const {Title , Text} = Typography
const  Municipalities = () => {
    const router = useRouter()
    return (
        <Row>
            <Col span={24} className="municipal-container">
            <Row className="choose-container" justify='center'>
				<Col span={24} className="txt-center">
					<Title level={3}>Municipalities we work with</Title>
				</Col>
				<Col span={18}>
                    <Row gutter={[0,34]}>
                        <Col md={4} sm={8} xs={12}>
                            <div className="municipal-logo-box">
                                <img className="aw_picture" src="https://mylegalbasement.ca/wp-content/themes/mylegalbasement/images/l1.webp" alt=""/>
                            </div>
                        </Col>
                        <Col md={4} sm={8} xs={12}>
                            <div className="municipal-logo-box">
                                <img className="aw_picture" src="https://mylegalbasement.ca/wp-content/themes/mylegalbasement/images/l2.webp" alt=""/>
                            </div>
                        </Col>
                        <Col md={4} sm={8} xs={12}>
                            <div className="municipal-logo-box">
                                <img className="aw_picture" src="https://mylegalbasement.ca/wp-content/themes/mylegalbasement/images/l3.webp" alt=""/>
                            </div>
                        </Col>
                        <Col md={4} sm={8} xs={12}>
                            <div className="municipal-logo-box">
                                <img className="aw_picture" src="https://mylegalbasement.ca/wp-content/themes/mylegalbasement/images/l4.webp" alt=""/>
                            </div>
                        </Col>
                        <Col md={4} sm={8} xs={12}>

                            <div className="municipal-logo-box">
                                <img className="aw_picture" src="https://mylegalbasement.ca/wp-content/themes/mylegalbasement/images/l5.webp" alt=""/>
                            </div>
                        </Col>
                        <Col md={4} sm={8} xs={12}>

                            <div className="municipal-logo-box">
                                <img className="aw_picture" src="https://mylegalbasement.ca/wp-content/themes/mylegalbasement/images/l6.webp" alt=""/>
                            </div>
                        </Col>
                        <Col md={4} sm={8} xs={12}>
                            <div className="municipal-logo-box">
                                <img className="aw_picture" src="https://mylegalbasement.ca/wp-content/themes/mylegalbasement/images/l7.webp" alt=""/>
                            </div>
                        </Col>
                        <Col md={4} sm={8} xs={12}>

                            <div className="municipal-logo-box">
                                <img className="aw_picture" src="https://mylegalbasement.ca/wp-content/themes/mylegalbasement/images/l8.webp" alt=""/>
                            </div>
                        </Col>
                        <Col md={4} sm={8} xs={12}>
                            <div className="municipal-logo-box">
                                <img className="aw_picture" src="https://mylegalbasement.ca/wp-content/themes/mylegalbasement/images/l9.webp" alt=""/>
                                
                            </div>
                        </Col>
                        <Col md={4} sm={8} xs={12}>
                            <div className="municipal-logo-box">
                                <img className="aw_picture" src="https://mylegalbasement.ca/wp-content/themes/mylegalbasement/images/pot1.webp" alt=""/>
                                
                            </div>
                        </Col>
                        <Col md={4} sm={8} xs={12}>
                            <div className="municipal-logo-box">
                                <img className="aw_picture" src="https://mylegalbasement.ca/wp-content/themes/mylegalbasement/images/pot2.webp" alt=""/>
                                
                            </div>
                        </Col>
                        <Col md={4} sm={8} xs={12}>
                            <div className="municipal-logo-box">
                                <img className="aw_picture" src="https://mylegalbasement.ca/wp-content/themes/mylegalbasement/images/pot3.webp" alt=""/>
                                
                            </div>
                        </Col>
                    </Row>
				</Col>
		</Row>
            </Col>
        </Row>
    )
}

export default Municipalities
