const http = require('http')
const server = http.createServer(onRequest)
server.listen(3000)
console.log('Mi servidor está corriendo en localhost:3000')

function onRequest(request, response){
    console.log('Se ha detectado una nueva petición')
}