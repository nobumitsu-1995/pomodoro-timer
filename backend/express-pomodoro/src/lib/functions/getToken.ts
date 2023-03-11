import request from 'supertest'

export const getToken = async () => {
  const response = await request(process.env.AUTH0_DOMAIN)
    .post('/oauth/token')
    .send({
      grant_type: 'client_credentials',
      client_id: process.env.CLIENT_ID,
      client_secret: process.env.CLIENT_SECRET,
      audience: 'http://localhost:81',
    })
    .expect(200)

  return response.body.access_token
}
