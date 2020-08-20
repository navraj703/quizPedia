const question = document.getElementById("question");
const choices = Array.from(document.getElementsByClassName("choise_text"))
const questionCounterText=document.getElementById("questionCounter")
const scoreText=document.getElementById("score")
const progrgess_bar_full=document.getElementById("progrgess_bar_full")


// console.log(questionCounterText)
// console.log(question)
// console.log(choises);
let currentQuestion = {};
let acceptingAnswer = false;
let score = 0;
let questionCounter = 0;
let questionsHave = [];

let questions = [
  {
    question: "Which tag is use to break line in Html?",
    choice1: "<br>",
    choice2: "<hr>",
    choice3: "<js>",
    choice4: "<p>",
    answer: 1
  },
  {
    question:
      "Which is the right exetension of Html?",
    choice1: ".htm",
    choice2: ".html",
    choice3: "A and B both",
    choice4: "none of above",
    answer: 3
  },
  {
    question: " How do you write 'Hello World' in an alert box?",
    choice1: "msgBox('Hello World')",
    choice2: "alertBox('Hello World')",
    choice3: "msg('Hello World')",
    choice4: "alert('Hello World')",
    answer: 4
  },
  {
    question: " How do you print 'Hello World' on console ?",
    choice1: "console.log(Hello World)",
    choice2: "console.log('Hello World')",
    choice3: "msg('Hello World');",
    choice4: "console.log/'Hello World'",
    answer: 2
  },
  {
    question: " which is the example of an IDE?",
    choice1: "brackets",
    choice2: "vsCode",
    choice3: "notepad",
    choice4: "A and B both",
    answer: 4
  },
  {
    question: "Html stands for?",
    choice1: "Hypertext Markup Language",
    choice2: "Hypertext Market Language",
    choice3: "High Markup Language",
    choice4: "Hyper Markup Language",
    answer: 1
  },
  {
    question: "Vs Code is an?",
    choice1: "Language",
    choice2: "IDE",
    choice3: "High Level Language ",
    choice4: "Text Editor",
    answer: 2
  },
  {
    question: "How many heading tag are there in Html?",
    choice1: "One",
    choice2: "Six",
    choice3: "four",
    choice4: "three",
    answer: 2
  },
  {
    question: "Which is the example of a 'string 'data-type in 'JavaScript'?",
    choice1: `"Hello world"`,
    choice2: '/Hello world',
    choice3: "[Hello world]",
    choice4: "{Hello world}",
    answer: 1
  },
  {
    question: "The web browser Chrome is made by which company?",
    choice1: `microsoft`,
    choice2: 'apple',
    choice3: "Amazon",
    choice4: "Google",
    answer: 4
  },
];
const correctPoints = 10;
const MaxQuestion = 10;

startGame = () => {
  questionCounter = 0;
  score = 0;
  questionsHave = [...questions];

  getNewQuestion();
};
getNewQuestion = () => {
  if (questionsHave.length === 0 || questionCounter >= MaxQuestion) {
    localStorage.setItem("mostRecentScore", score);
    return window.location.assign("./end.html");
  }
  questionCounter++;
  questionCounterText.innerText=`Question ${questionCounter}/${MaxQuestion}`
  //progress Bar
  progrgess_bar_full.style.width=`${(questionCounter/MaxQuestion)*100}%`
  const questionIndex = Math.floor(Math.random() * questionsHave.length);
  currentQuestion = questionsHave[questionIndex];
  question.innerText = currentQuestion.question;

  choices.forEach(choice => {
    const number = choice.dataset["number"];
    choice.innerText = currentQuestion["choice" + number];
  });
  questionsHave.splice(questionIndex, 1);
  console.log(questionsHave);
  acceptingAnswers = true;
}
choices.forEach(choice => {
  choice.addEventListener("click", e => {
    if (!acceptingAnswers) return;

    acceptingAnswers = false;
    const selectedChoice = e.target;
    const selectedAnswer = selectedChoice.dataset["number"];
    const AnwserClass =
      selectedAnswer == currentQuestion.answer ? "correct" : "incorrect";
    if(AnwserClass==="correct"){
      riseScore(correctPoints)
    }
    selectedChoice.parentElement.classList.add(AnwserClass);

    setTimeout(() => {
     
      selectedChoice.parentElement.classList.remove(AnwserClass);
      getNewQuestion();
    }, 1000);
   
  });

  
});
riseScore= num  =>{
  score+=num;
  scoreText.innerText=score;
}


startGame();
