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
                  src="/Basements-legal-basment.jpeg"
                  width={870}
                  height={580}
                  alt="Basements-legal-basment.jpeg"
                  layout="responsive"
                  aspectRatio={16 / 9} // set aspect ratio to 16:9
                />
              </div>
            </Col>
            <Col span={24}>
              <Title level={5} className="service-description-page-title">
                Basement Construction
              </Title>
              <p className="service-description-page-content">
                <strong> Re-Design Your Basement The Way You Live </strong>
              </p>
              <p className="service-description-page-content">
                Azim Constructions can help transform your unfinished basement
                into a functional and stylish living space. We approach every
                project with creativity, taking into account your needs and
                budget. Our skilled crew members work efficiently to deliver a
                finished product that you'll love for years to come. We pride
                ourselves on our honesty, ethics, and guiding principles, which
                inform every aspect of our business and ensure top-notch service
                for our clients. Trust Azim Constructions to bring your basement
                renovation dreams to life.
              </p>
              <p className="service-description-page-content">
                <strong>Our Unique Approach to Basement Construction</strong>
              </p>
              <p className="service-description-page-content">
                At our company, we don't believe in the typical cookie-cutter
                approach to basement construction. We have developed a
                specialized process for finding clients and delivering
                long-lasting, high-quality results. Rather than using temporary
                fixes to win business, we focus on transparency and providing
                valuable information to empower our clients to make informed
                decisions. Our commitment to honesty and integrity sets us apart
                from other basement construction companies.
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
