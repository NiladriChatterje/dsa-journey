function dfs_solve(candidates_set, target, result = [], sum = 0, temp = [], set = new Set()) {
    for (let i of candidates_set) {
        sum += i;
        temp.push(i)
        if (sum < target)
            dfs_solve(candidates_set, target, result, sum, temp, set);
        else if (sum === target) {
            const tempp = temp.toSorted((a, b) => a - b);
            if (!set.has(`${tempp}`)) {
                result.push(tempp);
                set.add(`${tempp}`);
            }
        }
        temp.pop();
        sum -= i
    }

    return result;
}


var combinationSum = function (candidates, target) {
    const candidates_set = new Set(candidates);
    const result = dfs_solve(candidates_set, target);
    return result;
};

console.log(combinationSum([2, 3, 6, 7], 7))
console.log(combinationSum([2, 3, 5], 8))