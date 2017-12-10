var express = require('express');
var router = express.Router();

var general_controller = require("./general_controller");

router.get('/');
router.get('/asset_list', general_controller.asset_list);
router.get('/asset_summary', general_controller.asset_summary);
router.get('/market_list', general_controller.market_list);
router.get('/market_summary', general_controller.market_summary);

module.exports = router;