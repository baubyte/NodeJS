const {Router} = require('express');
const router = Router();
/**
 * Rutas
 */
router.get('/', (req, res) => {
    res.status(200).json({
        msg: 'GET API'
    })
});
router.put('/', (req, res) => {
    res.status(200).json({
        msg: 'PUT API'
    })
});
router.post('/', (req, res) => {
    res.status(201).json({
        msg: 'POST API'
    })
});
router.delete('/', (req, res) => {
    res.status(200).json({
        msg: 'DELETE API'
    })
});
module.exports = router;