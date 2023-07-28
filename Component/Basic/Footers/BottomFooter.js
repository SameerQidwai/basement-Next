import React from 'react';
import { Button, Col, Divider, Row, Tooltip, Typography } from 'antd';
import { FacebookIcon, InstgramIcon, ThreadIcon } from '../../IconsLink';

const { Text } = Typography;

const BottomFooter = () => {
  return (
    <div>
      <Row
        justify="center"
        className="link-footer row-margin-null "
        gutter={[30, 10]}
      >
        <Col>
          <Button
            type="text"
            href="/our-projects?key=all"
            style={{ whiteSpace: 'break-spaces' }}
          >
            ALL
          </Button>
        </Col>
        <Col>
          <Button type="text" href="/our-projects?key=basement">
            BASEMENT CONSTRUCTION
          </Button>
        </Col>
        <Col>
          <Button type="text" href="/our-projects?key=kitchen">
            KITCHENS
          </Button>
        </Col>
        <Col>
          <Button type="text" href="/our-projects?key=bathroom">
            BATHROOMS
          </Button>
        </Col>
        <Col>
          <Button type="text" href="/our-projects?key=home">
            HOME IMPROVEMENTS
          </Button>
        </Col>
        <Col>
          <Button type="text" href="/our-projects?key=below-entrance">
            BELOW GRADE ENTRANCES
          </Button>
        </Col>
        <Col>
          <Button type="text" href="/our-projects?key=side-entrance">
            SIDE ENTRANCES
          </Button>
        </Col>
      </Row>
      <Row
        className="bottom-footer"
        justify="space-between"
        gutter={[0, 10]}
        align="middle"
      >
        <Col className="left-center h-auto" xs={24} md={24} lg={20}>
          <Text>
            Copyright © EliteOX Reno, a subsidiary company of 1877396 Ontario
            Inc.
            <Divider type="vertical" />
            ALL RIGHTS RESERVED
            <Divider type="vertical" />
            Designed and developed by sQidwai in collaboration with EliteOX
            Marketing Team.
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
              <FacebookIcon addClassName="mb-16"/>
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
              <InstgramIcon addClassName="mb-16"/>
            </Col>
            <Col>
              <ThreadIcon/>
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  );
};

export default BottomFooter;
