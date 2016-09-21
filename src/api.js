var _ = require('lodash');

var rootUrl ='http://api.openweathermap.org/data/2.5/weather?APPID=8de6e2cacb570aced561381851a11020'

var kelvinToF = function (kelvin) {
  return Math.round((kelvin-273.15) * 1.8 + 32) + ' ˚F'
}

module.exports = function(latitude,longitude){
  //templete string ${}
  var url = `${rootUrl}&lat=${latitude}&lon=${longitude}`;

  return fetch(url)
    .then(function (response) {
        return response.json()
    }).then(function (json) {
      if(json.weather != null || json.weather != undefined){
        return {
          city: json.name,
          temperature:kelvinToF(json.temp),
          description:_.capitalize(json.weather[0].description)
        }
      }else{
        return 0
      }
    });
}
