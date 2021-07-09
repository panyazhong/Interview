// 迭代器
const getRawType = (target) =>
  Object.prototype.toString.call(target).slice(8, -1);
const __createArrayIterable = (arr) => {
  if (typeof Symbol !== 'function' || !Symbol.iterator) return;

  if (getRawType(arr) !== 'Array') throw new Error('it must a array');

  const iterable = {};

  iterable[Symbol.iterator] = () => {
    arr.length++;

    const iterator = {
      next: () => {
        return {
          value: arr.shift(),
          done: arr.length <= 0,
        };
      },
    };
    return iterator;
  };

  return iterable;
};

const arr = ['test', 'hello world'];

const ite = __createArrayIterable(arr)[Symbol.iterator]();

console.log(ite.next());
console.log(ite.next());
console.log(ite.next());

function* gen() {
  const ask1 = yield '2 + 2 = ?';
  console.log('ask1:', ask1);

  const ask2 = yield '3 * 3 = ?';
  console.log('ask2:', ask2);
}

const generator = gen();

console.log(generator.next());

console.log(generator.next(4));

console.log(generator.next(9).done);

const aa = async () => {
  const res1 = await Promise.resolve({ a: 1 });
  console.log(res1);

  const res2 = await Promise.resolve({ b: 2 });
  console.log(res2);

  return 'done';
};
const res = aa();
