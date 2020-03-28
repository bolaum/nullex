import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as supertest from 'supertest';

import { AppModule } from '../src/app.module';
import { AVAILABLE_SYMBOLS } from '../src/common/constants';

describe('End-to-end tests', () => {
  let app: INestApplication;
  let request;

  beforeEach(async () => {
    // const moduleFixture: TestingModule = await Test.createTestingModule({
    //   imports: [AppModule],
    // }).compile();q

    // app = moduleFixture.createNestApplication();
    // await app.init();
    // request = supertesst(app.getHttpServer())
    request = supertest('http://localhost:3000')
    await request.post('/ctrl/db/clear');
  });

  describe('Ticker (/ticker/:symbol)', () => {
    for (const sym of AVAILABLE_SYMBOLS) {
      it(`/ticker/${sym} (GET)`, () => {
        return request.get(`/ticker/${sym}`)
          .expect(200)
          .expect([0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
      });
    }
  });


  describe('User (/ctrl/user)', () => {
    it(`can create user`, () => {
      return request.post('/ctrl/user')
        .send({ email: 'bla@ble.com' })
        .expect(201)
        .expect((res) => {
          expect(res.body.email).toBe('bla@ble.com');
          expect(typeof res.body.id).toBe('string');
        });
    });

    it(`enforces unique user mail`, async () => {
      await request.post('/ctrl/user').send({ email: 'bla@ble.com' });

      return request.post('/ctrl/user')
        .send({ email: 'bla@ble.com' })
        .expect(409);
    });

    it(`can get user`, async () => {
      await request.post('/ctrl/user').send({ email: 'bla@ble.com' });

      return request.get('/ctrl/user')
        .query({ email: 'bla@ble.com' })
        .expect(200)
        .expect((res) => {
          expect(res.body.email).toBe('bla@ble.com');
          expect(typeof res.body.id).toBe('string');
        });
    });
  });
});
