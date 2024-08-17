'use strict'
let newArr=[]
function solve(firstArr,secondArr){
    for(let i=0;i<Math.max(firstArr.length,secondArr.length);i++){
        newArr.push(firstArr[i]+secondArr[i])
    }
    console.log(newArr)
    newArr=[]
}
solve([1, 1, 21], [1, 1, 31]) //vazifada xato qilingan togirlab boshqasini yozdim
solve([1, 2, 3], [4, 5, 6])