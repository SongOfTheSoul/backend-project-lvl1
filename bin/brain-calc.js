/* eslint-disable eqeqeq */
/* eslint-disable quotes */
import readlineSync from 'readline-sync';
import cli from '../src/cli.js';

const calc = (name) => {
  console.log(`What is the result of the expression?`);
  let step = 0;
  while (step < 3) {
    const num1 = Math.floor((Math.random() * 100) + 1);
    const num2 = Math.floor((Math.random() * 3) + 1);
    const num3 = Math.floor((Math.random() * 100) + 1);
    switch (num2) {
      case 1: {
        const checker = num1 + num3;
        console.log(`Question: ${num1} + ${num3}`);
        let ans = readlineSync.question('Answer: ');
        ans = Number(ans);
        if (ans === checker) {
          step += 1;
          console.log(`Correct!`);
        } else {
          step = 0;
          console.log(`${ans} is wrong answer ;(. Correct answer was ${checker}.`);
          console.log(`Let's try again, ${name}!`);
        }
        break;
      }
      case 2: {
        const checker = num1 - num3;
        console.log(`Question: ${num1} - ${num3}`);
        let ans = readlineSync.question('Answer: ');
        ans = Number(ans);
        if (ans === checker) {
          step += 1;
          console.log(`Correct!`);
        } else {
          step = 0;
          console.log(`${ans} is wrong answer ;(. Correct answer was ${checker}.`);
          console.log(`Let's try again, ${name}!`);
        }
        break;
      }
      default: {
        const checker = num1 * num3;
        console.log(`Question: ${num1} * ${num3}`);
        let ans = readlineSync.question('Answer: ');
        ans = Number(ans);
        if (ans === checker) {
          step += 1;
          console.log(`Correct!`);
        } else {
          step = 0;
          console.log(`${ans} is wrong answer ;(. Correct answer was ${checker}.`);
          console.log(`Let's try again, ${name}!`);
        }
      }
    }
  }
  console.log(`Congratulations, ${name}`);
};
console.log('Welcome to the Brain Games!');
const name = cli();
calc(name);
