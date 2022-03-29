
const { validationResult } = require('express-validator');

const validationFields = (req, res, next) => {
     //Mostrar errores
     const errors = validationResult(req);
     if (!errors.isEmpty()) {
        return res.status(400).json(errors);
     }
    //Seguir con siguiente middleware o function
    next();
}

module.exports ={
    validationFields,
}