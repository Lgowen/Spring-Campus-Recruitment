# HTML

## 15. 常见的浏览器内核比较

```html
   Trident：这种浏览器内核是 IE 浏览器用的内核，因为在早期 IE 占有大量的市场份额，所以这种内核比较流行，以前有很多
   网页也是根据这个内核的标准来编写的，但是实际上这个内核对真正的网页标准支持不是很好。但是由于 IE 的高市场占有率，微
   软也很长时间没有更新 Trident 内核，就导致了 Trident 内核和 W3C 标准脱节。还有就是 Trident 内核的大量 Bug 等
   安全问题没有得到解决，加上一些专家学者公开自己认为 IE 浏览器不安全的观点，使很多用户开始转向其他浏览器。
   
   Gecko：这是 Firefox 和 Flock 所采用的内核，这个内核的优点就是功能强大、丰富，可以支持很多复杂网页效果和浏览器扩
   展接口，但是代价是也显而易见就是要消耗很多的资源，比如内存。
   
   Presto：Opera 曾经采用的就是 Presto 内核，Presto 内核被称为公认的浏览网页速度最快的内核，这得益于它在开发时的
   天生优势，在处理 JS 脚本等脚本语言时，会比其他的内核快3倍左右，缺点就是为了达到很快的速度而丢掉了一部分网页兼容性。
   
   Webkit：Webkit 是 Safari 采用的内核，它的优点就是网页浏览速度较快，虽然不及 Presto 但是也胜于 Gecko 和 Trid
   ent，缺点是对于网页代码的容错性不高，也就是说对网页代码的兼容性较低，会使一些编写不标准的网页无法正确显示。WebKit 
   前身是 KDE 小组的 KHTML 引擎，可以说 WebKit 是 KHTML 的一个开源的分支。
   
   Blink：谷歌在 Chromium Blog 上发表博客，称将与苹果的开源浏览器核心 Webkit 分道扬镳，在 Chromium 项目中研发 B
   link 渲染引擎（即浏览器核心），内置于 Chrome 浏览器之中。其实 Blink 引擎就是 Webkit 的一个分支，就像 webkit 是
   KHTML 的分支一样。Blink 引擎现在是谷歌公司与 Opera Software 共同研发，上面提到过的，Opera 弃用了自己的 Presto 
   内核，加入 Google 阵营，跟随谷歌一起研发 Blink。
```

## 16.常见浏览器所用内核

```html
 （1） IE 浏览器内核：Trident 内核，也是俗称的 IE 内核；

 （2） Chrome 浏览器内核：统称为 Chromium 内核或 Chrome 内核，以前是 Webkit 内核，现在是 Blink内核；

 （3） Firefox 浏览器内核：Gecko 内核，俗称 Firefox 内核；

 （4） Safari 浏览器内核：Webkit 内核；

 （5） Opera 浏览器内核：最初是自己的 Presto 内核，后来加入谷歌大军，从 Webkit 又到了 Blink 内核；

 （6） 360浏览器、猎豹浏览器内核：IE + Chrome 双内核；

 （7） 搜狗、遨游、QQ 浏览器内核：Trident（兼容模式）+ Webkit（高速模式）；

 （8） 百度浏览器、世界之窗内核：IE 内核；

 （9） 2345浏览器内核：好像以前是 IE 内核，现在也是 IE + Chrome 双内核了；

 （10）UC 浏览器内核：这个众口不一，UC 说是他们自己研发的 U3 内核，但好像还是基于 Webkit 和 Trident ，还有说
      是基于火狐内核。
```

## 浏览器渲染原理

```html

DOM tree                                                                                                             构建DOM tree
        -> 如果碰见js脚本的引入(阻塞构建DOM tree) -> js脚本有操作css属性(等待CSSOM tree构建完成后才会继续构建DOM tree) ->                -> render tree -> layout -> paint -> display
CSSOM tree       构建CSSOM tree                                              构建CSSOM tree

```

## DOMContentLoaded 事件和 Load 事件的区别？

```html
   当初始的 HTML 文档被完全加载和解析完成之后，DOMContentLoaded 事件被触发，而无需等待样式表、图像和
   子框架的加载完成。

   Load 事件是当所有资源加载完成后触发的
```

