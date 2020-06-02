let num = 103.941345

console.log(num)
console.log(num.toFixed(2))
console.log(num.toExponential(5))
console.log(num.toPrecision(5))

console.log(Math.round(num))
console.log(Math.floor(num))
console.log(Math.ceil(num))

let min = 10
let max = 20
//Math.random return from 0-1
let randomNumber = Math.floor(Math.random() * (max - min + 1 )) + min


let makeGuess =  function(guess){
    let min = 1
    let max = 5
    let randomNumber = Math.floor(Math.random() * (max - min + 1 )) + min
    return guess === randomNumber
}

console.log(randomNumber) // 10-20
console.log(makeGuess(5)) // 10-20