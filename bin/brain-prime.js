import readlineSync from 'readline-sync';
import { names } from '/home/student031/frontend-project-44/src/cli.js';
import { brainGameStart } from '/home/student031/frontend-project-44/index.js';

function isPrime(num) {
    if (num <= 1) {
      return 'no';
    }
    for (let i = 2; i <= Math.sqrt(num); i += 1) {
      if (num % i === 0) {
        return 'no';
      }
    }
    return 'yes';
  }
function playprime () {
    const rand = Math.floor(Math.random()*101);
    const prime = isPrime;
    console.log(`Question: ${rand}`);
    const answer = readlineSync.question('Your answer:');
    const correctAnswer = prime(rand);
    if ( answer === correctAnswer ) {
        console.log('Correct!');
        return 1;
    } console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
    console.log(`Let's try again, ${PlayerName}!`);
    return 0;
  }
  const PlayerName = names();
  const gameName = playprime;
  console.log('Answer "yes" if given number is prime. Otherwise answer "no".');
  brainGameStart(PlayerName, gameName);