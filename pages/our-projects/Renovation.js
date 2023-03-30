
import { useState } from "react"
import { Button, Col, Row, Typography } from 'antd'
const {Title, Paragraph} = Typography

const Renovation = () =>{
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
                                            Renovations Overview
                                        </Button>
                                    </Col>
                                    <Col span={23}>
                                        <Button 
                                            block
                                            className={`${active ===2 && 'button-tabs-active'} button-tabs`}
                                            onClick={()=>{setComponent(<Plan tabName={2}/>); setActive(2)}}
                                        >
                                            Bathrooms
                                        </Button>
                                    </Col>
                                    <Col span={23}>
                                        <Button 
                                            block 
                                            className={`${active ===3 && 'button-tabs-active'} button-tabs`} 
                                            onClick={()=>{setComponent(<Plan tabName={3}/>); setActive(3)}}
                                        >
                                            Kitchens
                                        </Button>
                                    </Col>
                                    <Col span={23}>
                                        <Button 
                                            block 
                                            className={`${active ===4 && 'button-tabs-active'} button-tabs`} 
                                            onClick={()=>{setComponent(<Plan tabName={4}/>); setActive(4)}}
                                        >
                                            Basement and Recreational Space
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

export default Renovation

const Consulting = () =>{
    return (
        <div>
            <Title level={4} className="fs-32 fw-3 lh-1_45 c-33">
            Renovating Your Living Space
            </Title>
            <Paragraph className='mb-20 fs-15 c-74 lh-2_27'>
            Whether you are adding an extension to your home, or gutting and refinish your bathroom or renovating your
basement into a home entertainment sanctuary,  Anvale Homes provides full-scale renovations to improve your existing living area and increase the value of your home.
            </Paragraph>
            <Paragraph className='mb-20 fs-15 c-74 lh-1_45'>
                <ul>
                    <li>
                    Interior & Exterior renovations
                    </li>
                    <li>
                        Bathrooms
                    </li>
                    <li>
                        Kitchens
                    </li>
                    <li>
                        Basements
                    </li>
                    <li>
                        Exterior Facades
                    </li>
                    <li>
                        Additions
                    </li>
                    <li>
                        Commercial & Industrial
                    </li>
                </ul>
            </Paragraph>
        </div>
    )
}
const Plan = ({tabName}) =>{
    const tabs = {
        2: 'Beautiful Bathrooms',
        3: 'Kitchen Living at Its Best',
        4: 'Recreational & Leisure Spaces',
    }
    return (
        <div>
            <Title className="fs-32 fw-3 lh-1_45 c-33">
                {tabs[tabName]}
            </Title>
            <Paragraph className='mb-20 fs-15 c-74 lh-2_27'>
                Images goes here
            </Paragraph>
        </div>
    )
}