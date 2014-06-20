$(document).ready(function(){
	var options = {
		enableHeigAccuracy: true,
		timeout: 5000,
		maximumAge: 0
	};

	var success = function(pos) {
		var crd = pos.coords;

		$('.js-current-position').text(crd.latitude + ', ' + crd.longitude);
	};

	var error = function() {
		console.warn('ERROR(' + err.code + '):' + error.message):
	}:

	navigator.geolocation.getCurrentPosition(success, error, options);
});

function error(err) {
	console.warn('ERROR(' + err.code + '): ' + err.message);
}

navigator.geolocation.getCurrentPosition(success, error, options);

// http://maps.googleapis.com/maps/api/geocode/json?address=1600+Amphitheatre+Parkway,+Mountain+View,+CA&sensor=true_or_false

$('.js-current-adresse').on('click', 'a', function(event) {
	event.preventDefault();

	var address = $('input', '.js-current-adresse').val();

	$.ajax({
		url: 'http://maps.googleapis.com/maps/api/geocode/json',
		data: {
			address: address,
			sensor: false
		},
		success: function(data) {
			$('.js-custom-address-result').text(
				data.results[0].geometry.location.lat +
				',' +
				data.results[0].geometry.location.lng
			);

			getWeahterData(data.results[0].geometry.location.lat, data.results[0].geometry.location.lng, function(data) {
				$('.js-custom-address-temp').text(data.currently.apparentTemperature + ' °C');

				$('.js-custom-weather-icon').text(weatherIcons[data.currently.icon]);
			});
		}
	});
});