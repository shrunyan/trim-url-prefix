'use strict'

module.exports = function trimUrlPrefix(prefix, cb) {
  prefix = String(prefix)
  if (!prefix) {
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
