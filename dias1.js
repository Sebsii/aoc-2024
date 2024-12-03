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

left.sort();
right.sort();

let sum = 0;

for (let i = 0; i < left.length; i++) {
    let value = left[i] - right[i];
    sum += Math.abs(value);
}

await output(1, sum);