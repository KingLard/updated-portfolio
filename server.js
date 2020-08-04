const express = require('express')
const nodemailer = require('nodemailer')
const path = require('path')
const bodyParser = require('body-parser'); 
const { response } = require('express');
require('dotenv').config()




const app = express();


app.use(bodyParser.json()); 

const PORT = process.env.PORT || 3000

app.use(express.static("public"));
app.use(express.json({limit: '1mb'}))



app.post('/myform', function(req, res) {
    console.log(req.body)
    const data = req.body
    let email = data.email
    let topic = data.topic
    let message = data.message
    
    res.json({
        status: 'success',
        email: email,
        topic: topic, 
        message: message
    })

    let transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.EMAIL,
            pass: process.env.PASSWORD
        }
    })
    
    let mailOptions = {
        from: email,
        to: 'brettl0407@gmail.com',
        subject: topic,
        text: message
    }
    
    transporter.sendMail(mailOptions, (err, data) => {
        if (err) {
            res.send('unable to send email')
        } else {
            res.send('Email Sent!')
        }
    })

    
})





app.listen(PORT, () => {
    console.log(`Server running at: http://localhost:${PORT}/`);
  });