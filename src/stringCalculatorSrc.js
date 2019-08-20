function empty(string){
  if (string == "") {
    return 0;
  } else {
    return false;
  }
}

function log(x){
 return x;
};

function add(array) {
  var sum = 0;
  for (let i in array) {
    sum = sum + array[i];
    
  }
  return sum;
}



