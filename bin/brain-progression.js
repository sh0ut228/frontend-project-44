#!/usr/bin/env node
import readlineSync from 'readline-sync';
import { names } from '../src/cli.js';
import { brainGameStart } from '../index.js';

function mass() {
  const lena = Math.floor(Math.random() * 6) + 5;
  const start = Math.floor(Math.random() * 11);
  const diff = Math.floor(Math.random() * 11);
  const prog = [start];
  for (let i = 1; i < lena; i += 1) {
    prog.push(start + diff * i);
  }
  return prog;
}
function PlayProgression(PlayerName) {
  const progression = mass();
  const hiddenIndex = Math.floor(Math.random() * progression.length);
  const hiddenValue = progression[hiddenIndex];
  progression[hiddenIndex] = '..';
  console.log(`Question: ${progression.join(' ')}`);
  const userAnswer = readlineSync.question('Your answer: ');
  const correctAnswer = hiddenValue;
  if (parseInt(userAnswer, 10) === correctAnswer) {
    console.log('Correct!');
    return 1;
  }
  console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
  console.log(`Let's try again, ${PlayerName}!`);
  return 0;
}

const PlayerName = names();
const gameName = PlayProgression;
console.log('What number is missing in the progression?');
brainGameStart(PlayerName, gameName);
