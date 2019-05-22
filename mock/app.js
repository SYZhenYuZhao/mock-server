const Koa = require('koa');
const app = new Koa();
const fsReader = require('./server/utils/fileReader');

app.use(async (ctx, next) => {
    await next();
    console.log(ctx.request.url,'url')
    ctx.response.body = fsReader(ctx.request.url)
});

// app.get('/',function(req,res){
//     var data =  fsReader()
//     res.send(data)
// })

app.listen(3000)
console.log("server is listening at port 3000")