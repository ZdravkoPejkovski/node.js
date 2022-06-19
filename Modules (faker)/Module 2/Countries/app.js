const ct = require('countries-and-timezones');

let country = ct.getAllCountries();

let timezones = ct.getAllTimezones();

let alphabeticalOrder = (function(a, b){
	return a.compare (b);
	});

console.log (alphabeticalOrder);
console.log(country);
console.log(timezones);
