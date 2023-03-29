import React from 'react';
import { Col, Divider, Row, Tooltip, Typography } from 'antd';
import { FacebookFilled, TwitterSquareFilled, } from '@ant-design/icons';

const { Text } = Typography;

const BottomFooter = () => {
  return (
    <div>
        <Row justify='center' className="link-footer row-margin-null" gutter={[30,10]}>
            <Col><Text>ARCHITECTURAL DRAWINGS & BUILDING PERMITS</Text></Col>
            <Col><Text>BASEMENT CONSTRUCTION</Text></Col>
            <Col><Text>KITCHENS</Text></Col>
            <Col><Text>BATHROOMS</Text></Col>
            <Col><Text>HOME IMPROVEMENTS</Text></Col>
        </Row>
        <Row
            className="bottom-footer"
            justify="space-between"
            gutter={[0, 10]}
            align="middle"
        >
            <Col className="left-center h-auto" xs={24} md={24} lg={12}>
            <Text>
                COPYRIGHT ANVALE HOMES
                <Divider type="vertical" />
                ALL RIGHTS RESERVED
                <Divider type="vertical" />
                Design by Qidwai
            </Text>
            </Col>
            <Col
            className="txt-center h-auto"
            xs={24}
            md={24}
            lg={4}
            xl={3}
            xxl={2}
            >
            <Row gutter={[16]} justify="center" className="mt-10">
                <Col>
                <Tooltip title="Facebook" arrowPointAtCenter>
                    <a
                    target={'_blank'}
                    href="https://www.facebook.com/"
                    className="reset-a mb-16"
                    >
                    <FacebookFilled  className="fs-25 fb-icon"/> 
                    </a>
                </Tooltip>
                </Col>
                <Col>
                <Tooltip title="Twitter" arrowPointAtCenter>
                    <a
                    target={'_blank'}
                    href="https://www.twitter.com/"
                    className="reset-a mb-16"
                    >
                    <TwitterSquareFilled  className="fs-25 tw-icon"/> 
                    </a>
                </Tooltip>
                </Col>
                {/* <Col>
                <Tooltip title="LinkedIn" arrowPointAtCenter>
                    <a
                    target={'_blank'}
                    href="https://www.linkedIn.com/"
                    className="reset-a mb-16"
                    >
                    <LinkedinOutlined />
                    </a>
                </Tooltip>
                </Col> */}
                <Col>
                <Tooltip title="Instagram" arrowPointAtCenter>
                    <a
                    target={'_blank'}
                    href="https://www.instagram.com/"
                    className="reset-a mb-16"
                    >
                    <div className="instagram"></div>
                    </a>
                </Tooltip>
                </Col>
            </Row>
            </Col>
        </Row>
    </div>
  );
};

export default BottomFooter;
