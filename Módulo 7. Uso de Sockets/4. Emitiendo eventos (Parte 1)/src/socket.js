module.exports = (io) =>{
    io.on('connection', (socket)=>{
        console.log('Un usuario se ha conectado')
        socket.on('message', (data)=>{
            console.log(data)
        })
        socket.on('disconnect', ()=>{
            console.log('El usuario se ha desconectado')
        })
    })
}