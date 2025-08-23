/**
 * @param {number[][]} grid
 * @return {number}
 */
var minimumArea = function(grid) {
    let leftMost = grid[0].length;
    let rightMost = -1;
    let upperMost = grid.length;
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
            // console.log(leftMost,rightMost,upperMost,lowerMost)
        }
    }

    return (rightMost-leftMost) * (lowerMost-upperMost);
};