import React from 'react'
import { Row, Col } from 'antd'
import { FacebookOutlined, TwitterOutlined, InstagramOutlined, LinkedinOutlined, RightOutlined } from '@ant-design/icons';

const CustomFooter = ()=>{
    return (
        <div className="footer wow fadeIn" data-wow-delay="0.3s">
            <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }} justify="space-around">
                <Col md={ 12} lg={6}>
                    <div className="footer-contact">
                        <h2>Office Contact</h2>
                        <p><i className="fa fa-map-marker-alt"></i>123 Street,ontario, canada</p>
                        <p><i className="fa fa-phone-alt"></i>+9898320048 </p>
                        <p><i className="fa fa-envelope"></i>sami@gamil.com</p>
                        <div className="footer-social">
                            <a href=""><i className="fab fa-twitter"> <TwitterOutlined/></i></a>
                            <a href=""><i className="fab "><FacebookOutlined/></i></a>
                            <a href=""><i className="fab fa-instagram"><InstagramOutlined/></i></a>
                            <a href=""><i className="fab fa-linkedin-in"><LinkedinOutlined /></i></a>
                        </div>
                    </div>
                </Col>
                <Col md={ 12} lg={6}>
                    <div className="footer-link">
                        <h2>Services Areas</h2>
                        <a href=""><RightOutlined /> Building Construction</a>
                        <a href=""><RightOutlined /> House Renovation</a>
                        <a href=""><RightOutlined /> Architecture Design</a>
                        <a href=""><RightOutlined /> Interior Design</a>
                        <a href=""><RightOutlined /> Painting</a>
                    </div>
                </Col>
                <Col md={ 12} lg={6}>
                    <div className="footer-link">
                        <h2>Services Areas</h2>
                        <a href=""><RightOutlined /> Building Construction</a>
                        <a href=""><RightOutlined /> House Renovation</a>
                        <a href=""><RightOutlined /> Architecture Design</a>
                        <a href=""><RightOutlined /> Interior Design</a>
                        <a href=""><RightOutlined /> Painting</a>
                    </div>
                </Col>
            </Row>
            <div className="copyright">
                <Row justify="space-between ">
                    <Col>
                        <p>&copy; <a href="#">Your Site Name</a>, All Right Reserved.</p>
                    </Col>
                    <Col>
                        <p>Designed By <a href="https://www.linkedin.com/in/sameer-qidwai/">Q Codex</a></p>
                    </Col>
                </Row>
            </div>
        </div>
    )
}

export default CustomFooter