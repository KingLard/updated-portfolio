const express = require('express')
const nodemailer = require('nodemailer')
const path = require('path')
const bodyParser = require('body-parser'); 
const { response } = require('express');
require('dotenv').config()




const app = express();


app.use(bodyParser.json()); 

const PORT = process.env.PORT || 3000

if (process.env.NODE_ENV === 'production') {
	app.use(express.static('client/build'));
}

app.use(express.static("public"));
app.use(express.json({limit: '1mb'}))


app.get('*', (request, response) => {
	response.sendFile(path.join(__dirname, 'client/build', 'index.html'));
});


app.post('/myform', function(req, res) {
    const data = req.body  
    let transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.EMAIL,
            pass: process.env.PASSWORD
        }
    })
    
    let mailOptions = {
        from: data.email,
        to: 'brettl0407@gmail.com',
        subject: data.topic,
        text: data.message
    }
    
    transporter.sendMail(mailOptions, (err, data) => {
        if (err) {
            res.send('unable to send email')
        } else {
            
            console.log('email sent!')
            
        }

        alert('email sent!')

    })

   

    
    
})





app.listen(PORT, () => {
    console.log(`Server running at: http://localhost:${PORT}/`);
  });