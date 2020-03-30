const request = require('supertest');
const app = require('../../src/app');
const connection = require('../../src/database/connection');

describe('ONG', () => {
    beforeEach(async () => {
        await connection.migrate.rollback();
        await connection.migrate.latest();
    });

    afterAll(async () => {
        await connection.destroy();
    });

    it('should be able to create a new ONG', async () => {
        const response = await request(app)
            .post('/ongs')
            //se precisar setar header .set('nome da header','valor')
            .send({
                name: "APAD2",
                email: "contato2@apad.com.br",
                whatsapp: "32991361014",
                city: "Muriae",
                uf: "MG"
            });

        expect(response.body).toHaveProperty('id');
        expect(response.body.id).toHaveLength(8);


    });
});