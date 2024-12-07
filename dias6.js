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
let dirIdx = 0;

const traveled = {};

let pos = start;
while (true) {
    if (traveled[pos] === undefined) {
        traveled[pos] = 0;
    }
    traveled[pos]++
    map[pos[0]][pos[1]] = 'X';

    const next = [pos[0] + dirs[dirIdx][0], pos[1] + dirs[dirIdx][1]];
    if (map[next[0]]?.[next[1]] === undefined) break;
    const field = map[next[0]]?.[next[1]];
    if (field === '.' || field === 'X') {
        pos = next;
    } else if (field === '#') {
        dirIdx = (dirIdx + 1) % dirs.length;
    } else {
        console.log('shouldnt be hhere');
    }
}

let sum = Object.keys(traveled).length;

let count = 0;
for (let r = 0; r < map.length; r++) {
    for (let c = 0; c < map[0].length; c++) {
        if (map[r][c] === 'X') {
            count++;
        }
    }
}

console.log(sum);
console.log(count);