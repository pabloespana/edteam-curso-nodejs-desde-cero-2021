const socket = io()

const username = document.getElementById('username')
const write_message = document.getElementById('write_message')
const all_messages = document.getElementById('all_messages')

write_message.addEventListener('keyup', (event)=>{
    if (event.code == 'Enter') {
        if (username.value != '' && write_message.value != '') {
            socket.emit('message', {
                username: username.value,
                message: write_message.value.slice(0, -1)
            })
            write_message.value = ''
        }else{
            console.log('Ingrese los campos completos')
        }
    }
})

socket.on('messages', (messages)=>{
    var content = ''
    for (let i = 0; i < messages.length; i++) {
        content += `
        <div class='message'>
            ${messages[i].username}:
            ${messages[i].message}
        </div>
        <br>
        `
    }
    all_messages.innerHTML = content
    all_messages.scrollTop = all_messages.scrollHeight
})