function forwardDiagSumMax(arr){
    const result_arr=[];
    for(let i=0;i<(arr.length>arr[0].length?arr.length:arr[0].length);i++){
        let sum1 = 0,sum2=0;  
        for(let j=0,k=i;j<=i;j++,k--){   
        try{   
         sum2 += arr[j][arr[0].length-k-1];
         sum1 += arr[arr.length-k-1][j];
        }
        catch(e){
            sum2=NaN;sum1=NaN;
            continue
        };}
        if(!isNaN(sum1)) result_arr.push(sum1);
        if(!isNaN(sum2)) result_arr.push(sum2);
        
    }
    console.log(result_arr);
    return Math.max(result_arr);
}

forwardDiagSumMax([[1,2,3,10,9],[4,5,6,11,12],[7,8,9,5,8],[7,8,9,5,8]]);
forwardDiagSumMax([[1,2],[4,5],[7,8],[7,8]]);