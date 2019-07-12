const express = require('express')
const app = express()

app.get('/', (req, res, next) => res.send('Welcome!'))

app.get('/hello', (req, res, next) => {
    res.send({
        message: 'Hello world!'
    })
})

app.post('/',(req,res,next) => res.send('Hello World'))

app.listen(process.env.PORT || 3002, () => console.log('Express server is ready on localhost:3002'))
