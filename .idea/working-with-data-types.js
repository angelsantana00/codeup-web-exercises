var a = 1;
var b = a++;
var c = ++a;
console.log(a, b, c);

var d = "hello";
console.log(d)
var e = false;
console.log(e)

d++;
e++;
console.log(d, e)

var perplexed;
console.log(perplexed)// perplexed is undefined (no value is assigned)
perplexed + 2;
console.log(perplexed)

var price = 2.7;
price.toFixed(2);
console.log(price)

isNaN(0)
console.log (isNaN)
isNaN(1)
console.log (isNaN)
isNaN("")
console.log (isNaN)
isNaN("string")
console.log (isNaN)
isNaN("0")
console.log (isNaN)
isNaN("1")
console.log (isNaN)
isNaN("3.145")
console.log (isNaN)
isNaN(Number.MAX_VALUE)
console.log (isNaN)
isNaN(Infinity)
console.log (isNaN)
isNaN("true")
console.log (isNaN)
isNaN(true)
console.log(isNaN)
isNaN("false")
console.log(isNaN)
isNaN(false)
console.log(isNaN)
// to illustrate why the isNaN() function is needed:
NaN == NaN
console.log(NaN)

