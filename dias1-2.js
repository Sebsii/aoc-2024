import {input, output} from './input_provider.js';

const what = await input(1);

const lines = what.split('\n');
lines.pop();
const left = [];
const right = [];

lines.forEach(line => {
    left.push(parseInt(line.substring(0, 5)));
    right.push(parseInt(line.substring(8)));
})

function condense(accu, x) {
    if (accu[x] !== null && accu[x] !== undefined) {
        accu[x] += 1;
    } else {
        accu[x] = 1;
    }
    return accu;
}

const occurancesLeft = left.reduce(condense, {});
const occurancesRight = right.reduce(condense, {});

let sum = 0;
for (const [k, v] of Object.entries(occurancesLeft)) {
    if (occurancesRight.hasOwnProperty(k)) {
        sum += v * k * occurancesRight[k];
    }
}

console.log(sum);

// await output(1, sum);