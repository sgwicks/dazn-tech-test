const request = require('supertest')
const app = require('../app')

describe('app', () => {
    test('Sends a 200 response', () => {
        return request(app)
            .get('/')
            .expect(200)
            .then((res) => {
                expect(res.text).toBe('Hello world')
            })
    })
})