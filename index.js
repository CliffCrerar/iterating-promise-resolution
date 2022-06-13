// run `node index.js` in the terminal

//console.log(`Hello Node.js v${process.versions.node}!`);

var iterations = 5;
var time = 5000;

const promiseTimout = (num) =>
  new Promise((resolve, reject) => {
    console.log('Evaluating Promise Number: ', num);
    num % 2 == 0
      ? setTimeout(() => resolve(num), time)
      : setTimeout(() => reject(num), time);
  });

let promiseArr = [];

for (let i = 0; i < iterations; i++) {
  console.log('ITERATION', i);
  promiseArr.push(promiseTimout(i));
}

Promise.all(promiseArr)
  .then((result) => {
    console.log(result);
  })
  .catch((errors) => {
    console.log(errors);
  });
