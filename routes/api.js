var express = require('express');
var weather = require('../app/weather');
var router = express.Router();

/* GET users listing. */
// router.get('/', function(req, res) {
//   res.send('respond with a resource');
// });
router.get('/getWeather', weather.getWeather);

module.exports = router;
