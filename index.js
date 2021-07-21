var readlineSync=require('readline-sync');
const chalk = require('chalk');
console.log("Hi Buddy !!")
console.log("Let's play a game : How well do you know me?")
var name=readlineSync.question("What is your name?  ")
console.log(chalk.green("Welcome  "+name+'!'));
var score=0;
//play function
function play(question,answer)
{
  var userans=readlineSync.question(question);
  if(userans.toUpperCase()===answer)
  {console.log(chalk.green("Correct"));
  
    score++;
  }
  else{
    console.log(chalk.red("Wrong"));
    score--;
  }
}
var q1={
  question:"What's my full name ?  ",
  answer:"ARYANAND ARNAV"
}
var q2={
  question:"Where do I live ?  ",
  answer:"PATNA"
}
var q3={
  question:"How old am I?  ",
  answer:"23"
}
var q4={
  question:"My favourite song ?  ",
  answer:"HUMDARD"
}
var q5={
  question:"My favourite actor ? ",
  answer:"SHAHRUKH KHAN"
}

console.log("Questions")

var questionset=[q1,q2,q3,q4,q5];
for(i=0;i<questionset.length;i++)
{ console.log("---------------")
  var currentquestion=questionset[i];
  play(currentquestion.question,currentquestion.answer);
}

console.log("---------------")
console.log(chalk.red("Your score is : "+score));

if(score>=3)
{ console.log(chalk.yellow("You kinda know me well :) "));

  console.log("---------------")
}
else
  
{ console.log(chalk.red("Yet to know me :( "));
  console.log("---------------")
}
