//const arr = (1, 2, 6, 7, 10, 11)
function sortPrime(num) {
    const primeNum1 = [];
    const primeNum2 = [];
    //add for loop
    for (var i = 0; i <= num; i++) {
        primeNum2.push(true);
    }
    for (var i = 2; i <= num; i++) {
        if (primeNum2[i]) {
            primeNum1.push(i);
            for (let j = i; i * j <= num; j++) {
                primeNum2[i * j] = false;
            }
        }
    }
    return primeNum1
}


console.log(sortPrime(5))
console.log(sortPrime(19))
console.log(sortPrime(21))