let myAccount = {
    name : 'koitoer',
    expenses : 0,
    income: 0
}

let addExpense =  function(account, amount){
    account.expenses = account.expenses + amount
}

//addIncome method
let addIncome =  function(account, income){
    account.income = account.income + income
}

//resetAccount
let resetAccount = function(account){
    account.income = 0
    account.expenses = 0
}

//getAccountSummary
let getAccountSummary = function(account){
    let balance = account.income - account.expenses
    account.balance =  balance;
    return `Account for ${account.name} has $${account.balance}. ${account.income} and ${account.expenses}`
}


addIncome(myAccount, 2000)
addExpense(myAccount, 2.50)
addExpense(myAccount, 100)

console.log(getAccountSummary(myAccount))