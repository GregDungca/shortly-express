var url = require('url');

module.exports = function (req, res, next) {
  console.log('Received ' + req.method + ' from ' + req.path);
  next();
}