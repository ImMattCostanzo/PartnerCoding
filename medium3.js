//Write a function that takes in two numbers and determines the largest positive integer that divides the two numbers without a remainder. 
var gcd = function(a, b) {
    if ( ! b){
        return a;
    }

    return gcd(b, a % b);
};
console.log(gcd(5462, 7300));