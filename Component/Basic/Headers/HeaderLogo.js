import React, {useState, useEffect} from 'react'
import { Row, Col, Typography, Layout, Dropdown, Menu, Button } from 'antd'
import { MenuOutlined } from '@ant-design/icons';

const { Link } = Typography;
const { Header } = Layout
const HeaderLogo = (props) =>{
    const [showMenu, openMenu ]= useState(false)
    const newmenu = (e) =>{
        console.log(e.key);
    openMenu(!showMenu)
    }

    useEffect(() => {
        window.addEventListener("scroll", isSticky);
        return () => {
          window.removeEventListener("scroll", isSticky);
        };
      });
    
      /* Method that will fix header after a specific scrollable */
      const isSticky = (e) => {
        const header = document.querySelector(".header-logo-mobile");
        const scrollTop = window.scrollY;
        scrollTop >= 100
          ? header.classList.add("is-sticky-mobile")
          : header.classList.remove("is-sticky-mobile");
      };
    
    return(
        <Header style={styles.header}>
            <Row justify="center" align="middle" className='header-p header-logo header-logo-standard'>
                <Col>
                    <Link to="/">
                        <img 
                        src="logo-standard.png"
                        width="300"
                        height="125"
                        />
                    </Link>
                </Col>
            </Row>
            {/* <Row  align="middle" className='header-p header-logo header-logo-mobile'>
                <Col > */}
                    <Dropdown
                        className={'menu-list header-p header-logo header-logo-mobile'}
                        destroyPopupOnHide={true}
                        visible={showMenu}
                        overlay={<Menu onSelect={()=> openMenu(!showMenu)}>
                         <Menu.Item key="Home" className='mr-a' >
                            Home
                        </Menu.Item>
                        <Menu.Item key="Our Team" className='mr-a'>
                            Our Team
                        </Menu.Item>
                        <Menu.SubMenu key="SubMenu" title="Our Process" className='mr-a'>
                            <Menu.Item key="Successful" >
                                5 Steps To A Successful Build
                            </Menu.Item>
                            <Menu.Item key="Contracting" >
                                Fair and Balanced Contracting
                            </Menu.Item>
                            <Menu.Item key="Warranty" >
                                Warranty
                            </Menu.Item>
                        </Menu.SubMenu>
                        <Menu.Item key="Our Work" className='mr-a'>
                            Our Work
                        </Menu.Item>
                        <Menu.Item key="Renovation" className='mr-a'>
                            Renovation
                        </Menu.Item>
                        <Menu.Item key="Custom & Design Build" className='mr-a'>
                            Custom & Design Build
                        </Menu.Item>
                        <Menu.Item key="Consulting" className='mr-a'>
                            Consulting
                        </Menu.Item>
                        <Menu.Item key="Contact us" >
                            Contact US
                        </Menu.Item>
                        </Menu>}
                    >
                        <Row justify="space-between">
                        <Col >
                            <Link to="/">
                                <img
                                    className='img-hidden'
                                    src="logo-mobile.png"
                                    width="225"
                                    height="94"
                                />
                                <img
                                    className='img-visible'
                                    src="logo-sticky.png"
                                    width="40"
                                    height="40"
                                />
                            </Link>
                        </Col>
                        <Col>
                            <Button onClick={()=> openMenu(!showMenu)}>
                                <MenuOutlined/>
                            </Button>
                        </Col>
                        </Row>
                    </Dropdown>
                {/* </Col>
            </Row> */}
        </Header>
    )
}

export default HeaderLogo

const styles = {
    header: {
      height: 'auto', 
      padding: 0,
      margin: 0, 
      background: '#fff' ,
      // zIndex: 1, 
      width: '100%'
    }
  }