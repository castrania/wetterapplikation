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
		$('.js-temp').text(data.currently.apparentTemperature + ' °C');
		$('.js-ws').text(data.currently.windSpeed + ' ');
		$('.js-sum').text(data.hourly.summary + ' ');

	}
});

function success(geocode) {
  var crd = geocode.coords;

  $('.js-adress').text(crd.adress);


$.ajax({
	url: 'https://maps.googleapis.com/maps/api/geocode/output?parameters' + crd.adress + ',' + crd.,
	data: {
		units : 'si'
	},

	dataType: 'jsonp',
	success: function(data) {
		console.log(data);
		;

	}
});

$.ajax({
	url: 'https://maps.googleapis.com/maps/api/geocode/json',
	data: {
		latlng: crd.latitude + ',' + crd.longitude,
		sensor: true
	},

	success: function(data) {
		console.log(data);
		$('.js-sto').text(data.results[0].formatted_address);
		$('.js-land').text(data.results[5].formatted_address);
	}
});

};

function error(err) {
  console.warn('ERROR(' + err.code + '): ' + err.message);
};



navigator.geolocation.getCurrentPosition(success, error, options);
