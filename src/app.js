const getData = require('./lib/service.js');


getData(1).then(function(result){
    console.log(result);
});