import {lines} from './input_provider.js'

const l = await lines(3);
const regex = /mul\((\d{1,3}),(\d{1,3})\)|do\(\)|don't\(\)/g;
let sum = 0;
let doAdd = true;

l.forEach((line) => {
    const matches = Array.from(line.matchAll(regex));
    const multiplies = matches.map(match => {
        if (match[0] === "don't()")
            return false;
        if (match[0] === "do()")
            return true;
        return parseInt(match[1], 10) * parseInt(match[2], 10)
    });

    multiplies.forEach((multiple) => {
        if (typeof multiple === 'boolean')
            doAdd = multiple;
        else if (doAdd)
            sum += multiple;
    });
})

console.log(sum);