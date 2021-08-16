const getRequest = require('../config/request')

const API_URL = process.env.API_URL_WHEATER

const request = getRequest(API_URL)
const basePath = API_URL ? '/' : '/wheater/'

describe('Current wheater', () => {

    it('should return 404 if city is not provided', async () => {
        const response = await request
        .get(basePath)
        .expect(404)
        
    })

    it('should return wheater details for Katowice', async () => {
        const response = await request
        
        .get(`${basePath}katowice`)
        .expect(200)
        expect(response.body).toMatchObject({
            temperature: "19 °C",
            wind: "17 km/h",
            description: "Moderate or heavy rain shower",
        })
    })

    it('response should have mandatory fields', async () => {
        const response = await request

        .get(`${basePath}katowice`)
        expect(response.body).toEqual(
            expect.objectContaining({
                temperature: expect.any(String),
                wind: expect.any(String),
                description: expect.any(String)
              })
        );
      });

    it('should display forecast for 3 days', async () => {
        const response = await request
        
        .get(`${basePath}katowice`)
        .expect(200)
        expect(response.body).toHaveProperty('forecast', [{
            day: "1",
            temperature: expect.any(String),
            wind: expect.any(String)
        },
        {
            day: "2",
            temperature: expect.any(String),
            wind: expect.any(String)
        },
        {
            day: "3",
            temperature: expect.any(String),
            wind: expect.any(String)
        }
          ])
    })
})