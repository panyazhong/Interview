// 考察== 会隐式类型转换  会调用toString valueOf  复写其中一个即可

let a = {
  value: 0,
  valueOf: () => {
    return ++a.value;
  },
};
// a为何值是打印1
if (a == 1 && a == 2 && a == 3) {
  console.log(1);
}
