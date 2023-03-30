import React from 'react';
import { Col, Row, Typography, Button, Divider } from 'antd';
import { useRouter } from 'next/router';

const { Title, Text } = Typography;
const Introduction = () => {
  const router = useRouter();
  return (
    <Row>
      <Col span={24} className="intro">
        <Row className="intro-container">
          <Col xs={24} sm={24} md={24} lg={12}>
            <img
              style={{ width: '91%', height: '91%' }}
              src="/basement-renovation-into-pic.png"
              alt=""
            />
          </Col>
          <Col xs={24} sm={24} md={24} lg={12}>
            <h3>Who WE ARE?</h3>
            <p>
              <strong>
                A construction company with expertise in creating legal
                basements
              </strong>
            </p>
            <p>
              We are a team of construction &amp; engineering professionals with
              a combined industry experience of over 30 years with in-house
              expertise of architecture, interior design and project management.
            </p>

            <p>
              Whether its a legal basement second dwelling unit or a kitchen
              remodel or a complete teardown we provide all these services under
              one roof. Starting from the planning phase till the final move in
              we manage all aspects of the project through our team of expert
              architectural designers, engineers and project managers. With our
              experience in this industry, we know how to stay on time and
              budget to create maximum value for our clients.
            </p>
            <Row></Row>
            <Col xs={24} sm={24} md={12}>
              <a href="https://mylegalbasement.ca/our-process">
                <button className="lop_mommb">Read More</button>
              </a>
            </Col>
          </Col>
        </Row>
      </Col>
    </Row>
  );
};

export default Introduction;