## HTML5 有哪些新特性、移除了那些元素？

```html
   HTML5 现在已经不是 SGML 的子集，主要是关于图像，位置，存储，多任务等功能的增加。
   
   新增的有：
    
   绘画 canvas;
   用于媒介回放的 video 和 audio 元素;
   本地离线存储 localStorage 长期存储数据，浏览器关闭后数据不丢失;
   sessionStorage 的数据在浏览器关闭后自动删除;
   语意化更好的内容元素，比如 article、footer、header、nav、section;
   表单控件，calendar、date、time、email、url、search;
   新的技术 webworker, websocket;
   新的文档属性 document.visibilityState
   
   移除的元素有：
   
   纯表现的元素：basefont，big，center，font, s，strike，tt，u;
   对可用性产生负面影响的元素：frame，frameset，noframes；
```

## 简述一下你对 HTML 语义化的理解？

相关知识点

```html
   （1） 用正确的标签做正确的事情。
   （2） html 语义化让页面的内容结构化，结构更清晰，便于对浏览器、搜索引擎解析;
   （3） 即使在没有样式 CSS 情况下也以一种文档格式显示，并且是容易阅读的;
   （4） 搜索引擎的爬虫也依赖于 HTML 标记来确定上下文和各个关键字的权重，利于 SEO ;
   （5） 使阅读源代码的人对网站更容易将网站分块，便于阅读维护理解。
```

回答

```html
    我认为 html 语义化主要指的是我们应该使用合适的标签来划分网页内容的结构。html 的本质作用其实就是定义网页文档的结构，
    一个语义化的文档，能够使页面的结构更加清晰，易于理解。这样不仅有利于开发者的维护和理解，同时也能够使机器对文档内容进
    行正确的解读。比如说我们常用的 b 标签和 strong 标签，它们在样式上都是文字的加粗，但是 strong 标签拥有强调的语义。
    对于一般显示来说，可能我们看上去没有差异，但是对于机器来说，就会有很大的不同。如果用户使用的是屏幕阅读器来访问网页的
    话，使用 strong 标签就会有明显的语调上的变化，而 b 标签则没有。如果是搜索引擎的爬虫对我们网页进行分析的话，那么它会
    依赖于 html 标签来确定上下文和各个关键字的权重，一个语义化的文档对爬虫来说是友好的，是有利于爬虫对文档内容解读的，
    从而有利于我们网站的 SEO 。从 html5 我们可以看出，标准是倾向于以语义化的方式来构建网页的，比如新增了 header 、fo
    oter 这些语义标签，删除了 big 、font 这些没有语义的标签。
```

## 前端需要注意哪些 SEO(搜索引擎优化) ？

```html
     （1）合理的 title、description、keywords：搜索对着三项的权重逐个减小，title 值强调重点即可，重要关键词出现不要超
     过2次，而且要靠前，不同页面 title 要有所不同；description 把页面内容高度概括，长度合适，不可过分堆砌关键词，不
     同页面 description 有所不同；keywords 列举出重要关键词即可。

     （2）语义化的 HTML 代码，符合 W3C 规范：语义化代码让搜索引擎容易理解网页。
     
     （3）重要内容 HTML 代码放在最前：搜索引擎抓取 HTML 顺序是从上到下，有的搜索引擎对抓取长度有限制，保证重要内容肯定被
         抓取。
     
     （4）重要内容不要用 js 输出：爬虫不会执行 js 获取内容
     
     （5）少用 iframe：搜索引擎不会抓取 iframe 中的内容
     
     （6）非装饰性图片必须加 alt
     
     （7）提高网站速度：网站速度是搜索引擎排序的一个重要指标
```

## 常见的浏览器端的存储技术有哪些？

```html
浏览器常见的存储技术有 cookie、localStorage 和 sessionStorage。
```

## 请描述一下 cookies，sessionStorage 和 localStorage 的区别？

