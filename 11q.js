'use strict'
function findIndex(array,word){
    if (array.indexOf(word) !== -1){
        console.log(array.indexOf(word))
    }
    else{
        console.log(-1)
    }
}
findIndex(['yashil', 'qizil', "ko'k", 'qizil'], 'qizil')
findIndex(['yashil', 'qizil', "ko'k", 'qizil'], 'sariq')