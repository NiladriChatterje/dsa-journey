`leetcode 200 (Number of Islands)`
const depthFirstSearch = (arr, row, col, parsed) => {
    if (row === -1 || col === -1 || row === arr.length || col === arr[0].length) return;
    if (parsed.get(`${row},${col}`)) return;
    parsed.set(`${row},${col}`, true);
    if (arr[row][col] === '0') return;

    depthFirstSearch(arr, row - 1, col, parsed);
    depthFirstSearch(arr, row + 1, col, parsed);
    depthFirstSearch(arr, row, col - 1, parsed);
    depthFirstSearch(arr, row, col + 1, parsed);

}

const numIslands = (arr, parsed = new Map()) => {
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr[i].length; j++) {
            if (arr[i][j] === '1' && !parsed.get(`${i},${j}`)) {
                depthFirstSearch(arr, i, j, parsed);
                count++;
            }
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