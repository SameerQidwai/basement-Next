
import { useState } from "react"
import { Button, Col, Row, Typography } from 'antd'
const {Title, Paragraph} = Typography

const PlanOverview = () =>{
    const [Component, setComponent] = useState(<Consulting/>) 
    const [active, setActive] = useState(1)
    return (
        <div className="mb-30">
            <Row justify={'space-around'} className="welcome" >
                <Col> 
                    <Title level={2} className="welcome-title">
                        Do You Have A Home Renovation Project We Can Help With? 
                    </Title> 
                </Col>
            </Row>
            <Row justify={'space-around'} className="welcome-btn">
                <Col> <Button>Get a free consultation</Button> </Col>
            </Row>
            <div>
                <Row justify="center">
                    <Col span={20}>
                        <Row justify="end" gutter={[40, 0]}>
                            <Col span={6}>
                                <Row gutter={[0, 10]}>
                                    <Col span={23}>
                                        <Button 
                                            block 
                                            className={`${active ===1 && 'button-tabs-active'} button-tabs`}
                                            onClick={()=>{setComponent(<Consulting/>);setActive(1)}}
                                        >
                                            Consulting Overview
                                        </Button>
                                    </Col>
                                    <Col span={23}>
                                        <Button 
                                            block
                                            className={`${active ===2 && 'button-tabs-active'} button-tabs`}
                                            onClick={()=>{setComponent(<Plan/>); setActive(2)}}
                                        >
                                            Plan Review Consulting
                                        </Button>
                                    </Col>
                                    <Col span={23}>
                                        <Button 
                                            block 
                                            className={`${active ===3 && 'button-tabs-active'} button-tabs`} 
                                            onClick={()=>{setComponent(<Building/>); setActive(3)}}
                                        >
                                            Green Building Consulting
                                        </Button>
                                    </Col>
                                    
                                </Row>                                    
                            </Col>
                            <Col span={15}>
                                {Component}
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </div>
        </div>
    )
}

export default PlanOverview

const Consulting = () =>{
    return (
        <div>
            <Title level={4} className="fs-32 fw-3 lh-1_45 c-33">
                One Year Warranty Protection
            </Title>
            <Paragraph className='mb-20 fs-15 c-74 lh-2_27'>
                Planning and preparation is the key in order to ensure a high quality construction project that is on-time and on-budget. Anvale Homes can assist you with the following tasks:
            </Paragraph>
            <Paragraph className='mb-20 fs-15 c-74 lh-1_45'>
                <ul>
                    <li>
                        Developing an understanding of your goals and objectives
                    </li>
                    <li>
                        Assisting with site purchase and planning, permit process, navigating government authorities and agencies
                    </li>
                    <li>
                        Assisting with selection of Architect and Interior Designer
                    </li>
                    <li>
                        Assisting with design and structural engineering to ensure a cost effective, quality design

                    </li>
                    <li>
                        Developing a feature sheet for material selection
                    </li>
                    <li>
                        Establishing budgets and control measures
                    </li>
                    <li>
                        Ensuring appropriate levels of insurance
                    </li>
                    <li>
                        Making recommendations to navigate through specific issues
                    </li>
                </ul>
            </Paragraph>
        </div>
    )
}
const Plan = () =>{
    return (
        <div>
            <Title level={4} className="fs-32 fw-3 lh-1_45 c-33">
                Before You Start Your Project, Get a Second Opinion
            </Title>
            <Paragraph className='mb-20 fs-15 c-74 lh-2_27'>
                Would you like a second opinion before starting construction? Anvale Homes can help by providing Plan Review Consulting to review your drawings, specifications and budget and provide you a comprehensive constructability review and plan assessment.
            </Paragraph>
        </div>
    )
}
const Building = () =>{
    return (
        <div>
            <Title level={4} className="fs-32 fw-3 lh-1_45 c-33">
                Go Green
            </Title>
            <Paragraph className='mb-20 fs-15 c-74 lh-2_27'>
                Looking to build a Green Home?  Set up a consultation with Anvale Homes to discuss the elements of building an energy efficient green home.  Anvale Homes is a pioneer and has fully adopted green home building practices in the Toronto GTA.  Anvale Homes will assist you with incorporating Green Home key elements:
            </Paragraph>
            <Paragraph className='mb-20 fs-15 c-74 lh-1_45'>
                <ul>
                    <li>
                        Energy Star
                    </li>
                    <li>
                        Net Zero Building
                    </li>
                    <li>
                        Built Green
                    </li>
                    <li>
                        LEED
                    </li>
                    <li>
                        Green Houser
                    </li>
                </ul>
            </Paragraph>
        </div>
    )
}