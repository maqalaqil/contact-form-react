import 'babel-polyfill'
import express from 'express'
import bodyParser from 'body-parser'

import mailer from './mailer'

const app = express()
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('*', (req, res) => {
  res.send('Server is working. Please post at "/contact" to submit a message.')
})

app.post('/contact', (req, res) => {
  const { email = '', name = '', phone='', message = '' } = req.body

  mailer({ email, name, phone, text: message }).then(() => {
    console.log(`Sent the message "${message}" from <${name}> ${email}, phone number ${phone}.`);
    res.redirect('/#success');
  }).catch((error) => {
    console.log(`Failed to send the message "${message}" from <${name}> ${email}, phone number ${phone} with the error ${error && error.message}`);
    res.redirect('/#error');
  })
})

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}!`);
})
