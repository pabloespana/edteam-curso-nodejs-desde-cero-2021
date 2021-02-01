const http = require('http')
const server = http.createServer(onRequest)
const port = 3000

server.listen(port, ()=>{
    console.log('Mi servidor está corriendo en localhost:3000')
})

function onRequest(req, res){
    console.log('Se ha detectado una nueva petición')
    res.setHeader('Content-type', 'text/plain')
    res.write('Bienvenidos al curso de Node.js')
    res.end()
}