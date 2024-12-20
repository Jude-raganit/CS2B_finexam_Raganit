const word1 = ("racecar:");
const word2 = ("recorder:");


function reverseString(str) {
  return str.split("").reverse().join("");
}


const reversedWord1 = reverseString(word1);
const reversedWord2 = reverseString(word2);


console.log("Original word 1:", word1);
console.log("Reversed word 1:", reversedWord1);
console.log("Original word 2:", word2);
console.log("Reversed word 2:", reversedWord2);


console.log("Is word 1 a palindrome?", word1 === reversedWord1);
console.log("Is word 2 a palindrome?", word2 === reversedWord2);
