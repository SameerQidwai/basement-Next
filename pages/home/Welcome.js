import React from 'react';
import { Col, Row, Typography } from 'antd';
import Image from 'next/image';

const { Title, Paragraph } = Typography;
const Welcome = () => {
  return (
    <Row className="s-goldish">
      <Col span={24} className="welcome">
        <div className="welcome-overlay"></div>
        <Row className="welcome-container" align="middle"  justify={'space-around'}>
          <Col span={22}>
            <Title level={1} className="c-goldish">
              Elevate Your Living Space
            </Title>
            <Paragraph className="c-white">
              Are you thinking of finishing a basement for personal use, or for
              income purposes? You’ve come to the right place. We believe in
              using quality materials, and delivering great basements
              specifically designed for our clients needs at a fair price. We
              are the basement specialists.
            </Paragraph>
          </Col>
          <Col xs={22} sm={22} md={11} lg={11}  >
            <div className="welcome-picture">
              <Image src="/basement1.jpg" layout="fill" />
            </div>
            <Title level={2}  className="txt-center c-goldish">RECREATIONAL BASEMENTS</Title>
            {/* <img className="welcome-picture" src="/images/basement1.jpg" alt="" /> */}
          </Col>
          <Col xs={22} sm={22} md={11} lg={11}>
            <div className="welcome-picture">
              <Image src="/basement1.jpg" layout="fill" />
            </div>
            <Title level={2} className="txt-center c-goldish">RENTABLE LEGAL BASEMENTS</Title>
          </Col>
          <Col span={22}>
            <Paragraph className="c-white">
              Basement renovations are one of the most value added renovation
              investments. Not only does it increase the value of the house but
              also creates the extra livable space. We serve clients across
              Oakville, Mitton, Burlington, Mississauga, Brampton, Hamilton,
              Toronto, Vaughn, Richmond Hill, Ajax, Whitby and other cities in
              and around GTA.
            </Paragraph>
          </Col>
        </Row>
      </Col>
    </Row>
  );
};

export default Welcome;
