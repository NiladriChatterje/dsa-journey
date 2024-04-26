let steps = 0 ;
const numberOfSteps = function(num) {
    if(num === 0)
        return steps;
    
    else{
         steps++;
        if(num%2 === 0)
            return numberOfSteps(num/2);
        else
            return numberOfSteps(num-1);
    }
};

console.log(numberOfSteps(8));