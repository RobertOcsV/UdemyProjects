const express = require('express')
const exphbs = require('express-handlebars')
// const mysql = require('mysql')
const pool = require('./db/conn')

const app = express()

app.use(
    express.urlencoded({
        extended: true
    })
)

app.use(express.json())

app.engine('handlebars', exphbs.engine())
app.set('view engine', 'handlebars')

app.use(express.static(__dirname + '/public'))

app.get('/', (req, res) => {
    res.render("home")
})

app.post('/books/insertbook', (req, res) => {
    const title = req.body.title
    const pageqty = req.body.pageqty

    const sql = `INSERT INTO books (??, ??) VALUES (?, ?)`
    const data = ['title', 'pageqty', title, pageqty]

    pool.query(sql, data, (err) => {
        if(err){
            console.log(err)
            return
        }

        res.redirect('/books')

    })
})

app.get('/books', (req, res) => {
    const sql = 'SELECT * FROM books'

    pool.query(sql, function(err, data) {
        if(err){
            console.log(err)
            return
        }
        const books = data
       

        res.render('books', { books })
    })
})

app.get('/books/:id', (req, res)=> {
    const id = req.params.id

    const sql = `SELECT * FROM books WHERE ?? = ?`

    const data = ['id', id]

    pool.query(sql, data, (err, data) =>{
        if(err){
            console.log(err)
            return
        }
        const book = data[0]

        res.render('book', { book })
    })
})

app.get('/books/edit/:id', (req, res) => {
    const id = req.params.id

    const sql = `SELECT * FROM books WHERE ?? = ?`

    const data = ['id', id]

    pool.query(sql, data, (err, data)=> {
        if(err){
            console.log(err)
            return
        }

        const book = data[0]

        res.render('editbook', { book })

    })
})

app.post('/books/updatebook', (req, res) => {

    const id = req.body.id
    const title = req.body.title
    const pageqty = req.body.pageqty

    const sql = `UPDATE books SET ?? = ?, ?? = ? WHERE ?? = ?`
    const data = ['title', 'pageqty', 'id', title, pageqty, id ]

    pool.query(sql, (err) => {
        if(err){
            console.log(err)
            return
        }

        res.redirect('/books')
    })

})
// a

app.post('/books/remove/:id', (req, res) => {

    const id = req.params.id

    const sql = `DELETE FROM books WHERE id = ${id}`


    pool.query(sql, (err) => {
        if(err){
            console.log(err)
            return
        }

        res.redirect('/books')
    })

})

app.listen(3000)


// const conn = mysql.createConnection({
//     host:'localhost',
//     user: 'root',
//     password:'',
//     database: 'nodemysql'
// })

// conn.connect((err) => {

//     if(err){
//         console.log(err)
//         return
//     }

//     console.log('Conectou ao MySql!')

    
// })