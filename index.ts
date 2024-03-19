console.log("Hello via Bun!");
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

let json = JSON.stringify(Array.from(testers));

[['[', '[\n'], [']', ']\n'], [',', ',\n  ']].forEach(([c, nc]) => json = json.replaceAll(c, nc))

Bun.write(output, json);