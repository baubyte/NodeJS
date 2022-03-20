const {Router} = require('express');
const {users, update, create, destroy} = require('../controllers/user');
const router = Router();
/**
 * Rutas
 */
router.get('/', users);

router.put('/:id',update);

router.post('/', create);

router.delete('/:id', destroy);

module.exports = router;