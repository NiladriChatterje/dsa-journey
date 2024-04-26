/*
Unique Array
Prepbuddy gave you an array 
a
 of length 
N
 containing all integers from 
0
 to 
(N
−
1
)
, array must start from index zero. He asks you find the maximum length of unique array. A unique array is called 
A
 where 
A
 = 
(a[i],a[a[i]],a[a[a[i]]],...)
 and the elements are unique.

Suppose the first element in 
A
 starts with the selection of element 
a[i] of index = i, then next element in 
A will be a[a[i]], and then 
a[a[a[i]]], till you don't find a duplicate element in the unique array A. 

Input Format
The first line of the input contains an integer 
T
- the number of test cases. 
For each test case, the first line of the input contains an integer 
N
- the size of the array.
the second line of the input contains 
N
 integers 
a0,a1,a2,a3,...,aN−1 separated by spaces.

Output Format
For each test case, print the output in the new line: output should be the maximum length of the unique array.

Constraint
1<=T<=10^2
1<=N<=2∗10^5
0<=ai<=N−1

Time Limit
 1 second

Example
Input
1
7
3 5 0 1 6 2 4

Output
5

Sample test case explanation
Input: a = [3, 5, 0, 1, 6, 2, 4]
Output: 5
 
a[0] = 3, a[1] = 5, a[2] = 0, a[3] = 1, a[4] = 6, a[5] = 2, a[6] = 4.

Maximum length of unique arrar A[K]:

A[0] = (a[0], a[3], a[1], a[5], a[2] ) = (3, 1, 5, 2, 0) */

const readline = require('readline').createInterface({
    input : process.stdin,
    output: process.stdout
});
let Unique_Array = [];
let NumericArray = [];
readline.question('Enter length :',string =>{
   const arrayLength = Number(string);

   readline.question('Enter array elements :', string=>{

    const array = string.split(' ');

    NumericArray = array.map(item => Number(item));
    if(NumericArray.length>arrayLength)
        console.log('Your inputs are more than the length');
    else{
        console.log('You are ready for the process');
        console.log(NumericArray)
        console.time();
        let temp_array_for_index_check = [NumericArray[0]];
        
        for(let x in NumericArray){

            if(temp_array_for_index_check.includes(NumericArray[temp_array_for_index_check[x]])) 
            return;
            
            Unique_Array.push(NumericArray[temp_array_for_index_check[x]]);
            temp_array_for_index_check.push(NumericArray[temp_array_for_index_check[x]]);
            }
        }
        
        console.log(Unique_Array);
        console.timeEnd();

        readline.close();
    })
   
   })
    