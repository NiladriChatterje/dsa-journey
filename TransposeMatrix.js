//transpose any dimension array.
const transpose = function(matrix) {
    const newArr=[];
        for(let i in matrix[0]){
            const array=[];
            for(let j in matrix)
                array.push(matrix[j][i]);
                newArr.push(array);
        }
    return newArr;
};

console.log(transpose([[1,2,3,4,13],[5,6,7,8,14],[9,10,11,12,15]]));