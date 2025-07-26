
const questions = [
  {
    question: "how many days in a week?",
    possibleAnswers: ["7","42","69"],
    correctAnswer: "7",
  },
  {
    question: "how many weeks in a month?",
    possibleAnswers: ["7","4","69"],
    correctAnswer: "4",
  },
  {
    question: "how many months in year?",
    possibleAnswers: ["7","12","69"],
    correctAnswer: "12",
  },
   {
    question: "how many days in year?",
    possibleAnswers: ["7","365","369"],
    correctAnswer: "365",
}];

const questionContainer = document.getElementById("questionContainer");
const answerContainer = document.getElementById("answerContainer");
let currentQuestionIndex = 0;
let score =  0;
const scorefr = document.getElementById("score");


function handleQuestion(index) {

  questionContainer.innerHTML = `
    <p>${questions[index].question}</p>
  `;


  answerContainer.innerHTML = "";
  questions[index].possibleAnswers.forEach((answer) => {
    answerContainer.innerHTML += `<button>${answer}</button>`;
  });


  let answers = document.querySelectorAll("button");
  answers.forEach((answer) => {
    answer.addEventListener("click", (event) => {
      if (event.target.textContent === questions[index].correctAnswer) {
        score++;
      }
      if (currentQuestionIndex === questions.length - 1) {
        currentQuestionIndex = 0;
      } else {
        currentQuestionIndex++;
      }
      handleQuestion(currentQuestionIndex);
    });
  });

  scorefr.innerText = "the total score is " + score;
}

handleQuestion(currentQuestionIndex);


