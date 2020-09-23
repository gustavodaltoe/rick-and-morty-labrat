import request from 'supertest';
import app from '../app';

describe('Get Endpoints', () => {
  it('/humans should get humans from Earth (C-137)', async () => {
    const response = await request(app).get('/humans');
    expect(response.status).toEqual(200);

    const keys = Object.keys(response.body);
    expect(keys).toEqual(expect.arrayContaining(['info', 'results']));

    const { results, info } = response.body;

    expect(info.count).toBeGreaterThan(0);

    expect(Object.keys(results[0])).toEqual(
      expect.arrayContaining(['name', 'status', 'gender', 'image', 'episodes']),
    );
  });
});
