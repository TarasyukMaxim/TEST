'use strict'

var start = 1;
var end = 2000000;

var matrix =  [0, 2, 5, 6, 1, 9, 4, 7, 3, 8];

var arr = [];

for(; start < 1000; start++ ) {
	var strStart = String(start);
	arr[start] =  enc(strStart);
}


function enc(encVal) {

	var currentArray = encVal.split('');
	var newValue = [];
	for(var i = 0; i < currentArray.length; i++) {
		var currentValue = Number(currentArray[i]);
		newValue[i] = matrix[currentValue];
	}

	if(newValue.length < 6) {
		var zeroChr = 6 - newValue.length;
		var finalStr = newValue.join('');
		for(var i = 0; i < zeroChr; i++) {
			
			finalStr = '0' + finalStr;
		} 
	}

	return(finalStr);
}