//Object reference.
let myAccount = {
    name : 'koitoer',
    expenses : 0,
    income : 0
}

//It is actually a reference to the object in memory. Point to the same object in memory
let addExpense = function(account, amount){
    account.expenses = account.expenses + amount;
    console.log(account)
}

addExpense(myAccount, 2.5)
console.log(myAccount)

// If we assign a new value it will lost the reference
let clearEntireAccount = function(account, amount){
    account = {}
    console.log(account)
}

clearEntireAccount(myAccount, 2.5)
console.log(myAccount)

//We can create a binding like this.
let newAccountVar = myAccount;
addExpense(newAccountVar, 2.5)
console.log(myAccount)
