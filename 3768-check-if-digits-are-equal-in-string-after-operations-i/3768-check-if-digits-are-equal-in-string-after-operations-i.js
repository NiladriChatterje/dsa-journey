/**
 * @param {string} s
 * @return {boolean}
 */
    const strToDigit = (d)=>{
        switch(d){
            case '0': return 0;
            case '1': return 1;
            case '2': return 2;
            case '3': return 3;
            case '4': return 4;
            case '5': return 5;
            case '6': return 6;
            case '7': return 7;
            case '8': return 8;
            case '9': return 9;
        }
    }
var hasSameDigits = function(s) {


    let temp = s.split("").map(item=>strToDigit(item));
    let temp2 = [];
    while(temp.length !== 2){
     temp2.length = 0;
     for(let i=0;i<temp.length-1;i++)
         temp2.push((temp[i]+temp[i+1])%10);
        
     [temp,temp2] = [temp2,temp];
    }

    if(temp[0]==temp[1])
        return true;

    return false;
};