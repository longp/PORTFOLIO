function reverseString(str) {
  
 
 
  var strArray = str.split("");
  strArray.reverse("");
  str = strArray.join("");
  
  
  return str;
}
var string = prompt("Please enter your  string);
console.log (
	reverseString(string);
	);