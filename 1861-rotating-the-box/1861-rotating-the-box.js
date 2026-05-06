/**
 * @param {character[][]} boxGrid
 * @return {character[][]}
 */
var rotateTheBox = function(boxGrid) {
    let right;
    let left;

    for(let box of boxGrid){
        right = box.length - 1;
        while(right>=0 && (box[right]=="#" || box[right] == '*'))
            right--;

        left = right - 1;
        while(left>=0){
            if(box[left]=="#"&&box[right]=="."){
                box[right] = "#";
                box[left] = ".";
                right--;
            }else if(box[left] == "*"){
                while(left>=0 && (box[left]=="#" || box[left] == '*'))
                    left--;
                right = left;
                }

            left--;
        }
    }

    const res = Array.from({length: boxGrid[0].length}, () => new Array(boxGrid.length));

    for(let i=0; i<boxGrid.length; i++)
        for(let j=0; j<boxGrid[0].length;j++)
            res[j][i] = boxGrid[boxGrid.length-1-i][j]
            
    
    return res
};