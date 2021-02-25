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
