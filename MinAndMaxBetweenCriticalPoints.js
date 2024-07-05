`2058 leetcode`

class ListNode {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}
const head = new ListNode(5);
let temp = head;
const test = [3, 1, 2, 5, 1, 2];
for (let i of test) {
    temp.next = new ListNode(i);
    temp = temp.next;
}

//The solution below is 100% working...

// var nodesBetweenCriticalPoints = function (head) {
//     let minDistance = Infinity;
//     let maxDistance = -1;

//     const arr = [];
//     let temp = head;

//     while (temp !== null) {
//         arr.push(temp.val);
//         temp = temp.next;
//     }

//     const indexOfMaximaMinima = [];

//     for (let i = 1; i < arr.length - 1; i++) {
//         if (arr[i - 1] < arr[i] && arr[i] > arr[i + 1])
//             indexOfMaximaMinima.push(i)

//         if (arr[i - 1] > arr[i] && arr[i + 1] > arr[i])
//             indexOfMaximaMinima.push(i)

//     }

//     maxDistance = indexOfMaximaMinima.length < 2 ? -1 : indexOfMaximaMinima[indexOfMaximaMinima.length - 1] - indexOfMaximaMinima[0];
//     for (let i = 0; i < indexOfMaximaMinima.length - 1; i++)
//         minDistance = Math.min(minDistance, indexOfMaximaMinima[i + 1] - indexOfMaximaMinima[i]);

//     minDistance = minDistance == Infinity ? -1 : minDistance

//     return [minDistance, maxDistance]
// };


//trying to reduce complexity a little bit.
var nodesBetweenCriticalPoints = function (head) {
    if (head === null || head.next === null || head.next.next === null)
        return [-1, -1];

    let minDistance = Infinity;
    let maxDistance = -1;

    let temp = head.next;

    let a = head.val;
    let b = temp.val;
    let c = temp.next.val;

    let index = 1;

    const indexOfMaximaMinima = [];

    while (temp !== null) {
        if (a < b && b > c)
            indexOfMaximaMinima.push(index);

        if (a > b && b < c)
            indexOfMaximaMinima.push(index);

        a = b;
        b = c;
        index++;
        temp = temp.next;
        c = temp !== null && temp.next !== null ? temp.next.val : c;
    }


    maxDistance = indexOfMaximaMinima.length < 2 ? -1 : indexOfMaximaMinima[indexOfMaximaMinima.length - 1] - indexOfMaximaMinima[0];
    for (let i = 0; i < indexOfMaximaMinima.length - 1; i++)
        minDistance = Math.min(minDistance, indexOfMaximaMinima[i + 1] - indexOfMaximaMinima[i]);

    minDistance = minDistance == Infinity ? -1 : minDistance

    return [minDistance, maxDistance]
};

console.log(nodesBetweenCriticalPoints(head))