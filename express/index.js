import express from "express";
const app = express()
const port = 3000 // variavel de ambiente

app.get('/', (req, res) => {
    res.send('Olá Mundo!!')
})

app.listen(port, () => {
    console.log(`App rodando na porta ${port}`)
})