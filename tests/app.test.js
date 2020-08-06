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
                test('GET: success increases stream_count of user', () => {
                    return request(app)
                        .get('/api/streams/1/12345')
                        .expect(200)
                        .then(() => {
                            return connection('users')
                                .select('stream_count')
                                .where('user_id', 1)
                        })
                        .then(([{stream_count}]) => {
                            expect(stream_count).toBe(1)
                        })
                })
            })
        })
    })
})