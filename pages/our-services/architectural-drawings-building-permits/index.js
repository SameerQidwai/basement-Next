import React from 'react';
import { Col, Row, Typography } from 'antd';
import SideLinks from '../../../Component/Core/SideLinks';
import Image from 'next/image';
const { Title } = Typography;
const index = () => {
  return (
    <div className="blog-page bgc-white">
      <Row gutter={[20, 40]} justify="space-around" style={{ margin: 0 }}>
        <Col xs={20} sm={20} md={20} lg={17} className="choose-container ">
          <Row gutter={[30, 20]} justify="space-between" align="stretch">
            <Col span={24}>
              <div className="service-description-img">
                <Image
                  src="/Architectural_drawing_permits_builds_Planning.jpg"
                  width={870}
                  height={580}
                  layout="responsive"
                  aspectRatio={16 / 9} // set aspect ratio to 16:9
                />
              </div>
            </Col>
            <Col span={24}>
              <Title level={5} className="service-description-page-title">
                Architectural Drawings & Building Permits
              </Title>
              <p className="service-description-page-content">
                <strong>
                  {' '}
                  Is a Building Permit Required to Complete Your Renovation
                  Project?{' '}
                </strong>
              </p>
              <p className="service-description-page-content">
                Obtaining building permits for home renovations can be a
                daunting and restrictive process. However, it is crucial to
                acquire them to ensure compliance with regulations and safety
                standards. At Azim Constructions, we specialize in developing
                legal finished basements and have a track record of achieving
                high levels of client satisfaction. Our expertise and attention
                to detail ensure that your renovation project meets all
                requirements while achieving your desired outcome.
              </p>
              <p className="service-description-page-content">
                <strong> Renovate with confidence &Quality </strong>
              </p>
              <p className="service-description-page-content">
                Azim Constructions simplifies the permit process with
                architectural drawings and permit services. We ensure that every
                aspect of your renovation meets code standards, so you don't
                have to worry about it. Our goal is to make your experience with
                us as stress-free as possible, so you can confidently recommend
                us to others.
              </p>
            </Col>
          </Row>
        </Col>
        <Col xs={20} sm={20} md={20} lg={5}>
          <SideLinks />
        </Col>
      </Row>
    </div>
  );
};

export default index;
