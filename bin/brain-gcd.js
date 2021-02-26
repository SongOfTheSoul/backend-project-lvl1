/* eslint-disable eqeqeq */
/* eslint-disable quotes */
import readlineSync from 'readline-sync';
import cli from '../src/cli.js';

const gcd = (a, b) => {
  if (a === b) return a;
  if (a * b === 0) return a + b;
  // eslint-disable-next-line no-param-reassign
  a %= b;
  return gcd(b, a);
};
const complgcd = (name) => {
  console.log(`Find the greatest common divisor of given numbers.`);
  let step = 0;
  while (step < 3) {
    const num1 = Math.floor((Math.random() * 100) + 1);
    const num3 = Math.floor((Math.random() * 100) + 1);
    console.log(`Question: ${num1} ${num3}`);
    const ans = readlineSync.question('Answer: ');
    if (ans == gcd(num1, num3)) {
      step += 1;
      console.log(`Correct!`);
    } else {
      step = 0;
      console.log(`${ans} is wrong answer ;(. Correct answer was ${gcd(num1, num3)}.`);
      console.log(`Let's try again, ${name}!`);
    }
  }
  console.log(`Congratulations, ${name}`);
};
console.log('Welcome to the Brain Games!');
const name = cli();
complgcd(name);
