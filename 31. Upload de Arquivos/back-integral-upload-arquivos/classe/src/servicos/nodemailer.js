const nodemailer = require('nodemailer');

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

module.exports = transportador;