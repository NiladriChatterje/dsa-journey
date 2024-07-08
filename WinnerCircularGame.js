var findTheWinner = function (n, k) {
    let arr = [];
    let i = 0
    while (i < n)
        arr[i++] = i;

    i = 0;

    while (arr.length > 1) {
        let next_to_remove = (i + k - 1) % arr.length;
        arr.splice(next_to_remove, 1);
        i = next_to_remove;
    }

    return arr[0];
};

console.log(findTheWinner(5, 2))
console.log(findTheWinner(6, 5))
console.log(findTheWinner(3, 1))//3