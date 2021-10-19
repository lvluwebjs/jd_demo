var express = require("express");
var expressWebSocket = require("express-ws");
var ffmpeg = require("fluent-ffmpeg");
ffmpeg.setFfmpegPath("D:/ffmpeg/bin/ffmpeg");
var webSocketStream = require("websocket-stream/stream");
var WebSocket = require("websocket-stream");
var http = require("http");
var path = require('path')

function publicServer() {
    let app = express();
    app.all('*', function(req, res, next) {　　 //设置允许跨域的域名，*代表允许任意域名跨域
        res.header("Access-Control-Allow-Origin", "*");　　 //允许的header类型
        res.header('Access-Control-Allow-Headers', 'Content-type');　　 //跨域允许的请求方式
        res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS,PATCH");　　 //可选，用来指定本次预检请求的有效期，单位为秒。在此期间，不用发出另一条预检请求。
        res.header('Access-Control-Max-Age', 1728000); //预请求缓存20天
        next();
    });
    app.use(express.static(path.join(__dirname, 'public')));
    expressWebSocket(app, null, {
        perMessageDeflate: true
    });
    app.ws("/rtsp/:id/", rtspRequestHandle)
    app.listen(8089, () => {
        console.log(`App listening at port 8089`)
    });

}

function rtspRequestHandle(ws, req) {
    console.log("rtsp request handle");
    const stream = webSocketStream(ws, {
        binary: true,
        browserBufferTimeout: 1000000
    }, {
        browserBufferTimeout: 1000000
    });
    let url = req.query.url;
    console.log("rtsp url:", url);
    console.log("rtsp params:", req.params);
    try {
        ffmpeg(url)
            .addInputOption("-rtsp_transport", "tcp", "-buffer_size", "102400") // 这里可以添加一些 RTSP 优化的参数
            .on("start", function() {
                console.log(url, "Stream started.");
            })
            .on("codecData", function() {
                console.log(url, "Stream codecData.")
                    // 摄像机在线处理
            })
            .on("error", function(err) {
                console.log(url, "An error occured: ", err.message);
            })
            .on("end", function() {
                console.log(url, "Stream end!");
                // 摄像机断线的处理
            })
            .outputFormat("flv").videoCodec("copy").noAudio().pipe(stream);
    } catch (error) {
        console.log(error);
    }
}
publicServer();