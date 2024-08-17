'use strict'
function removeEggs(foods){
    const withoutEggs=[]
    for(let i = 0; i < foods.length; i++){
        if(foods[i]==='tuxum'){
            continue
        }
        else{
            withoutEggs.push(foods[i])
        }
    }
    return withoutEggs
}
console.log(removeEggs(['tuxum', 'olma', 'tuxum', 'tuxum', 'jambon']))