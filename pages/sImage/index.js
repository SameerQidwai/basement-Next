import React from 'react'
import {  Image } from 'antd'
import SplitPane, { Pane } from 'react-split-pane';

const  index = () =>{
  const {Fname, Lname, email, contact, subject, message} = {Fname :'Sameer', Lname: 'Qidwai', email: 'gmail.com', contact: '89878', subject: 'you', message: 'do I need a msg?'}
  return (
    <div style={{width:'50%', height:'50%'}}>
      {/* <SplitPane 
        split="vertical"
        minSize={50}
      >
          <div style={{backgroundImage: "url('/basement1.jpg')", padding:'50%'}}></div>
          <div style={{backgroundImage: "url('/basement2.jpg')", padding:'50%'}}></div>
      </SplitPane> */}
      <div>
        <h2>Name: {Fname}{' '}{Lname}</h2>
        <h4>{message}</h4>
        <h3>Contact Details: </h3>
        <p>Contact Numner: {contact}</p>
        <p>Email Address: {email}</p>
      </div>
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