require('babel-register')

const Koa = require('koa')
const app = new Koa()

app.use(async ctx => {
  ctx.body = 'Hello Hacker'
})

app.listen(3000)
console.log('Running server at port 3000')