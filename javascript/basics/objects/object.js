//Define objects and/or create them
let myBook = {
    title : '1984 Book',
    author : "koitoer",
    pageCount : 326
}

console.log(myBook)
//Read the values
//Dot notation to access the elements.
console.log(myBook.author)
console.log(`${myBook.title} by ${myBook.author}`)

//Change the values
myBook.title = 'Change to new title'
console.log(`${myBook.title} by ${myBook.author}`)

let me = {
    name : 'koitoer',
    age : 27,
    location : 'mxn'
}

console.log(`${me.name} has ${me.age} and lives ${me.location}`)
me.age = me.age + 1
console.log(`${me.name} has ${me.age} and lives ${me.location}`)
