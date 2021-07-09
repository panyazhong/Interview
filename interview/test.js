var a = 1;

function foo() {
  var o = { a: 3 };

  with (o) {
    var a = 2;
  }

  console.log(o);
  console.log(o.a);

  console.log(a);
}

foo();

let result = {};
['a1', 'a2', 'b1', 'b2'].forEach((item) => {
  let i = /\d*$/.exec(item)[0];
  result[i] ? result[i].push(item) : (result[i] = [item]);
});
console.log(Object.values(result));

console.log(
  Object.entries({
    a: 1,
    b: 2,
  })
);

const entries = new Map([
  ['foo', 'bar'],
  ['baz', 42],
]);

const obj = Object.fromEntries(entries);

console.log(Object.assign({}, [1, 2, 3]));

console.log({ ...[1, 2, 3] });

console.log(entries.get('foo'));
console.log(obj);
