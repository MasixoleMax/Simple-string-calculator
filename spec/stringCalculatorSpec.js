describe("A simple string calculator", function() {

  it ("should return zero to an empty string", function() {

     expect(Add("")).toEqual(0);
  });

   it ("should return the sum of two numbers in a string", function() {
 
    expect(Add("1,2")).toEqual(3);
  });

  it("should return the sum of multiple unknown number of integers", function(){
    // creates a random array
   const randomArray = (length, max) => [...new Array(length)]
    .map(() => Math.round(Math.random() * max));
    // creates a random number between 1 and 100
   const randy = Math.floor((Math.random() * 100) + 1);
   const res = randomArray(randy,randy);
    // sums up an array
   const sum = res.reduce((pv, cv) => pv+cv, 0);
    // converts the array to a string
   const arg = res.join();
    expect(Add(arg)).toEqual(sum);
  });

	it("should handle new lines between numbers", function(){
    expect(Add("1\n2,3")).toEqual(6);
    });

    it("should not allow negative numbers", function(){
      expect(function(){Add("2,-2,2")}).toThrow(new Error("negatives not allowed."));
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