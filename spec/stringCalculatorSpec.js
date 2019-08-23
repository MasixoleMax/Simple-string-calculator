describe("A simple string calculator", function() {

  it ("should return zero to an empty string", function() {

     expect(strCal("")).toEqual(0);
  });

  it ("should return the same number if only one number was given ", function() {
    
    expect(strCal("1")).toEqual(1);
  });

   it ("should return the sum of two numbers in a string", function() {
 
    expect(strCal("1,2")).toEqual(2);
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
    expect(strCal("1,2,3,4,5")).toEqual(19);
  });

it("should allow \\n in between the input number string", function(){
    expect(strCal("1,2, \\n 3,4,6")).toEqual(20);
    });

    it("should not allow negative numbers", function(){
      expect(strCal("1,-2,2")).toThrow(new Error("negatives restricated"));
    });
  });
