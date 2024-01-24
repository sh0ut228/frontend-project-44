#!/usr/bin/env node
/* eslint-disable import/prefer-default-export */
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

function brainPrime(PlayerName) {
  const number = Math.floor(Math.random() * 101);
  const correctAnswer = isPrime(number);
  console.log(`Question: ${number}`);
  const answer = readlineSync.question('Your answer: ');
  if (answer === correctAnswer) {
    console.log('Correct!');
    return 1;
  }
  console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
  console.log(`Let's try again, ${PlayerName}!`);
  return 0;
}

const gameName = brainPrime;
const PlayerName = names();
console.log('Answer "yes" if given number is prime. Otherwise answer "no".');
brainGameStart(PlayerName, gameName);
