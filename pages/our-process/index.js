import React from 'react';
import { Col, Row, Typography, Image, Divider, Avatar, Button } from 'antd';
import { CaretRightOutlined } from '@ant-design/icons';
import { useWindowDimensions } from '../../Component/useFunction';

const { Title, Text } = Typography;

const processes = [
  {
    title: 'Unlock More Living Space',
    description: `Discover the potential of your disused basement and transform it into valuable living space with our expert basement conversion services. We offer an affordable and practical solution to create additional bedrooms, entertainment areas, and utility rooms from an area of your home that would otherwise have been left unused or dedicated to storage. Our company specializes in basement construction below or near existing buildings, and we have the expertise to turn your basement into a beautiful and functional living space that meets your needs and budget. Contact us today to explore the possibilities of your basement and start enjoying more living space in your home. `,
  },
  {
    title: 'ENHANCING  PROPERTY VALUE',
    description: `At our company, we specialize in creating underground spaces that not only provide additional living areas but also increase the value of your property. Through our expertise in restricted access piling, underpinning, structural, temporary works, and groundworks, we can undertake even the most complex projects in-house, including multi-story basements and other living spaces that come with warranty support. Our efficient and reliable services are designed to help you realize the full potential of your property.`,
  },
  {
    title: 'ABSOLUTELY RELIABLE TEAM',
    description: `We prioritize clear communication and unwavering reliability when working on basement construction projects. Our team has the necessary experience to handle any challenges that may arise during the construction process, ensuring outstanding results. As a construction company in Ontario, we understand the importance of leaving nothing to chance when it comes to foundation work. Choose our trusted and dependable team for your basement construction needs.`,
  },
];

const index = () => {
  // eslint-disable-next-line
  const { height, width } = useWindowDimensions();
  return (
    <Row justify='center'>
      <Col span={24} className="bgc-white txt-center process-page-services">
          <p className='process-page-descition c-blackish'>With years of experience, Azim Constructions has worked on hundreds of basement constructions along with Kitchen and Bathroom renovation projects. With skilled engineers and architects, we are efficient enough to cater to your needs through professional renovation and construction services.</p>
      </Col>
      {/* background Image  */}
      <Col span={24} className="services">
        <div className="services-overlay"></div>
        <Row gutter={[0, 40]} className="services-container" justify="center">
          {/* back ground Color */}
          {processes.map(({ title, description }, index) => (
            <Col
            key={index}
              xs={24}
              sm={24}
              md={22}
              lg={22}
              className={
                index % 2 === 0
                  ? 'services-card s-goldish bgc-blackish'
                  : 'services-card s-blackish bgc-white'
              }
            >
              <Row justify="space-between">
                {/* background number Color */}
                <Col
                  xs={24}
                  sm={18}
                  md={18}
                  lg={18}
                  className="txt-center mb-16"
                ></Col>
                <Col xs={24} sm={24} md={16} lg={18}>
                  <Row gutter={[0, 20]}>
                    <Col span={24}>
                      <Row gutter={[10, 10]}>
                        <Col span={width < 790 && 24}>
                          <Button
                            size="large"
                            type="primary"
                            block
                            className={
                              index % 2 === 0
                                ? 'bgc-goldish b-goldish'
                                : 'bgc-blackish b-blackish'
                            }
                          >
                            <Title level={3} className="m h3-ff">
                              0{index + 1}
                            </Title>
                          </Button>
                        </Col>
                        <Col>
                          <Title
                            level={2}
                            className={
                              index % 2 === 0
                                ? 'services-title c-white'
                                : 'services-title c-goldish'
                            }
                          >
                            {title}
                          </Title>
                        </Col>
                      </Row>
                    </Col>
                    <Col span={24}>
                      <p className={ index % 2 === 0 ? 'services-point c-white' : 'services-point c-goldish' }>{description}</p>
                    </Col>
                  </Row>
                </Col>
                <Col>
                  <Button
                    type="primary"
                    size="large"
                    block
                    href="/contact-us"
                    className={
                      index % 2 === 0
                        ? 'bgc-goldish b-goldish c-white hover-s-goldish'
                        : 'bgc-blackish b-blackish c-golidsh hover-s-blackish'
                    }
                  >
                    <span>CONTACT US</span>
                  </Button>
                </Col>
              </Row>
            </Col>
          ))}
        </Row>
      </Col>
    </Row>
  );
};

export default index;
