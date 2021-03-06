/* eslint-disable eqeqeq */
/* eslint-disable quotes */
import readlineSync from 'readline-sync';
import cli from '../src/cli.js';

const progression = (name) => {
  console.log('What number is missing in the progression?');
  let step = 0;
  while (step < 3) {
    const a = Math.floor((Math.random() * 30) + 10);
    const h = Math.floor((Math.random() * 10) + 1);
    const empty = Math.floor(Math.random() * 9);
    const arr = [];
    for (let i = 0; i < 10; i += 1) {
      arr[i] = a + h * i;
    }
    arr[empty] = '..';

    console.log(`Question: ${arr[0]} ${arr[1]} ${arr[2]} ${arr[3]} ${arr[4]} ${arr[5]} ${arr[6]} ${arr[7]} ${arr[8]} ${arr[9]} `);
    let ans = readlineSync.question('Answer: ');
    ans = Number(ans);
    const checker = a + h * empty;
    if (ans === checker) {
      step += 1;
      console.log('Correct!');
    } else {
      step = 0;
      console.log(`${ans} is wrong answer ;(. Correct answer was ${checker}.`);
      console.log(`Let's try again, ${name}!`);
    }
  }
  console.log(`Congratulations, ${name}`);
};
console.log('Welcome to the Brain Games!');
const name = cli();
progression(name);
