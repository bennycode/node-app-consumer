var nodeApp = require('node-app');
var args = process.argv.slice(2);

var length = args[0];
var width = args[1];

var perimeter = nodeApp.perimeter(length, width);
console.log('Perimeter: ' + perimeter);