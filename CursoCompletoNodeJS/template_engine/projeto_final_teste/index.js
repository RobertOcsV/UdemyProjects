const express = require("express")
const exphbs = require("express-handlebars")

const app = express()

const hbs = exphbs.create({
    partialsDir: ['views/partials']
})
app.engine('handlebars', exphbs.engine()) 
app.set('view engine', 'handlebars')

app.use(express.static('public'))

const produtos = [

    {  
       id: 1,
       name: "Pão francês" ,
       price: "R$ 0,80"           
    },
    {  
        id: 2,
        name: "Bolo de morango" ,
        price: "R$ 19,90"
    },
    {  
        id: 3,
        name: "Coxinha" ,
        price: "R$ 7,80"
    },
    {  
        id: 4,
        name: "Café puro" ,
        price: "R$ 4"
    },

]




app.get('/produto/:id', (req, res) => {
    const produto = produtos[parseInt(req.params.id) -1]

    res.render('produto', { produto })
})


app.get('/', (req, res) => {
    res.render('home', { produtos } )
})

app.listen(3000, () => {
    console.log('App Funcionando!')
})
