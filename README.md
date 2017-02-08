# trim-url-prefix
Express middleware to trim a path prefix from the request url.

This module is useful for trimming verbose urls paths from an api gateway.

_Example usage:_
```
var express = require('express')
var trimUrlPrefix = require('trim-url-prefix')
var app = express()

// Let's log the initial req.url
app.use((req, res, next) => {
  console.log(req.url) // `/api-v1/user/abc/edit`
  next()  
})

// Then we trim the path prefix
app.use(trimUrlPrefix('/api-v1'), (prefix) => {
  console.log(`Trimmed request url ${prefix}`)
})

// Log the req.url after being trimmed
app.use((req, res, next) => {
  console.log(req.url) // `/user/abc/edit`
  next()  
})

// Now our routing and other logic is only
// concerned with the trimmed url
// e.g.

app.get('/user/abc/edit', user)

```
