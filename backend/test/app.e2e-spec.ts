import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';

import { AppModule } from '../src/app.module';
import { AVAILABLE_SYMBOLS } from '../src/common/constants';

describe('End-to-end tests', () => {
  let app: INestApplication;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  for (const sym of AVAILABLE_SYMBOLS) {
    it(`/ticker/${sym} (GET)`, () => {
      return request(app.getHttpServer())
        .get(`/ticker/${sym}`)
        .expect(200)
        .expect([0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    });
  }
});
