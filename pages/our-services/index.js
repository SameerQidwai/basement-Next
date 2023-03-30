import React from 'react';
import { Col, Row, Typography, Image, Divider, Avatar, Button } from 'antd';
import {
  CaretRightOutlined,
  CheckOutlined,
  HomeFilled,
  LeftOutlined,
  LineOutlined,
  PaperClipOutlined,
  RightOutlined,
} from '@ant-design/icons';
import Process from './Process';

const { Title, Text } = Typography;

const processes = [
  {
    title: 'ARCHITECTURAL DRAWINGS & BUILDING PERMITS',
    children: [
      'Custome Homes',
      'Additions',
      'Second Dwelling Units',
      'Door & Windows Openings',
      'Underpinning',
      'Laneway Suites',
      'Multi Family Dwelings',
      'Commiittee of Adjustments',
      'Below Grades Entrances',
      'Detached Garages',
      'Floor Plan Designs',
      'Load Bearing Wall removal',
    ],
  },
  {
    title: 'BASEMENT CONSTRUCTION',
    children: [
      'Finished Basement',
      'Rental Income Basement',
      'Walkout Basement Entranace',
      'Side Door Entrance',
      'Egress Window',
    ],
  },
  {
    title: 'KITCHEN',
    children: [
      'Interior Designning',
      'Remodelling',
      'Custom Cabinetry',
      'Marble & Quartz Countertop',
      'Faucet, Sinks &',
    ],
  },
  {
    title: 'BATHROOM',
    children: [
      'Interior Designing',
      'Remodelling',
      'Jacuzzis',
      'Stand-up Showers',
      'Walk-in Showers',
      'Glass Enclosures',
    ],
  },
  {
    title: 'HOME IMPROVEMENTS',
    children: [
      'Interior Desig',
      'Remodelling',
      'Renovations',
      'Additions',
      'Flooring',
      'Painting',
      'Whaterproofing',
      'Underpining',
      'Roofing',
      'Interlocking & Landscaping',
    ],
  },
  {
    title: 'LANE WAY SUITS',
    children: [
      'Feasibility',
      'Architectural Design',
      'Building Permit',
      'Construction',
    ],
  },
];

const index = () => {
  return (
    <Row>
      {/* background Image  */}
      <Col span={24} className="services">
        <div className="services-overlay"></div>
        <Row gutter={[0, 40]} className="services-container" justify="center">
          {/* back ground Color */}
          {processes.map(({ title, children }, index) => (
            <Col xs={24} sm={24} md={22} lg={22} className="services-card">
              <Row justify="space-between">
                {/* background number Color */}
                <Col
                  xs={24}
                  sm={18}
                  md={18}
                  lg={18}
                  className="txt-center mb-16"
                >
                  <Row justify="center">
                    <Col xs={24} sm={12} md={8} lg={5}>
                      <Button size="large" type="primary" block>
                        <Title level={3} className="m h3-ff">
                          0{index + 1}
                        </Title>
                      </Button>
                    </Col>
                  </Row>
                </Col>
                <Col xs={24} sm={24} md={16} lg={18}>
                  <Row gutter={[0, 20]}>
                    <Col span={24}>
                      <Title level={2} className="services-title">
                        {title}
                      </Title>
                    </Col>
                    <Col span={24}>
                      <Row justify="space-between">
                        {children.map((process) => (
                          <Col span={11}>
                            <Title level={5} className="services-point">
                              <CaretRightOutlined /> {process}
                            </Title>
                          </Col>
                        ))}
                      </Row>
                    </Col>
                  </Row>
                </Col>
                <Col>
                  <Button
                    type="primary"
                    size="large"
                    block
                    href="tel:+16472189786"
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
