// list of all questions, choices, and answers
var questions = [
  {
    title: "What is the name of the smallest bone in human body?",
    choices: ["Ulna", "Stapes", "Mandible", "Maxilla"],
    answer: "Stapes",
  },
  {
    title: "What is the largest muscle in the human body?",
    choices: ["quadratus lumborum", "psoas", "gluteus maximus", "rectus femoris"],
    answer: "gluteus maximus",
  },
  {
    title: "How many bones are in the adult human body?",
    choices: [
      "206",
      "300",
      "187",
      "126",
    ],
    answer: "206",
  },
  {
    title:
      "What is the largest organ in the body?",
    choices: ["large intestine", "pancreas", "esophagus", "skin"],
    answer: "skin",
  },
];

// variables to keep track of quiz state
// currentQuestion
// time
var timer;
// timerId
var timerCount;

var currentQuestion = 0;
var scoreTotal = 0;


// variables to reference DOM elements
var questionsEl = document.getElementById("questions");
var startBtn = document.getElementById("start-btn");
var feedBackElement = document.getElementById("feedback");
var timerId = document.querySelector(".time-sec")
var questionsToAsk = document.getElementById("questions");

/// FUNCTION TO START THE QUIZ
function startQuiz() {
  // console.log("start quiz");
  // hide start screen
  var startScreen = document.getElementById("start-screen");
  startScreen.style.display = "none";
  // un-hide questions section

  
  questionsToAsk.classList.remove("hide");

  // start timer
  timerCount = 60;

  // show starting time

  getQuestion(currentQuestion);
  timerId.textContent = "timer: " + timerCount;
  clockTick();
}
startBtn.addEventListener("click", startQuiz);

/// FUNCTION FOR CLICKING A QUESTION ///
function questionClick(event) {
  console.log("question-click");
  //this - coming from the function of "question-click", the "onclick" is calling the question-click, the btn is the button created that calls
  console.log(this.value);
  //value comes from the selection made (button clicked)
 

  if (this.value !== questions[currentQuestion].answer) {
    feedBackElement.textContent = "You're wrong! Try again!";
    // window.alert("Wrong!");
    // check if user guessed wrong
    // penalize time
    // display new time on page
    // give them feedback, letting them know it's wrong
  } else {
    feedBackElement.textContent = "You're right!";
    // window.alert("You're right!");
    // give them feedback, letting them know it's right
    scoreTotal += 25;
  }

     // move to next question
     // check if we've run out of questions
  // if so, end the quiz
  // else, get the next question
     currentQuestion++
     if (currentQuestion==questions.length){
     quizEnd(); 
     } else {
      getQuestion(currentQuestion);
     }

  // flash right/wrong feedback on page for a short period of time
  
}
/// FUNCTION TO GET/SHOW EACH QUESTION ///
function getQuestion(currentQuestion) {
  // get current question object from array

  // console.log(questions[currentQuestion].title);

  // update title with current question
  document.getElementById("question-title").textContent =
    questions[currentQuestion].title;

  // clear out any old question choices
  document.getElementById("choices").innerHTML = "";
  // loop over choices
  for (
    let index = 0;
    index < questions[currentQuestion].choices.length;
    index++
  ) {
    // console.log(questions[currentQuestion].choices[index]);
    // create new button for each choice
    var btn = document.createElement("button");
    // display on the page
    btn.textContent = questions[currentQuestion].choices[index];
    //give button a class, data attribute w/ value = text,
    btn.setAttribute("class", "btnOption");
    btn.setAttribute("value", questions[currentQuestion].choices[index]);
    //add eventListener to click // note: appendChild will keep adding buttons unless question choices are cleared prior to the for loop
    //onclick is an event that is defined as questionClick
    btn.onclick = questionClick;
    document.getElementById("choices").appendChild(btn);
    
  }

  // get current answer
  // check if correct answer
  //set up click for other buttons
}
/// FUNCTION TO END THE QUIZ ///
//show the end page 
function quizEnd() {
  console.log("end");
 
  //look at local storage --> Must "setItem" before "getItem"
  
  // stop timer



  // show end screen
//why doesn't below work?
//review "remove"
feedBackElement.classList.add("hide");

questionsToAsk.classList.add("hide");  

var endScreen = document.getElementById("end-screen");
  endScreen.classList.remove("hide");

  // function myFunction() {
  //   var element = document.getElementById("myDIV");
    
  // }
  // show final score
  var playerTotal = document.getElementById("final-score");
  playerTotal.textContent = scoreTotal
 saveHighscore();
}
/// CLICK EVENTS ///
// user clicks button to submit initials


// user clicks button to start quiz

/// FUNCTION FOR UPDATING THE TIME ///
function clockTick() {
  // update time
  timerInterval = setInterval(function() {
    timerCount--;
    timerId.textContent = "timer: " + timerCount;
  // check if user ran out of time
  if(timerCount === 0) {
    clearInterval(timerInterval);
  }
}, 1000);
}

function saveHighscore() {
  // get value of input box - for initials
  var btnSubmit = document.getElementById("submit");
  btnSubmit.onclick = printHighscores;

  

   // make sure value wasn't empty
  // if(initialsInput==) 
  // get saved scores from localstorage, or if not any, set to empty array
  // format new score object for current user
  // save to localstorage
  // redirect to next page
}

/// CLICK EVENTS ///
// user clicks button to submit initials

// user clicks button to start quiz

// user clicks on element containing choices

function printHighscores() {
  var initialsInput = document.getElementById("initials");
  console.log(initialsInput.value)
  //either get scores from localstorage or set to an empty array
  //sort highscores by score property in descending order
  //loop through scores
  //create li tag for each high score
  //display on page
}

///FUNCTION TO CLEAR SCORES
function clearHighscores() {
  //remove an item from local storage
  //reload the page
}

///CLICK EVENT TO RUN THE CLEAR SCORES FUNCTION
// run function when page loads
//   printHighscores();



//TODO: fix ReadME page adding a link & screenshot
//TODO: add another html page for high scores
//TOD