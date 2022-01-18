import React from 'react'
import {  Image } from 'antd'
import SplitPane, { Pane } from 'react-split-pane';

const  index = () =>{
  return (
    <div style={{width:'50%', height:'50%'}}>
      <SplitPane 
        split="vertical"
        minSize={50}
      >
          {/* <Image src={'/basement1.jpg'}  />  */}
          {/* <Image src={'/basement2.jpg'}  />  */}
          <div style={{backgroundImage: "url('/basement1.jpg')", padding:'50%'}}></div>
          <div style={{backgroundImage: "url('/basement2.jpg')", padding:'50%'}}></div>
      </SplitPane>
      </div>
  )
}

export default index

const styles = {
  layout: {
    height: 100, 
    padding: '0 1px 0px 0px',
    margin: 0, 
    lineHeight: '20px', 
    background: '#fff' 
  },
}