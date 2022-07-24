import React from 'react'
import { Col, Row, Typography, Image, Divider, Avatar, Button } from 'antd'
import { CheckOutlined, HomeFilled, LeftOutlined, LineOutlined, PaperClipOutlined, RightOutlined } from '@ant-design/icons';

const {Title , Text} = Typography
const processes = [
    {
        icon: <HomeFilled />,
        subheading: '5 Steps to a Successful Build',
        description: 'Our simple but highly effective secret to successful project’s to produce on time and on budget results.',
        link: '/our-process/steps-to-a-successful-build'
    },
    {
        icon: <PaperClipOutlined />,
        subheading: 'Fair & Balanced Contracting',
        description: 'We use industry standard documents and contracts to protect you and us and streamline the contracting process.',
        link: '/our-process/fair-and-balanced-contracting'
    },
    {
        icon: <CheckOutlined />,
        subheading: 'Warranty',
        description: 'We back up our work 100% with both Tarion and our renovation warranty programs.',
        link: '/our-process/warranty'
    },
]
const Process = () =>{
    return (
        <Row justify="center" className="process our-process" >
            <Col  md={22} lg={22} xl={18}>
                <Row justify="space-around"   className="process-row ">
                    {processes.map((el, key)=>(
                        <Col key={key} xs={20} sm={10} md={10} lg={7} xl={7} className="process-col-margin">
                            <a className='process-link'> {/** put link here */}
                                <Row justify='center' className="process-avatar-row" >
                                    <Col> 
                                        <Avatar
                                            className='process-avatar-c-58'
                                            size={85} 
                                            icon={el.icon}
                                        />
                                    </Col>
                                </Row>
                                <Row justify='center'>
                                    <Col className='txt-center c-33 fs-20c fw-4 ls-1 mb-20'>
                                        <Title level={3} className="process-text">{el.subheading}</Title>
                                    </Col>
                                </Row>
                            </a>
                            <div className="mb-10">
                                <Row justify="center" className="mb-10">
                                    <Col className='fs-15 c-74 lh-2_27'>
                                        <Text > {el.description} </Text>    
                                    </Col>
                                </Row>
                            </div>
                            <Col>
                                <Button block className='read-more'>Read More</Button>
                            </Col>
                        </Col>

                    ))}
                    
                </Row>
            </Col>
        </Row>
    )
}

export default Process
