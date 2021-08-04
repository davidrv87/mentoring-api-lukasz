const request = require('../config/request')

const basePath = process.env.API_URL ? '/' : '/geoip/'

describe('GeoIP API', () => {

  it('should fetch my own location when not passing IP', async () => {
    const response = await request
      .get(basePath)
      .expect(200)

    expect(response.body).toMatchObject({
      country_code: 'ES',
      country_name: 'Spain',
      city: 'Madrid'
    })
  })

  it('should fetch the location of a given IP address', async () => {
    const response = await request
      .get(`${basePath}77.230.16.53`)
      .expect(200)

    expect(response.body).toMatchObject({
      country_code: 'ES',
      country_name: 'Spain',
      city: 'Madrid'
    })
  })

  it('should fail for invalid IP address', async () => {
    const ip = '77.230.16.5378878'

    await request
      .get(`${basePath}${ip}`)
      .expect(404)
  })
})
