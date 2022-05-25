var express = require('express');
const controller = require('../controllers/convidadosController')
var router = express.Router();


router.get('/', controller.index);
router.get('/vip', controller.vip);
router.get('/adicionar', controller.add);

module.exports = router;
