console.clear();
console.log('Welcome!');
const { faker } = require('@faker-js/faker');
const fs = require('fs');

var Start;
Start = Date.now();

var fn;
fn = 'names-' + Date.now();

var v;
v = 0;

var c;
var o;
c = 0;
o = 0;

var content;
content = ``;

const max = parseInt(all('10 000 000'));
function all(n) {
    while(n.includes(' ')) {
        n = n.replace(' ', '');
    }
    return n;
}

for (let i = 0; i < max; i++) {
    const name = faker.internet.userName();
    const pass = faker.internet.password();

    // console.log(`Name: ${name}`)

    o = o + 1;
    if (o == parseInt(all('10 000'))) {
        console.log(`Progress: ${Math.round( ( i / max ) *100)}%`)

        content += '\n';
        v = v + 1;
        fs.appendFileSync('./names/'+fn+'-'+v+'.txt', content);

        content = '';

        o = 0;
    }

    content += `${name}:${pass} \n`
}

var End = Date.now();
var T = Math.round( (End - Start) / 1000);
console.log(`Took: ${T}s`);
setInterval(() => {
    // nothing lol
}, 60*1000);
