var readlineSync = require("readline-sync");
var chalk = require('chalk');
var score=0;

var highScores = [
  {
    name: "Ayushi",
    score: 10,
  },

  {
    name: "UC",
    score: 9,
  },
]
var questions = [{
  question: "Where is my home town?",
  answer: "Barabanki"
}, {
  question: "Where currently I am living?",
  answer: "Lucknow"
},
{
  question: "What is the name of my college?",
  answer: "IET RMLU"
},
 {
  question: "What is my favorite goto food?",
  answer: "Dosa"
},
 {
  question: "Which is my fav web series?",
  answer: "Dark"
}, {
  question: "What my Friends used to call me?",
  answer: "UC"
}, {
  question: "What is the name of my bestfriend?",
  answer:" Nayanshi"
}, {
  question: "What is her nickname?",
  answer: "Nano"
}, {
  question: "What is my favorite tech language?",
  answer: "Javascript"
}, {
  question: "What is name of my favorite game?",
  answer: "Lucknow"
},];
const welcomeUser =()=>{
  var userName = readlineSync.question("What's your name? ");
  console.log(chalk.yellowBright('Welcome ')+ userName +chalk.yellowBright.bold(' to DO YOU KNOW ME ?\n'));
  console.log("There are 10 questions, answer them and check how much u know about me ;)")
}

const play =(question, answer)  =>{
  var userAnswer = readlineSync.question(chalk.bgCyan(question));

  if (userAnswer.toUpperCase() === answer.toUpperCase()) { 
    console.log("CORRECT");
    score = score + 1;
    
  } else {
    console.log("WRONG");
   
  }

  console.log("current score: ", score);
  console.log("___________________________________")
}

const game =()=> {
  for (var i=0; i<questions.length; i++) {
    var currentQuestion = questions[i];
    play(currentQuestion.question, currentQuestion.answer)
  }
}


const showScores =()=> {
  console.log(chalk.cyan("Your total score ", score));

  console.log("Check the high scores, if your total score is higher that the high score ping me, I'll update it :)");
console.log (chalk.bgYellowBright("Current high scores" ))
  highScores.map(score => console.log(chalk.yellowBright(score.name), " : ", score.score))
  console.log ("Thank You for Playing 😀")
}
welcomeUser()
game()
showScores()