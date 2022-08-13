const nodemailer = require('nodemailer');

const transportador = nodemailer.createTransport({
  host: process.env.TRANSPORTADOR_HOST,
  port: 587,
  secure: false,
  auth: {
    user: process.env.TRANSPORTADOR_AUTH_USER,
    pass: process.env.TRANSPORTADOR_AUTH_PASS
  }
});

module.exports = transportador;
