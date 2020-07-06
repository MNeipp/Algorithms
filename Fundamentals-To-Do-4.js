/* Only Keep the Last Few
Stan learned something today: that directly decrementing an array’s .length immediately shortens it by that amount. Given array arr and number X, remove all except the last X elements, and return arr (changed and shorter). Given ([2,4,6,8,10],3), change the given array to [6,8,10] and return it.
 */

function lastFew(arr,num){
    arr.splice(0,arr.length-num)
    console.log(arr)
}

/* Math Help
Cartman doesn’t really like math; he needs help. You are given two numbers – coefficients M and B in the equation Y = MX + B. Build a function to return the X-intercept (his older cousin Fiaz wisely reminds him that X-intercept is the value of X where Y equals zero; Cartman just snorts in his general direction). */

function mathHelp(m,b){
    let x;
    x=(-b / m) ;
    return x
}

/* Poor Kenny
Kenny tries to stay safe, but somehow everyday something happens. Out of the last 100 days, there were 10 days with volcanos, 15 others with tsunamis, 20 earthquakes, 25 blizzards and 30 meteors (for 100 days total). If these probabilities continue, write whatHappensToday() to print a day’s outcome. */

function whatHappensToday(){
    num = Math.ceil(Math.random()*100)
    console.log(num)
    if (num <= 10){
        console.log("volcano")
    }
    else if (num <= 25){
        console.log("tsunami")
    }
    else if (num <= 45){
        console.log("earthquake")
    }
    else if (num <= 70){
        console.log("blizzard")
    }
    else{
        console.log("meteor")
    }
}

/* What Really Happened?
Kyle (smarter than Kenny) notes that the chance of one disaster should be unrelated to the chance of another. Change whatHappensToday() function to create whatReallyHappensToday(). In this new function test for each disaster independently, instead of assuming exactly one disaster will happen. In other words, with this new function, all five might occur today – or none. Maybe Kenny will survive! */

function whatReallyHappensToday(){
    let arr=[]
    if (Math.ceil(Math.random()*100) <= 10){
        arr.push("volcano")
    }
    if (Math.ceil(Math.random()*100) <= 15){
        arr.push("tsunami")
    }
    if (Math.ceil(Math.random()*100) <= 20){
        arr.push("earthquake")
    }
    if (Math.ceil(Math.random()*100) <= 25){
        arr.push("blizzard")
    }
    if (Math.ceil(Math.random()*100) <= 30){
        arr.push("meteor")
    }
    if (arr.length == 0){
        console.log("A normal day")
    }
    else{
        for (let i = 0; i < arr.length; i++){
            console.log(arr[i])
        }
    }
}

/* Soaring IQ
Your time at the Dojo will definitely make you smarter! Let’s say a new Dojo student, Bogdan entered with a modest IQ of 101. Let’s say that during a 14-week bootcamp, his IQ rose by .01 on the first day, then went up by an additional .02 on the second day, then up by .03 more on the third day, etc. all the way until increasing by .98 on his 98th day (the end of 14 full weeks). What is Bogdan’s final IQ? */

function soaringIQ(IQ){
    let i = .01
    let day = 1
    while (day != 98){
        IQ += i
        i += .01
        day++
    }
    console.log(IQ)
}

/* Letter Grade
Mr. Cerise teaches high school math. Write a function that assigns and prints a letter grade, given an integer representing a score from 0 to 100? Those getting 90+ get an ‘A’, 80-89 earn ‘B’, 70-79 is a ‘C’, 60-69 should get a ‘D’, and lower than 60 receive ‘F’. For example, given 88, you should log "Score: 88. Grade: B". Given the score 61, log the string "Score: 61. Grade: D". */

function calculateGrade(score){
    let grade
    if (score > 89){
        grade = "A"
    }
    else if(score > 79){
        grade = "B"
    }
    else if (score > 69){
        grade = "C"
    }
    else if (score > 59){
        grade = "D"
    }
    else{
        grade = "F"
    }
    console.log(`Score: ${score}, Grade: ${grade}`)
}

/* More Accurate Grades
For an additional challenge, add ‘-’ signs to scores in the bottom two percent of A, B, C and D scores, and “+” signs to the top two percent of B, C and D scores (sorry, Mr. Cerise never gives an A+). Given 88, console.log "Score: 88. Grade: B+". Given 61, log "Score: 61. Grade: D-" . */

function calculateGrade(score){
    let grade
    if (score > 91){
        grade = "A"
    }
    else if(score > 89){
        grade = "A-"
    }
    else if(score > 87){
        grade = "B+"
    }
    else if(score > 81){
        grade = "B"
    }
    else if(score > 79){
        grade = "B-"
    }
    else if(score > 77){
        grade = "C+"
    }
    else if(score > 71){
        grade = "C"
    }
    else if (score > 69){
        grade = "C-"
    }
    else if (score > 67){
        grade = "D+"
    }
    else if (score > 61){
        grade = "D"
    }
    else if (score > 59){
        grade = "D-"
    }
    else{
        grade = "F"
    }
    console.log(`Score: ${score}, Grade: ${grade}`)
}