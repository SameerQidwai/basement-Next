import React from 'react';
import { Col, Row, Typography, Button, Divider, Card, Avatar } from 'antd';
import {
  LinkOutlined,
  RightCircleOutlined,
  SearchOutlined,
} from '@ant-design/icons';

const { Meta } = Card;
const { Title, Text, Paragraph } = Typography;

const Blogs = () => {
  const cards = [
    {
      img: 'Low-FP-92873F.jpg',
      title:
        'Benefits of Custom Building a New Home Versus Buying an Existing One',
      link: 'a',
      date: 'September 11th, 2017',
      description:
        'If you are like many considering a move and have been trying to find an existing home “that has everything” on your list and are having trouble then consider custom building to your specifications.',
    },
    {
      img: 'Resurrection.jpg',
      title: 'Granite, Marble or Quartz Counter tops?',
      link: 'a',
      date: 'September 7th, 2017',
      description:
        'Which Counter Top to Choose For Your Renovation or New Custom Home? Over the years there has been a long and heated debate between granite, marble and quartz countertops. It is understandable, as each  ',
    },
  ];
  return (
    <Row>
      <Col span={24} className="blog-wrapper">
        <div className="blog-overlay"></div>
        <Row
          className="wrapper row-margin-null"
          gutter={[20, 20]}
          justify="space-around"
        >
          <Col lg={7} md={8} sm={23} xs={23} className="more">
            <Row>
              <Col span={24}>
                <Title level={4}>
                  <span>OUR</span> BLOG
                </Title>
              </Col>
              <Col span={24}>
                <Title level={5}>
                  Stay updated with our latest construction insights, tips and
                  tricks for your next home renovation project. Take a look at
                  some of the publications we have featured in recently.
                </Title>
              </Col>
              <Col span={24} className="txt-center">
                <Button
                  size="large"
                  className="round-button bgc-blackish c-white s-blackish hover-c-blackish hover-bgc-goldish hover-s-goldish"
                  href="/blog"
                >
                  VIEW MORE
                </Button>
              </Col>
            </Row>
          </Col>
          <Col lg={7} md={8} sm={23} xs={23}>
            <Row>
              <Col span={24}>
                <img
                  className="smblog_picture"
                  src="https://mylegalbasement.ca/wp-content/uploads/2023/02/03.jpg"
                  alt="Legal Basement Apartment"
                />
              </Col>
              <Col>
                <Title level={3} className="blog-date">
                  DATE : FEBRUARY 28, 2023
                </Title>
                <Title level={2} className="blog-title">
                  Steps To Get a Legal Basement Apartment
                </Title>
                  <Button size="small" type="link">
                    READ MORE <RightCircleOutlined />
                  </Button>
              </Col>
            </Row>
          </Col>
          <Col lg={7} md={8} sm={23} xs={23}>
            <Row>
              <Col span={24}>
                {' '}
                <img
                  className="smblog_picture"
                  src="https://mylegalbasement.ca/wp-content/uploads/2023/02/03.jpg"
                  alt="Legal Basement Apartment"
                />
              </Col>
              <Col>
                <Title level={3} className="blog-date">
                  DATE : JANUARY 18, 2023
                </Title>
                <Title level={2} className="blog-title">
                  2023 basement ideas
                </Title>
                  <Button size="small" type="link" >
                    READ MORE <RightCircleOutlined />
                  </Button>
              </Col>
            </Row>
          </Col>
        </Row>
      </Col>
    </Row>
  );
};

export default Blogs;
