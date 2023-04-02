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
                  src="/HOME_Remodling_Renovations.jpeg"
                  width={870}
                  height={580}
                  alt="HOME_Remodling_Renovations.jpeg"
                  layout="responsive"
                  aspectRatio={16 / 9} // set aspect ratio to 16:9
                />
              </div>
            </Col>
            <Col span={24}>
              <Title level={5} className="service-description-page-title">
                Home Improvements
              </Title>
              <p className="service-description-page-content">
                <strong> Expert Home Renovation Solutions</strong>
              </p>
              <p className="service-description-page-content">
                At Azim Constructions, we aim to provide homeowners with
                customized refurbishment solutions using rigorous planning,
                creative design, premium materials, and skilled implementation.
                We're experts in completely remodeling and extending old homes,
                and we prioritize quality and attention to detail on every
                project we work on. With our team handling every aspect of your
                project, from design to finishes and trades, we ensure project
                transparency and excellent communication. We collaborate with
                you to create creative home renovation solutions that fit your
                schedule and financial constraints. Experience the difference
                with Azim Constructions today and transform your current home
                into your dream home.
              </p>
              <p className="service-description-page-content">
                <strong> Custom-Designed Home Renovations </strong>
              </p>
              <p className="service-description-page-content">
                Our custom-designed home renovations are an excellent way to add
                space, functionality, and elegance to your home. Whether you're
                looking to add bedrooms and master retreats or redesign your
                kitchen and living areas, we've got you covered. Our team
                delivers a premium client experience by carefully considering
                your needs, wants, and budgets from the initial design to the
                completion of the building process. We provide a wide range of
                expert services, including modular house expansion, second-story
                additions, and complete interior home restoration makeovers.
              </p>
              <p className="service-description-page-content">
                <strong> Contact Us Today! </strong>
              </p>
              <p className="service-description-page-content">
                Discover the endless possibilities for transforming your home
                with our expert renovation and improvement services. Our skilled
                team will take your ideas and turn them into a stunning reality
                with our meticulous attention to detail and comprehensive design
                process. Don't wait to experience the home of your dreams -
                contact us today for a free design consultation and take the
                first step towards creating the perfect space for you and your
                family. With our exceptional service and expertise, you won't
                want to entrust your project to anyone else.
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
