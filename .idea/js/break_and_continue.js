

/*let numberToSkipAt = 27

    for (let i = 1; i <= 50; i += 2) {
        if (i % 2 !== 0) {
            console.log("Here is an odd number: " + i);
        if (i === numberToSkipAt) {
            console.log("Skippppppppppppppppppppppppppppppppppppppppp " + i);
        }
        }
    }*/
/////////////// INSTRUCTOR VERSION - REFERENCE ///////////////////
var userNumber = 0;
do {
    userNumber = Number(prompt("Give me that odd number between 1 & 50 "));
    if (userNumber < 1 || userNumber > 50) {
        alert("Number out of bounds")
    } else if (userNumber % 2 === 0) {
        alert ("Number is not odd")
    } else if (isNaN(userNumber)) {
        alert("That's not a number")
    } else {
        alert("Valid Number")
        break;
    }
} while(true)

console.log("Number to skip us: " + userNumber)

for (var i = 1; i <= 50; i+=2) {
    if (i === userNumber) {
        console.log("Yikes: skipping number: " + userNumber)
        continue;
    }
    console.log("Here is an odd nymber: " + i)
}
