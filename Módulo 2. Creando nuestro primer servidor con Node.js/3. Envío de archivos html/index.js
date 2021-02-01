const http = require('http')
const server = http.createServer(onRequest)
const port = 3000
const fs = require('fs')

server.listen(port, ()=>{
    console.log('Mi servidor está corriendo en localhost:3000')
})

function onRequest(req, res){
    console.log('Se ha detectado una nueva petición')
    fs.readFile('index.html', (err, content)=>{
        if (err) {
            if (err.code == 'ENOENT') {
                res.setStatus = 404
                res.end('No se ha encontrado el archivo')
            }else{
                res.setStatus = 500
                res.end('Ha ocurrido un error en el servidor')
            }
        }else{
            res.setStatus = 200
            res.setHeader('Content-type', 'text/html')
            res.write(content)
            res.end()
        }
    })
}