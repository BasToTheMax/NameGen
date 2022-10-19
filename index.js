const req = require("unique-username-generator");
const fs = require('fs');

var content = '';

const max = 10;
for (let i = 0; i < max; i++) {
    const name = req.generateUsername();
    content += `${name}\n`
}
content += '\n';
fs.appendFileSync('./names.txt')