
var romanToInt = function (s) {
    let number = 0;
    let c;
    for (let i = 0; i < s.length; i++) {
        c = s.charAt(i);
        switch (c) {
            case 'I': number += 1;
                break;
            case 'V': if (s.charAt(i - 1) === 'I')
                number += 3;
            else number += 5;
                break;
            case 'X': if (s.charAt(i - 1) === 'I')
                number += 8;
            else number += 10;
                break;
            case 'L': if (s.charAt(i - 1) === 'X')
                number += 30;
            else number += 50;
                break;
            case 'C': if (s.charAt(i - 1) === 'X')
                number += 80;
            else number += 100;
                break;
            case 'D': if (s.charAt(i - 1) === 'C')
                number += 300;
            else number += 500;
                break;
            case 'M': if (s.charAt(i - 1) === 'C')
                number += 800;
            else number += 1000;
                break;
        }
    }
    return number;
};

console.log(romanToInt("III"))
console.log(romanToInt("LVIII"))
console.log(romanToInt("MCMXCIV"))