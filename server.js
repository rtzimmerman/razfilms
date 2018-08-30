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

app.use(express.static(__dirname+'/dist/my-app'));

//Path Location Strategy
app.get('/*', (req,res) => {
    res.sendFile(path.join(__dirname+'/dist/my-app/index.html'));
  });
app.listen(process.env.PORT || 5001);

app.post('/send-email', (req, res) => {
  //console.log(req);
  console.log(req.body);
  const transporter = nodemailer.createTransport({
    host: EMAIL_HOST,
    port: EMAIL_PORT,
    auth: {
        user: EMAIL_USER,
        pass: EMAIL_PASS
    }
  });

  var mailOptions = {
    from: 'zim2007@gmail.com', // sender address
    to: 'zimmer_32@hotmail.com', // list of receivers
    subject: 'Email Example', // Subject line
    text: 'peace'//, // plaintext body
    // html: '<b>Hello world ✔</b>' // You can choose to send an HTML body instead
  };

  transporter.sendMail(mailOptions);
  console.log('email sent');
  res.sendStatus(200);
});

console.log('Server running on port: ', process.env.PORT);


