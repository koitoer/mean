console.log("Hello World");

//1. String type
let name = 'Koitoer JS'
let message = 'World Hellow'
let completeMessage = name + ' ' + message;
console.log(completeMessage)

//2. Numeric type, positive, negative and with decimals.
let num = 5.5 + 2
let num2 = 5.5 * 2
let num3 = 13/2
let x = 11
let num4 = x + 1 / 2
console.log(num4)

let age = 30
let dogYears =  (age + 1) / 7
console.log('Dog Years for ' + age + ' are ' + dogYears)

//Can not define a variable that you already define
let petName = 'Kevin'
petName = 'Kevin got reassigned'

//Number are invalid as the first character in variable name
//You can not use anything except _
//You can not use reserved keywords

//3. Booleans
let isCold = false
let isHot = true
let temp = 31
let isFreezing = temp === 31  
// === equality operator
// !== no equal operator
// < less than
// > more than
// <= less than or equal
// >= greater than or equal

console.log(isFreezing)

if(isFreezing){
    console.log("isFreezing is true")
}else{
    console.log("isFreezing is false")
}

let isAccountLocked = true
if(isAccountLocked){
    console.log('Account is locked')
}else{
    console.log("Account is not locked")
}

let temperature = 65
if(temperature >= 60 && temperature <= 90){
    console.log('It is ok outside')
}

if(temperature <= 0 || temperature >= 120){
    console.log('Do not go outside')
}

let firstBoolean = true
let secondBoolean = false

console.log('Boolean table')
console.log(firstBoolean && secondBoolean)
console.log(firstBoolean || secondBoolean)
console.log(firstBoolean & secondBoolean)
console.log(firstBoolean | secondBoolean)
console.log(firstBoolean ^ secondBoolean)

//Variables have Lexical Scope (static scope) 
//Global scope - Defined outside of all code blocks
//Local scope  - Degined inside a code block
//Variable shadowing - Replace outside scope - You can use name in different scopes

let n = 'Koitoer'
if(true){
    let n='New name' // <-- Redefine the variable only for local scope
    if(true){
        n = "Assigned in the inner scope"
        console.log(n)
    }
}
if(true){
    console.log(n)
}


if(true){
    if(true){
        n = 'Add a new global name' // <-- We create global 
        console.log(n)
    }
}
if(true){
    console.log(n)
}
