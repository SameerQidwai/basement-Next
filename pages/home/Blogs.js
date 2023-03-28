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
                <Row className='wrapper' gutter={[10,20]}>
                    <Col md={8} sm={8} xs={24} classname="more">
                        <h6><span>OUR</span> BLOG</h6>
                        <h5>
                            We are delighted to have our work acknowledged in the media. Take a look at some of the publications we have featured in recently.
                        </h5>
                        <Row justify='center'>
                            <Col>
                                <Button className="round" href="https://mylegalbasement.ca/blog/">VIEW MORE</Button>
                            </Col>
                        </Row>
                    </Col>
                    <Col md={8} sm={8} xs={24}>

                    </Col>
                    <Col md={8} sm={8} xs={24}>

                    </Col>
                </Row>
            </Col>
        </Row>
    )
}

export default Blogs
