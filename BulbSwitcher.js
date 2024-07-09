var bulbSwitch = function (n) {
    if (n === 0) return 0;
    if (n === 1) return 1;

    return Math.floor(Math.sqrt(n));
};