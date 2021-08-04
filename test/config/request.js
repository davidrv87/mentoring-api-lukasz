const supertest = require('supertest')
const app = require('../../src/App')

const getRequest = url => {
  let request = supertest(app)

  if (url) {
    console.log(`Testing URL is ${url}`)
    request = supertest(url)
  } else {
    console.log('Testing local app')
  }

  return request
}

module.exports = getRequest
