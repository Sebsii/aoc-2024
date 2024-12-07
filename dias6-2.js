import {twoD} from './input_provider.js'

const map = await twoD(6);

let start;
for (let r = 0; r < map.length; r++) {
    for (let c = 0; c < map[0].length; c++) {
        if (map[r][c] === '^')
            start = [r, c]
    }
}

let dirs = [
    [-1, 0],
    [0, 1],
    [1, 0],
    [0, -1]
];


let loopableStuffs = 0;

for (let r = 0; r < map.length; r++) {
    for (let c = 0; c < map[0].length; c++) {
        if (map[r][c] !== '.') {
            continue;
        }

        map[r][c] = '#';

        let loopable = testMaze();
        if (loopable)
            loopableStuffs++;

        map[r][c] = '.';
    }
}

console.log(loopableStuffs);

function testMaze() {
    let dirIdx = 0;
    const traveled = [];
    let pos = start;
    while (true) {
        const next = [pos[0] + dirs[dirIdx][0], pos[1] + dirs[dirIdx][1]];
        if (map[next[0]]?.[next[1]] === undefined) return false;
        const field = map[next[0]]?.[next[1]];
        if (field === '.' || field === '^') {
            pos = next;
        } else if (field === '#') {
            if (traveled.includes(next + ',' + dirIdx)) return true;
            traveled.push(next + ',' + dirIdx);
            dirIdx = (dirIdx + 1) % dirs.length;
        } else {
            console.log(`shouldnt be hhere: ${field}`);
        }
    }
}