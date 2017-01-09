'use strict'
var file = {}
var primeNumber = function (number){
	var primes = [];
	for (var i = 2; i <=number; i++){
		if (isPrimes(i)){
			primes.push(i);
		}
	}
	return primes
}

var isPrimes = function(n){
	for (var i = 2; i<n; i++){
		if(n%i === 0){
			return false
		}
	}
	return true
}

module.exports = {
	primeNumber : primeNumber
};