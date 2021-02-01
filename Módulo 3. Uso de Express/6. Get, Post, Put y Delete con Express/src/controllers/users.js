const users = [
    {id: 1, nombre: 'Pablo', edad: 25 }, 
    {id: 2, nombre: 'Luis', edad: 23 }, 
    {id: 3, nombre: 'José', edad: 22 }, 
]


const getUsers = (req, res) => {
    res.render('users', {users: users} )
}

const getCreateUser = (req, res) => {
    res.render('create-user')
}

const getUpdateUser = (req, res) => {
    res.render('update-user')
}

const getDeleteUser = (req, res) => {
    res.render('delete-user')
}

const createUser = (req, res)=>{
    users.push(req.body)
    res.render('users', {users: users} )
}

const updateUser = (req, res)=>{
    const param = req.params.id
    for (let i = 0; i < users.length; i++) {
        if (param == users[i].id) {
            users[i].nombre = req.body.nombre
            users[i].edad = req.body.edad
            break
        }
    }
    res.render('users', {users: users} )
}

const deleteUser = (req, res)=>{
    const param = req.params.id
    for (let i = 0; i < users.length; i++) {
        if (param == users[i].id) {
            users.splice(i, 1)
            break
        }
    }
    res.render('users', {users: users} )
}

module.exports = { 
    getUsers, 
    getCreateUser, 
    getUpdateUser, 
    getDeleteUser,
    createUser, 
    updateUser,
    deleteUser
}