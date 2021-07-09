for (let i = 0; i < 50; i++) {
  setTimeout(() => {
    console.log('t:', i);
  }, 1000);
}

setInterval(() => {
  console.log('I:', 1);
}, 100);
 