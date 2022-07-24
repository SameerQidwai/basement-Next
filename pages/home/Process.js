import React from 'react'
import { Col, Row, Typography, Image, Divider, Avatar } from 'antd'
import { CheckOutlined, HomeFilled, LeftOutlined, LineOutlined, PaperClipOutlined, RightOutlined } from '@ant-design/icons';

const {Title , Text} = Typography
const processes = [
    {
        icon: <HomeFilled />,
        subheading: '5 Steps to a Successful Build',
        description: 'Our simple 5 step approach to successful projects that produce on time and within budget results'
    },
    // {
    //     icon: <PaperClipOutlined />,
    //     subheading: 'Fair & Balanced Contracting',
    //     description: 'Documents and contracting focused on protecting you, your home and your investment.'
    // },
    // {
    //     icon: <CheckOutlined />,
    //     subheading: 'Warranty',
    //     description: 'Our quality of work is 100% guaranteed with industry standard warranties.'
    // },
]
const Process = () =>{
    // const []
    // const scroll= (direction) =>{
    //     let far = $( '.smallCarousel' ).width()/2*direction;
    //     let pos = $('.smallCarousel').scrollLeft() + far;
    //     $('.smallCarousel').animate( { scrollLeft: pos }, 1000)
    // }
    return (
        <Row justify="center" className="process" >
            <Col span={24} >
                <Row justify="center">
                    <Col>
                        <Title className="main-light-title">Our Process</Title> 
                    </Col>
                </Row>
            </Col>
            <Col span={24}>
                <Row justify="space-around">
                    <Col >
                        <Divider className="blue-line"/>
                    </Col>
                </Row>
            </Col>
            <Col span={24}>
                <Row justify="space-around">
                    <Col xs={18} sm={17} lg={15} className="txt-center">
                        <Text className="process-text">How we continue to bring our clients one successful project after another </Text>
                    </Col>
                </Row>
            </Col>
            <Col span={24}>
                <Row justify="space-around"   className="process-row">
                    {processes.map((el, key)=>(
                        <Col key={key} xs={20} sm={10} md={7} className="process-col-margin">
                            <a className='process-link'> {/** put link here */}
                                <Row justify='center' className="process-avatar-row" >
                                    <Col> 
                                        <Avatar
                                            className='process-avatar'
                                            size={110} 
                                            icon={el.icon}
                                        />
                                    </Col>
                                </Row>
                                <Row justify='center'>
                                    <Col className='txt-center'>
                                        <Text className="process-text">{el.subheading}</Text>
                                    </Col>
                                </Row>
                            </a>
                            <div className="line-height">
                                <Row justify='center'>
                                    <Col xs={2} sm={1}  >
                                        <Divider className='process-line'/>
                                    </Col>
                                </Row>
                                <Row justify="center">
                                    <Col className='txt-center'>
                                        <Text className="process-text"> {el.description} </Text>    
                                    </Col>
                                </Row>
                            </div>
                        </Col>

                    ))}
                    
                </Row>
            </Col>
        </Row>
    )
}

export default Process
