function isPalindrome(word) {
  if (typeof word === "string"){
    const lowercaseWord = word.toLowerCase();
    const alphanumericWord = lowercaseWord.replace(/[^a-z0-9]/g, '');
    const reversedWord = alphanumericWord.split('').reverse().join('');
    return alphanumericWord === reversedWord;
  } else {
  return false
  }
}

/* 
  Add your pseudocode here
  write a function called isPalindrome

  begin if statement
  check if the the word is a string 
  convert the word to all lowercase
  convert the word to all letters, removing all characters and numbers
  reverse the word by splitting it and rejoining it
  check if the alphanumeric word is the same as the reversed word
  close if statement

  begin else statement
  return false
*/ 

/*
  Add written explanation of your solution here
  I am using an if/else function to test if a word is a palindrome or not. 
  If the word is a palindrome, it returns true; if it is not, it returns
  false.
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;