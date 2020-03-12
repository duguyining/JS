/* 狭义中间件，请求/拦截 最显著的特征是

直接被app.use()
拦截请求
操作响应
最简单的场景是 Koa.js 官方支持传输静态文件中间件的实现koa-logger。 */


/* 
step 01 拦截请求，打印请求URL
step 02 操作响应，打印响应URL */

const logger =async function(ctx,next){
	let res =ctx.res;
	
	//拦截操作请求 request
	console.log(`<-- ${ctx.method} ${ctx.url}`);
	
	await next();
	// 拦截操作响应 request
	res.on('finish',() =>{
	   console.log(`--> ${ctx.method} ${ctx.url}`);
	});
};

module.exports=logger