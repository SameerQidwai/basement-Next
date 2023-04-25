import React, { useRef } from 'react';
import { Button, Col, Divider, Input, Row, Typography } from 'antd';

const { Title, Text } = Typography;
const NewsLetter = () => {
  return (
    <Row align="middle">
      <Col span={24} className=" news-letter news-letter-headings">
        <Row justify="space-evenly">
        <Col >
          <Row>
            <Col span={24}>
              <Title level={1} className="c-white mb-5">
                Book a call with us!
              </Title>
            </Col>
            <Col span={24} className="c-white">
              Our team is proud to serve GTA for 6+ Years!
            </Col>
          </Row>
        </Col>
        <Col >
          <Button
            type="primary"
            size="large"
            block
            className="conact-area-btn  c-white bgc-goldish b-goldish s-blackish hover-b-goldish hover-bgc-blackish hover-s-goldish"
            href="tel:+16472189786"
          >
            <span>book a call</span>
          </Button>
        </Col>
        </Row>
      </Col>
      <Col span={24} className="news-letter-background">
        <div className='welcome-overlay'></div>
        <Row className='py-30'>
          <Col offset={10} span={14} >
            <Title level={1} className='c-white mb-20'>Book a call with us!</Title>
          </Col>
          <Col offset={10} span={14} className='c-white mt-25'>
            Maxima Reno entered the renovation business in 2016 with an
            operating philosophy in delivering quality build, work efficiently
            and innovatively. Maxima Reno provides affordable and reliable
            basement remodeling service that works collaboratively with our
            clients to help them to achieve their vision at minimum hassle.
          </Col>
        </Row>
      </Col>
    </Row>
  );
};

export default NewsLetter;
