/* eslint-disable quotes */
import readlineSync from 'readline-sync';

const even = (name) => {
  console.log(`Answer "yes" if the number is even, otherwise answer "no".`);
  let step = 0;
  while (step < 3) {
    const num = Math.floor((Math.random() * 100) + 1);
    console.log(`Question: ${num}`);
    const ans = readlineSync.question('Answer: ');
    if (num % 2 === 0) {
      if (ans === 'yes') {
        step += 1;
        console.log(`Correct!`);
      } else {
        step = 0;
        console.log(`${ans} is wrong answer ;(. Correct answer was 'yes'.`);
        console.log(`Let's try again, ${name}!`);
      }
    } else if (ans === 'no') {
      step += 1;
      console.log(`Correct!`);
    } else {
      step = 0;
      console.log(`${ans} is wrong answer ;(. Correct answer was 'no'.`);
      console.log(`Let's try again, ${name}!`);
    }
  }
  console.log(`Congratulations, ${name}`);
};
export default even;
