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
                  src="/Kitchen_Renovations_Imrovments.jpg"
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
                Kitchens
              </Title>
              <p className="service-description-page-content">
                <strong>
                  {' '}
                  Looking To Give Your Kitchen A Fresh New Look?{' '}
                </strong>
              </p>
              <p className="service-description-page-content">
                At Azim Constructions, we strive to make the process of designing
                and renovating your kitchen as hassle-free as possible. With our
                reputation for providing excellent customer service,
                high-quality workmanship, and a team of skilled professionals,
                we can transform your outdated kitchen into a stunning space
                that's both aesthetically pleasing and practical. We take care
                of everything, from functional appliance layouts to beautiful
                fixtures, to create the perfect environment for your inner chef.
              </p>
              <p className="service-description-page-content">
                we understand that your kitchen is the heart of your home, and
                we want to help you create a space that lasts for years to come.
                Our renovation process begins with a brainstorming session to
                gather all of your ideas, followed by the expertise of our
                designer to bring them to life. We work closely with you to
                select the best materials and finishes for your dream kitchen.
                From there, our team of professionals will construct your ideal
                kitchen, ensuring that every detail is perfect. Trust us to
                provide excellent customer service, high-quality workmanship,
                and a stunning end result that will leave you satisfied for
                years to come.
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
