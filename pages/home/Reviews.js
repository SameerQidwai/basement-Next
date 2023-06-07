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
                <Title level={5} className="review-title">
                  What Our Clients Say
                </Title>
              </Col>
            </Row>
            <Row justify="space-around">
              <Col>
                <Title level={3} className="reviews-testimonials">
                  {' '}
                  OUR TESTIMONIAL
                </Title>
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
                  <Col className="mb-30">
                    {/* <UserOutlined /> */}
                    <Avatar size={80} src="man_avatar.png" />
                  </Col>
                </Row>
                <Row justify="space-around" gutter={[0, 30]}>
                  <Col className="txt-center" xs={24} sm={21} md={18} lg={15}>
                    <Text italic>
                      “Working with Azim and Faraz was an absolute pleasure.
                      They paid great attention to detail during the design
                      process and was accommodating when it came to making
                      changes to the scope of work. Their team of subcontractors
                      were highly skilled professionals who took pride in their
                      work and were easy to collaborate with. The project was
                      completed efficiently, causing minimal disruption to our
                      household, and there were no unexpected delays. It's rare
                      to find contractors who are not only good at what they do
                      but also good people, and I wholeheartedly recommend Azim,
                      Faraz and EliteOX Reno!”
                    </Text>
                  </Col>
                  <Col span={22} className={'txt-center'}>
                    <Title level={4}>Simone T.</Title>
                  </Col>
                </Row>
              </div>
              <div>
                <Row justify="space-around">
                  <Col className="mb-30">
                    <Avatar size={48.19} src="man_avatar.png" />{' '}
                  </Col>
                </Row>
                <Row justify="space-around" gutter={[0, 30]}>
                  <Col className="txt-center" xs={24} sm={21} md={18} lg={15}>
                    <Text italic>
                      “EliteOX Reno exceeded our expectations in completing our
                      basement project. Faraz took the time to understand our
                      vision and provided valuable design suggestions. The
                      team's craftsmanship was exceptional, always punctual, and
                      maintained a clean work environment. The entire process
                      was seamless, making it stress-free for us. Working with
                      everyone at EliteOX Reno was a pleasure, as they ensured
                      the project stayed on schedule and within budget. I highly
                      recommend EliteOX Reno, Faraz for any renovation or home
                      building needs.”
                    </Text>
                  </Col>
                  <Col span={22} className={'txt-center'}>
                    <Title level={4}>Humera k.</Title>
                  </Col>
                </Row>
              </div>
              <div>
                <Row justify="space-around">
                  <Col className="mb-30">
                    <Avatar size={48.19} src="man_avatar.png" />
                  </Col>
                </Row>
                <Row justify="space-around" gutter={[0, 30]}>
                  <Col
                    className="txt-center"
                    xs={24}
                    sm={22}
                    md={20}
                    lg={20}
                    xl={18}
                    xxl={15}
                  >
                    <Text italic>
                      “It was truly a pleasure collaborating with such a
                      dedicated, honest, and compassionate team during my
                      project. Azim and his highly skilled colleagues possess
                      exceptional expertise in their respective trades. Azim's
                      attention to detail, commitment to perfection, and
                      craftsmanship are unparalleled. He diligently ensures that
                      every aspect of the work is meticulously executed, leaving
                      the work site impeccably clean. I extend my heartfelt
                      appreciation for making this remodeling experience
                      effortless and for significantly enhancing our home. Thank
                      you, Azim, and the entire team at EliteOX Reno!”
                    </Text>
                  </Col>
                  <Col span={22} className={'txt-center'}>
                    <Title level={4}>Pamella A.</Title>
                  </Col>
                </Row>
              </div>
              <div>
                <Row justify="space-around">
                  <Col className="mb-30">
                    <Avatar size={48.19} src="man_avatar.png" />
                  </Col>
                </Row>
                <Row justify="space-around" gutter={[0, 30]}>
                  <Col
                    className="txt-center"
                    xs={24}
                    sm={22}
                    md={20}
                    lg={20}
                    xl={18}
                    xxl={15}
                  >
                    <Text italic>
                      “I am extremely pleased with the exceptional work provided
                      by Azim and Faraz. They completed my basement within the
                      agreed-upon timeline, and I never had to follow up with
                      them. They were highly flexible and open to accommodating
                      any reasonable requests or modifications to the original
                      plan. Their pricing was fair, and I look forward to
                      maintaining a long-term relationship with them. Azim and
                      Faraz form a remarkable team that exemplifies
                      professionalism. I highly recommend their services”
                    </Text>
                  </Col>
                  <Col span={22} className={'txt-center'}>
                    <Title level={4}>Shazia M</Title>
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
