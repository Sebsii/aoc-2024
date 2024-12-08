import {twoD} from './input_provider.js'

const map = await twoD(8);
const antiMap = structuredClone(map);
const antennas = {};

for (let i = 0; i < map.length; i++) {
    for (let j = 0; j < map[0].length; j++) {
        const antenna = map[i][j];
        if (antenna === '.') continue;
        antennas[antenna] ??= [];
        antennas[antenna].push([i, j]);
    }
}

Object.keys(antennas).forEach(a => {
    const arr = antennas[a];
    for (let i = 0; i < arr.length - 1; i++) {
        let [dix, diy] = arr[i];
        for (let j = i + 1; j < arr.length; j++) {
            let [djx, djy] = arr[j];
            let [dx, dy] = [djx - dix, djy - diy];
            try {
                let x = 0;
                while(true) {
                    antiMap[dix - dx * x][diy - dy * x] = '#';
                    x++;
                }
            } catch (e) {
            }
            try {
                let x = 0;
                while(true) {
                    antiMap[djx + dx * x][djy + dy * x] = '#';
                    x++;
                }
            } catch (e) {
            }
        }
    }
})

let sum = 0;
for (let i = 0; i < map.length; i++){
    for (let j = 0; j < map[0].length; j++){
        if (antiMap[i][j] === '#') {
            sum++;
        }
    }
}

console.log(sum);