```html
 SessionStorage， LocalStorage， Cookie 这三者都可以被用来在浏览器端存储数据，而且都是字符串类型的键值对。区别
 在于前两者属于 HTML5 WebStorage，创建它们的目的便于客户端存储数据。而 cookie 是网站为了标示用户身份而储存在用户
 本地终端上的数据（通常经过加密）。cookie 数据始终在同源（协议、主机、端口相同）的 http 请求中携带（即使不需要），会
 在浏览器和服务器间来回传递。
 
 
 存储大小：
   cookie 数据大小不能超过4 k 。
   sessionStorage 和 localStorage 虽然也有存储大小的限制，但比 cookie 大得多，可以达到 5M 或更大。

 有期时间：
   localStorage    存储持久数据，浏览器关闭后数据不丢失除非主动删除数据。
   sessionStorage  数据在页面会话结束时会被清除。页面会话在浏览器打开期间一直保持，并且重新加载或恢复页面仍会
                    保持原来的页面会话。在新标签或窗口打开一个页面时会在顶级浏览上下文中初始化一个新的会话。
   cookie          设置的 cookie 过期时间之前一直有效，即使窗口或浏览器关闭。
  
 作用域：
     sessionStorage  只在同源的同窗口（或标签页）中共享数据，也就是只在当前会话中共享。
     localStorage    在所有同源窗口中都是共享的。
     cookie          在所有同源窗口中都是共享的。

 浏览器端常用的存储技术是 cookie 、localStorage 和 sessionStorage。
 
 cookie 其实最开始是服务器端用于记录用户状态的一种方式，由服务器设置，在客户端存储，然后每次发起同源请求时，发送给服
 务器端。cookie 最多能存储 4 k 数据，它的生存时间由 expires 属性指定，并且 cookie 只能被同源的页面访问共享。
 
 sessionStorage 是 html5 提供的一种浏览器本地存储的方法，它借鉴了服务器端 session 的概念，代表的是一次会话中所保
 存的数据。它一般能够存储 5M 或者更大的数据，它在当前窗口关闭后就失效了，并且 sessionStorage 只能被同一个窗口的同源
 页面所访问共享。
 
 localStorage 也是 html5 提供的一种浏览器本地存储的方法，它一般也能够存储 5M 或者更大的数据。它和 sessionStorage 
 不同的是，除非手动删除它，否则它不会失效，并且 localStorage 也只能被同源页面所访问共享。
 
 上面几种方式都是存储少量数据的时候的存储方式，当我们需要在本地存储大量数据的时候，我们可以使用浏览器的 indexDB 这是浏
 览器提供的一种本地的数据库存储机制。它不是关系型数据库，它内部采用对象仓库的形式存储数据，它更接近 NoSQL 数据库。
```

## Label 的作用是什么？是怎么用的？

```html
    label 标签来定义表单控制间的关系，当用户选择该标签时，浏览器会自动将焦点转到和标签相关的表单控件上。
```

## 如何实现浏览器内多个标签页之间的通信?

知识点

```html
   （1）使用 WebSocket，通信的标签页连接同一个服务器，发送消息到服务器后，服务器推送消息给所有连接的客户端。

   （2）使用 SharedWorker （只在 chrome 浏览器实现了），两个页面共享同一个线程，通过向线程发送数据和接收数据来实现标
       签页之间的双向通行。
   
   （3）可以调用 localStorage、cookies 等本地存储方式，localStorge 另一个浏览上下文里被添加、修改或删除时，它都会触
       发一个 storage 事件，我们通过监听 storage 事件，控制它的值来进行页面信息通信；
   
   （4）如果我们能够获得对应标签页的引用，通过 postMessage 方法也是可以实现多个标签页通信的。
```

回答

```html

 实现多个标签页之间的通信，本质上都是通过中介者模式来实现的。因为标签页之间没有办法直接通信，因此我们可以找一个中介者，
 让标签页和中介者进行通信，然后让这个中介者来进行消息的转发。

 第一种实现的方式是使用 websocket 协议，因为 websocket 协议可以实现服务器推送，所以服务器就可以用来当做这个中介者。
 标签页通过向服务器发送数据，然后由服务器向其他标签页推送转发。

 第二种是使用 ShareWorker 的方式，shareWorker 会在页面存在的生命周期内创建一个唯一的线程，并且开启多个页面也只会使
 用同一个线程。这个时候共享线程就可以充当中介者的角色。标签页间通过共享一个线程，然后通过这个共享的线程来实现数据的交
 换。

 第三种方式是使用 localStorage 的方式，我们可以在一个标签页对 localStorage 的变化事件进行监听，然后当另一个标签页
 修改数据的时候，我们就可以通过这个监听事件来获取到数据。这个时候 localStorage 对象就是充当的中介者的角色。

 还有一种方式是使用 postMessage 方法，如果我们能够获得对应标签页的引用，我们就可以使用 postMessage 方法，进行通信。
```

