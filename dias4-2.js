import {lines} from './input_provider.js'

const linesss = await lines(4);

let sum = 0;

for (let i = 1; i < linesss.length - 1; i++) {
    for (let j = 1; j < linesss[i].length - 1; j++) {
        let x = linesss[i][j];
        if (x !== 'A') continue;
        sum += check(i, j);
    }
}

console.log(sum);

function check(i, j) {
    const word = 'MAS'
    const drow = 'SAM'
    const a = 'A'
    let tr = linesss[i - 1][j + 1];
    let tl = linesss[i - 1][j - 1];
    let br = linesss[i + 1][j + 1];
    let bl = linesss[i + 1][j - 1];

    if (tl + a + br === word || tl + a + br === drow) {
        if (tr + a + bl === word || tr + a + bl === drow) {
            return 1;
        }
    }

    return 0;
}