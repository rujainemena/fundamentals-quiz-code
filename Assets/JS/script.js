var welcomeEl = document.querySelector("#intro-section");
var startBtn = document.querySelector("#start-btn");
var timerEl = document.querySelector("#timer");
var questionsEl = document.querySelector("#questions");
var choicesEl = document.querySelectorAll(".choices");
var titleEL = document.querySelector("#title");
// var initialEl = document.querySelector("#initials");
// var highScore = document.querySelector("#highscore");
// var score = document.querySelector("#score")
// var backBtn = document.querySelector("#back-btn");
// var clearBtn = document.querySelector("#clear-btn");


// data structure to store questions and choices
var questionIndex = 0;
var questionGroup = [
    {
        title: "Commonly used data types DO NOT include:",
        choices: ["a. string", "b. alerts", "c. boolean", "d. numbers"],
        answer: "b. alerts"
    },
    {
        title: "The condition in an if / else statement is enclosed in _____.",
        choices: ["a. quotes", "b. curly brackets", "c. parenthesis", "d. square brackets"],
        answer: "c. parenthesis"
    },
    {
        title: "Arrays in JavaScript can be used to store _____.",
        choices: ["a. numbers and strings", "b. booleans", "c. other arrays", "d. all of the above"],
        answer: "d. all of the above",
    },
    {
        title: "String values must be enclosed within _____ when being assigned to variables.",
        choices: ["a. quotes", "b. commas", "c. curly brackets", "d. parenthesis"],
        answer: "a. quotes"
    },
    {
        title: "A very useful tool used during development and debugging for printing content to the debugger is:",
        choices: ["a. JavaScript", "b. terminal/bash", "c. console.log", "d. for loops"],
        answer: "c. console.log"
    }
];


// Function starts quiz, hides welcome page when the start button is clicked, and starts the timer.
function startQuiz() {
    welcomeEl.classList.add("hide"); //hides welcome page
    questionsEl.removeAttribute("class"); //displays next page
    setIntervalId = setInterval(countdown, 1000); //turns on timer
    showQuest(); //calls dynamic questions
}

var setIntervalId = 0;
var timeLeft = questionGroup.length * 15;
// timer countdown as the quiz begins
function countdown() {
    timerEl.textContent = timeLeft--
    if (timeLeft === 0) {
        clearInterval(setIntervalId);
    }
}


// dynamic function to display quiz questions.
function showQuest() {
    titleEL.textContent = questionGroup[questionIndex].title;
    choicesEl[0].textContent = questionGroup[questionIndex].choices[0];
    choicesEl[1].textContent = questionGroup[questionIndex].choices[1];
    choicesEl[2].textContent = questionGroup[questionIndex].choices[2];
    choicesEl[3].textContent = questionGroup[questionIndex].choices[3];
}

// Function to proceed to the following question after answer is selected.
function nextQuestion(event){
    var currentElement = event.target;
    if (currentElement.matches("button")) {
        questionIndex++
        showQuest();
    }


}


// User actions
startBtn.addEventListener("click", startQuiz);
questionsEl.addEventListener("click", nextQuestion);