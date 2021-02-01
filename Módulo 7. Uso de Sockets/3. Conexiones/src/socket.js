module.exports = (io) =>{
    io.on('connection', (socket)=>{
        console.log('Un usuario se ha conectado')
        socket.on('disconnect', ()=>{
            console.log('El usuario se ha desconectado')
        })
    })
}