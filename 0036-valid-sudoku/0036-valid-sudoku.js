const isValidSudoku = (board) => {
    const obj = {rows: {},columns: {},blocks: {},};
    let isValid = true;
    loop1:
    for (let r = 0; r < board.length; r++) {
        loop2:
        for (let c = 0; c < board[r].length; c++) {
            const cellValue = board[r][c];
            if (cellValue === '.') {
                continue;
            }
            if (!obj.rows.hasOwnProperty(r)) {
                obj.rows[r] = {};
            }
            if (obj.rows[r].hasOwnProperty(cellValue)) {
                isValid = false;
                break loop1;
            } else {
                obj.rows[r][cellValue] = null;   
            }
            if (!obj.columns.hasOwnProperty(c)) {
                obj.columns[c] = {};
            }
            
            if (obj.columns[c].hasOwnProperty(cellValue)) {
                isValid = false;
                break loop1;
            } else {
                obj.columns[c][cellValue] = null;   
            }
            const b = getBlockNumber(r, c);
            
            if (!obj.blocks.hasOwnProperty(b)) {
                obj.blocks[b] = {};
            }
            if (obj.blocks[b].hasOwnProperty(cellValue)) {
                isValid = false;
                break loop1;
            } else {
                obj.blocks[b][cellValue] = null;   
            }
        }
    }
    
    return isValid;
};
const getBlockNumber = (row, column) => {
    const rowQuotient = parseInt(row / 3, 10);
    const columnQuotient = parseInt(column / 3, 10);
    
    let blockNumber;

    switch(`${rowQuotient}${columnQuotient}`) {
        case '00': blockNumber = 0; break;
        case '01': blockNumber = 1; break;
        case '02': blockNumber = 2; break;
        case '10': blockNumber = 3; break;
        case '11': blockNumber = 4; break;
        case '12': blockNumber = 5; break;
        case '20': blockNumber = 6; break;
        case '21': blockNumber = 7; break;
        case '22': blockNumber = 8; break;
    };

    return blockNumber;
};