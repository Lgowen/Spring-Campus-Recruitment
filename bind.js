// 单向数据绑定: <p></p> 通过js控制DOM的展示 就是由数据(Data) -> 模板(DOM)的绑定 这就是数据单向绑定
const data = { value: 'hello' }
// document.querySelector('p').innerText = data.value 

// 双向数据绑定: <input onkeyup="handleChange(e)">
//              <p></p>
const newData = { value: 'newHello' }
const handleChange = e => {
    // 监听键盘抬起事件 -> 将每次修改的后的值赋值给我们的数据Data -> 改变DOM
    newData.value = e.target.value
    document.querySelector('p').innerText = newData.value
}

// vue双向数据绑定 ->  view   <-->  viewModel  <-->  model -> MVVM
// 数据层(Model): 应用的数据及业务逻辑, 为开发者编写的业务代码
// 视图层(View): 应用的展示效果, 各类UI组件, 由 template 和 css 组成的代码
// 业务逻辑层(ViewModel): 框架封装的核心, 它负责将数据与视图关联起来

// ViewModel
// 1. 数据变化后更新视图
// 2. 视图变化后更新数据

// 得出主要由两个部分组成:
// 1. 监听器(Observer): 负责观察数据, 做到时刻清楚数据的任何变化, 然后通知视图更新
// 2. 解析器(Compiler): 负责观察UI, 做到时刻清楚视图发生的一切交互, 然后更新数据
// 结合二者 -> 双向数据绑定
// data: { value: '1'} 
// value是一个topic
// 有一个订阅者数组[]


// 发布 + 订阅




// 观察者模式(发布 - 订阅)

// 发布者



// 发布者
function Publish() {
    
    // 单个发布者的所有订阅者
    this.observers = []
    
    // 添加订阅者
    this.attach = function (callback) {
        this.observers.push(callback)
    }

    // 通知所有的订阅者
    // 参数为要发布的消息
    this.notify = function (value) {
        this.observers.forEach( callback => callback(value) )
    }
}

// 订阅者
function Observer(queue, key, callback) {
    queue[key].attach(callback)
}

// 数据拦截器
function Watcher (data, queue) {
    for(let key in data) {
        let value = data[key] 
        Object.defineProperty(data, key, {
            enumerable: true,
            configurable: true,
            get: function () {
                return value
            },
            set: function (newValue) {
                value = newValue
                queue[key].notify(value)
            }

        })
    }
    return data
}

function proxyWatcher (data, queue) {
    return new Proxy(data, {
        get: (target, key) => target[key],
        set: (target, key, value) => {
            target[key] = value

            // 通知该属性的所有订阅者, 数据发生了改变
            queue[key].notify(value)
        }
    })
}

//  消息队列  -> 相当于Vue 单个组件中的data
const messageQueue = {
    name: {
        value: 'Lgowen',
        observers: [],
        attach: function (callback) {
            this.observers.push(callback)
        },
        notify: function (value) {
            this.observers.forEach(callback => callback(value))
        },
        get: () => value,
        set: newValue => {
            value = newValue
            notify(value)
        }
    }
}

//  数据
const myData = Watcher({ name: 'Lgowen' }, messageQueue)

// 将每个数据属性都添加到观察者的消息队列中
for(let key in myData) {
    messageQueue[key] = new Publish()
}

// 订阅 name 属性值的变化
Observer(messageQueue, 'name', name => {
    console.log('name:' + name)
})

console.log(messageQueue);
myData.name = '成哥'
console.log('成哥')

// 模板解析 (实现视图到数据的绑定)
// 解析器与DOM操作
// 解析模板中所有的特定特性, 例如v-model、v-text、{{}}语法
// 关联数据展示到DOM
// 关联事件绑定到DOM