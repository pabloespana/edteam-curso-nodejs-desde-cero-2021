const express = require('express')
const app = express()
const port = 3000
const user = require('./routes/users')

// rutas
app.get('/', (req, res)=>{
    res.send('Bienvenido')
})

app.use('/users', user)

app.listen(port, () => {
    console.log('Mi aplicación está corriendo en el puerto 3000')
})