class chain {
    constructor(i, regex) {
        this.character = i;
        this.regex = regex;
        this.next = null;
    }
}

var isMatch = function (s, p) {
    const HEAD = new chain(p[0], p[1] === '*' ? '*' : '_');
    let temp = HEAD;
    let prev = HEAD;
    for (let i = 1; i < p.length; i++) {
        if (p[i] === '*') continue
        if (prev.character === p[i]) continue;
        temp.next = new chain(p.charAt(i), p[i + 1] === '*' ? '*' : '_')
        prev = temp;
        temp = temp.next
    }

    temp = HEAD;
    let i = 0;
    while (i < s.length && temp !== null) {
        if (temp.character === '.') {
            if (temp.regex === '*') {
                if (temp.next == null) return true;
                else return false
            }
            temp = temp.next;
            i++;
            continue
        }

        if (s.charAt(i) !== temp.character) {
            if (temp.regex !== '*') return false;
            temp = temp.next;
        } else {
            if (temp.regex === '*') {
                let char = s.charAt(i);
                while (s.charAt(i) === char)
                    i++;
                temp = temp.next;
                if (temp == null) return true
                continue;
            }
            temp = temp.next;
            if (temp == null) return true
            i++;
        }
    }
    return false;
};

console.log(isMatch("aab", "c*a*b"))
console.log(isMatch("aaa", "a*a"))