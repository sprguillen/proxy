var proxy = require('express-http-proxy');
var app = require('express')();

process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";

app.use('/', proxy('https://dev.pushcoin.com:8080'));
app.listen(3000);