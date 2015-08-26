'use strict';

var express = require('express');
var controller = require('./item.controller');

var router = express.Router();


router.get('/:itemId', controller.get);
router.post('/:itemId', controller.buy);
router.get('/', controller.index);


module.exports = router;
