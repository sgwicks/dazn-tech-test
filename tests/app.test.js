const request = require('supertest')
const app = require('../app')

describe('app', () => {
    test('Sends a 200 response', () => {
        return request(app)
            .get('/')
            .expect(200)
    })
    describe('/api', () => {
        describe('/streams', () => {
            describe.only('/:stream_id', () => {
                test('GET: returns a stream key', () => {
                    return request(app)
                        .get('/api/streams/12345')
                        .expect(200)
                        .then(({body: {stream_key}}) => {
                            expect(stream_key).toBe('a12b3c')
                        })
                })
            })
        })
    })
})