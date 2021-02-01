module.exports = (io)=>{
    var data = []
    io.on('connection', (socket)=>{
        for (let i = 0; i < data.length; i++) {
            io.emit('show_drawing', data[i])
        }
        socket.on('drawing', (drawing)=>{
            data.push(drawing)
            io.emit('show_drawing', drawing)
        })
    })
}