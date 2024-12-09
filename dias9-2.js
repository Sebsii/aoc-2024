import {lines} from './input_provider.js'

const line = await lines(9);
const l = line[0];

let blockCount = 0;
for (let i = 0; i < l.length; i = i + 2) {
    blockCount += parseInt(l[i]);
}

let sum = 0
let arrrrrrr = []
let ranges = []
for (let i = 0; i < l.length; i++) {
    let count = parseInt(l[i]);
    let entry = [];
    entry.push(arrrrrrr.length)
    for (let j = 0; j < count; j++) {
        let id = i / 2;
        if (i % 2 === 0) {
            arrrrrrr.push(id)
        } else {
            arrrrrrr.push('X');
        }
    }
    entry.push(count)
    ranges.push(entry)
}

for (let b = ranges.length - 1; b >= 0; b -= 2) {
    let [startB, sizeB] = ranges[b];
    let id = b / 2;
    for (let f = 1; f < ranges.length; f += 2) {
        let [startF, sizeF] = ranges[f];
        if (startF >= startB) break;
        if (sizeF >= sizeB) {
            for (let x = 0; x < sizeB; x++) {
                arrrrrrr[x + startF] = id;
                arrrrrrr[x + startB] = 'X';
            }
            ranges[f] = [startF + sizeB, sizeF - sizeB]
            break;
        }
    }
}

for (let i = 0; i < arrrrrrr.length; i++) {
    let el = arrrrrrr[i];
    if (el === 'X') continue;
    sum += i * el;
}

console.log(sum);