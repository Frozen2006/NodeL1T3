/*
 * Use express with static middleware easiest way :)
 */
var port = process.env.PORT || 1337;
var express = require('express');
var app = express();

app.use(express.static(__dirname + '/public/'));

app.listen(port, function () {
    console.log('Server started at port ' + port);
})