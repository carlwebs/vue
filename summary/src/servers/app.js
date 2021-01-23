const http = require("http");
const urlModule = require("url");
const server = http.createServer();
server.on("request",function(req,res){
    const { pathname: url,query } = urlModule.parse(req.url,true);
    if(url === "/getScript") {
        var scriptStr = `${query.callback}()`
        res.end(scriptStr);
    } else {
        res.end("404");
    }
})
server.listen(3000,function() {
    console.log("接收到请求");
})

// JSONP的实现原理，客户端请求,利用script标签没有跨域的限制
// http://localhost:3000/getScript?callback=fn
// fn是客户端的方法，服务端接收到这个方法，然后进行调用。