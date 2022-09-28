const express = require('express');
const router = express.Router();

router.post('/:shoppingId', require('./services/purchase'));

module.exports = router;