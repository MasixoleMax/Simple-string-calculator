describe("A simple atring calculator", function(){
  it ("should return zero to an empty string", function() {
      var string = ""
      expect(empty(string)).toEqual(0);
  })
  it ("should return the same number if only one number was given ", function() {
    var x = 8
    expect(log(x)).toEqual(8);
  })

  it ("should return the sum of multiple numbers in an array ", function() {
    var array = [1, 2]
    expect(add(array)).toEqual(3);
  })
  

})
