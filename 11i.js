'use strict'
//vazifada massivni qaytaradi degani uchun ruturn qildim
// console.log emas
//keyin nimaga chiqmadi deb o'tirmang!!!
let space=[]
function addNum(array,num){
    for(let i of array){
        space.push(i+num)
    }
    console.log(space)
    space=[]
}
addNum([1, 2, 3], 2)
addNum([1, 2, 3], 3)
addNum([-2, -1, 0, 991],2)