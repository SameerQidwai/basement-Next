// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import {  notification } from 'antd';
import nodemailer from 'nodemailer';
import fs from 'fs';

const transporter = nodemailer.createTransport({
  port: 465,
  host: "smtp.gmail.com",
  auth: {
    user: 'eliteoxreno@gmail.com',
    pass: 'otkxcxekjrmchnal',
  },
  secure: true,
})  

export default (req, res) => {
  const {name = '-' , email = '-', contact = '-', subject = '-', message = '-', pincode = '-', files, address= '-'} = req.body
  let attachments =[]
  files = undefined
  if(files){
    attachments = [{
      filename: files.name,
      content: fs.createReadStream(files.path),
    }]
  }
  const mailData = {
    from: 'eliteoxreno@gmail.com',
    sender:'eliteoxreno@gmail.com',
    to: ['azim.qidwai@gmail.com', 'reno@eliteox.com', 'sameeerqidwai@gmail.com'],
    subject: `Need your ${subject}`,
    html: `<div>
    <h3>Name: ${name}</h3>
    <br/><br/>
    <h4>${message}</h4>
    <br/>
    <br/>
    <h3>Contact Details </h3>
    <p>Contact Numner: ${contact}</p>
    <p>Email Address: ${email}</p>
    <p>Postal Code: ${pincode}</p>
    <p>Address: ${address}</p>
    </div>`
  }  

  transporter.sendMail(mailData, function (err, info) {
    if(err){
      console.log(err)
      notification.error({
        message: 'Your Request Is Received.',
        description: 'Thank You To Contact With Us We Will Get Back To You Soon, at Your Mentioned Contact',
        duration: 3,
      })
      // res.status(400)
    }else{
      console.log(info)
      notification.success({
        message: 'Your Request Is Received.',
        description: 'Thank You To Contact With Us We Will Get Back To You Soon, at Your Mentioned Contact',
        duration: 3,
      })
      // res.status(200)
    }
  })  
  
  res.status(200).json({ name: 'Email Sent' })
}
