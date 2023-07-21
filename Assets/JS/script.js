var welcomeEl = document.querySelector("#intro-section");
var startBtn = document.querySelector("#start-btn");
var timerEl = document.querySelector("#timer");
var questionsEl = document.querySelector("#questions");
var choicesEl = document.querySelectorAll(".choices");
var titleEL = document.querySelector("#title");
var answerEl = document.querySelector("#answer");
var initialEl = document.querySelector("#initials");
var highScoreEl = document.querySelector("#highscore");
var scoreEl = document.querySelector("#score");
var headerEl = document.querySelector("a");
var backBtn = document.querySelector("#back-btn");
var submitBtn = document.querySelector("#submit");
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

    answerEl.textContent = "";
}

// Function to proceed to the following question after answer is selected.
function nextQuestion(event) {
    var currentElement = event.target;

    if (currentElement.matches("button")) {
        if (currentElement.textContent === questionGroup[questionIndex].answer) {
            answerEl.textContent = "Correct!";
        } else {
            answerEl.textContent = "Wrong!";
            timeLeft = timeLeft - 10; //if wrong answer is selected, deduct 10 seconds
        }
        questionIndex++
    }
    // this statement will delay the call to the next question
    if (currentElement.matches("button")) {
        if (questionIndex < questionGroup.length) {
            setTimeout(showQuest, 500);
        }
        //this statement will hide the questions and display the score page.
        else {
            questionsEl.classList.add("hide");
            initialEl.removeAttribute("class");
            clearInterval(setIntervalId);
            scoreEl.textContent = timerEl.textContent;
        }
    }
}

// function to review all high scores using header link.
function viewHighScore() {
    welcomeEl.classList.add("hide");
    questionsEl.classList.add("hide");
    initialEl.classList.add("hide");
    highScoreEl.removeAttribute("class");
}

// Function to return to the homepage from the Highscore page.
function goBack() {
    highScoreEl.classList.add("hide");
    welcomeEl.removeAttribute("class");
}



// User actions
startBtn.addEventListener("click", startQuiz);
questionsEl.addEventListener("click", nextQuestion);
headerEl.addEventListener("click", viewHighScore);
backBtn.addEventListener("click", goBack)

