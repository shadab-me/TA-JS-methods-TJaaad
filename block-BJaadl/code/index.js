let words = [
  'mystery',
  'brother',
  'aviator',
  'crocodile',
  'pearl',
  'orchard',
  'crackpot',
  'rhythm',
];

// - Write a function findLongestWord that takes an array of words and returns the longest word from the array. (Use above array "words" to test it). If there are 2 with the same length, it should return the first occurrence.
console.log(words.sort((a, b) => {
  return b.length - a.length
})[0])

// - Convert the above array "words" into an array of length of word instead of word.
let arlen = [];

words.forEach((item) => {
  arlen.push(item.length)
});
console.log(arlen)
// - Create a new array that only contains word with atleast one vowel.
let arV = [];
let vowel = ['a', 'e', 'i', 'o', 'u']
 
console.log(arV)
// - Find the index of the word "rhythm"
console.log(words.indexOf('rhythm'));
// - Create a new array that contians words not starting with vowel.
console.log(words.filter((item) => {
let vowel = ['a', 'e', 'i', 'o', 'u'];
for(var i = 0; i <= vowel.length; i++){
}
item.startsWith(vowel[i])
}))
// - Create a new array that contianse words not ending with vowel

let numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

// - Create a sumArray function that takes an array of number as a parameter, and calculate the sum of all its numbers
function sumArray(numbers){
  return numbers.reduce((acc, item) => acc + item, 0)
}
console.log(sumArray(numbers));

// - Make a new array that contains number multiplied by 3 like [6, 18, 27 ...]
let multiplied = numbers.map((item) => item * 3);

// - Create a new array that contains only even numbers
let even = numbers.filter((item) => item%2 == 0)
// - Create  a new array that contains only odd numbers.
let odd = numbers.filter((item) => item%2 != 0);
// - Create a new array that should have true for even number and false for odd numbers.
let boolean = numbers.map(item => item%2 == 0 ? true: false)
// - Sort the above number in assending order.
numbers.sort((a,b) => b - a);
// - Does sort mutate the original array?
let ans = 'Yes It does mutation on array'
// - Find the sum of the numbers in the array.
let sum = numbers.reduce((acc, item) => acc + item);

//- Write a function averageNumbers that receives an array of numbers and calculate the average of the numbers
let averageNumbers = numbers.filter((acc, item, numbers) => (acc + item)/numbers.length )
let strings = [
  'seat',
  'correspond',
  'linen',
  'motif',
  'hole',
  'smell',
  'smart',
  'chaos',
  'fuel',
  'palace',
];

// - Write a function averageWordLength that receives an array of words2 and calculate the average length of the words.
let numAr = words2.map((item) => item.length);
let avw = numAr.reduce((acc, item, numAr) => acc+item / numAr.length);