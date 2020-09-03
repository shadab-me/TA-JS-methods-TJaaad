// Use the below two arrays and practice array methods
var numbers = [1, 12, 4, 18, 9, 7, 11, 3, 101, 5, 6, 9];
var strings = ['This', 'is', 'a', 'collection', 'of', 'words'];

// - Find the index of `101` in numbers
console.log(numbers.indexOf(101));
// - Find the last index of `9` in numbers
console.log(numbers.indexOf(9));
// - Convert value of strings array into a sentance like "This is a collection of words"
console.log(strings.join(' '));;
// - Add two new words in the strings array "called" and "sentance"
strings.push('called');
strings.push('sentance');
// - Again convert the updated array (strings) into sentance like "This is a collection of words called sentance"
console.log(strings.join(' '));
// - Remove the first word in the array (strings)
strings.unshift();
// - Find all the words that contain 'is' use string method 'includes'
let isInclude = [];
for(let item of strings){
if(item.includes('is')){
  isInclude.push(item)
}
}
console.log(isInclude)
// - Find all the words that contain 'is' use string method 'indexOf'
console.log(strings.indexOf('is'))
// - Check if all the numbers in numbers array are divisible by three use array method (every)
numbers.every((item) => item  / 3);

// -  Sort Array from smallest to largest
console.log(numbers.sort((a,b) => a - b))
// - Remove the last word in strings
strings.pop();
// - Find largest number in numbers
console.log(numbers.sort((a, b) => (b-a))[0])
// - Find longest string in strings

// - Find all the even numbers
console.log(numbers.filter((item) => item%2 ==0));

// - Find all the odd numbers
console.log(numbers.filter((item) => item %2 != 0));
// - Place a new word at the start of the array use (upshift)
   strings.unshift();
// - Make a subset of numbers array [18,9,7,11]

// - Make a subset of strings array ['a','collection']

// - Replace 12 & 18 with 1221 and 1881
let indexOf12 = numbers.indexOf(12);
let indexOf18 = numbers.indexOf(18);
numbers[indexOf12] = 1221;
numbers[indexOf18] = 1881;
// - Replace words in strings array with the length of the word
let arrLength = [];
for(let item of strings){
  arrLength.push(item.length);
}
console.log(arrLength)
// - Find the sum of the length of words using above question
let lenSum = 0;
for(let item of arrLength){
  lenSum += item
}
console.log(lenSum)
// - Customers Array
var customers = [
  { firstname: 'Joe', lastname: 'Blogs' },
  { firstname: 'John', lastname: 'Smith' },
  { firstname: 'Dave', lastname: 'Jones' },
  { firstname: 'Jack', lastname: 'White' },
];
// - Find all customers whose firstname starts with 'J'
console.log(customers.filter((item) => item.firstname.startsWith('J')))
// - Create new array with only first name
let FirstName = [];
let FullName = [];


for(let item of customers){
   FirstName.push(item.firstname);
   FullName.push(item.firstname + " " + item.lastname);
}
console.log(FirstName)
// - Create new array with all the full names (ex: "Joe Blogs")
console.log(FullName)
// - Sort the array created above alphabetically

 // - Create a new array that contains only user who has at least one vowel in the firstname.
