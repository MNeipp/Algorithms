/* Biggie Size
Given an array, write a function that changes all positive numbers in the array to “big”. Example: makeItBig([-1,3,5,-5]) returns that same array, changed to [-1,"big","big",-5]. */

function biggieSize(arr){
    for (let i =0; i < arr.length; i++){
        if (arr[i] > 0){
            arr[i] = "big"
        }
    }
    return arr
}

/* Print Low, Return High
Create a function that takes an array of numbers. The function should print the lowest value in the array, and return the highest value in the array.
 */

function lowHigh(arr){
    let min = arr[0]
    let max = arr[0]
    for(let i = 1; i < arr.length; i++){
        if (arr[i] < min){
            min = arr[i]
        }
        if (arr[i] > max){
            max = arr[i]
        }
    }
    console.log(min)
    return max
}

/* Print One, Return Another
Build a function that takes an array of numbers. The function should print the second-to-last value in the array, and return first odd value in the array. */

//while loop
function printReturn(arr){
    let odd = arr[0]
    let i = 0
    while (odd % 2 == 0){
        odd = arr[i]
        i++
    }
    
    console.log(arr.length-2)
    return odd
}

//for loop
function printReturn(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 != 0) {
            odd = arr[i]
            break
        }
    }
    console.log(arr.length - 2)
    return odd
}

/* Double Vision
Given an array, create a function to return a new array where each value in the original has been doubled. Calling double([1,2,3]) should return [2,4,6] without changing original.
 */
function double(arr){
    newArr = []
    for (let i = 0; i < arr.length; i++){
        newArr.push(arr[i]*2)
    }
    return newArr
}

/* Count Positives
Given an array of numbers, create a function to replace last value with the number of positive values. Example,  countPositives([-1,1,1,1]) changes array to [-1,1,1,3] and returns it.
 */

function countPositives(arr){
    let count = 0;
    for(let i = 0; i < arr.length; i++){
        if(arr[i] > 0){
            count++
        }
    }
    arr[arr.length-1] = count
    return arr
}

/* Evens and Odds
Create a function that accepts an array. Every time that array has three odd values in a row, print "That’s odd!" Every time the array has three evens in a row, print "Even more so!"
*/

function evenOdds(arr){
    for (let i = 0; i < arr.length; i++){
        if (arr[i] % 2 == 0 && arr[i+1] % 2 == 0 && arr[i+2] % 2 == 0 ){
            console.log("Even more so!")
        }
        if (arr[i] % 2 != 0 && arr[i+1] % 2 != 0 && arr[i+2] % 2 != 0 ){
            console.log("That's odd!")
        }
    }
}

/* Increment the Seconds
Given arr, add 1 to odd elements ([1], [3], etc.), console.log all values and return arr.
 */

function incrementOdds(arr){
    for(let i = 1; i<arr.length; i+=2){
        arr[i] = arr[i]+1
    }
    return arr
}

/* Previous Lengths
You are passed an array containing strings. Working within that same array, replace each string with a number – the length of the string at previous array index – and return the array. */

function previousLengths(arr){
    for (let i = arr.length-1; i > 0; i--){
        arr[i] = arr[i-1].length
    }
    return arr
}

/* Add Seven to Most
Build a function that accepts an array. Return a new array with all values except first, adding 7 to each. Do not alter the original array.
 */

function seventoMost(arr){
    let newArr=[]
    for (let i =1; i < arr.length; i++){
        newArr.push(arr[i] +7)
    }
    return newArr
}

/* Reverse Array
Given array, write a function to reverse values, in-place. Example: reverse([3,1,6,4,2]) returns same array, containing [2,4,6,1,3]. */

function reverse(arr){
    let temp
    for (let i = 0; i < Math.floor(arr.length/2); i++){
        temp = arr[i];
        arr[i] = arr[arr.length-i-1];
        arr[arr.length-i-1] = temp;
    }
    return arr
}

/* Outlook: Negative
Given an array, create and return a new one containing all the values of the provided array, made negative (not simply multiplied by -1). Given [1,-3,5], return [-1,-3,-5]. */

function negative(arr){
    let newArr=[]
    for (let i = 0; i < arr.length; i++){
        if (arr[i] > 0){
            newArr.push(arr[i]*-1)
        }
        else {
            newArr.push(arr[i])
        }
    }
    return newArr
}

/* Always Hungry
Create a function that accepts an array, and prints "yummy" each time one of the values is equal to "food". If no array elements are
"food", then print "I'm hungry" once. */

function alwaysHungry(arr) {
    if (arr.includes("food") == false) {
        console.log("I'm hungry!");
        return
    } else {
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] == "food") {
                console.log("yummy")
            }
        }
    }
}

/* Swap Toward the Center
Given array, swap first and last, third and third-tolast, etc. Input[true,42,"Ada",2,"pizza"] becomes ["pizza",42,"Ada",2,true]. 
Change [1,2,3,4,5,6] to [6,2,4,3,5,1]. */

// SAME CODE AS REVERSE ARRAY

function swaptoCenter(arr){
    let temp
    for (let i = 0; i < Math.floor(arr.length/2); i++){
        temp = arr[i];
        arr[i] = arr[arr.length-i-1];
        arr[arr.length-i-1] = temp;
    }
    return arr
}

/* Scale the Array
Given array arr and number num, multiply each arr value by num, and return the changed arr.
 */

function scaleArray(arr, num){
    for(let i = 0; i<arr.length; i++){
        arr[i] = arr[i]*num
    }
    return arr
}

