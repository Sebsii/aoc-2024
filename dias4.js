import {lines} from './input_provider.js'

const linesss = await lines(4);

let sum = 0;

for (let i = 0; i < linesss.length; i++) {
    for (let j = 0; j < linesss[i].length; j++) {
        let x = linesss[i][j];
        if (x !== 'X') continue;
        sum += check(i, j);
    }
}

console.log(sum);

function check(i, j) {
    const word = 'XMAS'
    let count = 0;
    for (let k = -1; k <= 1; k++) {
        for (let l = -1; l <= 1; l++) {
            if (k === 0 && l === 0) continue;
            let current = 'X';
            for (let m = 1; m <= 3; m++) {
                if (linesss[i + k * m] === undefined) continue;
                if (linesss[i + k * m][j + l * m] === undefined) continue;
                current += linesss[i + k * m][j + l * m]
            }
            if (current === word)
                count++;
        }
    }

    return count;
}