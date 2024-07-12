
var maximumGain = function (s, x, y) {
    let min = Math.min(x, y);
    let a = 0;
    let b = 0;
    let score = 0;

    for (let i = 0; i < s.length; i++) {
        let c = s.charAt(i);
        if (c > 'b') {
            score += Math.min(a, b) * min;
            a = 0;
            b = 0;
        } else if (c === 'a') {
            if (x < y && b > 0) {
                b--;
                score += y;
            } else
                a++;

        } else if (c === 'b') {
            if (x > y && a > 0) {
                a--;
                score += x;
            } else
                b++;

        }
    }

    score += Math.min(a, b) * min;
    return score;
};
console.log(maximumGain("cdbcbbaaabab", 4, 5))
console.log(maximumGain("aabbaaxybbaabb", 5, 4))