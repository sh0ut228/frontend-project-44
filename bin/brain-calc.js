import readlineSync from 'readline-sync';
import { names } from '/home/student031/frontend-project-44/src/cli.js';
import { brainGameStart } from '/home/student031/frontend-project-44/index.js';


function randomOperation() {
  const operations = ['+', '-', '*'];
  const randomIndex = Math.floor(Math.random() * operations.length);
  return operations[randomIndex];
};

function generator() {
  const rand = Math.floor(Math.random() * 101);
  const rand2 = Math.floor(Math.random() * 101);
  const rand3 = randomOperation();
  return `${rand} ${rand3} ${rand2}`
};

function calculateExpression(expression) {
  return eval(expression);
};

function braicalc(PlayerName) {
  const expression = generator();
  const correctanswer = calculateExpression(expression);
  console.log(`Question: ${expression}`);
  const answer = readlineSync.question('Your answer:');
  if (parseInt(answer, 10) === correctanswer) {
    console.log('Correct!');
    return 1;
  } console.log(`${answer} is wrong answer ;(.Correct answer was ${correctanswer}.`);
  console.log(`Let's try again,${PlayerName}`);
  return 0;
};

const gameName = braicalc;
const PlayerName = names();
console.log('What is the result of the expression?');
brainGameStart(PlayerName, gameName);
