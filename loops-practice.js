
/*
let numberOfCars = 20;
let usedSpots = 20;
let parked = false;
let counter = 0;
while(!parked){
    console.log("we're on loop: " + counter + "-----------------------")
    if(usedSpots == numberOfCars){
        console.log("there's no parking")
        numberOfCars--;
        console.log("num of cars: ", numberOfCars);
        counter++;
        console.log("counter: ", counter);
    } else  {
        parked = true;
        console.log("you found a parking spot")
        console.log("num of cars: ", numberOfCars);
        console.log("counter: ", counter);
    }
}*/

/*
while(condition is true){
    execute this code/
}*/
// loop until our number reaches 15
/*let i = 0;
while(i <= 15) {
    console.log("loop number: " + i);
    i++;
}*/

// do while - always run first and then it checks the conditional
/*
let i = 20;
do {
    console.log("i before ++i: ", i)
    i++;
    console.log("i after ++i: ", i);
} while (i <= 15);
*/

// loop through numbers - 50 by 2s

/*
let i = 0;
do {
    console.log("number ", i)
    i += 2;
} while (i <= 50)
*/

/*
let i = 0;
do {
    console.log("Countdown: ", i)
    i++;
} while (i <= 10)*/
// TODO: using prompt() and alert(), write a loop that will continue to ask for the correct password until the
// correct password is given.
/*
let correctPass = "(Secret)"
    do {
        console.log( prompt("Please enter the correct password: ", correctPass))
        console.log( alert("Incorrect password, try again: ", correctPass))
    }*/

// FOR LOOPS you know how many iterations you want to do
/*
for (1; 2 ; 3; ){
    //code;
};

1. starting point;
2. stopping point;
3. how to iterate;

*/

/*
let dozens = 0;

for (let eggs = 0; eggs<= 48; eggs++){
    dozens = eggs/12;
    console.log(dozens, "dozens");
    console.log(eggs, "eggs")
}*/

// NESTED LOOPS
/*
for (let counter =1; counter <=5; counter++){
    console.log('First Counter: ' + counter);

    for (let counterTwo = 5; counterTwo > 0; counterTwo--){
        console.log('Second counter: ' + counterTwo);
    }
}
*/
