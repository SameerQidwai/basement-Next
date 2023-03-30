import React from 'react';
import { Button, Col, Divider, Row, Typography } from 'antd';
import { CalendarOutlined } from '@ant-design/icons';

const { Title } = Typography;
const blogging = [
  {
    date: 'February 28, 2023',
    title: 'Steps To Get a Legal Basement Apartment',
    content:
      'For the past year and a half, we have seen a dramatic increase in the rental market all across North America.',
  },
  {
    date: 'January 18, 2023',
    title: '2023 basement ideas',
    content:
      'There are countless chances for improvement in an unfinished basement.',
  },
  {
    date: 'January 18, 2023',
    title: '1000 Sq ft Basement Ideas',
    content:
      'Do not be deterred by the dust bunnies; your basement is full of possibilities.',
  },
  {
    date: 'January 18, 2023',
    title: '7 Great Basement Design Ideas',
    content:
      'There are countless chances for improvement in an unfinished basement. You can use the extra space to create anything you like, from a gorgeous rental apartment to a retro gaming room.',
  },
  {
    date: 'January 14, 2023',
    title:
      'Changes in Zoning by Laws by the Town of Milton & Our Current Projects',
    content:
      'The Ontario government has passed housing legislation that overrides some municipal zoning laws and eliminates',
  },
  {
    date: 'September 8, 2022',
    title: 'Adding Style To Your Basement',
    content:
      'Your family has a lot of potential living space in the basement, which is a sizable space. However, this area of the house is less cozy and welcoming due to the unfinished walls and ceiling.',
  },
  {
    date: 'September 8, 2022',
    title: 'Basement Renovation With Financing',
    content:
      'Compare numerous offers that are uniquely tailored from the network to rapidly finance your basement remodel or refinishing. Get financing for your new basement quickly',
  },
];

const index = () => {

    const someBlog = () =>{
        return blogging.slice(0,5)
    }

    return (
        <div className="blog-page ">
        <Row  gutter={[20,40]} justify="space-around" style={{margin: 0}}>
            <Col xs={20} sm={20} md={20} lg={17} className='choose-container'>
                <Row gutter={[30,20]} justify="space-between" align="stretch">
                    {blogging.map(({ date, title, content }, index) => (
                    <Col key={index} xs={24} md={12}>
                        <div className='blog-card'>
                            <Row gutter={[10,0]}>
                                <Col span={24}>
                                    <Title level={3} className="blog-date">
                                        <CalendarOutlined /> {date}
                                    </Title>
                                </Col>
                                <Col span={24}>
                                    <Title level={2} className="blog-title">
                                    {title}
                                    </Title>
                                </Col>
                                <Col span={24}>
                                    <p className="blog-content">{content}</p>
                                </Col>
                                <Col span={24}>
                                    <a>
                                        <Button size="large" className="round-button" href="/blog">READ MORE</Button>
                                    </a>
                                </Col>
                            </Row>
                        </div>
                    </Col>
                    ))}
                </Row>
            </Col>
            <Col xs={20} sm={20} md={20} lg={5}>
            <Row gutter={[20,20]}>
                <Col xs={24} sm={24} md={24} >
                    <Row className="border-1">
                        <Col span={24}>
                            <Title level={3}className="blog-services" >Recent Post</Title>
                        </Col>
                        {someBlog().map(({title},index)=>(
                            <Col span={24} key={index} className="bottom-border">
                                <Title level={5} className="blog-services-item">{title}</Title>
                            </Col>
                        ))}
                    </Row>
                </Col>
                <Col xs={24} sm={24} md={24} >
                    <Row gutter={[10,0]}  className="border-1">
                        <Col span={24}>
                            <Title level={3}className="blog-services" >OUR SERVICE</Title>
                        </Col>
                        <Col span={24} className="bottom-border">
                            <Title level={5} className="blog-services-item">Architectural Drawings & Building Permits</Title>
                        </Col>
                        <Col span={24} className="bottom-border">
                            <Title level={5} className="blog-services-item">Basement Construction</Title>
                        </Col>
                        <Col span={24} className="bottom-border">
                            <Title level={5} className="blog-services-item">Kitchens</Title>
                        </Col>
                        <Col span={24} className="bottom-border">
                            <Title level={5} className="blog-services-item">Bathrooms</Title>
                        </Col>
                        <Col span={24} className="bottom-border">
                            <Title level={5} className="blog-services-item">Home Improvements</Title>
                        </Col>
                    </Row>
                </Col>
            </Row>
            </Col>
        </Row>
        </div>
    );
};

export default index;
