const express = require('express')
const isIp = require('is-ip')

const router = express.Router()

router.get('/geoip', (req, res) => {
  res.json({
    ip: "77.230.16.53",
    country_code: "ES",
    country_name: "Spain",
    region_code: "MD",
    region_name: "Madrid",
    city: "Madrid",
    zip_code: "28055",
    time_zone: "Europe/Madrid",
    latitude: 40.4143,
    longitude: -3.7016,
    metro_code: 0
  })
})

router.get('/geoip/:ip', (req, res) => {
  const { ip } = req.params

  if (!isIp(ip)) {
    return res.status(404).send()
  }

  res.json({
    ip: "77.230.16.53",
    country_code: "ES",
    country_name: "Spain",
    region_code: "MD",
    region_name: "Madrid",
    city: "Madrid",
    zip_code: "28055",
    time_zone: "Europe/Madrid",
    latitude: 40.4143,
    longitude: -3.7016,
    metro_code: 0
  })
})

module.exports = router
