/**
 * @param {number} mass
 * @param {number[]} asteroids
 * @return {boolean}
 */
var asteroidsDestroyed = function(mass, asteroids) {
    asteroids.sort((a,b)=>a-b);

    for(let i of asteroids){
        if(mass>=i)
            mass += i;
        else
            return false;
    }

    return true;
};