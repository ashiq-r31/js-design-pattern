require('babel-register')

const Koa = require('koa')
const Router = require('koa-router')
const serve = require('koa-static')

const app = new Koa()
const router = new Router()

// example of route 
router.get('/example/:hacker', (ctx, next) => ctx.body = `Hello ${ctx.params.hacker}`)

// serves default html
app
  .use(serve('./public'))
  .use(router.routes())


app.listen(3000)
console.log('Running server at port 3000')