## 如何在页面上实现一个圆形的可点击区域？

```html
 （2）纯 css 实现，使用 border-radius ，当 border-radius 的长度等于宽高相等的元素值的一半时，即可实现一个圆形的
     点击区域。

 （3）纯 js 实现，判断一个点在不在圆上的简单算法，通过监听文档的点击事件，获取每次点击时鼠标的位置，判断该位置是否在我
     们规定的圆形区域内。
```

## 实现不使用 border 画出 1 px 高的线，在不同浏览器的标准模式与怪异模式下都能保持一致的效果

```html
  <div style="height:1px;overflow:hidden;background:red"></div>
```

## \<img> 的 title 和 alt 有什么区别？

```html
   title 通常当鼠标滑动到元素上的时候显示
   
   alt 是 <img> 的特有属性，是图片内容的等价描述，用于图片无法加载时显示、读屏器阅读图片。可提图片高可访问性，除了纯装
   饰图片外都必须设置有意义的值，搜索引擎会重点分析。
```

## Canvas 和 SVG 有什么区别？

```html
   Canvas 是一种通过 JavaScript 来绘制 2D 图形的方法。Canvas 是逐像素来进行渲染的，因此当我们对 Canvas 进行缩放时，
   会出现锯齿或者失真的情况。
   
   SVG 是一种使用 XML 描述 2D 图形的语言。SVG 基于 XML，这意味着 SVG DOM 中的每个元素都是可用的。我们可以为某个元素
   附加 JavaScript 事件监听函数。并且 SVG 保存的是图形的绘制方法，因此当 SVG 图形缩放时并不会失真。
```

## 渐进增强和优雅降级的定义

```html
 渐进增强：针对低版本浏览器进行构建页面，保证最基本的功能，然后再针对高级浏览器进行效果、交互等改进和追加功能达到更好的
         用户体验。

 优雅降级：一开始就根据高版本浏览器构建完整的功能，然后再针对低版本浏览器进行兼容。
```

## attribute 和 property 的区别是什么？

```html
   attribute 是 dom 元素在文档中作为 html 标签拥有的属性；
 property 就是 dom 元素在 js 中作为对象拥有的属性。
 对于 html 的标准属性来说，attribute 和 property 是同步的，是会自动更新的，
 但是对于自定义的属性来说，他们是不同步的。
```

## 对 web 标准、可用性、可访问性的理解

```html
    可用性（Usability）：产品是否容易上手，用户能否完成任务，效率如何，以及这过程中用户的主观感受可好，是从用户的角度来看
    产品的质量。可用性好意味着产品质量高，是企业的核心竞争力
   
    可访问性（Accessibility）：Web 内容对于残障用户的可阅读和可理解性
    
    可维护性（Maintainability）：一般包含两个层次，一是当系统出现问题时，快速定位并解决问题的成本，成本低则可维护性好。
    二是代码是否容易被人理解，是否容易修改和增强功能。
```

## IE 各版本和 Chrome 可以并行下载多少个资源？

```html
 （1）  IE6 2 个并发
 （2）  iE7 升级之后的 6 个并发，之后版本也是 6 个
 （3）  Firefox，chrome 也是6个
```

## 怎么重构页面？

```html
   （1） 编写 CSS
   （2） 让页面结构更合理化，提升用户体验
   （3） 实现良好的页面效果和提升性能
```

## 浏览器架构

```html
   * 用户界面
   * 主进程
   * 内核
       * 渲染引擎
       * JS 引擎
           * 执行栈
       * 事件触发线程
           * 消息队列
               * 微任务
               * 宏任务
       * 网络异步线程
       * 定时器线程
```

## 文档的不同注释方式？

