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
updates.forEach((update, i) => {
    const pages = update.split(',').map(x => parseInt(x, 10));
    const yes = check(pages);
    if (yes) return;
    const thing = sortCorrectly(pages);
    sum += thing[(thing.length - 1) / 2];
})

function sortCorrectly(pages) {
    const constructed = [];

    for (let i = 0; i < pages.length; i++) {
        const p = pages[i];
        if (constructed.length === 0) {
            constructed.push(p);
            continue;
        }

        let inserted = false;
        for (let j = 0; j < constructed.length; j++) {
            const other = constructed[j];
            const me = p;
            const otherrrrss = r[other];
            const meeeeee = r[me];

            if (otherrrrss.includes(me)) continue;
            if (meeeeee.includes(other)) {
                inserted = true;
                constructed.splice(j, 0, me)
                break;
            }
        }

        if (!inserted) {
            constructed.push(p);
        }
    }

    const sanity = check(constructed);
    if (!sanity) {
        console.log('somesing is wrong');
    }

    return constructed;
}

function check(pages) {
    let correct = true;

    for (let i = 0; i < pages.length; i++) {
        const p = pages[i];
        const others = pages.slice(i + 1);

        for (let j = 0; j < others.length; j++) {
            const x = others[j];
            const rrr = r[x];
            if (rrr === undefined) continue;
            if (rrr.includes(p)) {
                correct = false;
            }
        }
    }

    return correct;
}

console.log(sum);