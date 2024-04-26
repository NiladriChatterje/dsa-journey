const money = [100,50,20,10,5,2,1];
money_notes = money.sort((a,b)=>b-a);

let x = 300;
const obj = {};

console.time();
for(let i of money){
    if(Math.trunc(x/i))
        obj[i] = Math.trunc(x/i);
    x = x%i;
}
console.timeEnd();
console.log('Final Output: ')
console.table(obj);