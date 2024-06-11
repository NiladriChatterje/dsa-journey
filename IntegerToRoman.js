var intToRoman = function (num) {
    const map = new Map([
        [1000, 'M'], [500, 'D'], [100, 'C'], [50, 'L'],
        [10, 'X'], [5, 'V'], [1, 'I'],
    ]);
    if (map.has(num)) return map.get(num);
    let res = '';
    let quotient
    let d = parseInt(Math.log10(num));
    for (const [key, value] of map) {
        if (d === 0) return res;
        if (key > num) continue;
        if (key <= num) {
            quotient = parseInt(num / Math.pow(10, d));
            // let place_value = place_value === 0 ? quotient * key
            if (map.has(quotient * key))
                res += map.get(quotient * key)
            else
                while (place_value > 0) {
                    res += value;

                }
            num = num % Math.pow(10, d);
            d--
        }

    }

};

console.log(intToRoman(3729))