const { faker } = require('@faker-js/faker');
const fs = require('fs');

var content = '';

const max = 10;
for (let i = 0; i < max; i++) {
    const name = faker.internet.userName();
    content += `${name}\n`
}
content += '\n';
fs.appendFileSync('./names/faker.txt')