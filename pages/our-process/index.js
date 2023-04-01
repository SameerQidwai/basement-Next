import React from 'react';
import { Col, Row, Typography, Image, Divider, Avatar, Button } from 'antd';
import { CaretRightOutlined } from '@ant-design/icons';
import { useWindowDimensions } from '../../Component/useFunction';

const { Title, Text } = Typography;

const processes = [
  {
    title: 'VALUABLE EXTRA LIVING SPACE',
    description: `Converting a disused cellar is a simple, economical way to create valuable extra living space for bedrooms, entertainment and utility rooms from an area of your home that would otherwise have been used for storage or left empty. Our company particularly excels at basement construction below or near existing buildings.`,
  },
  {
    title: 'INCREASING PROPERTY VALUE',
    description: `We regularly demonstrate our efficiency to the best effect for our customers by creating underground space and increased property value. Our range of specialist restricted access piling, underpinning, structural, temporary works and groundworks skills allow us to complete even the most complicated schemes in house. Our experience includes warranty backed multi-story basements and other living spaces.`,
  },
  {
    title: 'ABSOLUTELY RELIABLE TEAM',
    description: `When you work with My Legal Basement, you can expect clear communication and absolute reliability as we work on basement construction. The construction companies in Ontario don’t have to leave this foundation work to chance. When you work with an experienced team you can expect outstanding results, no matter what challenges may present themselves over the ordinary course of a construction project.`,
  },
];

const index = () => {
  const { height, width } = useWindowDimensions();
  return (
    <Row justify='center'>
      <Col span={24} className="bgc-white txt-center process-page-services">
          <p className='process-page-descition c-blackish'>With years of experience, My Legal Basement has worked on hundreds of basement constructions along with Kitchen and Bathroom renovation projects. With skilled engineers and architects, we are efficient enough to cater to your needs through professional renovation and construction services.</p>
      </Col>
      {/* background Image  */}
      <Col span={24} className="services">
        <div className="services-overlay"></div>
        <Row gutter={[0, 40]} className="services-container" justify="center">
          {/* back ground Color */}
          {processes.map(({ title, description }, index) => (
            <Col
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
                    href="/consulting"
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
