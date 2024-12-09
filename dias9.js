import {lines} from './input_provider.js'

const line = await lines(9);
const l = line[0];

let blockCount = 0;
for (let i = 0; i < l.length; i = i + 2) {
    blockCount += parseInt(l[i]);
}

console.log('block count: ' + blockCount);

// *** Tried some stuff here but got too complicated (-‿-") ***

// let sum = 0;
//
// let blockPosCounter = 0;
// let diskPointer = 0;
// let fileIdBackward = (l.length + 1) / 2;
// let diskPointerBackward = l.length - 1;
// let fileIdForward = 0;
// let backFileIdx = 0;
// let backFileCount = 0;
//
// while (true) {
//     let isFile = diskPointer % 2 === 0;
//     let count = l[diskPointer];
//
//     if (isFile) {
//         for (let i = 0; i < count; i++) {
//             sum += blockPosCounter * fileIdForward
//             blockPosCounter++;
//         }
//         fileIdForward++;
//     } else {
//         for (let i = 0; i < count; i++) {
//             backFileCount = l[diskPointerBackward];
//             let id;
//             if (backFileIdx < backFileCount) {
//                 id = fileIdBackward;
//                 backFileIdx++;
//             } else {
//                 diskPointerBackward -= 2;
//                 fileIdBackward--;
//                 backFileIdx = 1;
//                 id = fileIdBackward;
//             }
//             id = fileIdBackward
//             sum += blockPosCounter * id
//             blockPosCounter++;
//         }
//     }
//
//     diskPointer++;
//     if (fileIdForward >= fileIdBackward) break;
// }

let sum = 0
let arrrrrrr = []
for (let i = 0; i < l.length; i++) {
    let count = l[i];
    for (let j = 0; j < count; j++) {
        let id = i / 2;
        if (i % 2 === 0) {
            arrrrrrr.push(id)
        } else {
            arrrrrrr.push('X');
        }
    }
}

let b = arrrrrrr.length - 1;

for (let i = 0; i < arrrrrrr.length; i++) {
    if (i >= b) break;
    let id = arrrrrrr[i];
    if (id === 'X') {
        while (arrrrrrr[b] === 'X') {
            b--;
        }
        id = arrrrrrr[b];
        arrrrrrr[i] = arrrrrrr[b];
        arrrrrrr[b] = 'X';
    }
    sum += id * i;
}

console.log('sum ' + sum);
