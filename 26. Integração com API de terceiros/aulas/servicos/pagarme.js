const axios = require('axios')

const instanciaAxios = axios.create({
  baseURL: 'https://api.pagar.me/1/',
  params: {
    //api_key: 'ak_test_6pRjfzq6q6oq6q6q6q6q6q6q6q6q6q6q'
    api_key: 'ak_test_qRjc2viEfQsjrfsEGj9jqZjdL3lv10'
  }
})

module.exports = instanciaAxios
