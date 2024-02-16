import request from 'supertest';
import { app } from '../../app';

it('has a route handler listening to /api/tickets for POST request', async () => {
    const response = await request(app)
        .post('/api/tickets')
        .send({});

    expect(response.status).not.toEqual(404);
});

it('can only be accessed when user is signed in', () => {

});

it('returns an error is a invalid title is provided', () => {

});

it('returns an error if invalid price is provided', () => {

});

it('create a ticket with valid inputs', () => {

});