/* Given an array and an additional value, insert this
value at the beginning of the array. Do this
without using any built-in array methods.
 */
function pushFront(arr,num){
    for(i = arr.length-1; i>=0; i--){
        arr[i+1] = arr[i]
    }
    arr[0] = num
    return arr;
}

/* Given an array, remove and return the value at
the beginning of the array. Do this without using
any built-in array methods except pop(). */

function popFront(arr){
    var front = arr[0]
    for(i = 0; i<arr.length; i++){
        arr[i] = arr[i+1]
    }
    arr.pop();
    console.log(arr);
    return front;
}

/* Given an array, index, and additional value, insert
the value into the array at the given index. Do this
without using built-in array methods */

function insertAt(arr,index,num){
    for(i = arr.length-1; i>=index; i--){
        arr[i+1] = arr[i]
    }
    arr[index] = num;
    return arr
}
console.log(insertAt([1,2,3,4,5],1,3))

/* Given an array and an index into the array,
remove and return the array value at that index.
Do this without using any built-in array methods
except pop(). */

function removeAt(arr,indx){
    var front = arr[indx]
    for(i = indx; i<arr.length; i++){
        arr[i] = arr[i+1]
    }
    arr.pop();
    console.log(arr);
    return front;
}

/* Given a numerical array, reverse the order of the
values. The reversed array should have the same
length, with existing elements moved to other
indices so that the order of elements is reversed. */
function reverseArray(arr){
    var temp = 0
    for(i = 0; i < Math.floor(arr.length/2); i++){
        temp = arr[arr.length-i-1];
        arr[arr.length-i-1] = arr[i];
        arr[i] = temp;
    }
    return arr;
}

/* Implement a function removeNegatives() that
accepts an array and removes any values that
are less than zero.
Second-level challenge: don’t use nested loops. */

function removeNegatives(arr){
    for(var i = 0; i < arr.length; i++){
        if (arr[arr.length-1] < 0){
            arr.pop()
        }
        if (arr[i] < 0){
            var temp = arr[arr.length-1];
            arr[arr.length-1] = arr[i]
            arr[i] = temp
            arr.pop()
        }
    }
    return arr;
}

/* Skyline Heights
You are given an array with heights of consecutive buildings in the city. For example, [-1,7,3] would
represent three buildings: first is actually below street level, second is seven stories high, and third is
three stories high (but hidden behind the seven-story onbe). You are situated at street level. Return an
array containing heights of the buildings you can see, in order. Given [1,-1,7,3] return [1,7]. */

function buildings(arr, myElevation){
    newArr = []
    maxHeight = arr[0]
    for (var i = 0; i < arr.length; i++){
        if(maxHeight <= arr[i]){
            maxHeight = arr[i];
            // console.log(maxHeight);
        }
        if (arr[i] >= myElevation && arr[i] >= maxHeight){
            newArr.push(arr[i]);
        }
    }
    return newArr;
}

/* Binary Search
Given a sorted array and a value, return whether
that value is present in the array. Do not
sequentially iterate the entire array. Instead,
‘divide and conquer’, taking advantage of the fact
that the array is sorted. */

function binarySearch(arr, num, high, low) {
    var mid = Math.floor((low+high)/2);
    var high = arr.length-1;
    var low = 0; 
    while (num != arr[mid]) {
        mid = (low+high) / 2;
        if (num < arr[mid])
            if (num == arr[0]) {
                return `${num} is located at arr[0]`;
            }
        if (num == arr[arr.length - 1]) {
            return `${num} is located at arr[${arr.length-1}]`;
        }
        if (num < arr[mid]){
            high = mid;
        }
        if (num > arr[mid]){
            low = mid;
        }
        if (low == high - 1){
            return `${num} is not located in this array`
        }
    }
    return `${num} is located at arr[${mid}]`
}