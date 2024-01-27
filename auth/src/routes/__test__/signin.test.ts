import request from 'supertest';
import { app } from '../../app';

it('fails when email that not exists is supplied', async () => {
    await request(app)
        .post('/api/users/signin')
        .send({
            email: 'test@test.com',
            password: 'abcd'
        })
        .expect(400)
});

it('fails when an incorrect password is supplied', async() => {
  await request(app)
    .post('/api/users/signup')
    .send({
        email: 'test@test.com',
        password: 'abcd'
    })
    .expect(201);

  await request(app)  
    .post('/api/users/signin')
    .send({
        email: 'test@test.com',
        password: 'abcde'
    })
    .expect(400);
});

it('sets a cookie when a correct password is supplied', async() => {
    await request(app)
      .post('/api/users/signup')
      .send({
          email: 'test@test.com',
          password: 'abcd'
      })
      .expect(201);
  
    const response = await request(app)  
      .post('/api/users/signin')
      .send({
          email: 'test@test.com',
          password: 'abcd'
      })
      .expect(200)

    expect(response.get('Set-Cookie')).toBeDefined();
  });