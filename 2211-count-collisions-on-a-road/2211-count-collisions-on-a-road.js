/**
 * @param {string} directions
 * @return {number}
 */
var countCollisions = function(directions) {
    direction = directions.split('');
    let numberOfCollisions = 0;
    let R= 0;
    let stacked = undefined
    for(let i=0; i<direction.length;i++){
        if(direction[i] == 'L'){
            if(stacked && stacked == 'R' && R>0){
                numberOfCollisions += 2;
                R--;
                numberOfCollisions += R;
                R=0;
                stacked = 'S'
            }
            else if(stacked && stacked == 'S')
                numberOfCollisions++;
                
            continue;
        }
        else if(direction[i] == 'S'){
           numberOfCollisions += R;
           R = 0;
           stacked = 'S';
        }
        else{
            R++;
            stacked = 'R'
            }
    }

    return numberOfCollisions
};