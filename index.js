const express = require('express')
const app = express()

app.get('/', (req, res, next) => res.send('Welcome!'))

app.get('/hello', (request, response, next) => {
    response.send({
        message: 'Hello world!'
    })
})

app.listen(3002, () => console.log('Express server is ready on localhost:3002'))

