Function.prototype.call = function (context = window) {
    if(typeof this !== 'function') return new Error("该方法不是函数")

    let args = [...arguments].slice(1)

    context.fn = this

    let result = context.fn(...args)

    delete context.fn

    return result
}

Function.prototype.apply = function (context = window) {
    if(typeof this !== 'function') return new Error("该方法不是函数")

    let args = arguments[1]

    context.fn = this
    
    let result = context.fn([...args])

    delete context.fn
     
    return result 
}

Function.prototype.bind = function (context) {
    if(typeof this !== 'function') return new Error("该方法不是函数")
    
    let fn = this

    let args = [...arguments].slice(1)

    return function Fn () {
        if(fn instanceof Fn) {
            return new fn(...args, ...arguments)
        }else {
            fn.apply(context, [...args, ...arguments])
        }
    }
}

function curry (fn, args = []) {
    
    let length = fn.length

    return function () {

        let newArgs = args.slice(0)
    
        for(let i = 0; i < arguments.length; i++) {
            newArgs.push(arguments[i])
        }

        if(newArgs.length > length) {
            return fn.apply(this, newArgs)
        }else {
            return curry.call(this, fn, newArgs)
        }
    }
}


function add (...args) {
    let result = 0

    result = args.reduce((pre, cur) => pre + cur, 0)

    let sum = function (...args) {
        result = args.reduce((pre, cur) => pre + cur, result)
        return sum
    }

    sum.toString = function () {
        return result
    }

    return sum
}

function flatArr (arr) {
    if(!Array.isArray(arr)) return 

    let result = []

    result = arr.reduce((pre, cur) => {
       return pre.concat(Array.isArray(cur) ? flatArr(cur) : cur)
    }, [])


    return result
}

function flatArr (arr) {
    return arr.toString()
}


// 状态
const PENDING = 'pending'
const FULFILLED = 'fulfilled'
const REJECTED = 'rejected'

function MyPromise (callback) {

    // 保存new Promise之后的this指向
    let self = this

    // 存放promise状态
    this.state = PENDING

    // 用于保存resolve或reject传入的值
    this.value = null

    // 存放成功的回调和失败的回调
    this.fulfilledCallbacks = []
    this.rejectedCallbacks = []

    // 
    function resolve(value) {
        if(value instanceof MyPromise) {
            return value.then(resolve, reject)
        }

        setTimeout(() => {
            // 只有状态是pending时需要改变
            if(self.state === PENDING){
                self.state = FULFILLED
                
                self.value = value

                self.resolvedCallbacks.forEach(callback => callback(value))
            }
        }, 0)
    }

    function reject(value) {

        setTimeout(() => {
            // 只有状态是pending时需要改变
            if(self.state === PENDING){
                self.state = REJECTED
                
                self.value = value

                self.rejectedCallbacks.forEach(callback => callback(value))
            }
        }, 0)
    }

    try {
        callback(resolve, reject)
    } catch (e) {
        reject(e)
    }
}

MyPromise.prototype.then = function (fulfilledCallback, rejectedCallback) {
    fulfilledCallback = typeof fulfilledCallback === 'function' ? fulfilledCallback : function (value) { return value }

    rejectedCallback = typeof rejectedCallback === 'function' ? rejectedCallback : function (error) { throw error }

    if(this.state === PENDING) {
        this.fulfilledCallbacks.push(fulfilledCallback)
        this.rejectedCallbacks.push(rejectedCallback)
    }

    if(this.state === FULFILLED) {
        fulfilledCallback(this.value)
    }

    if(this.state === REJECTED) {
        rejectedCallback(this.value)
    }
<<<<<<< HEAD
    return pre
}

=======
}

let promise = new MyPromise(function (resolve, rejectd) {
   resolve(1) 
})

promise.then(res => console.log(res)) // 1


>>>>>>> 346aae801831677aa8cd8182bbc7a1e2130f641d
