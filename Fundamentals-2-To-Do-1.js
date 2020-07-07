/* Sigma
Implement function sigma(num) that given a number, returns the sum of all positive integers up to number (inclusive). Ex.: sigma(3) = 6 (or 1 + 2 + 3); sigma(5) = 15 (or 1 + 2 + 3 + 4 + 5).

 */

function sigma(num){
    let sum = 0
    for (let i = 1; i <= num; i++){
       sum +=  i
    }
    return sum
}

/* Factorial
Just the Facts, ma’am. Factorials, that is. Write a function factorial(num) that, given a number, returns the product (multiplication) of all positive integers from 1 up to number (inclusive).  */

function factorial(num){
    let product = 1
    for (let i = 1; i <= num; i++){
        product = product*i
    }
    return product
}

/* Star Art
Assume that you have a text field that is exactly 75 characters long. You want to fill it with spaces and asterisks ('*'), sometimes called stars. You should print the given number of asterisks consecutively. Depending on which function is called, those stars should be left-justified (the first star would be very first char in the text field), or right-justified (the last star would be very last char in the text field, with potentially some number of spaces at beginning of text field before the block of stars start), or centered in the 75-
character text field (with the same number of spaces on either side of the block of stars, plus/minus one).

Write a function drawLeftStars(num) that accepts a number and prints that many asterisks.
Write a function drawRightStars(num) that prints 75 characters total. Stars should build from the right side. The last num characters should be asterisks; the other 75 should be spaces.   
Write function drawCenteredStars(num) that prints 75 characters total. The stars should be centered in the 75. The middle num characters should be asterisks; the rest of the 75 spaces. */

function drawLeftStars(num){
    let canvas = []
    for (let i =0; i<num; i++){
        canvas.push("*")
    }
    return canvas
}

function drawRightStars(num){
    let canvas = []
    let count = 0
    for (let i = 0; i<75; i++){
        canvas.push('')
    }
    for (i = canvas.length-1; count < num; i--){
        canvas[i] = "*"
        count++
    }

    console.log(canvas)
}

function drawCenteredStars(num){
    let canvas = []
    let count = 0
    let tracker = 0
    for (let i = 0; i<75; i++){
        canvas.push('')
    }
    for (i = 0; count < num; i++){
        if (i % 2 ==0){
            canvas[((canvas.length-1)/2) + tracker] = "*"
            tracker++
        }
        else{
            canvas[((canvas.length-1)/2) - tracker] = "*"
        }
        count++
    }
    console.log(canvas)
}

/* Character Art
From the above, derive the following that accepts and draws the given characters, not just asterisks:

drawLeftChars(num,char)
drawRightChars(num,char)
drawCenteredChars(num,char) */

function drawLeftChars(num,char){
    let canvas = []
    for (let i =0; i<num; i++){
        canvas.push(char)
    }
    console.log(canvas)
}

function drawRightChars(num,char){
    let canvas = []
    let count = 0
    for (let i = 0; i<75; i++){
        canvas.push('')
    }
    for (i = canvas.length-1; count < num; i--){
        canvas[i] = char
        count++
    }

    console.log(canvas)
}

function drawCenteredChars(num,char){
    let canvas = []
    let count = 0
    let tracker = 0
    for (let i = 0; i<75; i++){
        canvas.push('')
    }
    for (i = 0; count < num; i++){
        if (i % 2 ==0){
            canvas[((canvas.length-1)/2) + tracker] = char
            tracker++
        }
        else{
            canvas[((canvas.length-1)/2) - tracker] = char
        }
        count++
    }
    console.log(canvas)
}