import express from 'express'

const app = express()

app.get('/', (req, res) => {
  console.log('/api/')
  res.send('API test')
})

module.exports = {
  path: '/api',
  handler: app,
}
