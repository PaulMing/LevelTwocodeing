var redisUtil = require('./redis(key-value结构)');
console.log(redisUtil);

// redisUtil.setKey('key3','harden',function(error,reply){
//     if(error == null){
//         console.log(reply);
//     }else{
//         console.log(error);
//     }
//
// })
// redisUtil.getKey('key2',function(error,reply){
//     if(error == null){
//         console.log(reply);
//     }else{
//         console.log(error);
//     }
//
// })


redisUtil.hset('map1','key1','value1',function(error,reply){
    if(error == null){
        console.log(reply);
    }else{
        console.log(error);
    }
});
redisUtil.hset('map1','key2','value2',function(error,reply){
    if(error == null){
        console.log(reply);
    }else{
        console.log(error);
    }
});
// redisUtil.hmset('map1',['a1','b1','a2','b2'],function(error,reply){
//     if(error == null){
//         console.log(reply);
//     }else{
//         console.log(error);
//     }
// });


// redisUtil.hget('map1','key1',function(error,reply){
//     if(error == null){
//         console.log(reply);
//     }else{
//         console.log(error);
//     }
// });


redisUtil.hgetall('map1',function(error,reply){
    if(error == null){
        console.log(reply);
    }else{
        console.log(error);
    }
});
