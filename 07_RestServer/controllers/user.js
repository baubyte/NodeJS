const {response} = require('express');
const bcryptjs = require('bcryptjs');
const User = require('../models/user');

const users = (req = request, res = response) => {
    const {q, name ='Not Name', page = 1, limit = 10} = req.query;
    res.status(200).json({
        msg: 'GET API',
        q,
        name,
        page,
        limit
    })
}
const update = (req = request, res = response) => {
    const id = req.params.id;
    res.status(200).json({
        msg: 'PUT API',
        id
    })
}
const create = async (req = request, res = response) => {
    const { name, email, password, role } = req.body;
    const user = new User({name, email, password, role});
    //Verificar si el correo existe
    //Hash Contraseña
    const salt = bcryptjs.genSaltSync(10);
    user.password = bcryptjs.hashSync(password, salt);
    //Guardar el usuario
    await user.save();
    res.status(201).json({
        msg: 'POST API',
        user
    })
}
const destroy = (req = request, res = response) => {
    const id = req.params.id;
    res.status(200).json({
        msg: 'DELETE API',
        id
    })
}
module.exports ={
    users,
    update,
    create,
    destroy
}