```html
 HTML 的注释方法 <!--注释内容--> 
 
 CSS 的��释方法 /*注释内容*/ 
 
 JavaScript 的注释方法 /* 多行注释方式 */ //单行注释方式
```

## 主流浏览器内核私有属性 css 前缀？

```html
 mozilla 内核 （firefox,flock 等）    -moz
 webkit  内核 （safari,chrome 等）   -webkit
 opera   内核 （opera 浏览器）        -o
 trident 内核 （ie 浏览器）           -ms
```

## 前端性能优化？

```html
前端性能优化主要是为了提高页面的加载速度，优化用户的访问体验。我认为可以从这些方面来进行优化。

 第一个方面是页面的内容方面

 （1）通过文件合并、css 雪碧图、使用 base64 等方式来减少 HTTP 请求数，避免过多的请求造成等待的情况。

 （2）通过 DNS 缓存等机制来减少 DNS 的查询次数。

 （3）通过设置缓存策略，对常用不变的资源进行缓存。

 （4）使用延迟加载的方式，来减少页面首屏加载时需要请求的资源。延迟加载的资源当用户需要访问时，再去请求加载。

 （5）通过用户行为，对某些资源使用预加载的方式，来提高用户需要访问资源时的响应速度。

 第二个方面是服务器方面

 （1）使用 CDN 服务，来提高用户对于资源请求时的响应速度。

 （2）服务器端启用 Gzip、Deflate 等方式对于传输的资源进行压缩，减小文件的体积。

 （3）尽可能减小 cookie 的大小，并且通过将静态资源分配到其他域名下，来避免对静态资源请求时携带不必要的 cookie

 第三个方面是 CSS 和 JavaScript 方面

 （1）把样式表放在页面的 head 标签中，减少页面的首次渲染的时间。

 （2）避免使用 @import 标签。

 （3）尽量把 js 脚本放在页面底部或者使用 defer 或 async 属性，避免脚本的加载和执行阻塞页面的渲染。

 （4）通过对 JavaScript 和 CSS 的文件进行压缩，来减小文件的体积。
```

## 扫描二维码登录网页是什么原理，前后两个事件是如何联系的？

```html
 核心过程应该是：浏览器获得一个临时 id，通过长连接等待客户端扫描带有此 id 的二维码后，从长连接中获得客户端上报给 serv
 er的帐号信息进行展示。并在客户端点击确认后，获得服务器授信的令牌，进行随后的信息交互过程。在超时、网络断开、其他设备
 上登录后，此前获得的令牌或丢失、或失效，对授权过程形成有效的安全防护。

 我的理解

 二维码登录网页的基本原理是，用户进入登录网页后，服务器生成一个 uid 来标识一个用户。对应的二维码对应了一个对应 uid 
 的链接，任何能够识别二维码的应用都可以获得这个链接，但是它们没有办法和对应登录的服务器响应。比如微信的二维码登录，只
 有用微信识这个二维码才有效。当微信客户端打开这个链接时，对应的登录服务器就获得了用户的相关信息。这个时候登录网页根据
 先前的长连接获取到服务器传过来的用户信息进行显示。然后提前预加载一些登录后可能用到的信息。当客户端点击确认授权登陆后，
 服务器生成一个权限令牌给网页，网页之后使用这个令牌进行信息的交互过程。由于整个授权的过程都是在手机端进行的，因此能够
 很好的防止 PC 上泛滥的病毒。并且在超时、网络断开、其他设备上登录后，此前获得的令牌或丢失、或失效，对授权过程能够形成
 有效的安全防护。
```

## Html 规范中为什么要求引用资源不加协议头http或者https？

```html
 如果用户当前访问的页面是通过 HTTPS 协议来浏览的，那么网页中的资源也只能通过 HTTPS 协议来引用，否则浏览器会出现
 警告信息，不同浏览器警告信息展现形式不同。

 为了解决这个问题，我们可以省略 URL 的协议声明，省略后浏览器照样可以正常引用相应的资源，这项解决方案称为
  protocol-relative URL，暂且可译作协议相对 URL。

 如果使用协议相对 URL，无论是使用 HTTPS，还是 HTTP 访问页面，浏览器都会以相同的协议请求页面中的资源，避免弹出类似
 的警告信息，同时还可以节省5字节的数据量。 
```