/* Remove Blanks
Create a function that, given a string, returns all of that string’s contents, but without blanks. 
If given the string " Pl ayTha tF u nkyM usi c ", return "PlayThatFunkyMusic". */

function removeBlanks(str){
    var newarr = []
    for (let i = 0; i < str.length; i++){
        if (str[i] != ' '){
            newarr.push(str[i])
        }
    }
    return newarr.join('')
}

/* Get Digits
Create a JavaScript function that given a string, returns the integer made from the string’s digits. Given "0s1a3y5w7h9a2t4?6!8?0", the function should return the number 1357924680. */

function getDigits(str){
    str=str.split('')
    digits = []
    for (x of str){
        num = parseInt(x)
        if (isFinite(num)){
            digits.push(num)
        }
    }
    return parseInt(digits.join(''))
}

/* Acronyms
Create a function that, given a string, returns the string’s acronym (first letters only, capitalized). 
Given " there's no free lunch - gotta pay yer way. ", return "TNFL-GPYW". 
Given "Live from New York, it's Saturday Night!", return "LFNYISN".*/

function acronyms(str){
    str = str.split(' ')
    let newArr=[]
    for(let i = 0; i < str.length; i++){
        newArr.push(str[i][0])
    }
    return newArr.join('').toUpperCase()
}

/* Count Non-Spaces
Accept a string and return the number of non-space characters found in the string. 
For example, given "Honey pie, you are driving me crazy", return 29 (not 35). */

function nonSpaces(str){
    let arr = str.split('')
    let count=0
    for (i of arr){
        if (i != ' '){
            count++
        }
    }
    return count
}

/* Remove Shorter Strings
Given a string array and value (length), remove any strings shorter than the length from the array. */

function removeShort(str,num){
    newArr=[]
    for(let i of str){
        if (i.length >= num){
            newArr.push(i)
        }
    }
    return newArr
}