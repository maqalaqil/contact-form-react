import nodemailer from 'nodemailer'

import config from './config'

let transporter = nodemailer.createTransport({
  name: "www.ddcif.com",
  host: "smtp.ddcif.com",
  port:  587,
 secure: false,// false for other ports
  auth: {
    user: "formweb@ddcif.com", // generated ethereal user
    pass: "123456" // generated ethereal password
  }
});


///mine


// const transporter = nodemailer.createTransport({
//   host: 'smtp.ethereal.email',
//   port: 587,
//   auth: {
//       user: 'eve.mcdermott97@ethereal.email',
//       pass: 'ku2TzURz7JV8H6Cp8a'
//   }
// });
//mine



// let transporter = nodemailer.createTransport(smtpTransport({
//   name: "www.ddcif.com",
//   host: "smtp.ddcif.com",
//   port: 587,
//   false: false,
//  // true for 465, false for other ports
//   auth: {
//     user: "formweb@ddcif.com", // generated ethereal user
//     pass: "123456" // generated ethereal password
//   }
// }));
transporter.verify(function(error, success) {
  if (error) {
    console.log(error);
  } else {
    console.log("Server is ready to take our messages");
  }
});
const send = ({ email, name, phone, text }) => {
  const from = name && email ? `${name} <${email}>` : `${name || email}`
  const message = {
    from,
    to: 'formweb@ddcif.com',
    subject: `New message from ${from}, phone number ${phone}`,
    text,
    replyTo: from
  };

  return new Promise((resolve, reject) => {
    transporter.sendMail(message, (error, info) =>
      error ? reject(error) : resolve(info)
    )
  })
}

export default send
