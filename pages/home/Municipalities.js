import React, { useEffect, useState } from 'react'
import { Col, Row, Typography, Button, Divider } from 'antd'
import {useRouter} from 'next/router';

const {Title , Text} = Typography

const logos  = [
    'oakville-logo.webp',
    'Aurora-logo.webp',
    'ajax-logo.webp',
    'richmond-hill-logo.webp',
    'brampton-logo.webp',
    'toronto-logo.webp',
    'oshawa-logo.webp',
    'vaughan-logo.webp',
    'markham-logo.webp',
    'whityby-logo.webp',
    'newmarket-logo.webp',
    'mississauga-logo.webp',
]

const  Municipalities = () => {
    let [shuffled, shuffling] = useState([...Array(12).keys()])
    // useEffect(() => {
    //   shuffling(shuffled.sort(function () {
    //     return Math.random() - 0.5;
    //   }))
    // }, [])
    

    const router = useRouter()
    return (
      <Row>
        <Col span={24} className="municipal-container">
          <Row className="choose-container" justify="center">
            <Col span={24} className="txt-center">
              <Title level={3}>Municipalities we work with</Title>
            </Col>
            <Col span={20}>
              <Row gutter={[20, 34]}>
                {shuffled.map((el) => (
                  <Col md={4} sm={8} xs={12} key={el}>
                    <div className="municipal-logo-box">
                      <img
                        className="logo"
                        src={`${logos[el]}`}
                        alt=""
                      />
                    </div>
                  </Col>
                ))}
              </Row>
            </Col>
          </Row>
        </Col>
      </Row>
    );
}

export default Municipalities