const {Router} = require('express');
const {users, update, create, destroy} = require('../controllers/user');
const router = Router();
/**
 * Rutas
 */
router.get('/', users);

router.put('/',update);

router.post('/', create);

router.delete('/', destroy);

module.exports = router;