const express = require('express')
const path = require('path')
const app = express()
const user = require('./routes/users')
const loggedMiddleware = require('./middlewares/logged')

// settings
app.set('title', 'Aplicación hecha en Node.js')
app.set('port', 3000)
app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))

// middlewares
//app.use(loggedMiddleware.isLogged)
app.use(express.static(path.join(__dirname, 'public')))
app.use(express.urlencoded({extended:false}))


// rutas
app.get('/', (req, res) => {
    res.render('index')
})
app.use('/users', user)

app.listen(app.get('port'), () => {
    console.log('Mi '+ app.get('title') + ' está corriendo en el puerto ' + app.get('port'))
})