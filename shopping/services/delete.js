const Shopping = require('./../entity/shopping');

const Service = function(req, res, next) {
  const findById = Shopping.findById(req.params.shoppingId).exec();
  const remove = Shopping.update({
    _id: req.params.shoppingId
  }, { 
      $pull: { products: req.params.productId }
  });

  findById.then(function(shopping) {
    if (!shopping) {
      return res.status(404).json({ status: false, data: {} });
    }
    remove.exec().then(function(product) {
      return res.status(500).json({ status: true, data: product });
    }).catch(function(err) {
      return res.status(500).json({ status: false, data: {} });
    });
    // return res.status(200).json({ status: true, data: shopping });
  }).catch(function(err) {
    return res.status(500).json({ status: false, data: {} });
  });
}

module.exports = Service;