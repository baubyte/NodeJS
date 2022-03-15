const {response} = require('express');

const users = (req, res = response) => {
    res.status(200).json({
        msg: 'GET API'
    })
}
const update = (req, res = response) => {
    res.status(200).json({
        msg: 'PUT API'
    })
}
const create = (req, res = response) => {
    res.status(201).json({
        msg: 'POST API'
    })
}
const destroy = (req, res = response) => {
    res.status(200).json({
        msg: 'DELETE API'
    })
}
module.exports ={
    users,
    update,
    create,
    destroy
}