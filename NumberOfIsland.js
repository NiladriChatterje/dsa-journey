`leetcode 200 (Number of Islands)`
const depthFirstSearch = (arr, row, col, parsed, stack = []) => {
    if (row === -1 || col === -1 || row === arr.length || col === arr[0].length) return false;
    // console.log(row, col)
    if (parsed.get(`${row},${col}`)) return false;
    if (arr[row][col] == 0) return false;
    parsed.set(`${row},${col}`, true);

    stack.push(arr[row][col]);
    while (stack.length > 0) {
        stack.pop();
        depthFirstSearch(arr, row - 1, col, parsed, stack);
        depthFirstSearch(arr, row + 1, col, parsed, stack);
        depthFirstSearch(arr, row, col - 1, parsed, stack);
        depthFirstSearch(arr, row, col + 1, parsed, stack);
    }
    return true
}

const numIslands = (arr, parsed = new Map()) => {
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr[i].length; j++) {
            if (depthFirstSearch(arr, i, j, parsed))
                count++;
        }
    }

    return count++;
}

console.log(numIslands([
    ["1", "1", "1", "1", "0"],
    ["1", "1", "0", "1", "0"],
    ["1", "1", "0", "0", "0"],
    ["0", "0", "0", "0", "0"]
]))
console.log(numIslands([
    ["1", "1", "0", "0", "0"],
    ["1", "1", "0", "0", "0"],
    ["0", "0", "1", "0", "0"],
    ["0", "0", "0", "1", "1"]
]))
console.log(numIslands(
    [["1", "0", "1", "1", "0", "1", "1"]]
))