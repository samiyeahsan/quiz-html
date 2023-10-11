var quizContianer = document.querySelector("#quiz");
var resultContianer = document.querySelector("#show-result");
var startButton = document.querySelector("#start-quiz");
var timerSec;
var currQuestionIdx = 0;
var winner;
var timeCount = document.querySelector("#timer");
var score = 0;
var end = document.querySelector(".end");



var question = [{
  question: "Which city is the capital of Minnesota State?",
  answers: ["Eagan", "Minneapolis", " St. Paul", "Moorhead"],
  correctAnswer: "St. Paul"
},
{
  question: "What color is the skye?",
  answers: ["Black", "Brown", "Blue", "Pink"],
  correctAnswer: "Blue"
},
{
  question: "Which city is the Capital of United State of America?",
  answers: ["Minneapolis", "Seattle", "Harrisburg", "Washington DC"],
  correctAnswer: "Washington DC"
},
{
  question: "Who is the instructor of this bootcamp?",
  answers: ["Gary", "David", "Katy", "Ben"],
  correctAnswer: "Gary"
},
{
  question: "Where is the YellowStone national park located?",
  answers: ["California", "Wyoming", "Minnesota", "Pennsylvania"],
  correctAnswer: "Wyoming"
}

]

function start() {
  timerSec = 50;
  var timeInterval = setInterval(function () {
    timerSec--;
    timeCount.textContent = timerSec;
    if (timerSec <= 0) {
      clearInterval(timeInterval)
      quizEnd()
    }
  }, 1000);
  displayQuestion();
}

function displayQuestion() {
  quizContianer.innerHTML = ""
  var currQuestion = question[currQuestionIdx]
  var pTag = document.createElement("p");
  pTag.textContent = currQuestion.question
  quizContianer.appendChild(pTag)

  for (var i = 0; i < currQuestion.answers.length; i++) {
    var answer = currQuestion.answers[i]
    var btn = document.createElement("button")
    btn.textContent = answer
    btn.saveValue = answer
    btn.addEventListener("click", checkAnswers)

    quizContianer.appendChild(btn)
  }
}

function checkAnswers(event) {
  console.log(event.target)
  if (event.target.textContent === question[currQuestionIdx].correctAnswer) {
    score++
    console.log("correct")
  } else {
    timerSec -= 5
    console.log("incorrect")
  }
  if (currQuestionIdx + 1 === question.length) {

    quizEnd()
  } else {
    currQuestionIdx++
    displayQuestion()
  }
}
// function answerIsCorrect() {

// }
// function answerIsWrong() {

// }
function quizEnd() {
  

    end.textContent = "Your Score : " + score;
    end.style.display = "block"


}

/*question.addEventListener("click", function(event){
 var currQuestion = question[0]
 if( event.target.matches(button) )
 if( event.target.textContent === currQuestion.correct){
   answerIsCorrect()

 }else {
   answerIsWrong()
 }
 currQuestionIdx++
   
 })
 */
startButton.addEventListener("click", start);
