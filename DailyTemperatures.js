const temperatures=[34,80,80,34,34,80,80,80,80,34];

const dailyTemperatures = function(temperatures) {
    let cacheDay=0,cacheTemp=temperatures[0],resultArray=[],j=0;
    resultArray.length=temperatures.length;
    resultArray.fill(0);

    
    for(let i=0;i<temperatures.length;){
       if(cacheTemp<temperatures[i]){
            resultArray[j]=cacheDay;
   
            i=j+1;
            cacheTemp=temperatures[i];
            j++;
            if(cacheDay>=1)
               cacheDay=0;
        }
        else{
            cacheDay++;
            if(i+1 === temperatures.length){
                i=j+1;
               cacheTemp=temperatures[j+1];
               cacheDay=0;j++;
            }else
            i++;
            }
    }

    return resultArray;
};

console.log(dailyTemperatures(temperatures));