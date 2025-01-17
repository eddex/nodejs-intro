const express = require('express');

const app = express()

app.use(express.json());
var router = express.Router()

// a middleware function with no mount path. This code is executed for every request to the router
// "Interceptor"
router.use(function (req, res, next) {
  console.log('Time:', Date.now())
  next()
})

// a middleware sub-stack shows request info for any type of HTTP request to the /user/:id path
router.use('/user/:id', function (req, res, next) {
  console.log('Request URL:', req.originalUrl)
  next()
}, function (req, res, next) {
  console.log('Request Type:', req.method)
  next()
})

// a middleware sub-stack that handles GET requests to the /user/:id path
router.get('/user/:id', function (req, res, next) {
  // if the user ID is 0, skip to the next router
  if (req.params.id === '0') next('route')
  // otherwise pass control to the next middleware function in this stack
  else next()
}, function (req, res, next) {
  // render a regular page
  res.json('regular')
})

// handler for the /user/:id path, which renders a special page
router.get('/user/:id', function (req, res, next) {
  console.log(req.params.id)
  res.json('special')
})

// Post-Example with express and read body
router.post('/user/', function(req, res, nex) {
    console.log(req.body);
    res.status(201);
    res.end();
})

// mount the router on the app
app.use('/', router);
app.set('view engine', 'html');
app.listen(4444, () => console.log('started'));

//see https://expressjs.com/en/guide/using-middleware.html#middleware.router
