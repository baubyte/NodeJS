const {Router} = require('express');
const { check } = require('express-validator');
const {validationFields} = require('../middlewares/validationFields')
const {users, update, create, destroy} = require('../controllers/user');
const router = Router();
/**
 * Rutas
 */
router.get('/', users);

router.put('/:id',update);

router.post('/',[
    check('name', 'El Nombre es Obligatorio').notEmpty(),
    check('password', 'La Contraseña es Obligatoria y debe ser mayor a 6 caracteres.').isLength({min:6}),
    check('email', 'El Email no es válido').isEmail(),
    check('role', 'El Email no es válido').isIn(['admin_role','user_role']),
    validationFields
], create);

router.delete('/:id', destroy);

module.exports = router;