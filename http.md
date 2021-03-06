---
title: http
---

This is a student from the beginning of this year to learn front end, was beaten by society and then recorded every day of learning. Have you come to see yourself studying today? If my article is lucky enough to be seen by you, I hope you can keep studying with me.

# 计算机网络

## cookie

```html
   当网页要发送http请求时,浏览器首先会检查是否存在相应的cookie,如果有的话会添加在request header中的cookie字段
   每次客服端发送http请求,都会携带cookie,如果不是每次请求都需要这个cookie的话,会浪费很多不必要的带宽
   所以cookie适合存放一些每次请求都需要携带的信息(身份认证信息),
```

特征

```html
   每个浏览器存放cookie的位置不一样,所以不能通用
   cookie只能在同域下共享,不同域的cookie不能共享
   我们可以用domain设置cookie的生效域
   不同浏览器存放cookie的个数不一样,一般为20个
   不同浏览器存放cookie的大小不一样,一般为4kb
   我们可以设置cookie的过期时间,默认是会话结束,cookie会随着时间到了自动销毁
```

## get 请求传参长度的误区

1. HTTP 协议未规定 GET 和 POST 的长度限制
2. GET 的最大长度显示是因为浏览器和 web 服务器限制了 URI 的长度
3. 不同的浏览器和 WEB 服务器，限制的最大长度不一样
4. 要支持 IE，则最大长度为 2083byte，若只支持 Chrome，则最大长度 8182byte

## get 和 post 请求在缓存方面的区别

```html
get 请求类似于查找的过程，用户获取数据，可以不用每次都与数据库连接，所以可以使用缓存。

post 不同，post 做的一般是修改和删除的工作，所以必须与数据库交互，所以不能使用缓存。因此 get 请求适合于请求缓存。

缓存一般只适用于那些不会更新服务端数据的请求。一般 get 请求都是查找请求，不会对服务器资源数据造成修改，而 post 请求一般都会对服务器数据造成修改，所以，一般会对 get 请求进行缓存，很少会对 post 请求进行缓存。
```

## 在浏览器中输入url到页面加载显示完成，这个过程发生了什么

## vue-router

1. hash(哈希模式)
   - 采用锚点的方式
   - 浏览器提供原生监听事件hashChange
   - 可以监听a标签、浏览器的前进后退、window.location改变地址


2. history(历史模式)
   - 依赖原生事件popState
   - H5新增API，pushState和replaceState（改变浏览器地址，不刷新页面）
   - 阻止a标签默认事件，获取a标签herf属性值，pushState改变地址栏，根据location.pathName展示不同的router-view内容


## webpack

1. Entry： 指定webpack开始构建的入口模块，从该模块开始构建并计算出直接或间接依赖的模块或者库
2. Output： 告诉webpack如何命名输出文件以及输出的目录
3. Loaders： 由于webpack只能处理javascript，所以我们需要对一些非js文件处理成webpack能够处理的模块，比如sass文件
             style-loader css-loader less less-loader postcss-loader(css添加浏览器前缀, autoprefixer)
             url-loader、file-loader(如果文件小于限制大小，返回base64，否则file-loader将文件移动到输出的目录中)
             babel-loader（es678转es5） babel-polifill(promise等api需要用这个)
             vue-loader vue-template-compiler vue-style-loader
 
4. Plugins： 插件(html-webpack-plugin: 解决每次打包后的js在html中引入需要重复修改文件名的问题)
             clean-webpack-plugin
            webpack-dev-server(热更新)
             
5. Chunk： 
  
## vite

1. vite是基于浏览器原生ES modules的开发服务器,利用浏览器去解析import,在服务端按预编译返回，跳过了打包。
2. 开发模式: 拦截浏览器发出的ES imports请求并做相应处理。不需要打包，只需要按浏览器发出的HTTP请求按需加载对应的模块，(热更新)
3. vite -> webpack-dev-server
4. webpack热更新: 当某个依赖发生改变时,依赖所处的module更新，发给浏览器重新执行。而且会重新进行打包一个bundle

