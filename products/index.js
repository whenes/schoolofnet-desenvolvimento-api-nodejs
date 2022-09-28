const express = require('express');
const router = express.Router();

//exemplos iniciais
// router.get('/', require('./services/find')); 
// router.get('/xml', require('./services/xml')); 

//rotas ecommerce
router.post('/', require('./services/create'));
router.get('/:id?', require('./services/search'));
router.put('/:id', require('./services/update'));
router.delete('/:id', require('./services/delete'));

module.exports = router;
