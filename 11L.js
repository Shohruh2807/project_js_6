'use strict'
//sikl orqali deyilgan sal kod ko'proq bo'ladi lekin sikl orqali
let max=''
let min=''
function minMax(nums){
    //max sonni aniqlsh uchun for operatori
    for(let i of nums){
        if(i > max || nums.indexOf(i) === 0){
            max=i
        }
    }
    //min sonni aniqlash uchun for operatori
    for(let n of nums){
        if(n < min || nums.indexOf(n) === 0){
            min=n
        }
    }
    console.log(`max: ${max}, min: ${min}`)
}
minMax([1, -3, 5])
minMax([-2, 3, -5, 7, 10])
//sikl bilan qilindi Math.min va max qo'llanilmadi