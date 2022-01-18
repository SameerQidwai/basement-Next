import React,{ useState } from 'react'
import { Col, Row, Menu, Dropdown, Button } from 'antd'
import { FacebookOutlined, TwitterOutlined, InstagramOutlined, RedditOutlined, MenuOutlined} from '@ant-design/icons';
import Image from 'next/image'
import { MenuItem } from 'rc-menu';

const CusHeader = (props) =>{
  const [showMenu, openMenu ]= useState(false)
  const newmenu = (e) =>{
    console.log(e.key);
    openMenu(!showMenu)
  }
    return (
        <>
        <Row gutter={{sm: 5, md: 1}} className="header1">
          <Col >+923312735005</Col>
          <Col xs={{offset:6}} sm={{offset:1}} md={{offset: 1}} lg={{offset:1}} xl={{offset:1}}>sameerQidwai@gmail.com</Col>
          <Col xs={24} sm={{span: 6,offset:1}} md={{span: 4}} lg={{span: 3}} xl={{span: 2}} className="header-left">
            <Row justify="end" gutter={10}> 
                <Col><FacebookOutlined /></Col>
                <Col><TwitterOutlined /></Col>
                <Col><InstagramOutlined /></Col>
                <Col><RedditOutlined /></Col>
            </Row>
          </Col>
        </Row>
        <Row gutter={3} align={'middle'} className="header2 menu-li"  style={{ position: 'fixed', zIndex: 1, width: '100%' }}>
            <Col ><Image src={'/qb.jpg'} width="50%" height="50%" /></Col>
            <Col>sameerQidwai@gmail.com</Col>
            <Col lg={{span: 12}} style={{marginLeft: 'auto'}}>
              <Row justify="end" gutter={48} > 
                  <Col>Intorduction</Col>
                  <Col>Gallery</Col>
                  <Col>Contact</Col>
                  <Col>Appointment</Col>
              </Row>
            </Col>
            </Row>
          <Dropdown
            className={'menu-list'}
            destroyPopupOnHide={true}
            visible={showMenu}
            overlay={<Menu>
              <MenuItem>Intorduction</MenuItem>
              <MenuItem>Gallery</MenuItem>
              <MenuItem>Contact</MenuItem>
              <MenuItem>Appointment</MenuItem>
            </Menu>}
          >
            <Row gutter={3} align={'middle'}  className="header2" >
              <Col><Image src={'/qb.jpg'} width="50%" height="50%" /></Col>
              <Col>sameerQidwai@gmail.com</Col>
              <Col style={{marginLeft: 'auto'}} >
                <Button onClick={(e)=> newmenu(e)}>
                  <MenuOutlined/>
                </Button>
              </Col>
            </Row>
          </Dropdown>
          
      </>
    )
}
export default CusHeader
