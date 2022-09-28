const xml2js = require('xml2js').parseString;

const Service = function(req, res) {
  const xml = '<?xml version="1.0" encoding="UTF-8" ?> <name>Whenes</name> </xml>';
  xml2js(xml, function(err, result) {
    res.status(200).send(result);
  })
  // return res.status(204).json({ 'msg': 'OK' });
}

module.exports = Service;