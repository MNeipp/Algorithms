/* Shuffle
In JavaScript, the Array object has numerous useful methods. It does not, however, contain a method that will randomize the order of an array’s elements. Let’s create shuffle(arr), to efficiently shuffle a given array’s values. Work in-place, naturally. Do you need to return anything from your function? */

function shuffle(arr){
    let temp = 0
    for (let i = arr.length-1; i >= 0; i--){
        var x = Math.floor(Math.random()*arr.length)
        temp = arr[i]
        arr[i] = arr[x]
        arr[x] = temp
    }
    return arr
}

/* Remove Range
Given array, and indices start and end, remove vals in that index range, working in-place (hence shortening the array). Given ([20,30,40,50,60,70],2,4), change to [20,30,70] and return it. */

function removeRange(arr, index1, index2){
    for(let i = 0; i < arr.length - index1; i++){
        arr[index1+i] = arr[index2+i+1]
    }
    for (let i = arr.length-1; i >= 0; i--){
        if (arr[i] == undefined){
            arr.pop()
        } else{
            return arr
        }
    }
    return arr
}

/* Intermediate Sums
You will be given an array of numbers. After every tenth element, add an additional element containing the sum of those ten values. If the array does not end aligned evenly with ten elements, add one last sum that includes those last elements not yet been included in one of the earlier sums. Given the array [1,2,1,2,1,2,1,2,1,2,1,2,1,2], change it to [1,2,1,2,1,2,1,2,1,2,15,1,2,1,2,6].
 */
function intermediateSums(arr){
    let tracker = 0
    let sum = 0
    for (let i = 0; i <= arr.length; i++){
        if (tracker == 10){
            for(let j = arr.length; j > tracker; j--){
                arr[j] = arr[j-1]
            }
            arr[tracker] = sum
            sum = 0
            tracker = 0
        } else if(i == arr.length){
            for(let j = arr.length; j > arr.length-tracker; j--){
                arr[j] = arr[j-1]
            }
            arr[arr.length-1] = sum
            return arr
        } else {
            sum += arr[i];
            tracker++
        }
    }
    return arr
}

/* Double Trouble
Create a function that changes a given array to list each original element twice, retaining original order. Convert [4,"Ulysses",42,false] to [4,4,"Ulysses","Ulysses",42,42,false,false].
 */

function doubleTrouble(arr){
    let x = arr.length*2-1
    for (let i = arr.length-1; i >= 0; i--){
        arr[x] = arr[i]
        arr[x-1] = arr[i]
        x-=2
    }
    return arr
}

/* Zip It
Create a standalone function that accepts two arrays and combines their values sequentially into a new array, at alternating indices starting with first array. Extra values from either array should be included afterward. Given [1,2] and [10,20,30,40], return new array containing [1,10,2,20,30,40].

Second: combine the two arrays’ values into the first array, instead of into a new array. Much more fun! */

function zipIt(arr1, arr2){
    let newArr = []
    let longest = 0
    if (arr1.length > arr2.length){
        longest = arr1.length
    }
    else{
        longest = arr2.length
    }
    for(let i = 0; i < longest; i++){
        if (arr1[i] != undefined){
            newArr.push(arr1[i])
        }
        if (arr2[i] != undefined){
            newArr.push(arr2[i])
        }
    }
    return newArr
}

