var greet2 = require("./greet2.js").greet;
greet2();

var greet3 = require("./greet3");
greet3.greet();
greet3.greeting = 'Changing the text ';
greet3.greet();


//Cache and store the module for future inquiries, cachedModule
var greet3b = require("./greet3");
greet3b.greet();

//If you dont want the cache
var Greet4 = require("./greet4");
var gtr = new Greet4();
gtr.greet();

var greet5 = require("./greet5").greet;
greet5();
