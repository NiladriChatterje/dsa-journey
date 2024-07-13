// var survivedRobotsHealths = function (positions, healths, directions) {
//     let n = positions.length;
//     let robots = [];

//     for (let i = 0; i < n; ++i)
//         robots.push([positions[i], healths[i], directions[i], i]);


//     robots.sort((a, b) => a[0] - b[0]);

//     let stack = [];

//     for (let robot of robots) {
//         if (robot[2] === 'R' || stack.length === 0 || stack[stack.length - 1][2] === 'L') {
//             stack.push(robot);
//             continue;
//         }

//         if (robot[2] === 'L') {
//             let add = true;
//             while (stack.length > 0 && stack[stack.length - 1][2] === 'R' && add) {
//                 let last_health = stack[stack.length - 1][1];
//                 if (robot[1] > last_health) {
//                     stack.pop();
//                     robot[1] -= 1;
//                 } else if (robot[1] < last_health) {
//                     stack[stack.length - 1][1] -= 1;
//                     add = false;
//                 } else {
//                     stack.pop();
//                     add = false;
//                 }
//             }

//             if (add)
//                 stack.push(robot);

//         }
//     }

//     stack.sort((a, b) => a[3] - b[3]);

//     let result = [];
//     for (let robot of stack) {
//         result.push(robot[1]);
//     }

//     return result;
// };

var survivedRobotsHealths = function (positions, healths, directions) {
    if (positions.length === 0) return []
    if (positions.length === 1) return healths;
    const set = new Set();
    const LpositionSet = new Set();
    const RpositionSet = new Set();
    for (let i = 0; i < directions.length; i++) {
        if (directions.charAt(i) === 'L')
            LpositionSet.add(positions[i])
        else
            RpositionSet.add(positions[i])
    }

    const result = [];
    let k;
    let collision = false;

    for (let i = 0; i < positions.length; i++) {
        k = 0
        while (k < positions.length && i < positions.length) {
            if (healths[i] === -1) {
                i++;
                continue;
            }
            if (set.has(k) || i === k || healths[i] === -1) {
                k++;
                continue
            }
            if (positions[k] === positions[i]) {
                collision = true
                if (healths[k] !== -1 || healths[i] !== -1) {
                    if (healths[k] > healths[i]) {
                        result.push(healths[k] - 1)
                        healths[i] = -1;
                        set.add(i);
                        break;
                    }
                    else if (healths[k] < healths[i]) {

                        result.push(healths[i] - 1)
                        healths[k] = -1;
                        set.add(k)
                        break;
                    }
                    else {
                        set.add(k);
                        set.add(i);
                        break;
                    }
                }
            }
            k++
        }
        // console.log(positions, result)
        console.log(LpositionSet, RpositionSet, result)

        for (let j = 0; j < positions.length; j++) {
            if (set.has(j))
                continue
            if (directions.charAt(j) === 'L') {
                if (!RpositionSet.has(positions[j])) {
                    LpositionSet.delete(positions[j])
                    positions[j] -= 1;
                    LpositionSet.add(positions[j])
                }
            }
            else {
                if (!LpositionSet.has(positions[j])) {
                    RpositionSet.delete(positions[j])
                    positions[j] += 1;
                    RpositionSet.add(positions[j])
                }

            }
        }
    }
    return collision ? result : healths
};

// console.log(survivedRobotsHealths([3, 5, 2, 6], [10, 10, 15, 12], "RLRL"))
// console.log(survivedRobotsHealths([5, 4, 3, 2, 1], [2, 17, 9, 15, 10], "RRRRR"))
// console.log(survivedRobotsHealths([1, 2, 5, 6], [10, 10, 11, 11], "RLRL"))
console.log(survivedRobotsHealths([1, 40], [10, 11], "RL"))