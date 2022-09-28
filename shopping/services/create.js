const Shopping = require('./../entity/shopping');

const Service = function(req, res, next) {
  const products = new Shopping(req.body);
  products.save()
          .then(function(result) {
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
};

module.exports = Service;