## 2.0

1. 启动时依赖预打包(esbuild): 减少模块/请求数量 支持CommonJS依赖
2. 更好的css支持
3. 服务端渲染支持: 

## 懒加载

1. getBoundingClientRect （相对浏览器视窗）clientHeight（可视区高度）scroll (监听scroll事件)
2. Intersection Observer 

## 预加载
1. 隐藏img元素
2. script标签引入 new Image


```html
   1. (首先对url进行解析 -> 分析使用的传输协议和资源路径) -> 如果输入的协议或主机名不合法 -> 将输入的内容传给搜索引擎进行处理 -> 如果没有问题 -> 检查url是否有非法字符 -> 有的话进行转义再进行下一步操作
   2. (浏览器判断请求的资源是否在缓存里) -> 强缓存Expires(http1.0)和Cache-Control(http1.1) -> 协商缓存Etag,If-None-Match和Last-Modified,If-Modified-Since
   3. (DNS解析获取域名对应的IP地址) -> 向本地DNS服务器发送请求是否存在该域名的缓存 -> 本地DNS服务器向根域名服务器发送请求 -> 返回顶级域名服务器的IP地址列表
   4. (TCP三次握手建立连接) ->  C 发送SYN 连接请求报文段和一个随机序号 -> S 收到连接请求回复一个 SYN ACK报文和一个随机序号确认连接 -> C 回复一个ACK报文段确认应答
   5. 如果采用的是HTTPS协议 ->  通信前TLS四次握手
   6. 当页面请求发送到服务器端后，服务器端会返回一个 html 文件作为响应，浏览器接收到响应后，开始对 html 文件进行解析，开始页面的渲染过程
      DOM tree + CSSOM rule tree -> 如果碰到js文件将阻塞 DOM tree -> 等到cssom rule tree解析构建完成 -> 继续解析DOM tree -> render tree -> layout -> 浏览器的 UI 接口（GUI） paint -> display
   7. 四次挥手断开连接 ->  C 发送 FIN 释放连接报文段和一个随机序号 -> S 收到释放连接请求后回复一个 ACK报文段和一个随机序号 -> 这时候已经断开了从 C -> S 的连接 但是 S 还能向 C 发送数据 -> S 发送一个 FIN释放连接 和 ACK 报文段和一个随机序号确认释放连接 -> C 收到确认连接后发送一个ACK报文段和一个随机序号告诉 S 我收到了
   哈希：window.location ------   history: popstate 
   pushState 和 replaceState 都是 HTML5 的新 API，他们的作用很强大，可以做到改变浏览器地址却不刷新页面。这是实现改变地址栏却不刷新页面的重要方法。
```

```javascript
   // 发布者
   function Publish () {
     // 订阅者列表
     this.observers = []
     this.attach = function (callback) {
       this.observers.push(callback)
     }
     // 发布消息
     this.notify = function (value) {
       this.observers.forEach(callback => callback(value))
     }
   }
 
   // 订阅者
   function Observe (queue, key, callback) {
      queue[key].attach(callback)
   }
  
   // 数据拦截
   function proxyWatcher (data, queue) {
       return new Proxy(data, {
         get: (target, key) => target[key],
         set: (target, key, value) => {
           target[key] = value
           queue[key].notify(value)
         }
       })
   }

   // 消息队列
   const messageQueue = {}
   
   // 数据
   const myData = proxyWatcher({ name: 'Lgowen' }, messagQueue)
   
   // 为数据中的每一个属性都作为一个发布者
   for(let key in myData) {
     messageQueue[key] = new Publish()
   }
   
   // 订阅 name 值的变化
   Observe(messageQueue, 'name', name => {
     console.log('更新后的name', name)
   })
```

