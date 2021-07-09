// test.js

// const MyPromise = require('./MyPromise');
// const promise = new MyPromise((resolve, reject) => {
//   resolve('success');
//   // throw new Error('执行器错误')
// });

// // 第一个then方法中的错误要在第二个then方法中捕获到
// promise
//   .then(
//     (value) => {
//       console.log(1);
//       console.log('resolve', value);
//       throw new Error('then error');
//     },
//     (reason) => {
//       console.log(2);
//       console.log(reason.message);
//     }
//   )
//   .then(
//     (value) => {
//       console.log(3);
//       console.log(value);
//     },
//     (reason) => {
//       console.log(4);
//       console.log(reason.message);
//     }
//   );

// function foo(params) {
//   setTimeout(() => {
//     console.log(1);
//     setTimeout(() => {
//       console.log(2);
//       new Promise((resolve) => {
//         resolve();
//       }).then(() => {
//         console.log(3);
//       });
//     });
//     new Promise((resolve) => {
//       console.log(4);
//       resolve();
//     }).then(() => {
//       console.log(5);
//     });
//   });
//   new Promise((resolve) => {
//     console.log(6);
//     setTimeout(() => {
//       console.log(7);
//     });

//     resolve();
//   }).then(() => {
//     console.log(8);
//   });
// }
function foo(a) {
  var a = 10;
  function a() {}

  console.log(a);
}
foo(20);

var x = {
  a: 1,
};
var y = {};

y.prototype = { b: 1 };
y.__proto__ = { c: 1 };
x.__proto__ = y.prototype;

console.log(x.a, x.b, x.c);
