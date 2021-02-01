const User = require('../models/users')

const getUsers = (req, res) => {
    User.find({}, (err, result)=>{
        if (err) {
            console.log('Ha ocurrido un error')
        }else{
            console.log(result)
            res.render('users', {users: result} )
        }
    })
}

const getCreateUser = (req, res) => {
    res.render('create-user')
}

const getUpdateUser = (req, res) => {
    const param = req.params.id
    User.find({_id: param}, (err, result)=>{
        if (err) {
            console.log('Ha ocurrido un error: '+err)
        }else{
            console.log(result)
            res.render('update-user', {user:result})
        }
    })
}

const getDeleteUser = (req, res) => {
    const param = req.params.id
    User.find({_id:param}, (err, result)=>{
        if (err) {
            console.log('Ha ocurrido un error: '+err)
        }else{
            console.log(result)
            res.render('delete-user', {user:result})
        }
    })}

const createUser = (req, res)=>{
    const data = req.body
    const user = new User({
        name: data.name,
        age: data.age
    })
    user.save((err, result)=>{
        if (err) {
            console.log('Ha ocurrido un error')
        }else{
            console.log('Usuario registrado')
            res.redirect('/users/all')
        }
    })
}

const updateUser = (req, res)=>{
    const param = req.params.id
    const data = req.body
    User.findOneAndUpdate({_id:param}, data, (err, result)=>{
        if (err) {
            console.log('Ha ocurrido un error: '+err)
        }else{
            console.log('Usuario actualizado')
            res.redirect('/users/all')
        }
    })
}

const deleteUser = (req, res)=>{
    const param = req.params.id
    User.deleteOne({_id:param}, (err, result)=>{
        if (err) {
            console.log('Ha ocurrido un error: '+err)
        }else{
            console.log('Usuario actualizado')
            res.redirect('/users/all')
        }
    })
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