import React from 'react';
import { Col, Row, Typography, Button, Divider } from 'antd';
import { useRouter } from 'next/router';
import Image from 'next/image'

const { Title, Text } = Typography;
const Introduction = () => {
  const router = useRouter();
  return (
    <Row className="sec-by-goldish">
      <Col span={24} className="intro">
        <Row className="intro-container">
          <Col xs={24} sm={24} md={24} lg={12}>
            {/* <img
              style={{ width: '91%', height: '91%' }}
              className="s-goldish"
              src="/basement-renovation-into-pic.png"
              alt=""
            /> */}
            <div
              style={{ width: '91%', height: '91%', position: 'relative' }}
              className="s-goldish"
            >
              <Image src="/basement-renovation-into-pic.png" layout="fill" />
            </div>
          </Col>
          <Col xs={24} sm={24} md={24} lg={12}>
            <Title level={3} className="c-goldish">
              Who WE ARE?
            </Title>
            <p className="c-white">
              <strong>
                We are a construction company specializing in basement
                construction, kitchen remodeling, and renovation projects.
              </strong>
            </p>
            <p className="c-white">
              Our goal is to provide a seamless experience from start to finish.
              When you choose us for your project, you can rest assured that
              you're in good hands. We offer a comprehensive range of services
              that cover everything from planning to the final move-in. Our team
              of expert expertise of architecture, interior design and project
              management. Our in-house expertise includes architecture, interior
              design, and project management, which enables us to provide
              comprehensive services to our clients.
            </p>

            <p className="c-white">
              At Azim Constructions, we understand the importance of creating
              maximum value for our clients. That's why we work diligently to
              stay on top of industry trends, technology, and best practices to
              ensure that we deliver exceptional results. Whether you're looking
              to build a legal basement, remodel your kitchen, or undertake a
              complete teardown, we have the skills, expertise, and resources to
              make your project a success.
            </p>
            <Row></Row>
            <Col xs={24} sm={24} md={12}>
              <a href="/our-process">
                <button className="lop_mommb c-blackish bgc-goldish hover-s-goldish hover-c-white">
                  Read More
                </button>
              </a>
            </Col>
          </Col>
        </Row>
      </Col>
    </Row>
  );
};

export default Introduction;
