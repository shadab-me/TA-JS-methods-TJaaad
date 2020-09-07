let persons = [
  { name: 'John', grade: 8, sex: 'M' },
  { name: 'Sarah', grade: 12, sex: 'F' },
  { name: 'Bob', grade: 16, sex: 'M' },
  { name: 'Johnny', grade: 2, sex: 'M' },
  { name: 'Ethan', grade: 4, sex: 'M' },
  { name: 'Paula', grade: 18, sex: 'F' },
  { name: 'Donald', grade: 5, sex: 'M' },
  { name: 'Jennifer', grade: 13, sex: 'F' },
  { name: 'Courtney', grade: 15, sex: 'F' },
  { name: 'Jane', grade: 9, sex: 'F' },
  { name: 'John', grade: 17, sex: 'M' },
  { name: 'Arya', grade: 14, sex: 'F' },
];

// Create an array peopleName and store value of Name key from persons array
let peopleName = persons.map((item) => item.name);
console.log(peopleName)
// Create an array peopleGrade and store the value of grade key from persons array
let PeopleGrade = persons.map((item) => item.grade);
console.log(PeopleGrade)
// Create an array peopleSex and store the value of sex key from persons array
let PeopleSex = persons.map(item => item.sex);
// Log the filtered named of people in peopleName that starts with 'J' or 'P'
console.log(persons.filter((item) => item.name.startsWith('J', 'P') || item.name.startsWith('P')));
// Log the length of filtered named of people in peopleName that starts with 'A' and 'C'

// Log all the filtered male ('M') in persons array
console.log(persons.filter(item => item.sex == 'M'))
// Log all the filtered female ('F') in persons array
console.log(persons.filter(item => item.sex == 'F'));
// Log all the filtered female ('F') whose name starts with 'C' or 'J' in persons array
console.log(persons.filter(item => item.sex == 'F' && (item.name.startsWith('C') || item.name.startsWith('J'))));
// Log all the even numbers from peopleGrade array
console.log(persons.filter(item => item.grade % 2 == 0))
// Find the first name that starts with 'J' in persons array and log the object
 console.log(persons.filter((item) => item.name.startsWith('J')));
// Find the first name that starts with 'P' in persons array and log the object
console.log(persons.filter((item) => item.name.startsWith('P')));
// Find the first name that starts with 'J', grade is greater than 10 and is a female
console.log(persons.filter((item) => item.name.startsWith('J') && item.grade > 10 && item.sex == 'F'));
// Filter all the female from persons array and store in femalePersons array
let femalePersons = persons.filter((item) => item.sex == 'F');
console.log(femalePersons);
// Filter all the male from persons array and store in malePersons array
let malePersons = persons.filter((item) => item.sex == 'M');
console.log(malePersons);
// Find the sum of all grades and store in gradeTotal
let gradeTotal = persons.reduce((acc, item) => acc+item.grade, 0);
console.log(gradeTotal)
// Find the average grade
let gradeTotalAv = persons.reduce((acc, item) => Math.floor(acc+item.grade / persons.length), 0);

console.log(gradeTotalAv);
// Find the average grade of male
 let maleAr = persons.filter(item => item.sex == "M");
 let avM = maleAr.reduce((acc, item) => acc+item.grade, 0);
 console.log(avM);
// Find the average grade of female
let femaleAr = persons.filter(item => item.sex == 'F');
let avF  = femaleAr.reduce((acc, item) => acc+item.grade, 0);
console.log(avF);
// Find the highest grade
let grades  = persons.map((item) => item.grade);
let highest = Math.max(...grades);
 // Find the highest grade in male
let gradesM =  [];
persons.forEach((item) => {
  if(item.sex == 'M'){
    gradesM.push(item.grade)
  }
})
let highestNum = Math.max(...gradesM);
console.log(highestNum);
// Find the highest grade in female
let gradesF = [];
persons.forEach((item) => {
   if(item.sex == 'F') gradesF.push(item.grade)})
 let highestG = Math.max(...gradesF);
 console.log(highestG)
// Find the highest grade for people whose name starts with 'J' or 'P'
let arjP = [];
persons.forEach((item) => {
if(item.name.startsWith('J') || item.name.startsWith('P')){
    arjP.push(item.grade)
}
})
let highestJPG = Math.max(...arjP);
console.log(highestJPG);
// Sort the peopleGrade in ascending order and log the value of peopleGrade. Notice did the elements of peopleGrade got changed?
 let asor = PeopleGrade.sort((a,b) => a - b);
  asor.forEach((item) => {
   console.log(item)
 });
// Sort the peopleGrade in descending order
let dsor = PeopleGrade.sort((a, b) => b -a);
dsor.forEach((item) => {
  console.log(item)
})
// Sort the peopleGrade in descending order this time you have to make sure you don't mutate the original array
let SecondPG = [...PeopleGrade].sort((a, b) => a -b);
console.log(SecondPG);

// Sort the array peopelName in ascending `ABCD..Za....z`
peopleName.sort();
// Sort the array peopelName in ascending `ABCD..Za....z`. Make sure not to mutate the array
let secondPN = [...peopleName].sort();
console.log(secondPN);