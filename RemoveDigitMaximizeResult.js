
var removeDigit = function (number, digit) {
    const charArr = number.split('');
    let left = 0;
    let track = -1;
    const arr = [];

    while (left < charArr.length) {
        if (charArr[left] !== digit) {
            arr.push(charArr[left])
            left++
        }
        else {
            left++;
            if (left < charArr.length && charArr[left] > charArr[left - 1]) {
                while (left < charArr.length) {
                    arr.push(charArr[left]);
                    left++;
                }
                track = -1;
                break;
            } else {
                track = left - 1;
                arr.push(charArr[track])
            }
        }
    }
    if (track !== -1) {
        while (track < arr.length - 1) {
            arr[track] = arr[track + 1];
            track++
        }
        arr.pop()
    }
    return arr.join('')
};

console.log(removeDigit("123", "3"))
console.log(removeDigit("1231", "1"))
console.log(removeDigit("13333", "3"))
console.log(removeDigit("133235", "3"))