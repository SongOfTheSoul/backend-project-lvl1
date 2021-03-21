/* eslint-disable quotes */
import readlineSync from 'readline-sync';
import cli from '../src/cli.js';
import rng from '../src/rng.js';

const even = (name) => {
  const wincount = 3;
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  let step = 0;
  while (step < wincount) {
    const num = rng(1, 100);
    console.log(`Question: ${num}`);
    const ans = readlineSync.question('Answer: ');
    if (num % 2 === 0) {
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
even(name);
