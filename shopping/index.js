const express = require('express');
const router = express.Router();

router.post('/', require('./services/create'));
router.get('/', require('./services/find'));
router.delete('/:shoppingId/:productId', require('./services/delete'));

module.exports = router;
