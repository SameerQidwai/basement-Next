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
        
    ]
  },
  {
    title: 'KITCHEN',
    children: [
        'Interior Designning',
        'Remodelling',
        'Custom Cabinetry',
        'Marble & Quartz Countertop',
        'Faucet, Sinks &',

    ]
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
        
    ]
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

    ]
  },
  {
    title: 'LANE WAY SUITS',
    children: [
        'Feasibility',
        'Architectural Design',
        'Building Permit',
        'Construction',
    ]
  }
];

const index = () => {
  return (
    <Row>
      {/* background Image  */}
      <Col span={24}>
        {/* overlay */}
        {/* gutter */}
        <Row>
          {/* back ground Color */}
          {processes.map(({ title, children }, index) => (
            <Col xs={24} sm={24} md={20} lg={20}>
              <Row>
                {/* background number Color */}
                <Col span={18}>
                  <p>0{index}</p>
                </Col>
                <Col xs={24} sm={24} md={16} lg={18}>
                  <Row>
                    <Col span={24}>
                      <Title level={2}>{title}</Title>
                    </Col>
                    <Col span={24}>
                      <Row>
                        {children.map((process) => (
                          <Col span={12}>
                            <Title level={5}>
                              <CaretRightOutlined /> {process}
                            </Title>
                          </Col>
                        ))}
                      </Row>
                    </Col>
                  </Row>
                </Col>
                <Col>
                  <a href="tel:+16472189786">
                    <Button
                      type="primary"
                      size="large"
                      className="conact-area-btn"
                      block
                      href="tel:+16472189786"
                    >
                      <span>CONTACT US</span>
                    </Button>
                  </a>
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
