import React from 'react';
import { Col, Row, Typography } from 'antd';
import Image from 'next/image';

const { Title, Paragraph } = Typography;
const Welcome = () => {
  return (
    <Row className="s-goldish">
      <Col span={24} className="welcome">
        <div className="welcome-overlay"></div>
        <Row
          className="welcome-container"
          align="middle"
          justify={'space-around'}
        >
          <Col span={22}>
            <Title level={1} className="c-goldish">
              Elevate Your Living Space
            </Title>
            <Paragraph className="c-white">
              <p>
                If you're considering finishing your basement for personal or
                income purposes, you've landed in the right spot. At Eliteox
                Reno, we pride ourselves on utilizing high-quality materials to
                construct custom basements that meet our clients' unique
                requirements at an affordable cost. We are the experts in
                basement finishing.
              </p>
            </Paragraph>
          </Col>
          <Col xs={22} sm={22} md={11} lg={11}>
            <a href="/our-projects?key=kitchen">
              <div className="welcome-picture">
                <Image src="/recreational_basement.jpg" layout="fill" style={{objectFit: "contain"}} />
              </div>
              <Title level={3} className="txt-center c-goldish">
                HOME RENOVATIONS 
              </Title>
            </a>
            {/* <img className="welcome-picture" src="/images/basement1.jpg" alt="" /> */}
          </Col>
          <Col xs={22} sm={22} md={11} lg={11}>
            <a href="/our-projects?key=basement">
              <div className="welcome-picture">
                <Image src="/rental_basement.jpg" layout="fill" style={{objectFit: "contain"}} />
              </div>
              <Title level={3} className="txt-center c-goldish">
                RENTABLE LEGAL BASEMENTS
              </Title>
            </a>
          </Col>
          <Col span={22}>
            <Paragraph className="c-white">
              <p>
                Renovating your basement is a wise investment as it adds
                significant value to your home and provides additional livable
                space. At our company, we offer basement renovation services to
                clients across GTA, including Oakville, Mitton, Burlington,
                Mississauga, Brampton, Hamilton, Toronto, Vaughn, Richmond Hill,
                Ajax, Whitby, and other surrounding cities. We take pride in
                using high-quality materials and delivering customized solutions
                at a fair price.
              </p>
            </Paragraph>
          </Col>
        </Row>
      </Col>
    </Row>
  );
};

export default Welcome;
