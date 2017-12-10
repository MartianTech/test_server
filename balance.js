var express = require('express');
var router = express.Router();

var balance_controller = require('./balance_controller');

router.get('/', balance_controller.index);
router.get('/query', balance_controller.query);
router.post('/update', balance_controller.update);
router.get('/history', balance_controller.history);

module.exports = router;