```javascript
function debounce(fn, wait) {
  var timer = null;

  return function() {
    var context = this,
      args = arguments;

    // 如果此时存在定时器的话，则取消之前的定时器重新记时
    if (timer) {
      clearTimeout(timer);
      timer = null;
    }

    // 设置定时器，使事件间隔指定事件后执行
    timer = setTimeout(() => {
      fn.apply(context, args);
    }, wait);
  };
}
// 函数节流的实现;
function throttle(fn, delay) {
  var preTime = Date.now();

  return function() {
    var context = this,
      args = arguments,
      nowTime = Date.now();

    // 如果两次时间间隔超过了指定时间，则执行函数。
    if (nowTime - preTime >= delay) {
      preTime = Date.now();
      return fn.apply(context, args);
    }
  };
}
```
## url(资源类型、存放资源的主机域名、资源文件名)

```html
   url: 统一资源定位符
   www.baidu.com/item/
   协议、主机、端口、路径

   schema://host:port/path?query#fragment
```

## 应用层

应用层协议定义了应用进程间的交互和通信规则，不同主机的应用进程间如何相互传递报文，比如传递的报文的类型、格式、 有哪些字段等等。

## HTTP 协议

**概况**

HTTP 是超文本传输协议，它定义了客户端和服务器之间交换报文的格式和方式，默认使用 **80** 端口。它使用 **TCP** 作为传输层协议，保证了数据传输的可靠性。

HTTP 是一个**无状态**的协议，HTTP 服务器不会保存关于客户的任何信息。

HTTP 有两种连接模式，一种是持续连接，一种非持续连接。非持续连接指的是服务器必须为每一个请求的对象建立和维护 一个全新的连接。持续连接下，TCP 连接默认不关闭，可以被多个请求复用。采用持续连接的好处是可以避免每次建立 TCP 连接三次握手时所花费的时间。在 HTTP1.0 以前使用的非持续的连接，但是可以在请求时，加上 Connection: keep-alive 来要求服务器不要关闭 TCP 连接。HTTP1.1 以后默认采用的是持续的连接。目前对于同一个域，大多数浏览器支持 同时建立 6 个持久连接。

## HTTP 请求报文

HTTP 报文有两种，一种是请求报文，一种是响应报文。

HTTP 请求报文的格式如下：

```html
<!-- 请求行 -->
GET / HTTP/1.1    
<!-- 请求头 -->
User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_10_5)
Accept: */*
```

HTTP 请求报文的第一行叫做请求行，后面的行叫做首部行，首部行后还可以跟一个实体主体。请求首部之后有一个空行，这 个空行不能省略，它用来划分首部与实体。

请求行包含三个字段：方法字段、URL 字段和 HTTP 版本字段。

方法字段可以取几种不同的值，一般有 GET、POST、HEAD、PUT 和 DELETE。一般 GET 方法只被用于向服务器获取数据。 POST 方法用于将实体提交到指定的资源，通常会造成服务器资源的修改。HEAD 方法与 GET 方法类似，但是在返回的响应 中，不包含请求对象。PUT 方法用于上传文件到服务器，DELETE 方法用于删除服务器上的对象。虽然请求的方法很多，但 更多表达的是一种语义上的区别，并不是说 POST 能做的事情，GET 就不能做了，主要看我们如何选择。

## HTTP 响应报文

HTTP 响应报文的格式如下

```html
<!-- 状态行 -->
HTTP/1.0 200 OK  
<!-- 相应头 response header -->
Content-Type: text/plain
Content-Length: 137582
Expires: Thu, 05 Dec 1997 16:00:00 GMT
Last-Modified: Wed, 5 August 1996 15:55:28 GMT
Server: Apache 0.84

<!-- 响应体 response body -->
<html>
  <body>Hello World</body>
</html>
```

状态行包含了三个字段：协议版本字段、状态码和相应的状态信息。
实体部分是报文的主要部分，它包含了所请求的对象。
常见的状态有:
200-请求成功、202-服务器端已经收到请求消息，但是尚未进行处理 301-永久移动、302-临时移动、304-所请求的资源未修改、 400-客户端请求的语法错误、404-请求的资源不存在 500-服务器内部错误。

一般 1XX 代表服务器接收到请求、2XX 代表成功、3XX 代表重定向、4XX 代表客户端错误、5XX 代表服务器端错误。

