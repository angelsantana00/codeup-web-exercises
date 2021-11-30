//function reverseString(str) {
  //  //return str.reverse();
//}
//console.log(reverseString("Angel"));

//Morning Warm-UP

//If Rainy, wear raincoat.
//If Sunny, wear shirt.
//If Snowy, wear hoodie.

//let weather = "sunny";
   // if (weather === "sunny") {
    //    console.log("wear shirt")
    //} else if (weather === "rainy"){
    //    console.log("wear raincoat");
    //} else if ()

//
//let myAge = 23;
   // letActualAge = 21;
   // function checkAge (myAge, actualAge) {
    //    if (myAge === actualAge) {
     //       console.log("myAge is my actual age")
    //    }
   // }

//    checkAge();

//let student1Grade = 99
//let student2Grade = 75
//let student3Grade = 66
//let student4Grade = 84
//let student5Grade = 52

//function checkGrades (grade) {
   // if (grade >= 90) {
    //    console.log("Your grade is an A");
   // } else if (grade <= 89 && grade >=80) {
    //    console.log("Your grade is a B");
    //} else if (grade <= 79 && grade >=70) {
    //    console.log("Your grade is a C");
   // } else if (grade <= 69 && grade >=60) {
    //    console.log("Your grade is a D");
   // } else if (grade <= 59 && grade >= 0) {
    //    console.log("Your grade is an F")
//
    //}
//}
//console.log(checkGrades (student5Grade))

//let student1Grade = (99) ? "Your grade is an A" : "Your grade is a B"

/*
let studentGrade1 = 99

switch(studentGrade1) {
    case "A":
        console.log("Grade of A");
        break;


}
console.log(studentGrade1)
*/



/*let weather = "sunny";
switch (weather) {
    case "sunny":
        console.log("sunglasses");
    break;
    case "rainy":
        console.log("umbrella");*/
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//1.Write a function that accepts the top three bowling scores and returns the average
function averageScore (x, y, z) {
    return (x + y + z) / 3
}
//console.log(averageScore(250, 250, 200))

//2.Write a function that accepts the best score and returns true if its divisible by 3 or 5 and false if it’s not
function trueScore (bestScore) {
    if (bestScore / 3 || bestScore / 5) {
        return true;
    } else (!bestScore / 3 || bestScore / 5);{
        return false;
    }


}
console.log(trueScore(299))

//3.Write a function that accepts the name of the bowling place (“ThEbEsTbOwLiNgPlAcEever”) and returns it in all lower case BONUS: return it with a space between each word
function bowlingPlace (name) {
    var name = 'ThEbEsTbOwLiNgPlAcEever';
    return name.toLowerCase();
}
console.log(bowlingPlace())


//4.Given these variables:
// Write a function that returns the type of each of the variables (call the function once per variable);
let score = 109;
let name = "bowling Is Fun";
let isBowlingFun = true;
let players = ["tom", "jerry", "Garfield"];

function variableType (type) {
    return typeof(type);
}

console.log(variableType(score))
console.log(variableType(name))


//5.Write a function that executes all of the above functions
function order66 (){
    return averageScore, trueScore, bowlingPlace, variableType;
}

console.log(order66())
/*6.Copy and execute the following functions, and find the Error: (Hint: try console logging the result)
let myFunction (firstName, lastName) return firstName + lastName; };

function thatsNotMyName(name){ if(name = "Laura"){ return "that's me!, I'm " + "name"} } else { return "that's not my name" }*/

