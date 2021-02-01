const express = require('express')
const app = express()

require('./connection')

app.set('port', 3000)

app.use(express.urlencoded({extended: false}))

app.listen(app.get('port'), ()=>{
    console.log('Aplicación corriendo en el puerto '+ app.get('port'))
})