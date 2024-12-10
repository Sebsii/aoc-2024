import {twoD} from './input_provider.js'

const map = await twoD(10);

const dirs = [
    [0, 1],
    [-1, 0],
    [0, -1],
    [1, 0],
]
let sum = 0;

for (let r = 0; r < map.length; r++) {
    for (let c = 0; c < map[0].length; c++) {
        const trails = new Set();
        let path = [];
        const trailhead = parseInt(map[r][c]);
        if (trailhead !== 0) continue;
        moveInAllDirs(r, c, trails, path);
        sum += trails.size;
    }
}

console.log(sum);

function moveInAllDirs(r, c, results, path) {
    const height = parseInt(map[r][c]);
    path = path.slice(0, height + 1);
    path.push(r + '|' + c)
    if (height === 9) {
        results.add(path.join(','))
        return;
    }

    for (let i = 0; i < dirs.length; i++) {
        const dir = dirs[i];
        let next;
        try {
            next = parseInt(map[r + dir[0]][c + dir[1]]);
        } catch (e) {
            continue;
        }
        if (height + 1 !== next) continue;
        moveInAllDirs(r + dir[0], c + dir[1], results, path);
    }
}