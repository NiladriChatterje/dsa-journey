// [1,2,4,5,6,7] and 12
//return array [7,5]
const sumArray=(arr,target)=>{
    for(let i of arr){
        if(arr.includes(i) && arr.includes(target-i)){
            return [i,target-i];
        }
    }return [];
}

console.log(sumArray([1,2,4,5,6,7],12));
console.log(sumArray([1,2,4,5,6],12));