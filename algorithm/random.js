// 如何实现数组的随机排序？
const arr = [4, 5, 1, 3];
// 随机数排序
function random(arr) {
  return arr.sort(() => Math.random() - 0.5);
}

console.log(random(arr));

// 插入排序
function insertRandom(arr) {
  let cArr = [...arr];
  let newArr = [];

  while (cArr.length) {
    let index = Math.floor(Math.random() * cArr.length);
    newArr.push(cArr[index]);
    cArr.splice(index, 1);
  }

  return newArr;
}

console.log(insertRandom(arr));

// 洗牌算法
function random1(arr) {
  let l = arr.length;

  for (let i = 0; i < l; i++) {
    const index = Math.floor(Math.random() * (l - i) + i)

    var temp = arr[index]
    arr[index] = arr[i]
    arr[i] = temp
  }

  return arr
}

console.log(random1(arr))