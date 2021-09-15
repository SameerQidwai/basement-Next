import React from 'react'
import BannerAnim, { Element } from 'rc-banner-anim';
import TweenOne  from 'rc-tween-one';

import 'rc-banner-anim/assets/index.css';

const BgElement = Element.BgElement;

const Slider = () =>{
    return (
      <BannerAnim prefixCls="banner-user" style={{minHeight: '70vh', position:'relative'}} autoPlay autoPlaySpeed={5000} dragPlay={false} >
        <Element key="aaa"
          prefixCls="banner-user-elem"
          followParallax={{
            // delay: 1000,
            data: [
              { id: 'bg', value: 20, bgPosition: '50%', type: ['backgroundPositionX'] },
              { id: 'title', value: 50, type: 'x' },
              { id: 'content', value: -30, type: 'x' },
            ],
          }}
        >
          <BgElement
            key="bg"
            className="bg"
            style={{
              backgroundImage: 'url(https://os.alipayobjects.com/rmsportal/IhCNTqPpLeTNnwr.jpg)',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
            id="bg"
          />
          <TweenOne className="banner-user-title" 
            animation={{ y: 30, opacity: 0, type: 'from' }}
            id="title"
          >
            Ant Motion Banner
          </TweenOne>
          <TweenOne className="banner-user-text" 
            animation={{ y: 30, opacity: 0, type: 'from', delay: 100 }}
            id="content"
          >
            The Fast Way Use Animation In React
          </TweenOne>
        </Element>
        <Element key="bbb"
          prefixCls="banner-user-elem"
          followParallax={{
            delay: 1000,
            data: [
              { id: 'bg', value: 20, bgPosition: '50%', type: ['backgroundPositionX'] },
              { id: 'title', value: 50, type: 'x' },
              { id: 'content', value: -30, type: 'x' },
            ],
          }}
        >
          <BgElement
            key="bg"
            className="bg"
            style={{
              backgroundImage: 'url(https://os.alipayobjects.com/rmsportal/uaQVvDrCwryVlbb.jpg)',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }} 
            id="bg"
          />
          <TweenOne className="banner-user-title" animation={{ y: 30, opacity: 0, type: 'from' }} 
          id="title">
            Ant Motion Banner
          </TweenOne>
          <TweenOne className="banner-user-text" 
            animation={{ y: 30, opacity: 0, type: 'from', delay: 100 }} 
            id="content"
          >
            The Fast Way Use Animation In React
          </TweenOne>
        </Element>
      </BannerAnim>
    );
}

export default Slider