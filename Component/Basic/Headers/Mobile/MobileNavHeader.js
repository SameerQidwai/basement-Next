import React, { useEffect, useState } from 'react';
import { Col, Row, Button, Tooltip, Typography, Menu, Layout, Dropdown, } from 'antd'; import { useRouter } from 'next/router';
import { MenuOutlined } from '@ant-design/icons';

const { Header } = Layout;

// 1078
const MobileNavHeader = (props) => {
  const [urlKey, setKey] = useState('/');
  const [showMenu, setShowMenu] = useState(false);
  const openMenu = (value)=>{
    setShowMenu(value)
  }
  const router = useRouter();

  const callRoute = (route) =>{
    setShowMenu(false)
    setKey(route)
    router.push(route)
  }

  useEffect(() => {
    // window.addEventListener('scroll', isSticky);
    setKey(window?.location?.pathname ?? '/');
    // return () => {
    //   window.removeEventListener('scroll', isSticky);
    // };
  });

  /* Method that will fix header after a specific scrollable */
  const isSticky = (e) => {
    const header = document.querySelector('.header-mobile-section');
    const scrollTop = window.scrollY;
    scrollTop >= 200
      ? header.classList.add('is-sticky-mobile')
      : header.classList.remove('is-sticky-mobile');
  };

  // Sticky Nav bar
  return (
    <Header
      style={styles.header}
      className={"header-mobile-section header-mobile-2 "} 
    //   className={'menu-list header-p header-logo '}
    >
      <Row
        justify="space-between"
        align="middle"
        style={{ padding: '0px 2px' }}
      >
        <Col xs={24} sm={24} md={20}>
          <Dropdown
            // className={'menu-list header-p header-logo header-logo-mobile'}
            destroyPopupOnHide={true}
            visible={showMenu}
            overlay={
              <Menu
                onSelect={() => openMenu(!showMenu)}
                selectedKeys={[urlKey]}
              >
                <Menu.Item key="/" onClick={() => callRoute('/')}>
                  Home
                </Menu.Item>
                <Menu.Item
                  key="/our-services"
                  onClick={() => callRoute('/our-services')}
                >
                  Our services
                </Menu.Item>
                <Menu.Item
                  key="/our-projects"
                  onClick={() => callRoute('/our-projects')}
                >
                  Our Works
                </Menu.Item>
                <Menu.Item key="/blog" onClick={() => callRoute('/blog')}>
                  Blog
                </Menu.Item>
                <Menu.Item
                  key="/careers"
                  onClick={() => callRoute('/careers')}
                >
                  careers
                </Menu.Item>
              </Menu>
            }
          >
            <Row justify="space-between">
                <Col>
                <a 
                // href="https://mylegalbasement.ca/"
                >
                    <img
                        className="header_logo"
                        src="https://mylegalbasement.ca/wp-content/themes/mylegalbasement/images/logo.png"
                        alt=""
                    />
                </a>
            </Col>
                <Col>
                    <Button onClick={()=> openMenu(!showMenu)}>
                        <MenuOutlined />
                    </Button>
                </Col>
            </Row>
          </Dropdown>
        </Col>
      </Row>
    </Header>
  );
};
export default MobileNavHeader;
// https://codesandbox.io/s/vv4xvl41v0
const styles = {
  header: {
    height: 'auto', 
      padding: 0,
      margin: 0, 
    //   background: 'rgba(57,63,67,0.01)' ,
      width: '100%'
  },
};
