import readlineSync from 'readline-sync';

export function names () {
    console.log('Welcome to the Brain Games!');
    const name = readlineSync.question('Your answer: ');
    console.log(`May I have your name?`, `${name}`);
    console.log(`Hello,`,`${name}`)};