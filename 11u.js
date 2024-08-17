'use strict'
function removeEggs(foods){
    let ovqatlar = foods.slice()
    foods.reverse()
    const withoutEggs=[]
    let k=0
    let a=0
    for(let i = 0; i < foods.length; i++){
        if(k===2){
            a+=i
            break
        }
        else{
            if(foods[i]==='tuxum'){
                k+=1
            }
            else{
                withoutEggs.push(foods[i])
            }
        }
    }
    for(let l = a; l < foods.length; l++){
        withoutEggs.push(foods[l])
    }
    console.log(ovqatlar)
    return withoutEggs.reverse()
}
console.log(removeEggs(['tuxum', 'olma','banan','tuxum', 'tuxum', 'tuxum', 'jambon']))
