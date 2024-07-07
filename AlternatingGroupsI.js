var numberOfAlternatingGroups = function (colors) {
    groupCount = 0;
    let x;
    for (let i = 0; i < colors.length; i++) {
        x = i - 1 < 0 ? colors.length - 1 : i - 1;
        if (colors[x] === colors[(i + 1) % colors.length]
            && colors[i] !== colors[x])
            groupCount++;
    }
    return groupCount;
};

console.log(numberOfAlternatingGroups([1, 1, 1]));
console.log(numberOfAlternatingGroups([0, 1, 0, 0, 1]));
