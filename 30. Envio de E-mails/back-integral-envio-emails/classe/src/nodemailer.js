const nodemailer = require('nodemailer');
const handlebars = require('nodemailer-express-handlebars');

// let transportador = nodemailer.createTransport({
//   host: 'smtp.mailgun.org',
//   port: 587,
//   secure: false, // true for 465, false for other ports
//   auth: {
//     user: 'postmaster@sandboxf033b2ae88674908a59c94cb13119c71.mailgun.org',
//     pass: '310ba3c68974e2d7f1450db18a7a98c0-77985560-449091e5' // generated ethereal password
//   }
// });

const transportador = nodemailer.createTransport({
  host: 'smtp.mailtrap.io',
  port: 2525,
  auth: {
    user: '82def955c84490',
    pass: 'db24f5384edf6f'
  },
  pool: true,
  rateLimit: true, 
  maxConnections: 1, 
  maxMessages: 3
});

transportador.use(
  'compile',
  handlebars({
    viewEngine: {
      extname: '.handlebars',
      defaultLayout: false
    },
    viewPath: './views/'
  })
);

module.exports = transportador;
