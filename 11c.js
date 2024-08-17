'use strict'
function arraySwap(array){
    let space=array[0]
    array[0]=array[array.length -1]
    array[array.length -1]=space
    console.log(array)
}
arraySwap(['yaxshi', 'zor', 'salom'])