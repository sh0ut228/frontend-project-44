#!/usr/bin/env node
// import { names } from '../src/cli.js';
// names();
/* eslint-disable import/prefer-default-export */

import readlineSync from 'readline-sync';

console.log('Welcome to the Brain Games!');
const name = readlineSync.question('May I have your name? ');
console.log('Hello,', `${name}`);
