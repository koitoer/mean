//ES6 Typed Arrays
var buffer = new ArrayBuffer(8); //64 bits
var view = new Int32Array(buffer); // 32 * 2 = 64 bits

view[0] = 5;
view[1] = 15;
view[2] = 30;
console.log(view);
