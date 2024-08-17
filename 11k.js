'use strict'
let a=0
function countPositive(arrayToCount){
    for(let i of arrayToCount){
        if(i > 0){
            a+=1
        }
    }
    console.log(a)
    a=0
}
countPositive([1,-3,5])
countPositive([-2,3,-5,7,10])