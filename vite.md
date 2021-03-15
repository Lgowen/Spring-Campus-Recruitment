# vite


1. vite是基于浏览器原生ES modules的开发服务器,利用浏览器去解析import,在服务端按预编译返回，跳过了打包。
2. 开发模式: 拦截浏览器发出的ES imports请求并做相应处理。不需要打包，只需要按浏览器发出的HTTP请求按需加载对应的模块，(热更新)
3. vite -> webpack-dev-server
4. webpack热更新: 当某个依赖发生改变时,依赖所处的module更新，发给浏览器重新执行。而且会重新进行打包一个bundle


## 2.0

1. 启动时依赖预打包(esbuild): 减少模块/请求数量 支持CommonJS依赖
2. 更好的css支持
3. 服务端渲染支持: 
