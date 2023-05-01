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
                  src="/Bathroom.jpg"
                  width={870}
                  height={580}
                  alt="Bathroom.jpg"
                  layout="responsive"
                  aspectRatio={16 / 9} // set aspect ratio to 16:9
                />
              </div>
            </Col>
            <Col span={24}>
              <Title level={5} className="service-description-page-title">
                Bathrooms
              </Title>
              <p className="service-description-page-content">
                <strong>
                  Transform Your Bathroom into Your Dream Space with ELITEOX RENO
                </strong>
              </p>
              <p className="service-description-page-content">
                At <b>ELITEOX RENO</b>, we make bathroom renovation a breeze by
                offering full-service packages and bringing materials straight
                to your door for your convenience. Our team of professionals has
                years of experience creating unique and stunning bathrooms that
                can turn your old space into a serene and luxurious spa-like
                retreat. We take pride in our skilled and committed team members
                who contribute greatly to our success. From start to finish, we
                handle every aspect of your bathroom renovation to ensure a
                hassle-free experience for our clients. Trust us to bring your
                dream bathroom to life.
              </p>
              <p className="service-description-page-content">
                <strong> Superior Quality Bathroom Renovations</strong>
              </p>
              <p className="service-description-page-content">
                At ELITEOX RENO, we pride ourselves on being the top-rated
                renovators in the industry. Our skilled team of professionals
                can transform your outdated bathroom into a relaxing and
                rejuvenating spa-like retreat. Our success is due in large part
                to our talented team's commitment to leadership and superior
                workmanship. We handle every aspect of bathroom renovation,
                providing a complete overhaul from start to finish. Let us take
                care of everything and deliver the bathroom of your dreams.
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
