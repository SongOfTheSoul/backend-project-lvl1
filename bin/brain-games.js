#!/usr/bin/env node
import cli from '../src/cli.js';
import even from './brain-even.js';

console.log('Welcome to the Brain Games!');
const name = cli();
even(name);
