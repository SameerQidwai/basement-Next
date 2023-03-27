import React, { useEffect} from  'react';
import { Col, Row, Button, Tooltip, Typography, Menu, Layout } from 'antd';
import {useRouter} from 'next/router';
import { useWindowDimensions } from '../../useFunction';

const { Header } = Layout

// 1078
const NavHeader = (props) =>{
    const {height, width} = useWindowDimensions()
    // Sticky Nav bar
    // .is-sticky { //     position: fixed; //     top: 0; //     left: 0; //     width: 100%; //     z-index: 999; //     box-shadow: 0 2px 24px 0 rgb(0 0 0 / 15%); //     background-color: #ffffff !important; //     animation: 500ms ease-in-out 0s normal none 1 running fadeInDown; //     padding-top: 0px; //     padding-bottom: 0px; //   }
    const router = useRouter();

    useEffect(() => {
        window.addEventListener("scroll", isSticky);
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
        <Header style={styles.header} className={"header-section nav-header"} >
            <Row justify="center" align="middle">
                <Col >
                    <Menu mode="horizontal" className="custom-menu" disabledOverflow={true} >
                        <Menu.Item key="/" className='mr-a' onClick={() => router.push('/')}>
                            Home
                        </Menu.Item>
                        {/* <Menu.Item key="/our-team" className='mr-a' onClick={() => router.push('/our-team')}>
                            Our Team
                        </Menu.Item> */}
                        <Menu.Item key="/our-process/steps-to-a-successful-build" onClick={() => router.push('/our-process/steps-to-a-successful-build')}>
                            Our Process
                        </Menu.Item>
                        {/* <Menu.SubMenu key="/our-process" title="Our Process" className='mr-a' onTitleClick={() => router.push('/our-process')}>
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
                        <Menu.Item key="Our Work" className='mr-a'>
                            Our Work
                        </Menu.Item>
                        <Menu.Item key="Renovation" className='mr-a' onClick={() => router.push('/renovation')}>
                            Renovation
                        </Menu.Item>
                        {/* <Menu.Item key="Custom & Design Build" className='mr-a'>
                            Custom & Design Build
                        </Menu.Item> */}
                        <Menu.Item key="/consulting" className='mr-a'onClick={() => router.push('/consulting')}>
                            Consulting
                        </Menu.Item>
                        <Menu.Item key="Contact us" >
                            <Button 
                                style={{backgroundColor: '#fed03d', fontWeight: 600}} 
                                onClick={()=>props.openModal()}
                            > Contact US </Button>
                        </Menu.Item>
                    </Menu>
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
      background: '#fff' ,
      width: '100%'
    }
}