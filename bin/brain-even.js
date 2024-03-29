#!/usr/bin/env node
/* eslint-disable import/prefer-default-export */
import readlineSync from 'readline-sync';
import { brainGameStart } from '../src/index.js';
import { names } from '../src/cli.js';

function braineven(PlayerName) {
  const rand = Math.floor(Math.random() * 101);
  const correctanswer = rand % 2 === 0 ? 'yes' : 'no';
  console.log('Question:', rand);
  const answer = readlineSync.question('Your answer:');
  if (answer === correctanswer) {
    console.log('Correct!');
    return 1;
  }
  console.log(`${answer} is wrong answer ;(.Correct answer was ${correctanswer}.`);
  console.log(`Let's try again, ${PlayerName}!`);
  return 0;
}
const PlayerName = names();
const gameName = braineven;
console.log('Answer "yes" if the number is even, otherwise answer "no".');
brainGameStart(PlayerName, gameName);
