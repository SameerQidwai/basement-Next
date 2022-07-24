// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import {  notification } from 'antd';
import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
  port: 465,
  host: "smtp.gmail.com",
  auth: {
    user: 'contact.1lm.au@gmail.com',
    pass: 'eiakgvsmqxoqvrnb',
  },
  secure: true,
})  

export default (req, res) => {
  const {Fname = '-', Lname = '-', email = '-', contact = '-', subject = '-', message = '-',} = req.body

  const mailData = {
    from: 'contact.1lm.au@gmail.com',
    to: 'sameeerqidwai@gmail.com',
    subject: `Need your ${subject}`,
    html: `<div>
    <h3>Name: ${Fname} ${Lname}</h3>
    <br/><br/>
    <h4>${message}</h4>
    <br/>
    <br/>
    <h3>Contact Details </h3>
    <p>Contact Numner: ${contact}</p>
    <p>Email Address: ${email}</p>
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
