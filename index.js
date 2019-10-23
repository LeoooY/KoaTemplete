const Koa = require('koa')
const Http = require('http')
// const path = require('path')


/* koa 插件 */
const bodyParser = require('koa-bodyparser') // 解析post请求参数到 ctx.request.body
// const mongo = require('koa-mongo')    // 连接mongo
const cors = require('koa2-cors')   // 解决跨域

/* debug初始化 */
const Debug = require('./utils/debug')
const debug = Debug(__filename)

/* router */
const router=require('./src/router')

/* 服务器配置 */
const port=3000;

const app = new Koa();
const server = Http.createServer(app.callback());

app
    .use(bodyParser())
    .use(router.routes())
    .use(router.allowedMethods())

    /* 连接mongo */
    /* .use(mongo({
        uri: MONGO_URL,
        max: 20,
        min: 1
    })) */

    /* 处理跨域 */
    .use(cors({
        origin: "*",
        credentials: true,
        allowMethods: ['GET', 'POST'],
        allowHeaders: ['Content-Type', 'Authorization', 'Accept'],
    }))

    /* 统一处理响应头 */
    .use(async (ctx, next) => {
        await next()
        ctx.headers["context-Type"] = 'application/json; charset=UTF-8'
    })

    /* 服务器异常捕获 */
    .on('error', err => {
        debug('服务器出错： \n %O', err)
    });

server.listen(port);
debug('服务器已启动： localhost:%d', port)