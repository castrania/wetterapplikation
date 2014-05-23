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
	url: 'https://api.forecast.io/forecast/f800bddbd5dfdf9fea597f61776caa0a/37.8267,-122.423',
	dataType: 'jsonp',
	success: function(data) {
		console.log(data);
	}
})

};

function error(err) {
  console.warn('ERROR(' + err.code + '): ' + err.message);
};

navigator.geolocation.getCurrentPosition(success, error, options);
