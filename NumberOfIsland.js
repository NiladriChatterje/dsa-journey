const countIsland = (arr) =>{
    let queue = [],count = 0;
    let cache = [];
    for(let i in arr){
        for(let j in arr){
            if(arr[i][j] && !cache.includes([i,j])){
                queue.push(arr[i][j]);
                cache.push([i,j]);
                
            }
        }
    }
}