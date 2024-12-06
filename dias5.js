import {twoParts} from './input_provider.js'

const parts = await twoParts(5);
const rules = parts[0];
const updates = parts[1];

const r = {};

rules.forEach(ru => {
    const key = ru.substring(0, 2);
    const value = ru.substring(3);

    if (r[key] === undefined) {
        r[key] = [];
    }

    r[key].push(parseInt(value));
});

let sum = 0;
updates.forEach(update => {
    const pages = update.split(',').map(x => parseInt(x, 10));
    let correct = true;

    for (let i = 0; i < pages.length; i++){
        const p = pages[i];
        const others = pages.slice(i + 1);

        for (let j = 0; j < others.length; j++){
            const x = others[j];
            const rrr = r[x];
            if (rrr === undefined) continue;
            if (rrr.includes(p)) {
                correct = false;
            }
        }
    }

    if (correct) {
        sum += pages[(pages.length - 1)/ 2];
    }
})

console.log(sum);