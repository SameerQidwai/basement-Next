import React from 'react'
import { Col, Row, Typography, Button, Divider, Card, Avatar } from 'antd'
import { LinkOutlined, SearchOutlined } from '@ant-design/icons'
const { Meta } = Card;
const {Title , Text, Paragraph} = Typography

const  Work = () => {
    const cards = [
        {
            img: 'cover1.jpg',
            title: 'Morisot Renovation',
            link: 'a',
            type: "Renovation Projects",
            typaLink: 'a',
            description: 'Have A Project You Need Help With? Get a free consultation BASEMENT RENOVATION Features coming soon',
            details: 'LOCATION: Richmond Hill'
        },
        {
            img: 'cover2.jpg',
            title: 'Eden Valley Renovation',
            link: 'a',
            type: "Renovation Projects",
            typaLink: 'a',
            description: 'Have A Project You Need Help With? Get a free consultation FULL HOME RENOVATION Features coming soon Project',
            details: 'Details coming soon '
        },
        {
            img: 'cover3.jpg',
            title: 'Aderno Renovation',
            link: 'a',
            type: "Renovation Projects",
            typaLink: 'a',
            description: 'Have A Project You Need Help With? Get a free consultation BATHROOM RENOVATION  Features coming soon ',
            details: 'LOCATION  Etobicoke,'
        },
        {
            img: 'cover4.jpg',
            title: 'Resurrection Townhome',
            link: 'a',
            type: "Renovation Projects",
            typaLink: 'a',
            description: 'Have A Project You Need Help With? Get a free consultation TOWNHOUSE KITCHEN  & BATH RENOVATION Feature',
            details: 'Details coming soon'
        },
        {
            img: 'cover5.jpg',
            title: '593 Maplehurst',
            link: 'a',
            type: "Custom Home Builds",
            typaLink: 'a',
            description: 'Have A Project You Need Help With? Get a free consultation WONDERFUL 2 STORY CAPE COD CHARMER Features',
            details: 'Details coming soon'
        },
        {
            img: 'cover6.jpg',
            title: '1133 Summerlea',
            link: 'a',
            type: "Custom Home Builds",
            typaLink: 'a',
            description: 'Have A Project You Need Help With? Get a free consultation WARM TRANSITIONAL 2 STORY NATURAL STONE & STUCCO HOME Natural Stone and Stucco Exterior,',
        },
    ]
    return (
        <>
            <Row className="work-overview" justify="center" align="top">
                <Col span={24}>
                    <Row justify="space-around">
                        <Col>
                            <Title className='main-light-title'>Explore Our Work</Title>
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
                    <Row justify="center" gutter={[40, 30]}>
                        {cards.map((el, key)=>(
                            <Col key={key} xs={24} sm={12} lg={8} xl={5}>
                                <Card
                                    // hoverable
                                    className='work-card'
                                    cover={
                                        <div className="card-Q-cover">
                                            <img alt={el.img} src={el.img} className="card-Q-image"/>
                                            <div className="card-Q-overlay">
                                                <div className="card-Q-text">
                                                    <Row justify='center'  gutter={16} align="middle">
                                                        <Col>
                                                            <Avatar 
                                                                className='service-avatar'
                                                                size={48.19} 
                                                                icon={<LinkOutlined />}
                                                            />
                                                        </Col>
                                                        <Col>
                                                            <Avatar
                                                                className='service-avatar'
                                                                size={48.19} 
                                                                icon={<SearchOutlined />}
                                                            />
                                                        </Col>
                                                    </Row>
                                                    <Row >
                                                        <Col span={24}>
                                                            <Title level={4}>{el.title}</Title>
                                                        </Col>
                                                    </Row> 
                                                    <Row justify="center">
                                                        <Col><Text >{el.type}</Text></Col>
                                                    </Row> 
                                                </div>
                                            </div>
                                        </div>}
                                >
                                    <Meta title={<a>{el.title}</a>} description={<a>{el.type}</a>} />
                                    <Divider />
                                    <Paragraph 
                                        style={{marginBottom: 0}}
                                        ellipsis={{ 
                                            rows: 7, 
                                            expandable: true, 
                                            tooltip: el.description 
                                        }}
                                    >
                                        {el.description}
                                    </Paragraph>
                                    <br/>
                                    <Text>{el.details}</Text>
                                </Card>
                            </Col>
                        ))}
                    </Row>
                </Col>
                <Divider  plain={true} className="btn-divider">
                    <Button 
                        type="text" 
                        className="projectBtn"
                    > 
                        VIEW ALL PROJECTS
                    </Button>
                </Divider>
            </Row>
        </>
    )
}

export default Work
