const duplicate = nums => {
    let unique = 0;
    for (let i of nums)
        unique ^= i;

    return unique;
}

console.log(duplicate([4, 4, 3, 2, 5, 2, 5]));
