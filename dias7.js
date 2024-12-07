﻿import { lines } from './input_provider.js'

const ls = await lines(7);

let sum = 0n;

ls.forEach((l) => {
    const result = BigInt(l.match(/\d+/)[0]);
    const ops = l.match(/\b\d+\b/g).slice(1).map(x => BigInt(x));

    const combinations = 2 ** (ops.length - 1);

    for (let i = 0; i < combinations; i++) {
        const operators = bitsToString(i, ops.length - 1);
        const r = solve(ops, operators, result);
        if (result === r) {
            sum += result;
            break;
        }
    }
});

console.log(sum.toString());

function solve(ops, operators, r) {
    if (ops.length !== operators.length + 1) {
        console.log('somesing wong');
    }

    let result = ops[0];
    for (let i = 1; i < ops.length; i++) {
        if (operators[i - 1] === '*') {
            result = result * ops[i];
        } else if (operators[i - 1] === '+') {
            result = result + ops[i];
        } else {
            console.log('terribly wrong');
        }

        if (result > r) break;
    }

    return result;
}

function bitsToString(i, length) {
    let str = "";
    for (let pos = length - 1; pos >= 0; pos--) {
        const bit = (i >> pos) & 1;
        str += bit === 1 ? "*" : "+";
    }
    return str;
}