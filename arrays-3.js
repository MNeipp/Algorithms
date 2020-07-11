/* Remove Negatives
Implement removeNegatives() that accepts an array, removes negative values, and returns the same array (not a copy),preserving non-negatives’ order. As always, do not use built-in array functions */

function removeNegatives(arr){
    for (let i = 0; i < arr.length; i++){
        if (arr[i] < 0){
            for (let j = i; j < arr.length; j++ ){
                arr[j] = arr[j+1]
            }
            arr.pop()
        }
    }
    return arr
}

/* Second-to-Last
Return the second-to-last element of an array. Given [42,true,4,"Kate",7], return "Kate". If array is too short, return null. */

function secondToLast(arr){
    if (arr.length < 2){
        return null
    } else {
        return arr[arr.length-2]
    }
}

/* Second-Largest
Return the second-largest element of an array. Given [42,1,4,Math.PI,7], return 7. If the array is too short, return null. */

function secondLargest(arr){
    if (arr.length < 2){
        return null
    } else {
        let max = arr[0]
        let second = arr[1]
        for (let i = 0; i < arr.length; i++){
            if (arr[i] > max){
                second = max
                max = arr[i]
            }
            else if(arr[i] > second && arr[i] < max){
                second = arr[i]
            }
        }
        return second
    }
}

/* Nth-to-Last
Return the element that is N-from-array’s-end. Given ([5,2,3,6,4,9,7],3), return 4. If the array is too short, return null. */

function nthToLast(arr,num){
    if (arr.length-1 < num){
        return null
    } else {
        return arr[arr.length-num]
    }
}

/* Nth-Largest
Liam has "N" number of Green Belt stickers for excellent Python projects. Given arr and N, return the Nth-largest element, where (N-1) elements are larger. Return null if needed. */

function nthLargest(arr, num) {
    if (arr.length - 1 < num) {
        return null
    } else {
        for (let i = 0; i < arr.length; i++) {
            let min = i
            for (let j = i + 1; j < arr.length; j++) {
                if (arr[j] < arr[min]) {
                    min = j
                }
            }
            if (i != min) {
                temp = arr[i]
                arr[i] = arr[min]
                arr[min] = temp
            }
        }
    }
    return arr[arr.length-num-1]
}

/* Skyline Heights
Lovely Burbank has a breathtaking view of the Los Angeles skyline. Let’s say you are given an array with heights of consecutive buildings, starting closest to you and extending away. Array [-1,7,3] would represent three buildings: first is actually out of view below street level, behind it is second at 7 stories high, third is 3 stories high (hidden behind the 7-story). You are situated at street level. Return array containing heights of buildings you can see, in order. Given [-1,1,1,7,3] return [1,7]. Given [0,4] return [4]. As always with challenges, do not use built-in array functions such as unshift(). */


function skyline(arr){
    let newArr=[]
    let min = 0
    for(let i = 0; i < arr.length; i++){
        if (arr[i] > min){
            newArr.push(arr[i])
            min = arr[i]
        }
    }
    return newArr
}