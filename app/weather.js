var request = require('request');
var domain = 'http://api.openweathermap.org/data/2.5/weather';

module.exports = {
  getWeather: function(req, res) {
      console.log(req.query);
      var option = {
        uri: domain,
        qs: req.query
      }
      request(option, function(error, response, body) {
          if (!error && response.statusCode == 200) { 
              return res.json(body); 
           }
          if (error) {
            console.log(error);
          }
      });             
  }
};