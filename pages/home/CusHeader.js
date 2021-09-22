import React from 'react'
import { Col, Row } from 'antd'
import { FacebookOutlined, TwitterOutlined, InstagramOutlined, RedditOutlined} from '@ant-design/icons';
import Image from 'next/image'

const CusHeader = (props) =>{
    return (
        <>
            <Row gutter={1} style={styles.header1}>
              <Col span={2}>+923312735005</Col>
              <Col span={3}>sameerQidwai@gmail.com</Col>
              <Col span={19}>
            <Row justify="end" gutter={10}> 
                <Col><FacebookOutlined /></Col>
                <Col><TwitterOutlined /></Col>
                <Col><InstagramOutlined /></Col>
                <Col><RedditOutlined /></Col>
            </Row>
          </Col>
        </Row>
        <Row gutter={3} align={'middle'}  style={styles.header2}>
            <Col ><Image src={'/qb.jpg'} width="50%" height="50%" /></Col>
            <Col>sameerQidwai@gmail.com</Col>
            <Col span={18}>
            <Row justify="end" gutter={48} > 
                <Col>Intorduction</Col>
                <Col>Gallery</Col>
                <Col>Contact</Col>
                <Col>Appointment</Col>
            </Row>
            </Col>
        </Row>
      </>
    )
}
export default CusHeader

const styles = {
    header1:{
      backgroundColor: 'red',
      padding: '0 50px'
    },
    header2:{
      height:90,
      backgroundColor: 'yellow',
      padding: '0 50px'
    }
  }