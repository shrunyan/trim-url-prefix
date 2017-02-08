'use strict'

var test = require('ava')
var trimUrlPrefix = require('./index')

test('throws a TypeError if not a string', (t) => {
  try {
    trimUrlPrefix(undefined)
  } catch(err) {
    t.is(err.name, 'TypeError')
  }
})

test('Returns a middleware function', (t) => {
  const middleware = trimUrlPrefix('/test/')
  const isFunc = {}.toString.call(middleware)
  t.is(isFunc, '[object Function]')
})

test('Slices req.url property', (t) => {
  const req = {url: '/test/abc'}
  const middleware = trimUrlPrefix('/test')

  middleware(req, {}, () => {})

  t.is(req.url, '/abc')
})
