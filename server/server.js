const Koa = require('koa');
const Logger = require('koa-logger');
const Bodyparser = require('koa-bodyparser');
const static = require('koa-static');
const path = require('path');
const route = require('./route.js');
const KoaBody = require('koa-body');
const constant = require('./constants/constant.js');
const SERVER_PORT = constant.SERVER_PORT;
const app = new Koa();

app.use(Logger());
app.use(Bodyparser());
app.use(KoaBody({
    multipart: true,
    formidable: {
        maxFieldsSize: 20*1024*1024
    }
}));
app.use(route.routes());
app.use(static(path.join(__dirname,'../client')));
app.listen(SERVER_PORT);
console.log("server start at http://loclahost" + SERVER_PORT);