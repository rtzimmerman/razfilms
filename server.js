var express = require('express');
var app = express();
const path = require('path');
var nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));
const EMAIL_HOST = process.env.EMAIL_HOST;
const EMAIL_PORT = process.env.EMAIL_PORT;
const EMAIL_USER = process.env.EMAIL_USER;
const EMAIL_PASS = process.env.EMAIL_PASS;
const FROM_EMAIL = process.env.FROM_EMAIL;
const TO_EMAIL = process.env.TO_EMAIL;

app.use(express.static(__dirname+'/dist/my-app'));

//Path Location Strategy
app.get('/*', (req,res) => {
    res.sendFile(path.join(__dirname+'/dist/my-app/index.html'));
  });
app.listen(process.env.PORT || 5001);

app.post('/send-email', (req, res) => {

  const transporter = nodemailer.createTransport({
    host: EMAIL_HOST,
    port: EMAIL_PORT,
    auth: {
        user: EMAIL_USER,
        pass: EMAIL_PASS
    }
  });

  var mailOptions = {
    from: FROM_EMAIL,
    to: TO_EMAIL,
    subject: 'Razfilms.com Contact Form Submission', 
    html: `<b>Razfilms.com Contact Form Submission</b>
          <p>From: ${req.body.name}</p> 
          <p>Email: ${req.body.email}</p>
          <p>Phone: ${req.body.phone}</p> 
          <p>Message: ${req.body.message}</p>`
  };
  transporter.sendMail(mailOptions).catch((err) => {
    console.log(err);
  });
  console.log('email sent');
  console.log(`${req.body.name}`);
  console.log(`${req.body.email}`);
  console.log(`${req.body.phone}`);
  console.log(`${req.body.message}`);
  res.redirect('/contact');
});

console.log('Server running on port: ', process.env.PORT);


