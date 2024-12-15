import request from 'supertest';
import { app } from '../../../app';
import { describe, it, expect } from 'vitest';

describe('GET /', () => {
  it('should return 200 OK', async () => {
    const response = await request(app).get('/');
    expect(response.status).toBe(200);
    expect(response.text).toBe('Hello, world!');
  });
});
