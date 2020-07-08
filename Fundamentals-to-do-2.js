/* Countdown
Create a function that accepts a number as an input. Return a new array that counts down by one, from
the number (as array’s ‘zeroth’ element) down to 0 (as the last element). How long is this array? */

function countdown(num){
    let newArr = [];
    for (let i = num; i >= 0; i--){
        newArr.push(i)
    }
    console.log(newArr.length)
    return newArr
}

/* Print and Return
Your function will receive an array with two numbers. Print the first value, and return the second.
 */

function printReturn(num1,num2){
    console.log(num1);
    return(num2)
}

/* First Plus Length
Given an array, return the sum of the first value in the array, plus the array’s length. What happens if the array’s first value is not a number, but a string (like "what?") or a boolean (like false). */

function firstPlusLength(arr){
    return (arr[0] + arr.length)
}
// string: arr.length is concatenated to the string; a string is returned.
// boolean: false = 0, true = 1

/* Values Greater than Second
For [1,3,5,7,9,13], print values that are greater than its 2nd value. Return how many values this is. */

function greaterThanSecond(arr){
    let count = 0
    for (let i = 0; i < arr.length; i++){
        if (arr[i] > arr[1]){
            console.log(arr[i])
            count++
        }
    }
    return count
}

/* Values Greater than Second, Generalized
Write a function that accepts any array, and returns a new array with the array values that are greater than its 2nd value. Print how many values this is. What will you do if the array is only one element long? */

function betterGreaterThanSecond(arr){
    let count = 0
    if (arr.length == 1){
        console.log("There is only one value in this array")
    }
    else{
        for (let i = 0; i < arr.length; i++){
            if (arr[i] > arr[1]){
                console.log(arr[i])
                count++
            }
        }
    }
    return count
}

/* This Length, That Value
Given two numbers, return array of length num1 with each value num2. Print "Jinx!" if they are same. */

function lengthValue(num1, num2){
    let newArr = []
    for (let i = 0; i < num1; i++){
        newArr.push(num2)
    }
    if (num1 == num2){
        console.log("Jinx!")
    }
    return newArr
}

/* Fit the First Value
Your function should accept an array. If value at [0] is greater than array’s length, print "Too big!"; if value at [0] is less than array’s length, print "Too small!"; otherwise print "Just right!". */


function fitTheFirst(arr){
    if (arr[0] > arr.length){
        console.log("Too big!")
    }
    else if (arr[0] < arr.length){
        console.log("Too small!")
    }
    else{
        console.log("Just right!")
    }
}

/* Fahrenheit to Celsius
Kelvin wants to convert between temperature scales. Create fahrenheitToCelsius(fDegrees) that accepts a number of degrees in Fahrenheit and returns the equivalent temperature as expressed in Celsius degrees. For review, Fahrenheit = (9/5 * Celsius) + 32. */

function fahrenheitToCelsius(num){
    return (num-32)*5/9
}

/* Celsius to Fahrenheit
Create celsiusToFahrenheit(cDegrees) that accepts number of degrees Celsius, and returns the equivalent temperature expressed in Fahrenheit degrees. */

function celsiusToFahrenheit(num){
    return (9/5)*num+32
}

/* (Optional): Do Fahrenheit and Celsius values equate at a certain number? The scientific calculation can be complex, so for this challenge just try a series of Celsius integer values starting at 200, going downward (descending), checking whether it is equal to the corresponding Fahrenheit value. */

function fEqualsC(){
    let num = 200
    let f = (9/5)*num+32
    let c = (num-32)*5/9

    while (f != c){
        f = (9/5)*num+32
        c = (num-32)*5/9
        num--
    }
    return num+1
}

