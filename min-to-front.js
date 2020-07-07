/* Min to Front
Given an array of comparable values, move the lowest element to array’s front, shifting backward any elements previously ahead of it. Do not otherwise change the array’s order. Given [4,2,1,3,5], change it to [1,4,2,3,5] and return it. As always, do this without using built-in functions. */

function minToFront(arr){
    let min = arr[0]
    let temp = 0
    for(let i = 1; i < arr.length; i++){
        if(arr[i] < min){
            min = arr[i]
        }
    }
    i = 0
    let index = 0
    while (arr[i] != min){
        index++
        i++
    }
    for (i = index; i >0; i--){
        temp = arr[i]
        arr[i] = arr[i-1]
        arr[i-1] = temp
    }
    return arr
}