- 200: 请求成功
- 301: 永久重定向 请求的资源已被永久的移动到新URI，返回信息会包括新的URI，浏览器会自动定向到新URI。今后任何新的请求都应使用新的URI代替
- 302: 临时重定向 资源只是临时被移动。客户端应继续使用原有URI
- 304: 未修改 所请求的资源未修改，服务器返回此状态码时，不会返回任何资源。客户端通常会缓存访问过的资源，通过提供一个头信息指出客户端希望只返回在指定日期之后修改的资源
- 400: 客户端请求的语法错误,服务器无法理解
- 403: 服务器能理解客户端的请求,但拒绝执行该请求
- 404: 服务器无法找到客户端请求的资源
- 
- 500: 服务器内部错误,无法完成请求
- 502: 作为网关或者代理工作的服务器尝试执行请求时，从远程服务器接收到了一个无效的响应
- 503: 由于超载或系统维护，服务器暂时的无法处理客户端的请求。延时的长度可包含在服务器的Retry-After头信息中
- 504: 充当网关或代理的服务器，未及时从远端服务器获取请求

## 首部行

首部可以分为四种首部，请求首部、响应首部、通用首部和实体首部。通用首部和实体首部在请求报文和响应报文中都可以设 置，区别在于请求首部和响应首部。

常见的请求首部有 Accept 可接收媒体资源的类型、Accept-Charset 可接收的字符集、Host 请求的主机名。

常见的响应首部有 ETag 资源的匹配信息，Location 客户端重定向的 URI。

常见的通用首部有 Cache-Control 控制缓存策略、Connection 管理持久连接。

常见的实体首部有 Content-Length 实体主体的大小、Expires 实体主体的过期时间、Last-Modified 资源的最后修 改时间。


## HTTP/1.1 协议缺点

HTTP/1.1 默认使用了持久连接，多个请求可以复用同一个 TCP 连接，但是在同一个 TCP 连接里面，数据请求的通信次序 是固定的。服务器只有处理完一个请求的响应后，才会进行下一个请求的处理，如果前面请求的响应特别慢的话，就会造成许 多请求排队等待的情况，这种情况被称为**队头堵塞**。队头阻塞会导致持久连接在达到最大数量时，剩余的资源需要等待其他 资源请求完成后才能发起请求。

为了避免这个问题，一个是**减少请求数**，一个是**同时打开多个持久连接**。这就是我们对网站优化时，使用雪碧图、合并脚本的 原因。

## HTTP/2 协议

2009 年，谷歌公开了自行研发的 SPDY 协议，主要解决 HTTP/1.1 效率不高的问题。这个协议在 Chrome 浏览器上证明 可行以后，就被当作 HTTP/2 的基础，主要特性都在 HTTP/2 之中得到继承。2015 年，HTTP/2 发布。

HTTP/2 主要有以下新的特性：

**二进制协议**

HTTP/2 是一个二进制协议。在 HTTP/1.1 版中，报文的头信息必须是文本（ASCII 编码），数据体可以是文本，也可以是 二进制。HTTP/2 则是一个彻底的二进制协议，头信息和数据体都是二进制，并且统称为"帧"，可以分为头信息帧和数据帧。 帧的概念是它实现**多路复用**的基础。

**多路复用**

HTTP/2 实现了多路复用，HTTP/2 仍然复用 TCP 连接，但是在一个连接里，客户端和服务器都可以**同时发送多个请求或回应**，而且不用按照顺序一一发送，这样就避免了**队头堵塞**的问题。

**数据流**

HTTP/2 使用了数据流的概念，因为 HTTP/2 的数据包是不按顺序发送的，同一个连接里面连续的数据包，可能属于不同的 请求。因此，必须要对数据包做标记，指出它属于哪个请求。HTTP/2 将每个请求或回应的所有数据包，称为一个数据流。每 个数据流都有一个独一无二的编号。数据包发送的时候，都必须标记数据流 ID ，用来区分它属于哪个数据流。

