import React from 'react';
import { Button, Col, Divider, Row, Typography } from 'antd';
import { blogging } from '../../pages/blog';

const { Title, Text } = Typography;
const someBlog = [...blogging.slice(0,5)]


function SideLinks() {
  return (
    <Row gutter={[20, 20]}>
      <Col xs={24} sm={24} md={24}>
        <Row className="border-1">
          <Col span={24}>
            <Title level={3} className="blog-services c-goldish">
              Recent Post
            </Title>
          </Col>
          {someBlog.map(({ title }, index) => (
            <Col span={24} key={index} className="bottom-border">
              <Button
                type="link"
                className="blog-services-item c-blackish hover-c-goldish"
                href="#"
              >
                {' '}
                {title}
              </Button>
            </Col>
          ))}
        </Row>
      </Col>
      <Col xs={24} sm={24} md={24}>
        <Row gutter={[10, 0]} className="border-1">
          <Col span={24}>
            <Title level={3} className="blog-services c-goldish">
              OUR SERVICE
            </Title>
          </Col>
          <Col span={24} className="bottom-border">
            <Button
              type="link"
              className="blog-services-item c-blackish hover-c-goldish"
              href="/our-services/architectural-drawings-building-permits/"
              alt="Architectural Drawings & Building Permits"
            >
              {' '}
              {'Architectural Drawings & Building Permits'}
            </Button>
          </Col>
          <Col span={24} className="bottom-border">
            <Button
              type="link"
              className="blog-services-item c-blackish hover-c-goldish"
              href="/our-services/basement-construction/"
              alt="Basement Construction"
            >
              {' '}
              {'Basement Construction'}
            </Button>
          </Col>
          <Col span={24} className="bottom-border">
            <Button
              type="link"
              className="blog-services-item c-blackish hover-c-goldish"
              href="/our-services/kitchens"
              alt="Kitchens"
            >
              {' '}
              {'Kitchens'}
            </Button>
          </Col>
          <Col span={24} className="bottom-border">
            <Button
              type="link"
              className="blog-services-item c-blackish hover-c-goldish"
              href="/our-services/bathrooms"
              alt="Bathrooms"
            >
              {' '}
              {'Bathrooms'}
            </Button>
          </Col>
          <Col span={24} className="bottom-border">
            <Button
              type="link"
              className="blog-services-item c-blackish"
              href="/our-services/home-improvements/"
              alt="Home Improvements"
            >
              {' '}
              {'Home Improvements'}
            </Button>
          </Col>
        </Row>
      </Col>
    </Row>
  );
}

export default SideLinks;
