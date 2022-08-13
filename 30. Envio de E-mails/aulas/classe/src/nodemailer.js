const nodemailer = require('nodemailer');
const handlebars = require('nodemailer-express-handlebars');

// let transportador = nodemailer.createTransport({
//   host:process.env.TRANSPORTADOR_HOST,
//   port: 587,
//   secure: false, // true for 465, false for other ports
//   auth: {
//     user: process.env.TRANSPORTADOR_AUTH_USER,
//     pass:  process.env.TRANSPORTADOR_AUTH_PASS // generated ethereal password
//   }
// });

const transportador = nodemailer.createTransport({
  host: process.env.TRANSPORTADOR_HOST,
  port: 587,
  secure: false,
  auth: {
    user: process.env.TRANSPORTADOR_AUTH_USER,
    pass: process.env.TRANSPORTADOR_AUTH_PASS
  }
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
