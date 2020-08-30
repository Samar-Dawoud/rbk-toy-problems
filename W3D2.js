/*
1- Write a function called countNumOfStrings that takes an array of
mixed elements (different data types)
and returns the number of strings there are in the array.
Calling your function should result in:
countNumOfStrings(["hello", "world", 5, true, {}]); //2
countNumOfStrings(["foo", 2, 10, "bar", 5, false, {}, "baz"]); //3
countNumOfStrings(["There is only one string in this example"]); //1
Hint: Recall typeof? If not: check it out on MDN. :-)

*/
function countNumOfString(arr){
	var count=0;
	for(var i=0;i<arr.length;i++){
		if(typeof arr[i] === 'string'){
			count+=1;
		}
	}
	return count;
}
console.log(countNumOfString(["hello", "world", 5, true, {}]));
/*
2- Write a function called listLengthOfAllWords that takes an array
of words (strings),
and returns an array of numbers representing the length of each word.
Calling your function should result in:
listLengthOfAllWords(['hello', 'world', 'I', 'can', 'code']); //[5, 5,
1, 3, 4];
*/
var arr=[];
function listLengthOfAllWords(str){
	for (var i=0;i<str.length;i++){
       arr.push(str[i].length);
	}
	return arr;
}
console.log(listLengthOfAllWords(['hello', 'world', 'I', 'can', 'code'])); //[5, 5,

/*
Write a function called flipPairs that takes a string a parameter
and returns the given string after Flip every pair of characters.
Example:
var input = 'check out how interesting this problem is, it\'s insanely
interesting!';
var output = flipPairs(input);
console.log(output); // --> hcce kuo toh wnietertsni ghtsip orlbmei
,si 't sniasenyli tnreseitgn!*/

function flipPairs(input){
	for(var i=input.length-1;i>0;i--){
	     console.log(input[i]);
	}
}
console.log(flipPairs("hello world"));
