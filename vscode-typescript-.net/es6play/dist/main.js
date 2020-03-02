'use strict';

var _car = require('car');

var _Truck = require('Truck');

var car = new _car.Car({
	price: 30000, make: 'Chevy', model: 'Malibu',
	year: 2014, isElectric: false, isHatchback: false
});

var truck = new _Truck.Truck({
	price: 40000, make: 'Ford', model: 'F150',
	year: 2014, is4by4: true
});

var output = document.getElementById('output');
output.innerHTML += '\n\t<br/>' + car.getDetails() + '\n\t<br/>' + truck.getDetails() + '\n\t<br/>Car total: ' + car.getTotal(.08) + '\n\t<br/>Truck total: ' + truck.getTotal(.08) + '\n\t';