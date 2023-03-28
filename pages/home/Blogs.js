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
        <Row>
            <Col span={24} className="blog-wrapper">
                <div className='blog-overlay'></div>
                <Row className='wrapper row-margin-null' gutter={[20,20]} justify="space-around" >
                    <Col md={7} sm={7} xs={23} className="more">
                        <Row>
                            <Col span={24}>
                        <h6><span>OUR</span> BLOG</h6>
                            </Col>
                        </Row>
                        <Row>
                            <Col span={24}>
                            <h5>
                            We are delighted to have our work acknowledged in the media. Take a look at some of the publications we have featured in recently.
                        </h5>
                            </Col>
                        </Row>
                        <Row justify='center'>
                            <Col >
                                <div>
                                    <Button size="large" className="round-button" href="https://mylegalbasement.ca/blog/">VIEW MORE</Button>
                                </div>
                            </Col>
                        </Row>
                    </Col>
                    <Col md={7} sm={7} xs={23}>
                        <Row >
                            <Col span={24}> 
                                <img class="smblog_picture" src="https://mylegalbasement.ca/wp-content/uploads/2023/02/03.jpg" alt="Legal Basement Apartment"/>
                            </Col>
                            <Col>
                                <Text> DATE : FEBRUARY 28, 2023</Text>
                                <Title level={4}>Steps To Get a Legal Basement Apartment</Title>
                            </Col>
                        </Row>
                        <Row gutter={[20,40]}>
                            <Col>
                                <Row gutter={[20,20]}>
                                    
                                </Row>
                            </Col>
                            <Col>
                                <Row>
                                    <Col>
                                        <a>Read More</a>
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                    </Col>
                    <Col md={7} sm={7} xs={23}>
                        <Row >
                            <Col span={24}> <img class="smblog_picture" src="https://mylegalbasement.ca/wp-content/uploads/2023/02/03.jpg" alt="Legal Basement Apartment"/></Col>
                            <Col>
                                <Text> DATE : JANUARY 18, 2023</Text>
                                <Title level={4}>2023 basement ideas</Title> 
                                <a>READ MORE</a>
                            </Col>
                        </Row>
                        
                    </Col>
                </Row>
            </Col>
        </Row>
    )
}

export default Blogs
