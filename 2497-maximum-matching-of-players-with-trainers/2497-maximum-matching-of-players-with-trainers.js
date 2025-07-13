/**
 * @param {number[]} players
 * @param {number[]} trainers
 * @return {number}
 */

 /**
 * @param {number[]} players
 * @param {number[]} trainers
 * @return {number}
 */
var matchPlayersAndTrainers = function(players, trainers) {
    players.sort((a,b)=>a-b);
    trainers.sort((a,b)=>a-b);

    let count = 0;
    let j=0;
    for(let i=0;i<players.length;i++){
        while(j<trainers.length){
            if(players[i]<=trainers[j]){
                count++;
                i++;
            }
            j++;
        }
        break;
    }
    return count;
};


// const matchPlayersAndTrainers = (p, t) => {
//     p.sort((a, b) => a - b);
//     t.sort((a, b) => a - b);
//     let i = 0, j = 0, c = 0;
//     while (i < p.length && j < t.length) 
//         c += p[i] <= t[j++] ? ++i && 1 : 0;
//     return c;
    
// };