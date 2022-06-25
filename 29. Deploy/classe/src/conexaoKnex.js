const knex = require('knex')({
  client: 'pg',
  connection: {
    host: 'ec2-52-204-195-41.compute-1.amazonaws.com',
    user: 'xsoktqmztykfwr',
    password:
      'c8885f40cdcfd6b437da342149963b1e088a767a2cb42248dc2cbe71d6156719',
    database: 'dckoahhja7b9lv',
    port: 5432,
    ssl: {
      rejectUnauthorized: false
    }
  }
});

module.exports = knex;

