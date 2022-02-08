

//Make a program that filters through this array: ["Ryan", "Kieran", "Jason", "Mary", "Jo", "Jake"] and returns a new array that contains only those whose name have only 4 letters in them.

// let names = [
//     {person: 'Ryan', letters: 4},
//     {person: 'Kieran', letters: 6},
//     {person: 'Jason', letters: 5},
//     {person: 'Mary', letters: 4},
//     {person: 'Jo', letters: 2},
//     {person: 'Jake', letters:4}
// ];
//
// let fourLetter = names.filter(person => person.letters === 4);
//
// console.log(fourLetter);

// let fourLetter = [];
// for (let i = 0; i < names.length; i++) {
//     if (names[i] >= 4) {
//         fourLetter.push(names[i]);
//     }4
// }
//
// console.log(fourLetter);

// Write a function that removes any duplicates from an array.
//     Input: [2,3,5,8,3,1,2,6,3,2,7,8,2,4,7]
//      expected output: [2,3,5,8,1,6,7,4]

let chars = [2,3,5,8,3,1,2,6,3,2,7,8,2,4,7] ;
let uniqueChars = [...new Set(chars)];

console.log(uniqueChars);