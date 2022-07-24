import React from 'react'
import { Col, Row, Typography, Button, Divider, Card, Avatar } from 'antd'
import { LinkOutlined, SearchOutlined } from '@ant-design/icons';

const { Meta } = Card;
const {Title , Text, Paragraph} = Typography

const  Blogs = () => {
    const cards = [
        {
            img: 'Low-FP-92873F.jpg',
            title: 'Benefits of Custom Building a New Home Versus Buying an Existing One',
            link: 'a',
            date: "September 11th, 2017",
            description: 'If you are like many considering a move and have been trying to find an existing home “that has everything” on your list and are having trouble then consider custom building to your specifications.',
        },
        {
            img: 'Resurrection.jpg',
            title: 'Granite, Marble or Quartz Counter tops?',
            link: 'a',
            date: "September 7th, 2017",
            description: 'Which Counter Top to Choose For Your Renovation or New Custom Home? Over the years there has been a long and heated debate between granite, marble and quartz countertops. It is understandable, as each  ',
        },
    ]
    return (
        <>
            <Row className="work-overview blog-wrapper" justify="center" align="top">
                <Col span={24}>
                    <Row justify="space-around">
                        <Col>
                            <Title className='main-light-title' >Blog</Title>
                        </Col>
                    </Row>
                </Col>
                <Col span={24}>
                    <Row justify="space-around">
                        <Col>
                            <Divider className="blue-line"/>
                        </Col>
                    </Row>
                </Col>
                <Col span={24}>
                    <Row justify="center" gutter={[40, 30]}>
                        {cards.map((el, key)=>(
                            <Col key={key} xs={24} sm={12} lg={8} xl={8}>
                                <Card
                                    // hoverable
                                    className="work-card"
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
                                                            <Title level={4} >{el.title}</Title>
                                                        </Col>
                                                    </Row> 
                                                    <Row justify="center">
                                                        <Col><Text >{el.type}</Text></Col>
                                                    </Row> 
                                                </div>
                                            </div>
                                        </div>
                                    }
                                >
                                    <Meta className='title-no-wrap' title={<a>{el.title}</a>} description={el.date} />
                                    <Divider />
                                    <Paragraph 
                                        className='lh-2_27'
                                        // ellipsis={{ 
                                        //     rows: 2, 
                                        //     expandable: false, 
                                        //     tooltip: el.description 
                                        // }}
                                    >
                                        {el.description}
                                    </Paragraph>
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
                        VIEW MORE ARTICLES
                    </Button>
                </Divider>
                            
            </Row>
        </>
    )
}

export default Blogs
