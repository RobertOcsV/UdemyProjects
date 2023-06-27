const express = require('express')
const path = require('path')
const app = express()
const port = 5000 // variavel de ambiente

const users = require('./users')

const basePath = path.join(__dirname, 'templates')

app.use(
    express.urlencoded({
        extended: true,
    }),
    )

app.use(express.static('public'))    
    
app.use(express.json())

app.use('/users', users)

app.get('/', (req, res) => {
    res.sendFile(`${basePath}/index.html`)
})

app.get('/contato', (req, res) => {
    res.sendFile(`${basePath}/contato.html`)
})

app.listen(port, () => {
    console.log(`App rodando na porta ${port}`)
})



