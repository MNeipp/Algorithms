let questions = [
"Normal adult dogs have how many teeth?",
"Through what part of the body do dogs sweat?",
"Dogs can only see in black and white",
"What is the most common training command taught to dogs?",
"What is a dog's most highly developed sense?",
"Puppies are delivered after how many weeks of conception?",
"What is the favorite dog breed of the Queen of England, Elizabeth II?",
"Which TV series had a dog named K9 who was also a robot?",
"Which dog breed is the smallest of them all?",
"Which breed was once known as St. John’s Newfoundland?",
"Which dog breed has a black tongue?",
"The first dogs registered in the American Kennel Club (AKC) belonged to what group?",
"Which dog yodels instead of barks?",
"Dalmatians are BORN with spots.",
"Which dog breed’s coat has a texture that’s similar to human hair?",
"What is the name of the dog on the front of the Cracker Jack box?",
"How old was the verified world’s oldest dog — an Australian Cattle Hound named Bluey — when he died?",
"In 2020, what was the most popular dog name, according to Prudent Pet Insurance?",
"It is cheaper to spay or neuter a dog than it is to raise a litter of puppies for 1 year.",
"What is the most popular breed of dog in the United States?"
]

let question_choices=[
    ["A) 24", "B) 16", "C) 42", "D) 32"],
    ["A) Armpits", "B) Ears", "C)Backside ", "D)Paws "],
    ["True", "False"],
    ["A) Stay","B) Beg","C) Sit","D) Dance"],
    ["A) Taste","B) Smell","C) Sight","D) Touch"],
    ["A) 36","B) 22","C) 9","D) 4"],
    ["A) Corgi","B) Basenji","C) Rottweiler","D) Pomeranian"],
    ["A) Full House","B) Star Trek","C) Doctor Who","D) Mr. Robot"],
    ["A) Dachshund","B) Shih Tzu","C) Pomeranian","D) Chihuahua"],
    ["A) Newfoundland","B) Golden Retriever","C) Labrador Retriever","D) Puli"],
    ["A) Husky","B) Poodle","C) Weimaraner","D) Chow Chow"],
    ["A) Herding Group","B) Sporting Group","C) Working Group","D) Hound Group"],
    ["A) Komondor","B) Otterhound","C) Basenji","D) Basset Hound"],
    ["True", "False"],
    ["A) Brussels Griffin","B) Yorkshire Terrier","C) Poodle","D) Smooth Fox Terrier"],
    ["A) Jack","B) Max","C) Bingo","D) Fido"],
    ["A) 19","B) 22","C) 29","D) 40"],
    ["A) Fluffy","B) Bo","C) Bella","D) Chewy"],
    ["True", "False"],
    ["A) Beagle","B) German Shepherd Dog","C) Labrador Retriever","D) Yorkshire Terrier"]
]

let answer_key = [
"C","D","FALSE","C","B","D","A","C","D","C","D","B","C","FALSE","B","C","C","C","TRUE","C"
]

var prompt = require('prompt-sync')({sigint: true});


function startGame(){
    console.log("Welcome to the Doggy Quiz!")
    console.log("")
    console.log("How many of these 20 trivia questions about dogs can you get correct?")
    const name = prompt("First, what is your name?");
    console.log(`Hello ${name}! Let's see how well you know your pups!`)
    console.log("")
    console.log('Answer "Q" at any time to exit the game')
    console.log("")
    let i = true
    let score = 0
    while (i == true){
        for(let x = 0; x < questions.length; x++){
            console.log(questions[x]);
            console.log("")
            for (let z = 0; z < question_choices[x].length; z++){
                console.log(question_choices[x][z])
            }
            answer = prompt(question_choices[x]);
            answer = answer.toUpperCase();
            if (answer == "Q"){
                console.log(`Giving up so soon ${name}? Your final score was ${score}. Try again soon!`)
                process.exit()
            }
            else if (answer == answer_key[x]){
                console.log("Correct! +1 point!");
                console.log("")
                score++
            }
            else{
                console.log(`Sorry, you're wrong the answer was ${answer_key[x]}`);
            }
        }
        i = false;
    }
    console.log(`Thanks for playing, ${name}!`)
    console.log(`Your final score was ${score}!`)
    play_again = prompt("Want to try again? Y/N");
    if (play_again.toUpperCase() == "Y"){
        startGame()
    }
    else{
        console.log("Hope to see you again soon!")
    }
    
    
}

startGame()

