import {lines} from './input_provider.js';

const l = await lines(2);

let sum = 0;
l.forEach(line => {
    let a = line.match(/\b\d+\b/g).map(x => parseInt(x, 10));
    let safe = isSafe(a);

    if (!safe)
        safe = removeAndSafe(a);

    if (safe)
        sum += 1;
})

function isSafe(a) {
    let isSafe = true;
    let signs = [];
    for (let i = 1; i < a.length; i++) {
        let value = a[i - 1] - a[i];
        signs.push(Math.sign(value));
        value = Math.abs(value);
        if (value < 1 || value > 3)
            isSafe = false;

        if (!signs.every(x => x === signs[0]))
            isSafe = false;
    }

    return isSafe;
}

function removeAndSafe(x) {
    for (let i = 0; i < x.length; i++) {
        let removed = x.toSpliced(i, 1);
        let safe = isSafe(removed);
        if (safe) {
            return true;
        }
    }

    return false;
}

console.log(sum);
