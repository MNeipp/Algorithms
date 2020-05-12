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