**头信息压缩**

HTTP/2 实现了头信息压缩，由于 HTTP 1.1 协议不带有状态，每次请求都必须附上所有信息。所以，请求的很多字段都是 重复的，比如 Cookie 和 User Agent ，一模一样的内容，每次请求都必须附带，这会浪费很多带宽，也影响速度。

HTTP/2 对这一点做了优化，引入了头信息压缩机制。一方面，头信息使用 gzip 或 compress 压缩后再发送；另一方面， 客户端和服务器同时维护一张头信息表，所有字段都会存入这个表，生成一个索引号，以后就不发送同样字段了，只发送索引 号，这样就能提高速度了。

**服务器推送**

HTTP/2 允许服务器未经请求，主动向客户端发送资源，这叫做服务器推送。使用服务器推送，提前给客户端推送必要的资源 ，这样就可以相对减少一些延迟时间。这里需要注意的是 http2 下服务器主动推送的是静态资源，和 WebSocket 以及使用 SSE 等方式向客户端发送即时数据的推送是不同的。

## HTTP/2 协议缺点

因为 HTTP/2 使用了多路复用，一般来说同一域名下只需要使用一个 TCP 连接。由于多个数据流使用同一个 TCP 连接，遵 守同一个流量状态控制和拥塞控制。只要一个数据流遭遇到拥塞，剩下的数据流就没法发出去，这样就导致了后面的所有数据都 会被阻塞。HTTP/2 出现的这个问题是由于其使用 TCP 协议的问题，与它本身的实现其实并没有多大关系。

## HTTP/3 协议

由于 TCP 本身存在的一些限制，Google 就开发了一个基于 UDP 协议的 QUIC 协议，并且使用在了 HTTP/3 上。 QUIC 协议在 UDP 协议上实现了多路复用、有序交付、重传等等功能

## HTTPS 协议

**HTTP 存在的问题**

1. HTTP 报文使用明文方式发送，可能被第三方窃听。
2. HTTP 报文可能被第三方截取后修改通信内容，接收方没有办法发现报文内容的修改。
3. HTTP 还存在认证的问题，第三方可以冒充他人参与通信。

**HTTPS简介**

HTTPS 指的是超文本传输安全协议，HTTPS 是基于 HTTP 协议的，不过它会使用 TLS/SSL 来对数据加密。使用 TLS/ SSL 协议，所有的信息都是加密的，第三方没有办法窃听。并且它提供了一种校验机制，信息一旦被篡改，通信的双方会立 刻发现。它还配备了身份证书，防止身份被冒充的情况出现

## DNS 协议

DNS 协议提供的是一种**主机名到 IP 地址的转换服务**，就是我们常说的**域名系统**。它是一个由**分层的 DNS 服务器**组成的**分布式数据库**，是定义了主机如何查询这个分布式数据库的方式的应用层协议。DNS 协议运行在 UDP 协议之上，使用 53 号 端口。

**查询过程**

DNS 的查询过程一般为，我们首先将 DNS 请求发送到本地 DNS 服务器，由本地 DNS 服务器来代为请求。

1. 从"根域名服务器"查到"顶级域名服务器"的 NS 记录和 A 记录（ IP 地址）。
2. 从"顶级域名服务器"查到"次级域名服务器"的 NS 记录和 A 记录（ IP 地址）。
3. 从"次级域名服务器"查出"主机名"的 IP 地址。

比如我们如果想要查询 www.baidu.com 的 IP 地址，我们首先会将请求发送到本地的 DNS 服务器中，本地 DNS 服务 器会判断是否存在该域名的缓存，如果不存在，则向根域名服务器发送一个请求，根域名服务器返回负责 .com 的顶级域名 服务器的 IP 地址的列表。然后本地 DNS 服务器再向其中一个负责 .com 的顶级域名服务器发送一个请求，负责 .com 的顶级域名服务器返回负责 .baidu 的权威域名服务器的 IP 地址列表。然后本地 DNS 服务器再向其中一个权威域名服 务器发送一个请求，最后权威域名服务器返回一个对应的主机名的 IP 地址列表。

