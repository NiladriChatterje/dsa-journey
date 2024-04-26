function processData(input) {
    let count = 0;
    for(let i = 0;i<input.length;i++ ){
        for(let j= i+1;j<input.length;j++){
            if((input[i]&input[j])>=(input[i]^input[j]))
                count++;
        }
    }
    return count;
} 
console.log(processData([3,10,9]))