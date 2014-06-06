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

$('.js-address').on('click', 'a', function(event) {
	event.preventDefault();

	var address = $('input', '.js-address').val();

	$.ajax({
		url: 'http://maps.googleapis.com/maps/api/geocode/json',
		data: {
			address: address,
			sensor: false
		},

		success: function(data) {
			console.log(data);

			var lat = data.results[0].geometry.location.lat;
			var lng = data.results[0].geometry.location.lng;

			$.ajax({
				url: 'https://api.forecast.io/forecast/f800bddbd5dfdf9fea597f61776caa0a/' + lat + lng,
				data: {
					units : 'si'
				},

				dataType: 'jsonp',
				success: function(data) {
					console.log(data);
					$('.js-costum-temp').text(data.currently.apparentTemperature + ' °C');
					$('.js-costum-wind').text(data.currently.windSpeed + ' ');
		}

	});

	
		

});

















