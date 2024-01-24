#!/usr/bin/env node
import readlineSync from 'readline-sync';
import { names } from '../src/cli.js';
import { brainGameStart } from '../index.js';

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

const PlayerName = names();

function playprime() {
  const rand = Math.floor(Math.random() * 101);
  console.log(`Question: ${rand}`);
  const answer = readlineSync.question('Your answer:');
  const correctAnswer = isPrime(rand);
  if (answer === correctAnswer) {
    console.log('Correct!');
    return 1;
  } console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
  console.log(`Let's try again, ${PlayerName}!`);
  return 0;
}
const gameName = playprime;
console.log('Answer "yes" if given number is prime. Otherwise answer "no".');
brainGameStart(PlayerName, gameName);
