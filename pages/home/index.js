import React from 'react'
import { Layout } from 'antd'
import CusHeader from './CusHeader'
import Slider from './Slider'
// import Carousel from './Carousel'
import Welcome from './Welcome'
import Overview from './Overview'
import Services from './Services'
import CustomFooter from './Footer'
// import logo from '../../public/images/qb.jpg'
const {Header, Content, Footer} = Layout

const  Index = () =>{
  return (
    <Layout >
      <Header style={styles.layout}>
      {/* <Header className="layout-custom"> */}
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
      <Footer style={styles.footer}>
        <CustomFooter/>
      </Footer>
    </Layout>
  )
}

export default Index

const styles = {
  layout: {
    height: 100, 
    padding: '0 1px 0px 0px',
    margin: 0, 
    lineHeight: '20px', 
    background: '#fff' ,
    position: 'fixed', 
    zIndex: 1, 
    width: '100%'
  },
  footer:{
    padding: '60px 1px 0px 0px'
  }
}