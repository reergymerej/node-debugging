// import modules
var foo = require('./foo');
var bar = require('./bar');

var newFoo = new foo.Foo('a new foo');
var newBar = new bar.Bar('a new bar');

console.log(newFoo.getName());