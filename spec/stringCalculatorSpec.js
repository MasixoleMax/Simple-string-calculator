let Add = require('../src/stringCalculatorSrc');

describe("A simple string calculator", function() {

    it ("should return zero to an empty string", function() {

        expect(Add("")).toEqual(0);
    });
  
    it ("should return the sum of two numbers in a string", function() {
   
         expect(Add("1,2")).toEqual(3);
    });
  
    it("should return the sum of multiple number of integers in a string", function(){
     
          expect(Add("1,2,5,5")).toEqual(13);
    });
  
      it("should handle new lines between numbers", function(){
          expect(Add("1,\n2,3")).toEqual(6);
    });
  
        it("should not allow negative numbers", function(){

          expect(function(){Add("1,-8");}).toThrow("negatives not allowed  -8");
      });
  
      it("should support different delimiters", function(){
          expect(Add("//;\n1;2")).toEqual(3);
      });
  
      it("should ignore numbers that are greater than 1000", function(){
          expect(Add("1,1001,3")).toEqual(4);
      });
  
      it("should allow multiple delimeters" , function (){
          expect(Add("//[*][%]\n1*2%3")).toEqual(6);
      });
  
      it("should allow multiple delimeters with length longer than one char" , function (){
          expect(Add("//[*$%%]9[%**]\n1*2%3")).toEqual(15);
      });
  });