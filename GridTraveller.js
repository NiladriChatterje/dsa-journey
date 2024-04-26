function gridTraveller(row, column, table = new Map()) {
    if (table.get(`${row},${column}`)) return table.get(`${row},${column}`);
    if (row === 0 || column === 0) {
        table.set(`${row},${column}`, 0)
        return 0
    };
    if (row === 1 || column === 1) {
        table.set(`${row},${column}`, 1)
        return 1
    }

    const val = gridTraveller(row - 1, column, table) + gridTraveller(row, column - 1, table);
    table.set(`${row},${column}`, val)
    return val;
}

console.log(gridTraveller(2, 2))
console.log(gridTraveller(3, 3))
console.log(gridTraveller(14, 14))
console.log(gridTraveller(50, 50))