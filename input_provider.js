import env from './env.js';

const cookie = 'session=' + env.cookie;

function url(day) {
    return `https://adventofcode.com/2024/day/${day}/input`;
}

function urlAnswer(day) {
    return `https://adventofcode.com/2024/day/${day}/answer`;
}

export async function input(day) {
    const res = await fetch(url(day), {
        method: 'GET',
        headers: {
            'Cookie': cookie,
        }
    });
    return await res.text();
}

export async function output(day, answer) {
    console.log(`Your answer for DAY ${day}:\n${answer}`)

    const res = await fetch(urlAnswer(day), {
        method: 'POST',
        headers: {
            'Cookie': cookie,
            'Content-Type': 'application/x-www-form-urlencoded',
        },
        body:
            new URLSearchParams({
                'answer': answer
            })
    });

    // const body = await res.text();
    // console.log(`Response:\n${body}`);
}

export async function lines(day) {
    const text = await input(day);
    const lines = text.split('\n');
    lines.pop();
    return lines;
}

export async function twoParts(day) {
    const text = await input(day);
    const parts = text.split("\n\n");

    const arrayParts = parts.map(p => p.split('\n'));
    arrayParts[1].pop();
    return arrayParts;
}