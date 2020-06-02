let name = '    koitoer Koitoer 18'
console.log(name.length)

//upper
console.log(name.toUpperCase())

//mozilla developer network (MDN)
console.log(name.toLowerCase())

console.log(name.includes('ito'))

console.log(name.toUpperCase())

let password = 'abcdefg1234abcd'
console.log(password.includes('123'))

console.log(name.trim())


//validate pasword function
let isValidPassword = function(password){
    return password.length > 8 && !password.includes('password')
}

console.log(isValidPassword('asfrg'))
console.log(isValidPassword('4455wfg5%##$'))
console.log(isValidPassword('4455wfg5%##$password'))