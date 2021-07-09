function _new() {
  let obj = new Object();
  Constructor = [].shift.call(arguments);
  obj.__proto__ = Constructor.prototype;

  var ret = Constructor.apply(obj, arguments);

  return typeof ret === 'object' ? ret : obj;
}

/**
 * new 实现的功能
 * 新建一个对象
 * 将该对象的__proto__ 指向该的对象的构造函数的原型
 * 将执行上下文绑定到该对象
 * 如果返回一个对象  则返回该对象，
 */
