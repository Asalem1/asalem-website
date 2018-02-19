const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const api_key = require('./oauth').api_key;
const domain = require('./oauth').domain;
const user = require('./oauth').user;
const mailgun = require('mailgun-js')({apiKey: api_key, domain: domain});

const app = express();
let port = process.env.PORT || 8080;

app.use(express.static('dist'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'dist', 'index.html'));
});

app.post('/send', (req, res, next) => {
  let { name, email, message } = req.body;
  let data = {
    from: email,
    to: user,
    subject: name,
    text: `
    Hi Ariel,
    
    ${message}`,
  };
  mailgun.messages().send(data, (err, body) => {
    if (err) {
      console.error('there was an error: ', err);
      res.status(404);
      res.send(err);
    } else {
      res.send(body);
    }
  });
})

app.listen(process.env.PORT || port, function() {
  console.log('we are in the mainframe: ', port);
})
