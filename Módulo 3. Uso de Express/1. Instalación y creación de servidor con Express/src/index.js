const express = require('express')
const app = express()
const port = 3000

// rutas
app.get('/', (req, res)=>{
    res.send('Bienvenido')
})

app.get('/users', (req, res)=>{
    res.send('Mostrando todos los usuarios')
})

app.listen(port, () => {
    console.log('Mi aplicación está corriendo en el puerto 3000')
})