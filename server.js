const express = require('express')
const nodemailer = require('nodemailer')
const path = require('path')
const bodyParser = require('body-parser'); 
require('dotenv').config()




const app = express();
app.use(bodyParser.json()); 

const PORT = process.env.PORT || 3000

app.use(express.static("public"));
app.use(express.json({limit: '1mb'}))


app.post('/myform', function(req, res) {
    console.log(req.body)
})




const sendEmail = function(email, topic, message) {

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
            console.log('error occured', err)
        } else {
            console.log('email sent')
        }
    })

}





app.listen(PORT, () => {
    console.log(`Server running at: http://localhost:${PORT}/`);
  });