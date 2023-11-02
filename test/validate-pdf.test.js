const request = require('supertest')
const app = require('../app')

test('Should check if file uploaded is NOT a PDF file',async()=>{

        await request(app)
        .post('/validate-pdf')
        .attach('pdf','test/fixtures/profile-pic.jpg')
        .expect(500)

})


test('Should throw error if NO file is uploaded',async()=>{

    await request(app)
        .post('/validate-pdf')
        .attach('pdf','')
        .expect(400)

})

test('Should check if the PDF uploaded is INVALID',async()=>{

    await request(app)
        .post('/validate-pdf')
        .attach('pdf','test/fixtures/invalid2.pdf')
        .expect(400)

})



test('Should check if the PDF uploaded is VALID',async()=>{

    await request(app)
        .post('/validate-pdf')
        .attach('pdf','test/fixtures/valid.pdf')
        .expect(200)

})