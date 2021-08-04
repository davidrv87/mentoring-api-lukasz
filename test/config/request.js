const supertest = require('supertest')
const app = require('../../src/App')

const URL = process.env.API_URL
let request = supertest(app)

if (URL) {
  console.log(`Testing URL is ${URL}`)
  request = supertest(URL)
} else {
  console.log('Testing local app')
}

module.exports = request
