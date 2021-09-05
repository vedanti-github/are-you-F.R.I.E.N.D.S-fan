var readLineSync = require('readline-sync')
const chalk = require('chalk')

// welcome function
function welcome()
{
var userName = readLineSync.question('What is your name? ')
console.log(chalk.red('Welcome! ' + userName));
console.log(chalk.bold.blue("Let's see how well you know ") + chalk.red.underline.italic("F.R.I.E.N.D.S"))
}

var highestScore = 4
var score = 0

// play function
function play(question, answer){
  userAnswer = readLineSync.question(question)
  if (userAnswer.toUpperCase() == answer.toUpperCase()){
    score++;
    console.log(chalk.yellowBright('You are right!'))
  }else{
    console.log(chalk.yellowBright('You are wrong!'))
  }
  console.log('your current score is ', score)
  console.log(chalk.green('-----------------------------------------'))
}

// array of questions
var questionList = [
question1 = {
  question:'How many seasons of Friends are there?' + '\n' + "a) Eleven" + '\n' + "b) Ten" + '\n',
  answer: 'ten' 
},
question2 = {
  question: 'How many times did Ross get divorced?'+ '\n' + "a) Three" + '\n' + "b) two" + '\n' ,
  answer: 'three'
},
question3 = {
  question: "What does Rachel guess Chandler’s job is?" + '\n' + "a) A transponster" + '\n' + "b) A transponder" + '\n',
  answer: "A transponster"
},
question4 = {
  question: "Joey doesn’t share what?" + '\n' + "a) food" + '\n' + "b) grapes" + '\n',
  answer: "food"
},
question5 = {
  question: 'Ross says whose name at the altar in London? ' + '\n' + "a) Emily" + '\n' + "b) Rachel" + '\n',
  answer: 'Rachel'
}
]

// game function
function game(){
for(var i = 0; i < questionList.length; i++){
  var currentQuestion = questionList[i]
  play(currentQuestion.question, currentQuestion.answer)}
}

// array of highest scorers
var highScore = [
  { name: 'Afreen',
    score: 4
  },
  { name: 'Rutuja',
    score: 5
}]

// Show score function
function showScore(){
  console.log('Your final score is: ', score)
  console.log(chalk.cyan("Check out the high scores, if you should be there ping me the screenshot of the score and I'll update it"))
  highScore.map(scores => console.log(scores.name + ' : ' + scores.score))
}

// calling all function serial wise
welcome()
game()
showScore()
