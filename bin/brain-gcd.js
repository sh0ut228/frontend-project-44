import readlineSync from 'readline-sync';
import { names } from '/home/student031/frontend-project-44/src/cli.js';
import { brainGameStart } from '/home/student031/frontend-project-44/index.js';


function findGCD(num1, num2) {
  let gcd = 1;
  for (let i = 1; i <= num1 && i <= num2; i += 1) {
    if (num1 % i === 0 && num2 % i === 0) {
      gcd = i;
    }
  }
  return gcd;
};


function braingcd() {
  const rand = Math.floor(Math.random() * 101);
  const rand2 = Math.floor(Math.random() * 101);
  const correctanswer = findGCD(rand, rand2);
  console.log(rand, rand2);
  const answer = readlineSync.question('Your answer:');
  if (parseInt(answer, 10) === correctanswer) {
    console.log('Correct!');
    return 1;
  }
  console.log(`${answer} is wrong answer ;(.Correct answer was ${correctanswer}.`);
  console.log(`Let's try again,${PlayerName}`);
  return 0;
};

const gameName = braingcd;
const PlayerName = names();
console.log('Find the greatest common divisor of given numbers.');
brainGameStart(PlayerName, gameName);