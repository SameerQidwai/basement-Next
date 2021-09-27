import React from 'react'
import { Layout } from 'antd'
import CusHeader from './CusHeader'
import Slider from './Slider'
import Carousel from './Carousel'
import Welcome from './Welcome'
import Overview from './Overview'
import Services from './Services'
// import logo from '../../public/images/qb.jpg'
const {Header, Content, Footer} = Layout

const  Structure = () =>{
  return (
    <Layout>
      <Header style={styles.layout}>
        <CusHeader/>
      </Header>
      <Layout>
        <Content>
            <Slider/>
            <Welcome />
            <Overview />
            <Services/>
            {/* <Carousel/> */}
        </Content>
      </Layout>
      <Footer>footer</Footer>
    </Layout>
  )
}

export default Structure

const styles = {
  layout: {
    height: 100, 
    padding: '0 1px 0px 0px',
    margin: 0, 
    lineHeight: '20px', 
    background: '#fff' 
  },
}