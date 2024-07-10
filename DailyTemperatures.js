const temperatures = [34, 80, 80, 34, 34, 80, 80, 80, 80, 34];

// const dailyTemperatures = function (temperatures) {
//     let cacheDay = 0, cacheTemp = temperatures[0], j = 0;
//     resultArray = new Array(temperatures.length).fill(0);

//     for (let i = 0; i < temperatures.length;) {
//         if (cacheTemp < temperatures[i]) {
//             resultArray[j] = cacheDay;
//             i = j + 1;
//             cacheTemp = temperatures[i];
//             j++;
//             if (cacheDay >= 1)
//                 cacheDay = 0;
//         }
//         else {
//             cacheDay++;
//             if (i + 1 === temperatures.length) {
//                 i = j + 1;
//                 cacheTemp = temperatures[j + 1];
//                 cacheDay = 0; j++;
//             } else
//                 i++;
//         }
//     }

//     return resultArray;
// };
var dailyTemperatures = function (temperatures) {
    const result = new Array(temperatures.length).fill(0);
    const stack = [0];

    for (let i = 1; i < temperatures.length; i++) {
        while (stack.length > 0 && temperatures[i] > temperatures[stack.at(-1)]) {
            const idx = stack.pop();
            result[idx] = i - idx;
        }
        stack.push(i);
    }

    return result;
};

console.log(dailyTemperatures(temperatures));
console.log(dailyTemperatures([73, 74, 75, 71, 69, 72, 76, 73]));
console.log(dailyTemperatures([30, 40, 50, 60]));