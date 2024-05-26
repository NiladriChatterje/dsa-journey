`leetcode 100313`
const queryResults = function (_, queries) {
    const result = [];
    let distinctColors = 0;
    const ballToColors = new Map();
    const colorToBallCount = new Map();

    for (let [ball, color] of queries) {
        if (ballToColors.has(ball)) {
            let prevColor = ballToColors.get(ball);
            colorToBallCount.set(prevColor, colorToBallCount.get(prevColor) - 1);
            if (colorToBallCount.get(prevColor) === 0) distinctColors--;

        }

        ballToColors.set(ball, color);
        colorToBallCount.set(color, (colorToBallCount.get(color) || 0) + 1);
        if (colorToBallCount.get(color) === 1) distinctColors++;


        result.push(distinctColors);
    }

    return result;
};
console.log(queryResults(4, [[1, 4], [2, 5], [1, 3], [3, 4]]))