const request = require('supertest')
const app = require('../app')
const connection = require('../db/connection')

beforeEach(() => connection.seed.run())

describe('app', () => {
    test('Sends a 200 response', () => {
        return request(app)
            .get('/')
            .expect(200)
    })
    describe('/api', () => {
        describe('/streams', () => {
            describe.only(':user_id/:stream_id', () => {
                test('GET: returns a stream key', () => {
                    return request(app)
                        .get('/api/streams/1/12345')
                        .expect(200)
                        .then(({body: {stream_key}}) => {
                            expect(stream_key).toBe('a12b3c')
                        })
                })
                test('GET: request denied if stream_count >= 3', () => {
                    return request(app)
                        .get('/api/streams/2/12345')
                        .expect(403)
                        .then(({body:{msg}}) => {
                            expect(msg).toBe('Request denied: too many concurrent streams')
                        })
                })
            })
        })
    })
})