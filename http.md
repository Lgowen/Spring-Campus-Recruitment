---
title: http
---

This is a student from the beginning of this year to learn front end, was beaten by society and then recorded every day of learning. Have you come to see yourself studying today? If my article is lucky enough to be seen by you, I hope you can keep studying with me.

# http

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
