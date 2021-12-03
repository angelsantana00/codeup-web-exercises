///////////////////////////////////////////////////////////////////////////////

/*
let theNumber = 2;

while  (theNumber <= 65536) {
    console.log(theNumber)
    theNumber *= 2
}*/

//////////////////////////////////////////////////////////////////////////////


// This is how you get a random number between 50 and 100
var allCones = Math.floor(Math.random() * 50) + 50;

// This expression will generate a random number between 1 and 5
Math.floor(Math.random() * 5) + 1;

do {
    var conesToPurchase = Math.floor(Math.random() * 5) + 1;

    if (conesToPurchase <= allCones) {
        console.log(conesToPurchase + " cones sold...")
        allCones -= conesToPurchase
    } else {
        console.log("Cannot sell you " + conesToPurchase + " cones I only have" + allCones + "...")
    }
    console.log(allCones)

} while(allCones > 0 )
console.log("Yay! I sold all the cones")