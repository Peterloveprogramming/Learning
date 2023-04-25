function createrandomnumber(min,max){
    return Math.floor(Math.random()*(max-min+1))+min;
}

console.log(createrandomnumber(5,10))
