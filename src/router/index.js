const Router = require('koa-router');
const router = new Router();

/* 从routes中引入路由对应处理函数 */
// const {xx} =require('./routes/xx')
const example=()=>{}

router
    .get('/', (ctx) => {
        ctx.body = {
            status: 'OK'
        }
    })
    .get('/example',example)
    .post('/example/:param/:param2',example)

module.exports=router;