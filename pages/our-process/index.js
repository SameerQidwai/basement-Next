import React from 'react'
import { Col, Row, Typography, Image, Divider, Avatar, Button } from 'antd'
import { CheckOutlined, HomeFilled, LeftOutlined, LineOutlined, PaperClipOutlined, RightOutlined } from '@ant-design/icons';
import Process from './Process';

const {Title , Text} = Typography

const index = () =>{
    // const []
    // const scroll= (direction) =>{
    //     let far = $( '.smallCarousel' ).width()/2*direction;
    //     let pos = $('.smallCarousel').scrollLeft() + far;
    //     $('.smallCarousel').animate( { scrollLeft: pos }, 1000)
    // }
    return (
        <Process/>
    )
}

export default index
