var compareVersion = (version1, version2) => {
    let digit1 = 0;
    let digit2 = 0;
    let result = 0;
    let i = 0;
    let j = 0;
    while (i < version1.length && j < version2.length) {
        if (result !== 0)
            return result;
        digit1 = 0;
        digit2 = 0

        while (version1.charAt(i) === '0')
            i++;

        while (version2.charAt(j) === '0')
            j++;

        while (version1.charAt(i) !== '.' && i < version1.length) {
            digit1++; i++
        }

        while (version2.charAt(j) !== '.' && j < version2.length) {
            digit2++; j++
        }


        if (digit1 === 0) {
            digit1 = 1;
        }


        if (digit2 === 0) {
            digit2 = 1;
        }



        if (digit1 > digit2)
            result = 1;
        else if (digit2 > digit1)
            result = -1;
        else {
            let k = 0;
            while (k < digit1 && result === 0) {
                if (version1.charAt(i - digit1 + k) > version2.charAt(j - digit2 + k))
                    result = 1;
                else if (version1.charAt(i - digit1 + k) < version2.charAt(j - digit2 + k))
                    result = -1;
                else result = 0;
                k++
            }
        }

        i++;
        j++;
    }

    if (result === 0) {
        if (version1.length > version2.length)
            while (i < version1.length) {
                if (version1.charAt(i) === '.') {
                    i++;
                    continue;
                }
                if (version1.charAt(i) !== '0')
                    return 1;
                i++
            }
        else if (version2.length > version1.length)
            while (j < version2.length) {
                if (version2.charAt(j) === '.') {
                    j++;
                    continue;
                }
                if (version2.charAt(j) !== '0')
                    return -1;
                j++;
            }
    }

    return result
}


console.log(compareVersion("1.0.1", "1"));
console.log(compareVersion("1.2", "1.10"));
console.log(compareVersion("1.0", "1.0.0.0"));
console.log(compareVersion("1.0", "1.10"));
console.log(compareVersion("0.1", "1.1"));
console.log(compareVersion("1.0", "01.0"));
console.log(compareVersion("11", "10"));
console.log(compareVersion("1.01", "1.001"));
console.log(compareVersion("7.5.2.4", "7.5.3"));