const Products = require('./../entity/products');

const Service = function(req, res, next) {
  let find = {};
  if (req.params.id) {
    find = Products.findById(req.params.id).exec();
  }
  if (!req.params.id) {
    find = Products.find({}).exec();
  }
  find.then(function(result) {
    if (!result) {
      return res.status(404)
                .json({
                  status: false,
                  data: {}
                });
    }
    return res.status(200)
              .json({
                status: true,
                data: result
              });
  })
  .catch(function(err) {
    return res.status(500)
              .json({
                status: false,
                data: {}
              });
  });
}

module.exports = Service;