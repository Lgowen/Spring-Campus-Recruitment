# 春招

## cvte

1. 哪些函数可以对URL进行编码
2. DOS攻击
3. HTTP
4. 哪些是Node框架
5. 异步
6. Node模块化
7. Promise
8. HTTP在传输层的协议
9.  clientWidth
10. 原型、原型链
11. EventEmitter
12. 闭包
13. HTTPS
14. reflow、repaint
15. cookie
16. async await
17. 跨域
18. const let
19. 事件委托、事件冒泡
20. CSRF
21. CSS样式优先级
22. es6class类配合闭包
23. 异步类题目
24. 洗牌算法
25. 深拷贝

### 面试 

1. 自我介绍： 面试官你好，我是来自华南理工大学广州学院的一名在读大四学生，所学专业是信息与计算科学，属于理学所以领域方向比较偏向数学做数据分析数据挖掘那一块的。
            自己是因为对前端这个方向比较感兴趣，然后在去年中旬才真正开始决定走前端这一条路，然后我也有做过一些小项目，去年下半年也有在汇量科技公司担任前端开发实习生的岗位，主要是负责H5游戏素材的脚本修改，以及参与可视化游戏引擎playSmart前端开发的工作。也希望能够从这次面试中学习到更多的东西。
2. flex: 1

- flex: 1 === flex: 1 1 0% === flex-grow:1 flex-shrink:1 flex-basic: 0%
- 经常用作自适应布局，将父容器的display：flex，侧边栏大小固定后，将内容区flex：1，内容区则会自动放大占满剩余空间。


1. this指向 (箭头函数里的this指向)
2. 浏览器缓存
3. 跨域是什么
4. 怎么解决跨域
5. 前端储存
6. BFC(内部渲染规则)

- BFC是一个独立的容器，外面的元素不会影响里面的元素。
- 一个块元素占据一整行，块元素会一个接一个从上至下排列。
- 相邻块元素垂直方向边距重叠
- BFC里面的块元素左侧不会超出BFC，除非这个块元素自己也变成一个新的BFC


1.  cookie设置什么属性浏览器不能访问: httponly
2.  cookie samesite属性的作用是什么 (strict lax值分别在什么场景下使用)
    
- Strict 仅允许一方请求携带 Cookie，即浏览器将只发送相同站点请求的 Cookie，即当前网页 URL 与请求目标 URL 完全一致。
- Lax 允许部分第三方请求携带 Cookie
- None 无论是否跨站都会发送 Cookie
- SameSite Cookie 允许服务器要求**某个 cookie 在跨站请求**时不会被发送
- Strict 浏览器将只在**访问相同站点**时发送 cookie。（在原有 Cookies 的限制条件上的加强，如上文 “Cookie 的作用域” 所述）
- Strict最为严格，完全禁止第三方 Cookie，跨站点时，任何情况下都不会发送 Cookie。换言之，只有当前网页的 URL 与请求目标一致，才会带上 Cookie。
- 比如，当前网页有一个 GitHub 链接，用户点击跳转就不会带有 GitHub 的 Cookie，跳转过去总是未登陆状态。
- Lax 与 Strict 类似，但**用户从外部站点导航至URL**时（例如通过链接）除外。 
- Lax规则稍稍放宽，大多数情况也是不发送第三方 Cookie，但是导航到目标网址的 Get 请求除外(预加载、get请求、链接)

1.  TCP三次握手四次挥手 (四次挥手结束后自己给自己挖坑 客户端比服务端慢断开)
  - 确保客户端最后一次发送的ACK报文能够到达服务器
  - 防止新的连接中不会出现旧连接的请求报文

2.  异步任务 宏任务A 中有 微任务B和C 微任务B中有宏任务D 执行过程
3.  CSRF XSS 类型 防御手段 (双重cookie验证 服务器什么时候发送 以什么形式)

    - 在用户访问网站页面时，向请求域名注入一个Cookie，内容为随机字符串（例如csrfcookie=v8g9e4ksfhw）
    - 在前端向后端发起请求时，取出Cookie，并添加到URL的参数中（接上例POST https://www.a.com/comment?csrfcookie=v8g9e4ksfhw）。
    - 后端接口验证Cookie中的字段与URL参数中的字段是否一致，不一致则拒绝。


4.  等腰三角形 -> 指向右边
5.  vue双向数据绑定 (发布订阅模式具体实现)
6.  CORS 非简单请求的预检请求 会去检查哪些字段
   
    - 检查Access-Control-Allow-Origin 有没有 Origin 是否包括该源
    - 检查Access-Control-Request-Method: 允许跨域的请求方法是否有包含在内 Access-Control-Request-Method
    - 检查Access-Control-Request-Headers:  允许跨域的额外头信息 Access-Control-Request-Headers
    - 如果否定此次预检请求 会返回一个正常的http回应 但是没有任何CORS相关的头信息字段 或明确表示请求不符合条件
  
7.  项目上线要怎么处理这个跨域
    
    - nginx反向代理接口跨域
   
```html
   
```

1.  '=='的判断标准


## 多益网络

1. 选择 7
 - Array
 - css3属性
 - sass
 - 文档对象方法
 - Array.is(Array.prototype)
 - 数据类型
 - alert(3 > 5 || "a" && "b" )
2. 填空 10

 - jq点击事件写法
 - typeof数据类型
 - 过渡属性
 - 1
 - 
3. 问答 6
   - vuex
   - 英文翻译
   - 数组迭代方法
   - display属性
   - null和undefined的区别
   - 
4. 编程 2

   - 实现栈
   - 观察者模式/发布订阅模式

## 蔚来

1. 数学/算法
2. 编程基础
3. 计算机网络

