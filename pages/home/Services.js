import React, {useEffect} from 'react'
import { Col, Row, Typography, Image, Card, Avatar, Button } from 'antd'
import { FormatPainterFilled, HomeFilled, UserOutlined } from "@ant-design/icons";
const {Title , Text} = Typography
const { Meta } = Card

const services = [
    {
        icon: <FormatPainterFilled className="service-icon" />,
        title: 'Renovations',
        description: 'Whether you are adding an extension to your home, or gutting your bathroom or renovating your basement into a home entertainment sanctuary',
        titleBack: 'WE TURN SPACE INTO AWESOME LIVING',
        descriptionBack: 'Anvale Homes provides full-scale renovations to improve your existing living area and increase the value of your home.',
        button: 'Learn More',
        buttonLink: 'a'
    },
    {
        icon: <HomeFilled className="service-icon" />,
        title: 'Custom Homes',
        description: 'Our in-house architect works collaboratively with you to draw up custom floor plans to spec and our management team brings your floor plan to fruition',
        titleBack: 'HELPING BUILD YOUR DREAMS',
        descriptionBack: 'as we help you select the perfect materials, finishes and fixtures. From design to management to construction, our approach is personal, accommodating and customized.',
        button: 'Find Out How',
        buttonLink: 'a'
    },
    {
        icon: <UserOutlined className="service-icon" />,
        title: 'Consulting',
        description: 'With over 50+ years experience in the real estate, design and construction industry our know how and best practices will help keep your renovation or',
        titleBack: 'EXPERIENCE YOU CAN RELY ON',
        descriptionBack: 'custom home build project on time and within your budget. Let’s sit down for a first free consultation to answer your questions and get your project on track.',
        button: 'Get Free Consultation',
        buttonLink: 'a'
    },
]
const  Services = () =>{

    return (
        <div >
            <Row justify="center"  className="service-row" gutter={[0, 20]}>
                {services.map((el, index) =>(
                    <Col xs={22} sm={10} md={10} lg={7}  xl={6} key={index} className="flip-Q-card">
                        <div className="flip-Q-card-inner">
                            <Card 
                                className='flip-Q-card-front'
                                bodyStyle={{padding: '27px 20px'}}
                            >
                                <Row justify='center' >
                                    <Col span={24}>
                                        <Row justify='center' style={{marginBottom: 20}}>
                                            <Col>
                                                <Avatar 
                                                    className='service-avatar'
                                                    size={61} 
                                                    icon={el.icon}
                                                />
                                            </Col>
                                        </Row>
                                    </Col>
                                    <Col span={24}>
                                        <Row justify='center'>
                                            <Col>
                                                <Title level={2} className='service-content' >{el.title}</Title>
                                            </Col>
                                        </Row>
                                    </Col>
                                    <Col span={24}>
                                    <Row justify='center' >
                                            <Col className='center-col'>
                                                <Text className='service-content'>{el.description}</Text>
                                            </Col>
                                        </Row>
                                    </Col>
                                </Row>
                            </Card>
                            <Card className="flip-Q-card-back" bodyStyle={{padding: '27px 20px'}}>
                                <Row justify='center' >
                                    <Col span={24}>
                                        <Row justify='center' >
                                            <Col>
                                                <Title level={3}>{el.titleBack}</Title>
                                            </Col>
                                        </Row>
                                    </Col>
                                    <Col span={24}>
                                        <Row justify='center' >
                                            <Col>
                                                <Text level={2} className='service-content' >{el.descriptionBack}</Text>
                                            </Col>
                                        </Row>
                                    </Col>
                                    <Col span={24}>
                                    <Row justify='center' >
                                            <Col className="button-col">
                                                <Button type="primary">{el.button}</Button>
                                            </Col>
                                        </Row>
                                    </Col>
                                </Row>
                            </Card>
                        </div>
                    </Col>
                ))}
            </Row>
        </div>
    );
}

export default Services
