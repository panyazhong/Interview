## Promise基本原理

>1.Promise是一个类，在执行的时候会传入一个执行器，这个执行器会立即执行
>
>2.Promise有三种状态
> 
> - Pending
> - Fulfilled
> - Rejected
>
>3.状态只能有Pending --> Fulfilled 或者 Pending --> Rejected，且一旦发生改变即不可二次修改；
>
>4.Promise中使用reslove和reject两个函数来修改状态
>
>5.then方法内部做事情就是状态判断
>
> - 状态成功，调用成功回调函数
> - 状态失败，调用失败回调函数

