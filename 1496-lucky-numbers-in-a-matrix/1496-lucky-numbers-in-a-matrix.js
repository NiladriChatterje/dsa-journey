var luckyNumbers  = function(matrix) {
    for(let i = 0; i < matrix.length; i++) {
        let minNumber = Math.min(...matrix[i]), columnIndex = matrix[i].indexOf(minNumber);

        if(matrix.every(arr => arr[columnIndex] <= minNumber)) return [minNumber];
    }

    return [];
};