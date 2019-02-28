// Exercise 3
// Recursive Palindrome Checker
/*
 * Instructions:
 * Create a recursive function checkPalindrome(str) that accepts
 * a string str, and returns a boolean value determining if the 
 * str value is a palindrome or not.
 * 
 * Remember that recursive functions have two parts:
 * 1. The base case
 * 2. The recursive call
*/

// Check Palindrome Definition
function checkPalindrome(str){

	// First define a base case
	// When should you stop calling the function into itself?

	n = str.length;

	if (n > 1) {
		if (str[0] == str[n-1]) {
			smallerString = str.slice(1, n-1);
		}else{
			return false;
		}
	}else{
		return true;
	}

	return checkPalindrome(smallerString);

}

console.log(checkPalindrome("chicken"));
console.log(checkPalindrome("racecar"));
console.log(checkPalindrome("e"));