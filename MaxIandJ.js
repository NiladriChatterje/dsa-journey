const arr = [[1,8,3],[7,5,6],[4,8,9]];

function maxEle(arr){
    const transpose=[];
    const maxElement = [];
    for(let i in arr[0]){
        let temp=[]
        for(let j of arr)
            temp.push(j[i]); 
        transpose.push([...temp])
    }


    for (let i of arr){
        for(let j of transpose){
            if(Math.max(...i)===Math.max(...j))
                maxElement.push(Math.max(...i))      
        }
    }
       
    return maxElement;
}

console.log(maxEle(arr));