import React, { useRef } from 'react';
import { Button, Col, Divider, Input, Row, Typography } from 'antd';

const { Title, Text } = Typography;
const NewsLetter = () => {
  return (
    <Row>
      <Col className="news-letter-background">
        <Row justify="center">
          <Col xs={20} sm={18} md={16} lg={12} className="txt-center">
            <h3>Subscribe To Our Newsletter​</h3>
          </Col>
        </Row>
        <Row justify="center">
          <Col>
            <p>Join to get special offers</p>
          </Col>
        </Row>
        <Row justify="center">
          <Col xs={20} sm={16} md={14} lg={12}>
            <Row justify="center" align="stretch" gutter={[10, 10]}>
              <Col xs={20} sm={16} md={14} lg={12}>
                <Input size="large" placeholder="your-email@example.com" />
              </Col>
              <Col>
                <Button
                  size="large"
                  className="c-blackish bgc-transparent  b-blackish hover-bgc-blackish  hover-c-white hover-b-blackish hover-s-blackish"
                >
                  subscribe
                </Button>
              </Col>
            </Row>
          </Col>
        </Row>
      </Col>
    </Row>
  );
};

export default NewsLetter;
