'use strict';


require('jasmine');
var myApp = require('../app/library.js');

describe('Prime number in a List: ', function () {

  describe('Return number within argument number', function () {

    it('should return [2,3] for (4)', function () {
      expect(myApp.primeNumber(4)).toEqual([2, 3]);
    });

    it('should return [2, 3, 5, 7] for (5)', function () {
      expect(myApp.primeNumber(5)).toEqual([2,3,5, 7,]);
    });

      it('should return [2, 3, 5, 7, 11, 13, 17, 19, 23, 29] for (11)', function () {
        expect(myApp.primeNumber(11)).toEqual([2, 3, 5, 7, 11, 13, 17, 19, 23, 29]);
      });

    });
    it('should return "no prime" for (1)', function(){
    	expect(myApp.primeNumber(1)).toEqual("no prime Number range 1")
    }

    describe('check falsy argument', function () {

      it('should return "invalid" for ('string')', function () {
        expect(myApp.primeNumber("string")).toEqual("invalid argument");
      });

    });

    describe('should return error for non array', function(){
      it('should return invalid argument type for non array', function(){
        expect(myApp.primeNumber("string")).toEqual("invalid argument type")
      });

    });

     describe('should return undefined if called with no argument', function(){
      it('should return undefined', function(){
        expect(myApp.findMinMax()).toEqual("invalid argument type")
      });

    });

});
