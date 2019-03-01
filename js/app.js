"use strict";
/* Declare variables to be used */
var myDetails = {
    name: ['Nilesh'],
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
var userName = prompt("What's your name?");
while ((userName === null || userName === "") &&  counter1 < 3) {
    counter1++;
    alert("Seems you hit a snag. No problem, try again!");
    userName = prompt("What's your name?");
}
console.log(userName);
 
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
                }
                else {
                    var correctAns = "N";
                    if(guessed === null || guessed === "") {
                        correctAns = "N";
                    }
                    else {
                        var questionNum = counter2 + 1;
                        if(questionNum === 1 && guessed.toLowerCase().substring(0,1) === answers.coder) {
                            correctAns = "Y";
                        }
                        if(questionNum === 2 && answers.actors.includes(guessed.toLowerCase())) {
                            correctAns = "Y";
                        }
                   
                        if(questionNum === 3 && answers.sports.includes(guessed.toLowerCase())) {
                            correctAns = "Y";
                        }
                   
                        if(questionNum === 4 && guessed.toLowerCase().substring(0,1) === answers.comicbuff) {
                            correctAns = "Y";
                        }
                   
                        if(questionNum === 5 && guessed.toLowerCase().substring(0,1) === answers.burgers) {
                            correctAns = "Y";
                        }
                    }
                    console.log("Is answer correct:" + correctAns);
                    if(correctAns === "Y") {
                        correctAnsCounter++;
                        if(counter2 < questions.length - 1) {
                            alert("Yay, you guessed it right. Let's move to the next one!");
                        }
                        else {
                            alert("Yay, you guessed it right.");
                        }
                    }
                    else {
                        var tryAgain = "You guessed it wrong.";
                        var nextQuestion = "No problem, let's go for the next question."
                        if (counter2 < questions.length - 1) {
                            var tryAgain = tryAgain + " " +  nextQuestion;
                        }
                        alert(tryAgain);
                    }
                }
            }
            alert("You correctly guessed " + correctAnsCounter + " out of " + questions.length + ". Thanks for playing the game!");
}