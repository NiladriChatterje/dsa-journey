/**
 * @param {string[]} details
 * @return {number}
 */
 const stringTONumber = (ch)=>{
    switch(ch){
        case '0':return 0;
        case '1':return 1;
        case '2':return 2;
        case '3':return 3;
        case '4':return 4;
        case '5':return 5;
        case '6':return 6;
        case '7':return 7;
        case '8':return 8;
        case '9':return 9;
        return -1;
    }
 }
var countSeniors = function(details) {
    let count = 0;
    for(let i of details)
    if(stringTONumber(i.charAt(11))*10+stringTONumber(i.charAt(12))>60)
        count++

    return count;
};