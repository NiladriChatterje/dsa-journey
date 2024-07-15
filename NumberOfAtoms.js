function whichDigit(char) {
    switch (char) {
        case '0': return 0;
        case '1': return 1;
        case '2': return 2;
        case '3': return 3;
        case '4': return 4;
        case '5': return 5;
        case '6': return 6;
        case '7': return 7;
        case '8': return 8;
        case '9': return 9;
    }
    return -1;
}

var countOfAtoms = function (formula) {

    const elementMap = new Map();
    let temp = 0;
    let s = ''
    const stack = [];
    const countElement = new Map();
    const eleBrace = new Map();
    let curBrace = 0;
    const result = [];

    for (let i = 0; i < formula.length; i++) {
        if (formula.charCodeAt(i) >= 48 && formula.charCodeAt(i) <= 57) {
            temp = temp * 10 + whichDigit(formula.charAt(i));
        }
        else if (formula.charAt(i) === '(') {
            curBrace++
            if (s !== '') {
                eleBrace.set(s, eleBrace.get(s) ?? 0)
                if (eleBrace.get(s) !== curBrace) {
                    stack.push(s);
                    countElement.set(s, (countElement.get(s) ?? 0) + 1)
                    eleBrace.set(s, curBrace)
                }

                if (elementMap.get(s) === undefined)
                    elementMap.set(s, temp === 0 ? [1] : [temp])
                else
                    elementMap.get(s)[elementMap.get(s).length - 1 < 0 ? 0 : elementMap.get(s).length - 1] +=
                        temp

            }
            stack.push('(')
            s = '';

            temp = 0;
        }
        else if ((formula.charCodeAt(i) >= 65 && formula.charCodeAt(i) <= 90)) {
            if (s !== '') {
                eleBrace.set(s, eleBrace.get(s) ?? 0)
                if (eleBrace.get(s) !== curBrace) {
                    stack.push(s);
                    countElement.set(s, (countElement.get(s) ?? 0) + 1)
                    eleBrace.set(s, curBrace)
                }

                if (elementMap.get(s) === undefined)
                    elementMap.set(s, temp === 0 ? [1] : [temp])
                else
                    elementMap.get(s)[elementMap.get(s).length - 1 < 0 ? 0 : elementMap.get(s).length - 1] +=
                        (temp === 0 ? 1 : temp)

            }
            s = formula.charAt(i)
            temp = 0;
        }
        else if (formula.charAt(i) === ')') {

            if (s !== '') {
                eleBrace.set(s, eleBrace.get(s) ?? 0)
                if (eleBrace.get(s) !== curBrace) {
                    stack.push(s);
                    eleBrace.set(s, curBrace);
                    countElement.set(s, (countElement.get(s) ?? 0) + 1)

                    if (elementMap.get(s) === undefined)
                        elementMap.set(s, temp === 0 ? [1] : [temp])
                    else
                        elementMap.get(s).push(temp === 0 ? 1 : temp)
                } else {
                    if (elementMap.get(s) === undefined)
                        elementMap.set(s, temp === 0 ? [1] : [temp])
                    else
                        elementMap.get(s)[elementMap.get(s).length - 1 < 0 ? 0 : elementMap.get(s).length - 1] +=
                            (temp === 0 ? 1 : temp)
                }

                temp = 0;
            }
            while (i + 1 < formula.length && formula.charCodeAt(i + 1) >= 48
                && formula.charCodeAt(i + 1) <= 57) {
                temp = temp * 10 + whichDigit(formula.charAt(i + 1));
                i++;
            }
            s = ''
            if (temp === 0)
                continue;
            let k;
            let temp2
            curBrace--
            while (stack.length > 0 && (k = stack.pop()) !== '(') {
                temp2 = elementMap.get(k).pop() * temp;
                let index = elementMap.get(k).length - 1 < 0 ? 0 : elementMap.get(k).length - 1
                elementMap.get(k)[index] =
                    elementMap.get(k)[index] === undefined ? 0 +
                        temp2 :
                        elementMap.get(k)[index] + temp2;
                countElement.set(k, (countElement.get(k) - 1 < 0 ? 0 : countElement.get(k) - 1))
                result.push(k);
            };
            for (let i of result) {
                if (countElement.get(i) === 0) {
                    stack.push(i);
                    eleBrace.set(i, curBrace);
                    countElement.set(i, (countElement.get(i) ?? 0) + 1)
                }
            }

            result.length = 0;
            temp = 0;
        }
        else
            s += formula.charAt(i)
    }

    if (s !== '') {
        if (!countElement.has(s) || !(countElement.get(s) > 0))
            stack.push(s);
        if (elementMap.get(s) === undefined)
            elementMap.set(s, temp === 0 ? [1] : [temp])
        else
            elementMap.get(s)[elementMap.get(s).length - 1] += temp;
    }
    // console.log(elementMap)

    const result_ = Array.from(elementMap.keys()).sort();
    for (let i of result_) {
        result.push(i + (elementMap.get(i)[0] === 1 ? '' : elementMap.get(i)[0]))
    }
    return result.join('');
};

// console.log(countOfAtoms("H2O"))
// console.log(countOfAtoms("Mg(OH)2"))
// console.log(countOfAtoms("K4(ON(SO3)2)2"))
// console.log(countOfAtoms("H11He49NO35B7N46Li20"))
// console.log(countOfAtoms("(B2O39He17BeBe49)39"))
// console.log(countOfAtoms("((HHe28Be26He)9)34")) 
console.log(countOfAtoms("((N42)24(OB40Li30CHe3O48LiNN26)33(C12Li48N30H13HBe31)21(BHN30Li26BCBe47N40)15(H5)16)14")) 