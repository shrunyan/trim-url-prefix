'use strict'

module.exports = function trimUrlPrefix(prefix = '') {
  if (!prefix.length) {
    throw new TypeError('trimUrlPrefix prefix must be a string')
  }
  return (req, res, next) => {
    if (req.url.slice(0, prefix.length) === prefix) {
      req.url = req.url.slice(prefix.length)
      cb(prefix)
    }
    next()
  }
}
