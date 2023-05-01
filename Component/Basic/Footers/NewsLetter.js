import React, { useRef } from 'react';
import { Button, Col, Divider, Input, Row, Typography } from 'antd';

const { Title, Text } = Typography;
const NewsLetter = () => {
  return (
    <Row align="middle">
      <Col span={24} className=" news-letter news-letter-headings">
        <Row justify="space-evenly">
          <Col>
            <Row>
              <Col span={24}>
                <Title level={1} className="c-white mb-5">
                  Call For Immediate Assistance!
                </Title>
              </Col>
              <Col span={24} className="c-white fs-16">
                Our team is proud to serve GTA for 15+ Years!
              </Col>
            </Row>
          </Col>
          <Col>
            <Button
              type="primary"
              size="large"
              block
              className="conact-area-btn c-white bgc-goldish b-goldish s-blackish hover-b-goldish hover-bgc-blackish hover-s-goldish"
              href="tel:+16472189786"
            >
              <span>Call Now</span>
            </Button>
          </Col>
        </Row>
      </Col>
      <Col span={24} className="news-letter-background">
        <div className="welcome-overlay"></div>
        <Row className="py-30">
          <Col xs={{ span: 20, offset: 4 }} sm={{ span: 18, offset: 6 }} md={{ span: 14, offset: 10 }}>
            <Title level={1} className="c-white mb-20">
              Connect with us live for a consultation now!
            </Title>
          </Col>
          <Col xs={{ span: 20, offset: 4 }} sm={{ span: 18, offset: 6 }} md={{ span: 14, offset: 10 }} className="c-white mt-25">
            <Text className='c-white'>
              <p>
                At <b>ELITEOX RENO</b>, we are committed to providing quality
                construction, efficient work, and innovative solutions to meet our
                clients' needs. We offer reliable and affordable basement remodeling
                services, working closely with our clients to achieve their vision
                with minimal hassle.
              </p>
            </Text>
          </Col>
        </Row>
      </Col>
    </Row>
  );
};

export default NewsLetter;
