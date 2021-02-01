const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
const User = require('../models/users')

const getAdmin = (req, res)=>{

}

const login = (req, res)=>{
    
}

const register = (req, res)=>{
    const user = new User({
        name: req.body.name,
        email: req.body.email,
        password: bcrypt.hashSync(req.body.password, 10)
    })
    user.save((err, result)=>{
        if (err) {
            res.send('Ha ocurrido un error '+ err)
        }else{
            res.send('Registrado correctamente')
        }
    })
}

module.exports = {getAdmin, login, register}