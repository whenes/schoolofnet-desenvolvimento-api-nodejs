const Products = require('./../entity/products');

const Service = function(req, res, next) {
  const findById = Products.findById(req.params.id).exec();
  const body = req.body;
  const update = Products.update({
    _id: req.params.id
    }, {
      $set: body
    }, {
      multi: false 
    }).exec();
    
    findById.then(function(product) {
      update.then(function(result) {
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
      }).catch(function(err) {
        return res.status(500)
                  .json({
                    status: false,
                    data: {}
                  });
      });
    }).catch(function(err) {
      return res.status(500)
                .json({
                  status: false,
                  data: {}
                });
    });
};

module.exports = Service;