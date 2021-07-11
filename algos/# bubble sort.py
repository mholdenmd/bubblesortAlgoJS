

var arr = [3, 9, 43, 6, 23, 1]


function bubbleSort(arrInput){
    for(var j=0; j < arrInput.length; j++){
        for (var i= 0; i < arrInput.length-1-j; i++){
            if(arrInput[i] > arrInput[i+1]){
                if(arrInput[i]> arrInput[i+1]){
                    var temp = arrInput[i]
                    arrInput[i]= arrInput[i+1]
                    arrInput[i+1] = temp
                }
            }
        }
    }
    return arrInput
}

console.log(bubbleSort(arr))


