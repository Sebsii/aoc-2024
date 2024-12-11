import {lines} from './input_provider.js'

const map = await lines(11);
const l = map[0];

let stones = l.match(/\b\d+\b/g);
const blinkCount = 75;

for (let i = 0; i < blinkCount; i++) {
    console.log(i);
    const newStones = [];
    stones.forEach(stone => {
        if (stone === '0') {
            newStones.push('1');
        } else if (stone.length % 2 === 0) {
            const half = stone.length / 2;
            newStones.push(parseInt(stone.slice(0, half)).toString());
            newStones.push(parseInt(stone.slice(half)).toString());
        } else {
            newStones.push((parseInt(stone) * 2024).toString());
        }
    })
    stones = newStones;
}

let ans = stones.length;

console.log(ans);