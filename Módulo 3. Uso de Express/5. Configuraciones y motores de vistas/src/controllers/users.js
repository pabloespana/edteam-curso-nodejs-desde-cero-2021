const users = [
    {id: 1, nombre: 'Pablo', edad: 25 }, 
    {id: 2, nombre: 'Luis', edad: 23 }, 
    {id: 3, nombre: 'José', edad: 22 }, 
]


const getUsers = (req, res) => {
    res.render('users', {users: users} )
}

const createUser = (req, res) => {
    res.render('create-user')
}

const updateUser = (req, res) => {
    res.render('update-user')
}

const deleteUser = (req, res) => {
    res.render('delete-user')
}

module.exports = { 
    getUsers, 
    createUser, 
    updateUser, 
    deleteUser
}