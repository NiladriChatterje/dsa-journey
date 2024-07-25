var sortJumbled = function (mapping, nums) {
    let temp, cpy;
    let digit, digitCount;
    const numsMapped = [];
    const map = new Map();

    for (let i of nums) {
        temp = 0;
        cpy = i;
        digitCount = Math.floor(Math.log10(i)) + 1
        while (i > 0) {
            digit = i % Math.pow(10, d);
            temp = temp * 10 + mapping[digit];
            i = Math.floor(i / 10);
        }
        numsMapped.push(temp);
        map.set(cpy, temp);
    }
    console.log(numsMapped)

    return numsMapped.sort((a, b) => a - b).map((item) => map.get(item))
};

console.log(sortJumbled([8, 9, 4, 0, 2, 1, 3, 5, 7, 6], [991, 338, 38]))