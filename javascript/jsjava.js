var options = {
  enableHighAccuracy: true,
  timeout: 5000,
  maximumAge: 0
};

function success(pos) {
  var crd = pos.coords;

  $('.js-lt').text(crd.latitude);
  $('.js-long').text(crd.longitude);
  $('.js-acc').text(crd.accuracy + ' m');

$.ajax({
	url: 'https://api.forecast.io/forecast/f800bddbd5dfdf9fea597f61776caa0a/' + crd.latitude + ',' + crd.longitude,
	data: {
		units : 'si'
	},

	dataType: 'jsonp',
	success: function(data) {
		console.log(data);
		$('js-temp').text(data.currently.apparentTemperature + ' °C');
		$('js-ws').text(data.currently.windSpeed + ' ');
	}
});

};

function error(err) {
  console.warn('ERROR(' + err.code + '): ' + err.message);
};

navigator.geolocation.getCurrentPosition(success, error, options);
