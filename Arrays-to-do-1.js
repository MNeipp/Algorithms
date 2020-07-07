/* Push Front
Given an array and an additional value, insert this value at the beginning of the array. Do this without using any built-in array methods. */

function pushFront(arr, num){
    for (let i = arr.length; i > 0; i--){
            arr[i] = arr[i-1]
    }
    arr[0] = num
}

/* Pop Front
Given an array, remove and return the value at the beginning of the array. Do this without using any built-in array methods except pop(). */

function popFront(arr) {
    let front=arr[0]
    for (let i = 0; i < arr.length-1; i++){
        arr[i] = arr[i+1]
    }
    arr[arr.length-2] = arr[arr.length-1]
    arr.pop()
    console.log(arr)
    return front
}

/* Insert At
Given an array, index, and additional value, insert the value into array at given index. Do this without using built-in array methods. You can think of pushFront(arr,val) as equivalent to insertAt(arr,0,val). */

function insertAt(arr,index,val) {
    let num = arr[index]
    for (let i = index; i < arr.length-1; i++){
        arr[i] = arr[i+1]
    }
    arr[arr.length-2] = arr[arr.length-1]
    arr[index] = val
    console.log(arr)
    return num
}

/* Remove At
Given an array and an index into array, remove and return the array value at that index. Do this without using built-in array methods except pop(). Think of popFront(arr) as equivalent to removeAt(arr,0).
 */

function removeAt(arr,index) {
    let num = arr[index]
    for (let i = index; i <= arr.length-1; i++){
        arr[i] = arr[i+1]
    }
    arr.pop()
    console.log(arr)
    return num
}

/* Swap Pairs
Swap positions of successive pairs of values of given array. If length is odd, do not change the final element. For [1,2,3,4], return [2,1,4,3]. For example, change input ["Brendan",true,42] to [true,"Brendan",42]. As with all array challenges, do this without using any built-in array methods. */

function swapPairs(arr){
    let temp = 0
    for(let i = 0; i < arr.length; i+=2){
        if (arr[i+1] != undefined){
            temp = arr[i]
            arr[i] = arr[i+1]
            arr[i+1] = temp
        }
    }
    console.log(arr)
}

/* Remove Duplicates
Sara is looking to hire an awesome web developer and has received applications from various sources. Her assistant alphabetized them but noticed some duplicates. Given a sorted array, remove duplicate values. Because array elements are already in order, all duplicate values will be grouped together. As with all these array challenges, do this without using any built-in array methods. */

function removeDuplicates(arr){
    let newArr=[]
    for (let i = 0; i < arr.length; i++){
        if (arr[i] == arr[i+1]){
            continue
        }
        else{
            newArr.push(arr[i])
        }
    }
    return newArr
}