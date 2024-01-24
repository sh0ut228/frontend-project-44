#!/usr/bin/env node
/* eslint-disable import/prefer-default-export */
/* eslint no-eval: 0 */
//
import readlineSync from 'readline-sync';
import { names } from '../src/cli.js';
import { brainGameStart } from '../index.js';

function randomOperation() {
  const operations = ['+', '-', '*'];
  const randomIndex = Math.floor(Math.random() * operations.length);
  return operations[randomIndex];
}

function generator() {
  const rand = Math.floor(Math.random() * 101);
  const rand2 = Math.floor(Math.random() * 101);
  const rand3 = randomOperation();
  return [rand, rand3, rand2];
}

function calculateExpression(rand3, rand, rand2) {
  switch (rand3) {
    case '*':
      return rand * rand2;
    case '+':
      return rand + rand2;
    default:
      return rand - rand2;
  }
}

function braicalc(PlayerName) {
  const expression = generator();
  const correctanswer = calculateExpression(expression[1], expression[0], expression[2]);
  console.log('Question:', expression[0], expression[1], expression[2]);
  const answer = readlineSync.question('Your answer:');
  if (parseInt(answer, 10) === parseInt(correctanswer, 10)) {
    console.log('Correct!');
    return 1;
  } console.log(`${answer} is wrong answer ;(.Correct answer was ${correctanswer}.`);
  console.log(`Let's try again, ${PlayerName}!`);
  return 0;
}

const gameName = braicalc;
const PlayerName = names();
console.log('What is the result of the expression?');
brainGameStart(PlayerName, gameName);
