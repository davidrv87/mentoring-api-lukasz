const express = require('express')
const router = express.Router()

router.get('/wheater/katowice', (req, res) => {
  res.json({
    temperature: "19 °C",
    wind: "17 km/h",
    description: "Moderate or heavy rain shower",
    forecast: [
        {
            day: "1",
            temperature: "+28 °C",
            "wind": "18 km/h"
        },
        {
            day: "2",
            temperature: "16 °C",
            wind: "13 km/h"
        },
        {
            day: "3",
            temperature: "+16 °C",
            wind: "11 km/h"
        }
    ] 
  })
})

router.get('/wheater', (req, res) => {
    return res.status(404).send()
  })

module.exports = router