1. 发请求到本地的DNS服务器 -> 判断是否存在该域名的缓存 -> 不存在 -> 2
2. 本地DNS服务器向根域名服务器发送请求 -> 返回负责.com的顶级域名服务器的IP地址列表
3. 向其中一个负责.com的顶级域名服务器发送请求 -> 返回负责.baidu的权威域名服务器的IP地址列表
4. 向其中一个负责.baidu的权威域名服务器发送请求 -> 返回一个对应主机名的IP地址列表


## 传输层

传输层协议主要是为不同主机上的不同进程间提供了逻辑通信的功能。传输层只工作在端系统中。

**UDP 协议**

UDP 是一种无连接的，不可靠的传输层协议。它只提供了传输层需要实现的最低限度的功能，除了复用/分解功能和少量的差 错检测外，它几乎没有对 IP 增加其他的东西。UDP 协议适用于对实时性要求高的应用场景。

1. 使用 UDP 时，在发送报文段之前，通信双方**没有握手的过程**，因此 UDP 被称为是无连接的传输层协议。因为没有握手 过程，相对于 TCP 来说，没有建立连接的时延。因为没有连接，所以不需要在端系统中保存连接的状态。

2. UDP 提供尽力而为的交付服务，也就是说 UDP 协议**不保证数据的可靠交付**。

3. UDP **没有拥塞控制**和**流量控制**的机制，所以 UDP 报文段的**发送速率没有限制**。

4. 因为一个 UDP 套接字只使用目的地址和目的端口来标识，所以 UDP 可以支持一对一、一对多、多对一和多对多的交互 通信。

5. UDP 首部小，只有 8 个字节。

**TCP 协议**

TCP 协议是面向连接的，提供可靠数据传输服务的传输层协议。(保证数据可靠传输、提高传输效率)

1. TCP 协议是面向连接的，在通信双方进行通信前，需要通过**三次握手**建立连接。它需要在端系统中维护双方连接的状态信息。

2. TCP 协议通过**序号**、**确认号**、**定时重传**、**检验和等机制**，来提供可靠的数据传输服务。

3. TCP 协议提供的是点对点的服务，即它是在单个发送方和单个接收方之间的连接。

4. TCP 协议提供的是全双工的服务，也就是说连接的**双方的能够向对方发送和接收数据**。

5. TCP 提供了**拥塞控制机制**，在**网络拥塞**的时候会**控制发送数据的速率**，有助于**减少数据包的丢失**和**减轻网络中的拥塞程度**。

6. TCP 提供了**流量控制机制**，保证了通信**双方的发送和接收速率相同**。如果**接收方可接收的缓存很小**时，发送方会**降低发送速率**，避免因为缓存填满而造成的数据包的丢失。

说说几个TCP报文首部的内容吧:

- seq: 序号，占4个字节，TCP连接中传送的字节流中的每个字节都按顺序编号。例如，一段报文的序号字段值是 301 ，而携带的数据共有100字段，显然下一个报文段（如果还有的话）的数据序号应该从401开始

- ack: 确认号，占4个字节，是期望收到对方下一个报文的第一个数据字节的序号。例如，B收到了A发送过来的报文，其序列号字段是501，而数据长度是200字节，这表明B正确的收到了A发送的到序号700为止的数据。因此，B期望收到A的下一个数据序号是701，于是B在发送给A的确认报文段中把确认号置为701

- 同步SYN，在连接建立时用来同步序号。当SYN=1，ACK=0，表明是连接请求报文，若同意连接，则响应报文中应该使SYN=1，ACK=1；

- 确认ACK，仅当ACK=1时，确认号字段才有效。TCP规定，在连接建立后所有报文的传输都必须把ACK置1

- 终止FIN，用来释放连接。当FIN=1，表明此报文的发送方的数据已经发送完毕，并且要求释放

- 

**TCP连接握手，握的是啥**

**通信双方数据原点的序列号！**

三次握手:

