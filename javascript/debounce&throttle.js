// 触发高频事件后n秒内只会执行一次。如果n秒内再次被触发，则重新计时
function debounce(func, timeout) {
  let timer;
  return function () {
    clearInterval(timer);

    timer = setTimeout(() => {
      func();
    }, timeout);
  };
}

// 节流  高频事件触发后，n秒内只会执行一次，会稀释函数的执行效率
function throttle(func, timeout) {
  let _lastTime;

  return function () {
    let _curTime = +new Date();
    if (_curTime - _lastTime > timeout || !_lastTime) {
      func();

      _lastTime = _curTime;
    }
  };
}
