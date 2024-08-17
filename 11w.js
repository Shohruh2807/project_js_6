'use strict'
function removeDuplicates(arr){
    return [...new Set(arr)]
}
console.log(removeDuplicates(['yashil', 'qizil', "ko'k", 'qizil']))
console.log(removeDuplicates(['qizil', 'yashil', 'yashil', 'qizil']))
