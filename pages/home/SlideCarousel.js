import React, { useState, useEffect } from 'react';
import { Button, Carousel, Col, Row, Typography } from 'antd';
import { useWindowDimensions } from '../../Component/useFunction';
const { Title, Text, Paragraph } = Typography;

const SlideCarousel = () => {
  const { height, width } = useWindowDimensions();
  const [slideNumber, setSlideNumber] = useState(0);
  return (
    <Carousel
      className="carousel-slider"
      effect="fade"
      // autoplay
      autoplaySpeed={2000}
      // accessibility
      // arrows
      lazyLoad="ondemand"
      beforeChange={(from, to) => {
        setSlideNumber(to);
      }}
    >
      <div>
        <img
          src="https://mylegalbasement.ca/wp-content/themes/mylegalbasement/images/myban1.jpg"
          alt=""
          className="carousel-img"
        />
        <div className="carousel-overlay"></div>
        {slideNumber === 0 && (
          <div className="carousel-container">
            <div className="carousel-inner-content">
              <Row  gutter={[16, 16]} justify="center" align="middle">
                <Col
                  span={24}
                  data-animation="animated zoomInRight"
                  className="animated zoomInRight"
                >
                  <Row>
                    <Col>
                      <Title className="carousel-title">
                        Marvelous Kitchen Remodels
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
                        Interior
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
                        Revamp Your Home with Marvelous Kitchen Remodeling
                      </Paragraph>
                    </Col>
                  </Row>
                </Col>
                <Col span={24}>
                  <div
                    data-animation="animated fadeInLeft"
                    className="animated fadeInLeft"
                  >
                    <Row align="middle" gutter={[24,25]}>
                      <Col className="carousel-btn-col">
                        <Button
                          size="large"
                          className="carousel-btn1 carousel-btn"
                        >
                          SEE ARE PROCESS
                        </Button>
                      </Col>
                      <Col className="carousel-btn-col">
                        <Button
                          size="large"
                          className="carousel-btn2 carousel-btn"
                        >
                          GET A QOUTE TODAY
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
                        Enhancing your living
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
                        spaces
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
                        We collaborate with you to create your desired basement
                        by turning your vision into a reality.
                      </Paragraph>
                    </Col>
                  </Row>
                </Col>
                <Col span={24}>
                  <div
                    data-animation="animated fadeInLeft"
                    className="animated fadeInLeft"
                  >
                    <Row align="middle" gutter={[24,25]}>
                      <Col className="carousel-btn-col">
                        <Button
                          size="large"
                          className="carousel-btn1 carousel-btn"
                        >
                          SEE ARE PROCESS
                        </Button>
                      </Col>
                      <Col className="carousel-btn-col">
                        <Button
                          size="large"
                          className="carousel-btn2 carousel-btn"
                        >
                          GET A QOUTE TODAY
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
                        Below Grade Entrance
                      </Title>
                    </Col>
                  </Row>
                </Col>
                {/* <Col span={24}>
                  <Row
                    data-animation="animated zoomInRight"
                    className="animated zoomInRight"
                  >
                    <Col>
                      <Title level={2} className="carousel-title">
                      spaces	
                      </Title>
                    </Col>
                  </Row>
                </Col> */}
                <Col span={24}>
                  <Row
                    data-animation="animated fadeInLeft"
                    className="animated fadeInLeft  delay-1_1"
                  >
                    <Col>
                      <Paragraph className="carousel-p">
                        We design and build below & above grade entrances for
                        basement apartments.
                      </Paragraph>
                    </Col>
                  </Row>
                </Col>
                <Col span={24}>
                  <div
                    data-animation="animated fadeInLeft"
                    className="animated fadeInLeft"
                  >
                    <Row align="middle" gutter={[24,25]}>
                      <Col className="carousel-btn-col">
                        <Button
                          size="large"
                          className="carousel-btn1 carousel-btn"
                        >
                          SEE ARE PROCESS
                        </Button>
                      </Col>
                      <Col className="carousel-btn-col">
                        <Button
                          size="large"
                          className="carousel-btn2 carousel-btn"
                        >
                          GET A QOUTE TODAY
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
                        Creating your favourite place
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
                        spaces
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
                        Designing your bathroom to give you a soothing
                        experience to start your day.
                      </Paragraph>
                    </Col>
                  </Row>
                </Col>
                <Col span={24}>
                  <div
                    data-animation="animated fadeInLeft"
                    className="animated fadeInLeft"
                  >
                    <Row align="middle" gutter={[24,25]}>
                      <Col className="carousel-btn-col">
                        <Button
                          size="large"
                          className="carousel-btn1 carousel-btn"
                        >
                          SEE ARE PROCESS
                        </Button>
                      </Col>
                      <Col className="carousel-btn-col">
                        <Button
                          size="large"
                          className="carousel-btn2 carousel-btn"
                        >
                          GET A QOUTE TODAY
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
