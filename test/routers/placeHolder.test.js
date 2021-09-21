const getRequest = require('../config/request')

const API_URL = process.env.API_URL_PLACEHOLDER

const request = getRequest(API_URL)
const basePath = API_URL ? '/' : '/albums/'

describe('Albums', () => {

    it('should check the response type to be Array', async ()=> {
        const response = await request

        .get(basePath)
        expect(200)
        expect(Array.isArray(response.body)).toBeTruthy()

    })

    it('should return 100 albums in the array', async () => {
        const response = await request

        .get(basePath)
        expect(200)
        const albums = response.body
        expect(albums).toHaveLength(100)
  
    })

    it('should return userId, id and title properties', async () => {
        const response = await request

        .get(basePath)
        expect(response.body).toEqual(
            expect.arrayContaining([
            expect.objectContaining({
                id: expect.any(Number),
                title: expect.any(String),
                userId: expect.any(Number)
                })
            
            ]))
    })
})