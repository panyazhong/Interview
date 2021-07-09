function moveRight(arr, n) {
  const movedArr = [];
  const l = arr.length;
  for (let i = 0; i < l; i++) {
    movedArr[i + n] = arr[i];
  }
  return movedArr;
}

console.log(moveRight([1, 2, 3, 4, 5, 6, 7], 10));
