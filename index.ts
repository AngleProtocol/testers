import { readdirSync } from 'fs';

const snapshotDirectory = import.meta.dir + '/sources/snapshots/';
const snapshots = readdirSync(snapshotDirectory);

const manual = Bun.file(import.meta.dir + '/sources/manual.csv');
const output = import.meta.dir + '/dist/list.json';

const testers = new Set<string>();

await Promise.all(snapshots.map(async (snapshot) => {
    const file = Bun.file(snapshotDirectory + snapshot);
    const addresses = (await file.text()).split('\n').map(c => c.split(',')[0]);

    addresses.forEach(address => testers.add(address));
}))

const manualAddresses = (await manual.text()).split('\n')
manualAddresses.forEach((address: string) => testers.add(address));

const finalTesters = Array.from(testers).filter(a => a.slice(0, 2) === '0x' && a.length === 42);
let obj = {};
finalTesters.forEach((a: string) => { obj[a] = true })

let json = JSON.stringify(obj);

[['{', '{\n  '], ['}', '\n}'], [',', ',\n  ']].forEach(([c, nc]) => json = json.replaceAll(c, nc))

Bun.write(output, json, { createPath: true });