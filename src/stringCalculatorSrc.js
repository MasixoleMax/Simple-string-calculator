function Add(str){
	let sum = 0;
	let regex = /\d{1,5}/gm;
	if(str.includes("-")){
		throw new Error("negatives not allowed.")
	}
	let numbers = str.match(regex)
	// console.log(number)
	if(str == "") {
		return 0;	
	}
skip:	for(let i = 0; i < numbers.length; i++){
			if(numbers[i] >= 1001){
				continue;	
			}
			else{
				sum += parseInt(numbers[i])
			}
		}
	console.log(sum)
	return sum
};
// Add("1,1001,3")