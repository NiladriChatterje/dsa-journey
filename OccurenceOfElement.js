var occurrencesOfElement = function(nums, queries, x) {
    const answer = [];
    const map = new Map();
    let occurence = 1;

    for(let i=0;i<nums.length;i++)
        if(nums[i]===x)
        map.set(occurence++,i);
        
   
    
    for(let i of queries)
       {
         answer.push(map.get(i)??-1)}
    

    return answer;
};

console.log(occurrencesOfElement( [1,3,1,7], [1,3,2,4], 1))
console.log(occurrencesOfElement( [1,2,3], [10], 5))