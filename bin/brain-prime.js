/* eslint-disable max-len */
/* eslint-disable quotes */
import _ from "lodash";
import readlineSync from 'readline-sync';
import cli from '../src/cli.js';

// eslint-disable-next-line comma-spacing
const simp = [2,3,5,7,11,13,17,19,23,29,31,37,41,43,47,53,59,61,67,71,73,79,83,89,97,101,103,107,109,113,127,131,137,139,149,151,157,163,167,173,179,181,191,193,197, 199];
const prime = (name) => {
  console.log('Answer "yes" if given number is prime. Otherwise answer "no".');
  let step = 0;
  while (step < 3) {
    const num = Math.floor((Math.random() * 100) + 1);
    console.log(`Question: ${num}`);
    const ans = readlineSync.question('Answer: ');
    if (_.includes(simp, num)) {
      if (ans === 'yes') {
        step += 1;
        console.log('Correct!');
      } else {
        step = 0;
        console.log(`${ans} is wrong answer ;(. Correct answer was 'yes'.`);
        console.log(`Let's try again, ${name}!`);
      }
    } else if (ans === 'no') {
      step += 1;
      console.log('Correct!');
    } else {
      step = 0;
      console.log(`${ans} is wrong answer ;(. Correct answer was 'no'.`);
      console.log(`Let's try again, ${name}!`);
    }
  }
  console.log(`Congratulations, ${name}`);
};
console.log('Welcome to the Brain Games!');
const name = cli();
prime(name);
