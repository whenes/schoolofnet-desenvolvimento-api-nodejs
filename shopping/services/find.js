const Shopping = require('./../entity/shopping');

const Service = function(rea, res, next) {
  const find = Shopping.find({}).exec();
  find.then(function(products) {
    if (!products) {
      return res.status(404).json({ status: false, data: {} });
    }
    return res.status(200).json({ status: true, data: products });   
  }).catch(function(err) {
    return res.status(500).json({ status: false, data: {} });
  }); 
}

module.exports = Service;