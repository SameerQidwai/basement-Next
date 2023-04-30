import React, { useEffect, useState} from  'react';
import { Col, Row, Button, Tooltip, Typography, Menu, Layout } from 'antd';
import {useRouter} from 'next/router';
import { useWindowDimensions } from '../../useFunction';

const { Header } = Layout

// 1078
const NavHeader = (props) =>{
    const [urlKey, setKey] = useState('/')
    // Sticky Nav bar
    // .is-sticky { //     position: fixed; //     top: 0; //     left: 0; //     width: 100%; //     z-index: 999; //     box-shadow: 0 2px 24px 0 rgb(0 0 0 / 15%); //     background-color: #ffffff !important; //     animation: 500ms ease-in-out 0s normal none 1 running fadeInDown; //     padding-top: 0px; //     padding-bottom: 0px; //   }
    const router = useRouter();

    useEffect(() => {
        window.addEventListener("scroll", isSticky);
        setKey(window?.location?.pathname?? '/')
        return () => {
          window.removeEventListener("scroll", isSticky);
        };
      });
    
      /* Method that will fix header after a specific scrollable */
      const isSticky = (e) => {
        const header = document.querySelector(".header-section");
        const scrollTop = window.scrollY;
        scrollTop >= 200
          ? header.classList.add("is-sticky")
          : header.classList.remove("is-sticky");
      };

      // Sticky Nav bar
    return (
        <Header style={styles.header} className={"header-section nav-header header2"} >
            <Row justify="space-between" align="middle" style={{ padding: '0px 15px'}}>
                <Col xs={24} sm={24} md={20}>
                    <Menu mode="horizontal" className="custom-menu c-goldish"  selectedKeys={[urlKey]}>
                        <Menu.Item key="/"  onClick={() => router.push('/')}>
                            Home
                        </Menu.Item>
                        <Menu.Item key="/our-process" onClick={() => router.push('/our-process')}>
                            Our Process
                        </Menu.Item>
                        <Menu.Item key="/our-projects"  onClick={() => router.push('/our-projects')}>
                            Our Works
                        </Menu.Item>
                        {/* <Menu.Item key="/blog"  onClick={() => router.push('/blog')}>
                            Blog
                        </Menu.Item> */}
                        <Menu.Item key="/careers"  onClick={() => router.push('/careers')}>
                            Careers
                        </Menu.Item>
                        <Menu.Item key="/about-us"  onClick={() => router.push('/about-us')}>
                            About Us
                        </Menu.Item>
                    </Menu>
                </Col>
                <Col xs={24} sm={24} md={3} className="txt-center">
                    <Button
                        // type="ghost" 
                        // ghost
                        size='large'
                        block
                        className='c-white b-blackish bgc-blackish hover-bgc-blackish hover-b-blackish hover-c-white hover-s-goldish scroll-down'
                        onClick={()=>props.openModal()}
                    > CONTACT US </Button>
                </Col>
            </Row>
        </Header>
    
    )
}
export default NavHeader
// https://codesandbox.io/s/vv4xvl41v0
const styles = {
    header: {
      height: 'auto', 
      padding: 0,
      margin: 0, 
    //   background: 'rgba(57,63,67,0.01)' ,
      width: '100%'
    }
}