const {response} = require('express');
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
    const user = new User(req.body);
    await user.save();
    const {name} = req.body;
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