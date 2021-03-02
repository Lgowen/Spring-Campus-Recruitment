Function.prototype.bind = function (context) {
    // 作错误调用判断处理
    if(typeof this !== 'function') return new Error("调用者不是函数")
     
    const _this = this
    // 获取参数列表
    let args = [...arguments].slice(1)
    
    return function newFn() {
        if(this instanceof newFn) {
            return new newFn(...args, ...arguments)
        }
        return _this.apply(context, [...args, ...arguments])
    }
 }

 let obj = {}
 let app  = function (a, b) { return a + b }
let newApp =  app.bind(obj, 1, 2)
console.log(newApp);
newApp()

Array.prototype.myReduce = function(callback, init) {
    let pre = init ? init : 0
    for(let i = 0; i < this.length; i++) {
        pre = callback(pre, this[i], i, this)
    }
    return pre
}

