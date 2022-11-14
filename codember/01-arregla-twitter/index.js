const fs = require('fs');

try {
    const text = fs.readFileSync('./codember/01-arregla-twitter/users.txt', 'utf8');
    const arr = text.toString().split(/\n\s*\n/).map(el => el.replace(/\n/g, " "));
    const results = [];
    arr.forEach(data => {
      if(data.includes('usr:') &&
        data.includes('eme:') &&
        data.includes('psw:') &&
        data.includes('age:') &&
        data.includes('loc:') &&
        data.includes('fll:') ) {
          results.push(data);
        }
      });
    console.log(`submit: ${results.length}${results.at(-1)}`);
} catch(e) {
    console.log('Error:', e.stack);
}
