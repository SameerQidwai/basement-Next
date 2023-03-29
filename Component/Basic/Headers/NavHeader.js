import React, { useEffect, useState} from  'react';
import { Col, Row, Button, Tooltip, Typography, Menu, Layout } from 'antd';
import {useRouter} from 'next/router';
import { useWindowDimensions } from '../../useFunction';

const { Header } = Layout

// 1078
const NavHeader = (props) =>{
    const {height, width} = useWindowDimensions()
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
                    <Menu mode="horizontal" className="custom-menu"  selectedKeys={[urlKey]}>
                        <Menu.Item key="/"  onClick={() => router.push('/')}>
                            Home
                        </Menu.Item>
                        {/* <Menu.Item key="/our-team"  onClick={() => router.push('/our-team')}>
                            Our Team
                        </Menu.Item> */}
                        <Menu.Item key="/our-services" onClick={() => router.push('/our-services')}>
                            Our services
                        </Menu.Item>
                        {/* <Menu.SubMenu key="/our-process" title="Our Process"  onTitleClick={() => router.push('/our-process')}>
                            <Menu.Item key="/our-process/steps-to-a-successful-build" onClick={() => router.push('/our-process/steps-to-a-successful-build')}>
                                5 Steps To A Successful Build
                            </Menu.Item> 
                            <Menu.Item key="/our-process/fair-and-balanced-contracting" onClick={() => router.push('/our-process/fair-and-balanced-contracting')}>
                                Fair and Balanced Contracting
                            </Menu.Item>
                            <Menu.Item key="/our-process/warranty" onClick={() => router.push('/our-process/warranty')}>
                                Warranty
                            </Menu.Item> 
                        </Menu.SubMenu>*/}
                        <Menu.Item key="/our-projects"  onClick={() => router.push('/our-projects')}>
                            Our Projects
                        </Menu.Item>
                        <Menu.Item key="/services-pricing"  onClick={() => router.push('/services-pricing')}>
                            services pricing
                        </Menu.Item>
                        <Menu.Item key="/blog"  onClick={() => router.push('/blog')}>
                            Blog
                        </Menu.Item>
                        <Menu.Item key="/careers"  onClick={() => router.push('/careers')}>
                            careers
                        </Menu.Item>
                        <Menu.Item key="/contact-us"  onClick={() => router.push('/contact-us')}>
                            Contact us
                        </Menu.Item>
                        {/* <Menu.Item key="Custom & Design Build" >
                            Custom & Design Build
                        </Menu.Item> */}
                        <Menu.Item key="/consulting" onClick={() => router.push('/consulting')}>
                            Consulting
                        </Menu.Item>
                    </Menu>
                </Col>
                <Col xs={24} sm={24} md={4}>
                    <Button
                        // type="ghost" 
                        ghost
                        size='large'
                        block
                        // style={{backgroundColor: '#fed03d', fontWeight: 600}} 
                        onClick={()=>props.openModal()}
                    > Contact US </Button>
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