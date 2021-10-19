let Service = require('node-windows').Service;

let svcp = new Service({
    name: 'project-server', //服务名称
    description: '数据服务', //描述
    script: './main.js' //注意修改nodejs项目要启动的文件路径
});

svcp.on('install', () => {
    svcp.start();
});

svcp.install();