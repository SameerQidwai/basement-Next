import React, { useEffect, useState } from 'react'
import { Col, Row, Typography, Button, Divider } from 'antd'
import {useRouter} from 'next/router';

const {Title , Text} = Typography

const logos  = [
    'oakville-logo.webp',
    'milton-logo.jfif',
    'Burlington-logo3.png',
    'Halton-Hills-logo.png',
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
      <Row className="py-50 bgc-white">
        <Col span={24}>
          <Row className="choose-container" justify="center">
            <Col span={24} className="txt-center">
              <Title level={3} className="municpal-title">Our Partnerships with Municipalities</Title>
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
