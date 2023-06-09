const express = require("express")
const exphbs = require("express-handlebars")

const app = express()

app.engine('handlebars', exphbs.engine()) 
app.set('view engine', 'handlebars')
app.get('/dashboard', (req, res) => {

        const pessoas = [
            {idade: 12, nome: "Lucas"},
            {idade: 17, nome: "Jorge"},
            {idade: 19, nome: "Rogerio"}
        ]
   
    res.render('dashboard',  {pessoas} )
})

app.get('/post', (req, res) => {
    const post = {
        title: 'Aprender Node.js',
        category: 'Javascript',
        body: 'Este artigo vai te ajudar a aprender nodejs..',
        comments: 4
    }

    res.render('blogpost', { post })
} )


app.get('/', (req, res) => {
    
    const user = {
        name: "Matheus",
        surname: "Loló",
        age: 20
    }

    const auth = false

    const approved = false

    res.render('home', {user: user, auth, approved})
})

app.listen(3000, () => {
    console.log('App Funcionando!')
})

