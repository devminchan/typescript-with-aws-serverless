import * as fs from 'fs';
import { promisify } from 'util';

console.log('1. start');
let data: string = fs.readFileSync('data.txt', { encoding: 'utf-8' });
console.log(data);
console.log('2. end');

const readFile = promisify(fs.readFile);
readFile('data.txt', { encoding: 'utf-8'})
  .then((data: string) => {
    console.log(data);
  })
  .catch((e) => {
    console.error(e);
  });

