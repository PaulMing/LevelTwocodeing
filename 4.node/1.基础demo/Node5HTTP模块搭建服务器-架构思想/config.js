var fs = require('fs');

var globalConfig = {};
// var conf = fs.readFileSync('./server.conf');
var conf = fs.readFileSync(__dirname + '/server.conf');
var configArr = conf.toString().split("\r\n");
for(var i=0; i<configArr.length; i++){
    globalConfig[configArr[i].split('=')[0]] = configArr[i].split('=')[1];
}

if(globalConfig.static_file_type){
    globalConfig.static_file_type = globalConfig.static_file_type.split('|');
}else{
    throw new Error("配置文件异常，缺少：static_file_type");
}

module.exports = globalConfig;