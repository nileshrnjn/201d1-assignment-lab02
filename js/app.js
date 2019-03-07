"use strict";
/* Declare variables to be used */
var myDetails = {
    name: ['Nilesh Ranjan'],
    country: ['India'],
    city: ['Hyderabad']
};
var counter1 = 0;
var counter2 = 0;
var retryCounter = 0;
var correctAnsCounter = 0;
var question1 = "Do I code - Yes/No?"
var question2 = "Who is my favourite hollywood actor?"
var question3 = "What is my favourite sport?";
var question4 = "Am I a comic buff - Yes/No?";
var question5 = "Do I love burgers - Yes/No?";
var question6 = "Guess my favourite number between 1 and 10"
var questions = [question1, question2, question3, question4, question5, question6];
 
var answers = {
    coder: "y",
    sports: ["basketball", "soccer", "baseball"],
    actors: ["brad pitt", "johhny depp", "tom cruise"],
    comicbuff: "y",
    burgers: "y"
}
 
/* Main logic starts here*/
alert("Welcome to my webpage!");
var userName = getUserName();
while ((userName === null || userName === "") &&  counter1 < 3) {
    counter1++;
    alert("Seems you hit a snag. No problem, try again!");
    userName = getUserName();
}
 
if (userName === null ||  userName === "") {
    alert("Thanks for visting for my page!");
} else {
    alert("Hi " + userName + ", I am " + myDetails.name + " let's play a little guessing game About Me!!.");
    for(counter2 = 0; counter2< questions.length; counter2++) {
        var guessed = prompt(questions[counter2]);
        console.log(guessed);
        if(counter2 === questions.length - 1) {
            var randNum = Math.floor((Math.random() * 10) + 1);
            console.log("randNum:" + randNum);
            while(randNum != guessed && retryCounter < 6) {
                retryCounter++;
                guessed = prompt("You guessed it wrong, try again - " + questions[counter2]);
            }
            if(randNum == guessed) {
                correctAnsCounter++;
            }
        } else {
                var isCorrect = checkAnswer(counter2 + 1, guessed);
                console.log("Is answer correct:" + isCorrect)
                if(isCorrect === "Y") {
                    correctAnsCounter++;
                    if(counter2 < questions.length - 1) {
                        alert("Yay, you guessed it right. Let's move to the next one!")
                    } else {
                        alert("Yay, you guessed it right.")
                    }
                } else {
            tryAgain(counter2);
            }
        }
    }          
    alert("You correctly guessed " + correctAnsCounter + " out of " + questions.length + ". Thanks for playing the game!");
}
 
/* Function declarations */
function getUserName() {
    var name = prompt("What's your name?")
    console.log(name);
    return name;
}
 
function checkAnswer(questionNum, input) {
    var correctAns = "N";
 
    if(input === null || input === "") {
        correctAns = "N";
    } else {
 
            if(questionNum === 1 && input.toLowerCase().substring(0,1) === answers.coder) {
                correctAns = "Y";
            }
       
            if(questionNum === 2 && answers.actors.includes(input.toLowerCase())) {
                correctAns = "Y";
            }
       
            if(questionNum === 3 && answers.sports.includes(input.toLowerCase())) {
                correctAns = "Y";
            }
       
            if(questionNum === 4 && input.toLowerCase().substring(0,1) === answers.comicbuff) {
                correctAns = "Y";
            }
       
            if(questionNum === 5 && input.toLowerCase().substring(0,1) === answers.burgers) {
                correctAns = "Y";
            }
    }
    return correctAns;
}
 
function tryAgain (qNum)
{
    var tryAgain = "You guessed it wrong.";
    var nextQuestion = "No problem, let's go for the next question."
    if (counter2 < questions.length - 1) {
        var tryAgain = tryAgain + " " +  nextQuestion;
    }
    alert(tryAgain);
}
 