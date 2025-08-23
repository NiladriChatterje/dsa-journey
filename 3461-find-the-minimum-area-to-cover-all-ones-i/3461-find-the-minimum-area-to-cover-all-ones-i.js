/**
 * @param {number[][]} grid
 * @return {number}
 */
var minimumArea = function(grid) {
    let leftMost = 1001;
    let rightMost = -1;
    let upperMost = 1001;
    let lowerMost=-1;

    for(let i=0;i<grid.length;i++){
        for(let j=0;j<grid[i].length;j++)
        {
            if(grid[i][j]==1){
                leftMost = Math.min(leftMost,j);
                rightMost = Math.max(rightMost,j+1);
                upperMost = Math.min(upperMost,i);
                lowerMost = Math.max(lowerMost,i+1);
            }
        }
    }

    return (rightMost-leftMost) * (lowerMost-upperMost);
};