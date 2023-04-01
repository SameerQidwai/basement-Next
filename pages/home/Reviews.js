import React, { useState, useEffect, useRef } from 'react';
import { Col, Row, Typography, Carousel, Divider, Avatar } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import { useWindowDimensions } from '../../Component/useFunction';

const { Title, Text } = Typography;

const Reviews = () => {
  const ref = useRef();
  const { height, width } = useWindowDimensions();

  return (
    <Row>
      <Col span={24} className="reviews-content">
        <div className="reviews-overlay"></div>
        <Row justify="center" align="middle" gutter={[0, 15]}>
          <Col span={22}>
            <Row justify="space-around">
              <Col>
                <Title level={3} className="review-title">What Our Clients Say</Title>
              </Col>
            </Row>
            <Row justify="space-around">
              <Col>
                <Title level={2} className="reviews-testimonials"> OUR TESTIMONIAL</Title>
              </Col>
            </Row>
          </Col>
          <Col span={18}>
            {/* autoplay  */}
            <Carousel
              // autoplay
              // dots={false}
              adaptiveHeight
              pauseOnDotsHover
              style={{ cursor: 'pointer' }}
              swipeToSlide
            //   arrows
              // nextArrow={'<'}
              // prevArrow={'>'}
            >
              <div>
                <Row justify="space-around">
                  <Col className='mb-30'>
                    {/* <UserOutlined /> */}
                    <Avatar 
                      size={80} 
                      src="man_avatar.png" 
                    />
                  </Col>
                </Row>
                <Row justify="space-around" gutter={[0, 30]}>
                  <Col className="txt-center"xs={24} sm={21} md={18} lg={15}>
                    <Text italic >
                      “It was a pleasure to work with such professional, honest
                      and caring people throughout my project. They are a team
                      of exceptional individuals, competent in their specific
                      areas of trade. Angelo is extremely detail-oriented, a
                      perfectionist, and a craftsman. He is meticulous with
                      every facet of his work and leaves the work site clean.
                      Thank you for making this remodeling job so painless and
                      for adding so much to our home!”
                    </Text>
                  </Col>
                  <Col span={22} className={'txt-center'}>
                    <Title level={4}>RANDY DEANGELIS</Title>
                  </Col>
                </Row>
              </div>
              <div>
                <Row justify="space-around">
                  <Col className='mb-30'>
                    <Avatar 
                      size={48.19} 
                      src="man_avatar.png" 
                    />                  </Col>
                </Row>
                <Row justify="space-around" gutter={[0, 30]}>
                  <Col className="txt-center"xs={24} sm={21} md={18} lg={15}>
                    <Text italic>
                      “Anvale Homes did an outstanding job finishing our
                      basement. Angelo listened to what we wanted and was very
                      helpful with design ideas. The crew was very skilled,
                      always on time and did a great job keeping the workplace
                      clean. The entire process was stress-free. Everyone was
                      great to work with and did a great job of keeping it all
                      on schedule and within the budget. I would highly
                      recommend Anvale Homes and Angelo Gerardi to assist in any
                      of your renovations or home building needs.”
                    </Text>
                  </Col>
                  <Col span={22} className={'txt-center'}>
                    <Title level={4}>VITO MACRI</Title>
                  </Col>
                </Row>
              </div>
              <div>
                <Row justify="space-around">
                  <Col className='mb-30'>
                    <Avatar 
                      size={48.19} 
                      src="man_avatar.png" 
                    />
                  </Col>
                </Row>
                <Row justify="space-around" gutter={[0, 30]}>
                  <Col className="txt-center"xs={24} sm={22} md={20} lg={20} xl={18} xxl={15}>
                    <Text italic>
                      “Angelo was a complete joy to work with. He was attentive
                      to my detailing during the design development process. He
                      was very accommodating during the build and fairly
                      negotiated changes (both additions and deletions to
                      scope). His crew of subcontractors were top notch,
                      professional, perfectionists and easy to work with. The
                      work was performed in a timely fashion with minimal
                      description to the household and no unexpected
                      delays/breaks in work progress … Good contractors and most
                      importantly good people are hard to find these days so I
                      try to support them as much as I can once i find them.
                      Anvale Homes gets my full recommendation!”
                    </Text>
                  </Col>
                  <Col span={22} className={'txt-center'}>
                    <Title level={4}>PAUL C</Title>
                  </Col>
                </Row>
              </div>
              <div>
                <Row justify="space-around">
                  <Col className='mb-30'>
                    <Avatar 
                      size={48.19} 
                      src="man_avatar.png" 
                    />
                  </Col>
                </Row>
                <Row justify="space-around" gutter={[0, 30]}>
                  <Col className="txt-center"xs={24} sm={22} md={20} lg={20} xl={18} xxl={15}>
                    <Text italic>
                      “Highly satisfied with their work. My basement was
                      finished on time, not once did I have to chase them. Very
                      flexible, willing to accommodate any workable request or
                      change to existing plan. Fairly priced. A relationship for
                      long term. Khalid, Mabroor & Usman, you make a great team.
                      Very professional and highly recommended”
                    </Text>
                  </Col>
                  <Col span={22} className={'txt-center'}>
                    <Title level={4}>Abdul Azeem Farooqi</Title>
                  </Col>
                </Row>
              </div>
            </Carousel>
          </Col>
        </Row>
      </Col>
    </Row>
  );
};

export default Reviews;
