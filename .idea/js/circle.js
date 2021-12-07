(function() {
    "use strict";

    // create a circle object
    var circle = {
        radius: 3,

        getArea: function () {
            // TODO: complete this method
            // hint: area = pi * radius^2
            let pi = Math.PI
            let piArea = pi * Math.pow(circle.radius, 2)
            return piArea; // TODO: return the proper value
        },

        logInfo: function (doRounding) {
            if ( doRounding === true) {
                let rounded = Math.round(this.getArea());
                console.log("Area of a circle with radius: " +  this.radius + " is " + rounded)
            } else {
                console.log("Area of a circle with radius for complete value: " + this.radius + " is " + this.getArea());
            }
            // TODO: complete this method.

            // If doRounding is true, round the result to the nearest integer.
            // Otherwise, output the complete value
        }
    };

    // log info about the circle
    console.log("Raw circle information");
    circle.logInfo(false);
    console.log("Circle information rounded to the nearest whole number");
    circle.logInfo(true);

    console.log("=======================================================");
    // TODO: Change the radius of the circle to 5.
circle.radius = 5
    // log info about the circle
    console.log("Raw circle information");
    circle.logInfo(false);
    console.log("Circle information rounded to the nearest whole number");
    circle.logInfo(true);
})();