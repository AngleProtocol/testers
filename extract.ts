const html = import.meta.dir + '/twitter.csv';
const file = await Bun.file(html).text();

const addresses = new Set<string>();
const reg = /(0x)[0-9a-fA-F]{40}/g;

var m;
console.log(file.slice(0, 50));

console.log('???', Array.from(file.matchAll(reg)).map(([a]) => a) );


const output = import.meta.dir + '/beta.csv';
Bun.write(output, (Array.from(file.matchAll(reg)).map(([a]) => a)).join(',\n'), { createPath: true });
