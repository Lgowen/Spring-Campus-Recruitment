const { type } = require("node:os")

class Promise {

    // 构造器 
    constructor (executor) {
        
        // 用于表示promise状态 
        // Promise存在三个状态（state）pending、fulfilled、rejected
        // pending（等待态）为初始态，并可以转化为fulfilled（成功态）和rejected（失败态）
        this.state = 'pending'
        
        // resolve 的值 成功时，不可转为其他状态，且必须有一个不可改变的值（value）
        this.value = undefined
       
        // reject  的值 失败时，不可转为其他状态，且必须有一个不可改变的原因（reason）
        this.reason = undefined

        // 用于存放成功的回调（解决异步实现）
        this.onResolvedCallbacks = []

        // 用于存放失败的回调（解决异步实现)
        this.onRejectedCallbacks = []

        // 成功
        // new Promise((resolve, reject)=>{resolve(value)}) resolve为成功，接收参数value，状态改变为fulfilled，不可再次改变。
        let resolve = value => {

            if(this.state === 'pending') {

               // 成功 状态改变为 'fullfilled'
               this.state = 'fullfilled'
               
               // 保存值
               this.value = value

               // 调用成功数组的函数
               this.onResolvedCallbacks.forEach(callback => callback())
            }
        }
        
        // 失败
        // new Promise((resolve, reject)=>{reject(reason)}) reject为失败，接收参数reason，状态改变为rejected，不可再次改变。
        let reject = reason => {   

               
            if(this.state === 'pending') {
                // 失败 状态改变为 'fullfilled'
                this.state = 'rejected'
                // 保存原因
                this.reason = reason

                // 调用失败数组的函数
               this.onRejectedCallbacks.forEach(callback => callback())
            }
        }
        
        // 立即执行
        // 若是executor函数报错 直接执行reject;
        try {
           executor(resolve, reject)
        }catch (error) {
           reject(error)
        }
        
    }

    // then 方法
    // 当状态state为fulfilled，则执行onFulfilled，传入this.value。当状态state为rejected，则执行onRejected，传入this.reason
    // onFulfilled,onRejected如果他们是函数，则必须分别在fulfilled，rejected后被调用，value或reason依次作为他们的第一个参数
    then (onFullFilled, onRejected) {
      
       // 如果不是一个函数 则返回这个值
       onFullFilled = typeof onFullFilled === 'function' ? onFullFilled : value => value  
       
       // 如果不是一个函数 直接扔出一个错误
       onRejected = typeof onRejected === 'function' ? onRejected : err => { throw err }
         
       let newPromise = new Promise((resolve, reject) => {

            // 如果状态为 fullfilled 执行 onFullFilled 传入成功的值
            if(this.state = 'fullfilled') {
                 
                // 解决onFullFilled不能同步被调用
                setTimeout(() => {
                    try {
                        let x = onFullFilled(this.value)
                        resolvePromise(newPromise, x, resolve, reject)
                    } catch (err) {
                        reject(err)
                    }
                }, 0)
            }

            // 如果状态为 rejected 执行 onRejected 传入失败的原因
            if(this.state = 'rejected') {
                
                // 解决onRejected不能同步被调用
                setTimeout(() => {
                    try {
                        let x = onRejected(this.reason)
                        resolvePromise(newPromise, x, resolve, reject)
                    } catch (err) {
                        reject(err)
                    }
                }, 0)
            }

            if(this.state = 'pending') {

                // onFulfilled传入到成功数组
                this.onResolvedCallbacks.push(() => {
                    setTimeout(() => {
                        try {
                            let x = onFullFilled(this.value)
                            resolvePromise(newPromise, x, resolve, reject)
                        } catch (err) {
                            reject(err)
                        }
                    }, 0)
                })

                // onRejected传入到失败数组
                this.onRejectedCallbacks.push(() => {
                    setTimeout(() => {
                        try {
                            let x = onRejected(this.reason)
                            resolvePromise(newPromise, x, resolve, reject)
                        } catch (err) {
                            reject(err)
                        }
                    }, 0)
                })
            }
       })
       
       return newPromise
    }
}

function resolvePromise (promise, x, resolve, reject) {


    // 循环引用报错
    if(x === promise) {
        return new TypeError("Chaining cycle detected for promise")
    }
    
    // 防止多次调用
    let called

    // x 不是null 且x 是对象或者方法
    if(x !== null && (typeof x === 'object' || typeof x === 'function')) {
        try {
            // A+规定 声明then = x 的then方法
            let then = x.then

            // 如果then是函数, 默认为promise
            if(typeof then === 'function') {
                // 就让then 执行 第一个参数是this 后面是成功的回调和失败的回调
                then.call(x, y => {
                    // 成功和失败只能调用一个
                    if(called) return 
                    called = true
                    // 递归判断结果是不是promise
                    resolvePromise(promise, y, resolve, reject)
                }, err => {
                    // 成功和失败只能调用一个
                    if(called) return 
                    called = true
                    reject(err)
                })
            } else {
                resolve(x)
            }
        } catch (e) {
            if(called) return 
            called = true
            reject(e)
        }
    } else {
        resolve(x)
    }

}