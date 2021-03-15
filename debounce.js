// 函数防抖： 在事件被触发 n 秒后再执行回调，如果在这 n 秒内事件又被触发，则重新计时。
function debounce (fn, wait) {
    
    let timer = null

    return function () {
        let context = this
        let args = arguments

        if(timer) {
            clearTimeout(timer)
            timer = null
        }

        timer = setTimeout(() => {
           fn.apply(context, args)
        }, wait)
    }
}

// 函数节流： 规定一个单位时间，在这个单位时间内，只能有一次触发事件的回调函数执行，如果在同一个单位时间内某事件被触发多次，只有一次能生效。
function throttle (fn, wait) {
    let preTime = Date.now()

    return function () {
        let nowTime = Date.now()
        let context = this
        let args = arguments

        if(nowTime - preTime >= wait) {
            preTime = Date.now()
            return fn.apply(context, args)
        }
    }
}

function throttle (fn, wait) {
    let timer = null
    
    return function () {
        let context = this
        let args = arguments

        if(!timer) {
            timer = setTimeout(() => {
                fn.apply(context, args)
                timer = null
            }, wait)
        }
    }
}


// 区别在于，使用时间戳实现的节流函数会在第一次触发事件时立即执行，以后每过 delay 秒之后才执行一次，并且最后一次触发事件不会被执行；
// 而定时器实现的节流函数在第一次触发时不会执行，而是在 delay 秒之后才执行，当最后一次停止触发后，还会再执行一次函数。


function debouce(fn, time) {
    let timer = null

    return function () {

        const _this = this
        const args = arguments

        if (timer) {
            clearTimeout(timer)
            timer = null
        }

        timer = setTimeout(fn.apply(_this, args), time)
    }
}


function throttle (fn, wait) {
    let preTime = Date.now()    

    return function () {
        const nowTime = Date.now()
        const _this = this
        const args = argumentsh

        if (nowTime - preTime >= wait) {
            preTime = Date.now() // 重新计算当前时间
            return fn.apply(_this, args)
        }

    }
}