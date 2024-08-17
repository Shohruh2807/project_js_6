'use strict'
//vazifada massivni qaytaruvchi degani uchun ruturn qildim
// console.log emas
//keyin nimaga chiqmadi deb o'tirmang!!!
const space=[]
function addone(array){
    for(let i of array){
        space.push(i+1)
    }
    return space
}
addone([-2,-1,0,99])