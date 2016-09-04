var fs = require("fs");

var filename = process.argv[2];

file = fs.readFileSync(filename);

content = file.toString();

console.log(content.split('\n').length - 1);