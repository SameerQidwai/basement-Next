import { BackTop, Layout } from 'antd'
import { UpOutlined } from '@ant-design/icons'
import Header1 from './Headers/Header1'
import HeaderLogo from './Headers/HeaderLogo'
import NavHeader from './Headers/NavHeader'
import WidgetFooter from './Footers/WidgetFooter'
import BottomFooter from './Footers/BottomFooter'
import NewsLetter from './Footers/NewsLetter'
import MobileHeader1 from './Headers/Mobile/MobileHeader1'

const {Content, Footer} = Layout

export default function PageLayout({ children, openContact }) {
  return (
      <Layout className="overflowX-hidden">
        {/* <Header1/> */}
        <MobileHeader1/>
        {/* <HeaderLogo openModal={openContact}/> */}
        <NavHeader openModal={openContact} />
        <Content style={{backgroundColor: '#ffff'}}>
          
            <main>{children}</main>
            {/* <main>{children}</main> */}
        </Content>
        <Footer className='page-footer-news-letter' >
          <NewsLetter/>
        </Footer>
        <Footer className='page-footer-widget' >
          <WidgetFooter/>
        </Footer>
        <Footer className='page-footer-bottom' >
            <BottomFooter/>
        </Footer>
        <BackTop duration={1000}>
          <div className="back-top">
            <UpOutlined />
          </div>
        </BackTop>
      </Layout>
  )
}


