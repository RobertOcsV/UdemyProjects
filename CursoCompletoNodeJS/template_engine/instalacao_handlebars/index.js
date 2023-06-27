const express = require("express")
const exphbs = require("express-handlebar")

const app = express()

app.engine('handlebars', exphbs.engine()) 
app.set('View engine', 'handlebars')

app.get('/', (req, res) => {
    res.render('home', {layout: false})
})

app.listen(3000, () => {
    console.log('App Funcionando')
})