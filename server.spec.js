const request = require('supertest');

const server = require('./api/server.js')

describe('server.js', () => {
    it('should be testing the server environment', () => {
        expect(1).toBeTruthy();
    })

describe('GET /links', () => {
    it('should return 200 OK', () => {
    return request(server)
    .get ('/')
    .then(res => {
        expect(res.status).toBe(200)
    })
})

     it('should return 200 OK using async/await', async () => {
        const res = await request(server).get('/')
        expect(res.status).toBe(200)
    })

describe('POST /post/links', () => {
    it('should have title and genre', async () => {
      const response = await request(server)
        .post('/links')
        .send({ 
            name: 'Rosa', 
            link: 'http://', 
            description: 'a neat resource'
        });
      expect(response.body).toEqual.toBeDefined;
    })  

        })
    })
})