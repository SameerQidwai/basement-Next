import React from 'react'
import { Col, Layout, Row } from 'antd'
const {Header, Content, Footer} = Layout
const style = { background: '#0092ff', padding: '8px 0' };

function Structure() {
  return (
    <Layout>
      <Header >
        <Row >
          <Col className="gutter-row" span={1}>
            <div style={style}>col-6</div>
          </Col>
          <Col className="gutter-row" span={6}>
            <div style={style}>col-6</div>
          </Col>
          <Col className="gutter-row" span={6}>
            <div style={style}>col-6</div>
          </Col>
          <Col className="gutter-row" span={6}>
            <div style={style}>col-6</div>
          </Col>
        </Row>
      </Header>
      <Layout>
        <Content>main content</Content>
      </Layout>
      <Footer>footer</Footer>
    </Layout>
  )
}

export default Structure