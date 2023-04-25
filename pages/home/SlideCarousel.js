import React, { useState, useEffect } from 'react';
import { Button, Carousel, Col, Row, Typography } from 'antd';
import { useWindowDimensions } from '../../Component/useFunction';
const { Title, Text, Paragraph } = Typography;

const SlideCarousel = () => {
  const [slideNumber, setSlideNumber] = useState(0);
  return (
    <Carousel
      className="carousel-slider"
      effect="fade"
      // autoplay
      // autoplaySpeed={2000}
      // accessibility
      // arrows
      lazyLoad="ondemand"
      beforeChange={(from, to) => {
        setSlideNumber(to);
      }}
    >
      <div>
        <img
          src="https://mylegalbasement.ca/wp-content/themes/mylegalbasement/images/myban2.jpg"
          alt=""
          className="carousel-img"
        />
        <div className="carousel-overlay"></div>
        {slideNumber === 0 && (
          <div className="carousel-container">
            <div className="carousel-inner-content">
              <Row gutter={[16, 16]} justify="center" align="middle">
                <Col
                  span={24}
                  data-animation="animated zoomInRight"
                  className="animated zoomInRight"
                >
                  <Row>
                    <Col>
                      <Title className="carousel-title">
                        ELEVATE YOUR SPACE 
                      </Title>
                    </Col>
                  </Row>
                </Col>
                <Col span={24}>
                  <Row
                    data-animation="animated zoomInRight"
                    className="animated zoomInRight"
                  >
                    <Col>
                      <Title level={2} className="carousel-title">
                        
                      </Title>
                    </Col>
                  </Row>
                </Col>
                <Col span={24}>
                  <Row
                    data-animation="animated fadeInLeft"
                    className="animated fadeInLeft delay-1_1"
                  >
                    <Col>
                      <Paragraph className="carousel-p">
                        Our kitchen remodeling PROCESS can transform your space into a chef's paradise, with modern amenities and sleek design that will inspire your cooking.
                      </Paragraph>
                    </Col>
                  </Row>
                </Col>
                <Col span={24}>
                  <div
                    data-animation="animated fadeInLeft"
                    className="animated fadeInLeft"
                  >
                    <Row align="middle" gutter={[24, 25]}>
                      <Col className="carousel-btn-col">
                        <Button
                          size="large"
                          className="carousel-btn c-blackish bgc-goldish b-goldish s-blackish hover-b-goldish"
                        href='/our-process'
                        >
                          SEE OUR PROCESS
                        </Button>
                      </Col>
                      <Col className="carousel-btn-col">
                        <Button
                          size="large"
                          className="carousel-btn c-white bgc-blackish b-blackish  s-blackish hover-b-blackish"
                        href='/contact-us'
                        >
                          GET A QOUTE NOW
                        </Button>
                      </Col>
                    </Row>
                  </div>
                </Col>
              </Row>
            </div>
          </div>
        )}
      </div>
      <div>
        <img
          src="https://mylegalbasement.ca/wp-content/themes/mylegalbasement/images/myban2.jpg"
          alt=""
          className="carousel-img"
        />
        <div className="carousel-overlay"></div>
        {slideNumber === 1 && (
          <div className="carousel-container">
            <div className="carousel-inner-content">
              <Row gutter={[0, 10]}>
                <Col
                  span={24}
                  data-animation="animated zoomInRight"
                  className="animated zoomInRight"
                >
                  <Row>
                    <Col>
                      <Title className="carousel-title">
                        Elevate your basement to the
                      </Title>
                    </Col>
                  </Row>
                </Col>
                <Col span={24}>
                  <Row
                    data-animation="animated zoomInRight"
                    className="animated zoomInRight"
                  >
                    <Col>
                      <Title level={2} className="carousel-title">
                        next level
                      </Title>
                    </Col>
                  </Row>
                </Col>
                <Col span={24}>
                  <Row
                    data-animation="animated fadeInLeft"
                    className="animated fadeInLeft  delay-1_1"
                  >
                    <Col>
                      <Paragraph className="carousel-p">
                        Utilize your basement as an additional living space to enhance the comfort and functionality of your home.
                      </Paragraph>
                    </Col>
                  </Row>
                </Col>
                <Col span={24}>
                  <div
                    data-animation="animated fadeInLeft"
                    className="animated fadeInLeft"
                  >
                    <Row align="middle" gutter={[24, 25]}>
                      <Col className="carousel-btn-col">
                        <Button
                          size="large"
                          className="carousel-btn c-blackish bgc-goldish b-goldish s-blackish hover-b-goldish"
                        href='/our-process'
                        >
                          SEE OUR PROCESS
                        </Button>
                      </Col>
                      <Col className="carousel-btn-col">
                        <Button
                          size="large"
                          className="carousel-btn c-white bgc-blackish b-blackish  s-blackish hover-b-blackish"
                        href='/contact-us'
                        >
                          GET A QOUTE NOW
                        </Button>
                      </Col>
                    </Row>
                  </div>
                </Col>
              </Row>
            </div>
          </div>
        )}
      </div>
      <div>
        <img
          src="https://mylegalbasement.ca/wp-content/themes/mylegalbasement/images/myban3.jpg"
          alt=""
          className="carousel-img"
        />
        <div className="carousel-overlay"></div>
        {slideNumber === 2 && (
          <div className="carousel-container">
            <div className="carousel-inner-content">
              <Row gutter={[0, 10]}>
                <Col
                  span={24}
                  data-animation="animated zoomInRight"
                  className="animated zoomInRight"
                >
                  <Row>
                    <Col>
                      <Title className="carousel-title">
                      Turn Your Vision Into
                      </Title>
                    </Col>
                  </Row>
                </Col>
                <Col span={24}>
                  <Row
                    data-animation="animated zoomInRight"
                    className="animated zoomInRight"
                  >
                    <Col>
                      <Title level={2} className="carousel-title">
                      Reality	
                      </Title>
                    </Col>
                  </Row>
                </Col>
                <Col span={24}>
                  <Row
                    data-animation="animated fadeInLeft"
                    className="animated fadeInLeft  delay-1_1"
                  >
                    <Col>
                      <Paragraph className="carousel-p">
                      Let us help you bring your dream  to life with our collaborative design approach and high-quality workmanship.
                      </Paragraph>
                    </Col>
                  </Row>
                </Col>
                <Col span={24}>
                  <div
                    data-animation="animated fadeInLeft"
                    className="animated fadeInLeft"
                  >
                    <Row align="middle" gutter={[24, 25]}>
                      <Col className="carousel-btn-col">
                        <Button
                          size="large"
                          className="carousel-btn c-blackish bgc-goldish b-goldish s-blackish hover-b-goldish"
                        href='/our-process'
                        >
                          SEE OUR PROCESS
                        </Button>
                      </Col>
                      <Col className="carousel-btn-col">
                        <Button
                          size="large"
                          className="carousel-btn c-white bgc-blackish b-blackish  s-blackish hover-b-blackish"
                        href='/contact-us'
                        >
                          GET A QOUTE NOW
                        </Button>
                      </Col>
                    </Row>
                  </div>
                </Col>
              </Row>
            </div>
          </div>
        )}
      </div>
      <div>
        <img
          src="https://mylegalbasement.ca/wp-content/themes/mylegalbasement/images/myban4.jpg"
          alt=""
          className="carousel-img"
        />
        <div className="carousel-overlay"></div>
        {slideNumber === 3 && (
          <div className="carousel-container">
            <div className="carousel-inner-content">
              <Row gutter={[0, 10]}>
                <Col
                  span={24}
                  data-animation="animated zoomInRight"
                  className="animated zoomInRight"
                >
                  <Row>
                    <Col>
                      <Title className="carousel-title">
                        Experience Luxury in Your Own
                      </Title>
                    </Col>
                  </Row>
                </Col>
                <Col span={24}>
                  <Row
                    data-animation="animated zoomInRight"
                    className="animated zoomInRight"
                  >
                    <Col>
                      <Title level={2} className="carousel-title">
                        Spaces
                      </Title>
                    </Col>
                  </Row>
                </Col>
                <Col span={24}>
                  <Row
                    data-animation="animated fadeInLeft"
                    className="animated fadeInLeft  delay-1_1"
                  >
                    <Col>
                      <Paragraph className="carousel-p">
                        We can Transform a bathroom that feels like a spa retreat to start your day refreshed and relaxed..
                      </Paragraph>
                    </Col>
                  </Row>
                </Col>
                <Col span={24}>
                  <div
                    data-animation="animated fadeInLeft"
                    className="animated fadeInLeft"
                  >
                    <Row align="middle" gutter={[24, 25]}>
                      <Col className="carousel-btn-col">
                        <Button
                          size="large"
                          className="carousel-btn c-blackish bgc-goldish b-goldish s-blackish hover-b-goldish"
                          href='/our-process'
                        >
                          SEE OUR PROCESS
                        </Button>
                      </Col>
                      <Col className="carousel-btn-col">
                        <Button
                          size="large"
                          className="carousel-btn c-white bgc-blackish b-blackish  s-blackish hover-b-blackish"
                          href='/contact-us'
                        >
                          GET A QOUTE NOW
                        </Button>
                      </Col>
                    </Row>
                  </div>
                </Col>
              </Row>
            </div>
          </div>
        )}
      </div>
    </Carousel>
  );
};
export default SlideCarousel;

// const style = {
//   carousel1: {
//     backgroundImage: 'url(FP-92873F.jpg)',
//     margin: 'auto',
//     width: '100%',
//     opacity: 0.7
//   },
//   carousel2: {
//     backgroundImage: 'url(29-1133.jpg)',
//     margin: 'auto',
//     width: '100%',
//     opacity: 0.7
//   },
//   contentStyle: (width) => ({
//     // height: width * 0.4 < 1000 ? width * 0.4 : 1000,
//     // height: '638.234px',
//   }),
// };
