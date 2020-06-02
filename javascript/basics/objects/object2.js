//Define objects and/or create them
let myBook = {
    title : '1984 Book',
    author : "koitoer",
    pageCount : 326
}

//Define objects and/or create them
let otherBook = {
    title : '1986 Book',
    author : "koitoer2",
    pageCount : 500
}

//Pass object to a function
let getSummary = function(book){
    console.log(`${myBook.title} by ${myBook.author}`)
}

getSummary(myBook)
getSummary(otherBook)

//Return an object from a function
let returnBookFunction = function(book){
    return {
        summary : `${myBook.title} by ${myBook.author}`,
        pageCountSummary : `${myBook.title} by ${myBook.pageCount} pages long`
    }
}

let bookSummary = returnBookFunction(myBook)
let otherBookSummary = returnBookFunction(myBook)

console.log(bookSummary.pageCountSummary)

//Create a function that receive an object and return a object.
let converTemperature =  function(fahrenheit){
    return {
        fahrenheit : fahrenheit,
        kelvin : (fahrenheit + 459.67) * (5/9),
        celsius: (fahrenheit - 32) * (5/9)
    }
}

let temsp = converTemperature(74);
console.log(temsp);