1. A 发送同步信号SYN(Synchronize Sequence Numbers) + A's Initial sequence number(初始序号)  -> A send SYN(同步信号) + A's ISN(初始序号)

2. B 确认收到A的同步信号，并记录 A's ISN 到本地，命名 B's ACK(Acknowledge character) sequence number(确认字符序列号) -> B receive SYN + save A's ISN + name B's ACK sequence number -> 发送同步信号SYN + B's Initial sequence number -> B send SYN(同步信号) + B's ISN

3. A确认收到B的同步信号，并记录 B's ISN 到本地，命名 A's ACK sequence 1number -> A receive SYN + save B's ISN + name A's ACK sequence number

4. A send SYN = 1(同步位) + seq(初始序列号) 的数据包给 B 请求三次握手连接
5. B receive SYN + send ( SYN = 1(同意跟你进行连接) + B's ACK(对你请求握手的一次确认) = 1 + seq(序号) + ack(a.seq + 1)确认号 )
6. A receive SYN + send A's ACK(对来自服务端请求包的一次确认, 告诉它同意跟我建立连接的包我也收到了) = 1 + ack(b.seq + 1)确认号

第三次握手的作用是客户端对服务器端的初始序号的确认。如果只使用两次握手，那么服务器就没有办法知道自己的序号是否 已被确认。同时这样也是为了防止失效的请求报文段被服务器接收，而出现错误的情况。


 Client --- SYN = 1(标志位) && seq = x(客户端数据的初始序号) --->  Server
 Server --- (SYN = 1 && ACK = 1)(对 SYN 连接请求的确认) && ack = x + 1(确认收到客服端的序号) && seq = y(服务器端数据的初始序号) ---> Client
 Client --- ACK = 1(表示知道你同意我的申请了) && seq = x + 1(自己的序号) && ack = y + 1(确认收到服务器的序号) ---> Server

 1. C -> S 我发送请求连接的消息给你 我需要知道你收到了我发的消息 并且需要知道你同意了连接
 2. S -> C 我告诉你 我收到了你发给我的消息 并且同意你的连接
 3. C -> S 我告诉你 我知道你同意我的连接了

标志位: SYN() 和 ACK(回应收到)
确认号: ack
序列号: seq

在我看来，TCP 三次握手的建立连接的过程就是相互确认初始序号的过程

四次挥手:

因为 TCP 连接是全双工的，也就是说通信的双方都可以向对方发送和接收消息，所以断开连接需要双方的确认。

1. A 发送 结束信号FIN + A's seq(序号)
2. B 收到 FIN + 发送 ACK + B's seq
等待数据传输完成
3. B 发送 FIN + B's seq
4. A 收到 FIN + 发送 ACK + A's seq


Client --- Fin = 1(请求释放连接) && seq = u(客户端的初始序号) --- > Server
Server --- ACK = 1(表示收到你释放连接的消息) && seq = v(服务器的初始序号) && ack = u + 1(确认号) --- > Client
TCP服务器通知高层的应用进程，客户端向服务器的方向就释放了，这时候处于半关闭状态，即客户端已经没有数据要发送了，但是服务器若发送数据，客户端依然要接受
Server --- (Fin = 1 && ACK = 1)(同意释放连接) && seq = w(服务器的序号) && ack = u + 1(确认号) --- > Client
Client --- ACK = 1(表示收到你同意释放连接的消息) && seq = u + 1(客户端的序号) && ack = w + 1(确认号) --- > Server

1. C -> S 我发送请求释放连接的消息给你 我需要知道你收到了我发的消息 并且需要知道你同意了释放
2. S -> C 我告诉你我收到了你释放连接的消息 
这时候,客服端对服务器方向的连接就释放了,但是服务器还可以发送数据给客户端
3. S -> C 我同意释放连接
4. C -> S 我收到了你同意释放连接的消息了

最后一次挥手中，客户端会等待一段时间再关闭的原因，是为了防止发送给服务器的确认报文段丢失或者出错，从而导致服务器 端不能正常关闭。