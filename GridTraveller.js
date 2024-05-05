function uniquePaths(row, column, table = new Map()) {
    if (table.get(`${row},${column}`)) return table.get(`${row},${column}`);
    if (row === 0 || column === 0)
        return 0

    if (row === 1 && column === 1)
        return 1

    const val = uniquePaths(row - 1, column, table) + uniquePaths(row, column - 1, table);
    table.set(`${row},${column}`, val)
    return val;
}

console.log(uniquePaths(2, 2))
console.log(uniquePaths(3, 3))
console.log(uniquePaths(14, 14))
console.log(uniquePaths(50, 50))