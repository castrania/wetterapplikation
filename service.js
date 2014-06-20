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

$.ajax({
		url: 'https://maps.googleapis.com/maps/api/geocode/json',
		data: {
			latlng: crd.latitude + ',' + crd.longitude,
			sensor: true
		},
		success: function(data) {
			$('.js-current-adresse').text(data.results[0].formatted_address);
		}
	});