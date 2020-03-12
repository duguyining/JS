/*  初始化路由实例
注册路由请求信息缓存到实例中
请求类型
请求path
对应的请求后操作
注册的路由操作就是子中间件
路由实例输出父中间件
返回一个父中间件
中间件里对每次请求进行遍历匹配缓存中注册的路由操作
匹配上请求类型，路径就执行对应路由子中间件
app.use()路由实例返回的父中间件*/

const methods = [
  'GET',
  'PUT',
  'PATCH',
  'POST',
  'DELETE'
];

class Layer {
  constructor(path, methods, middleware, opts) {
    this.path = path;
    this.methods = methods;
    this.middleware = middleware;
    this.opts = opts;
  }
}

class Router {
  constructor(opts = {}) {
    this.stack = [];
  }

  register(path, methods, middleware, opts) {
    let route = new Layer(path, methods, middleware, opts);
    this.stack.push(route);
    return this;
  }

  routes() {

    let stock = this.stack;
    return async function(ctx, next) {
      let currentPath = ctx.path;
      let route;

      for (let i = 0; i < stock.length; i++) {
        let item = stock[i];
        if (currentPath === item.path && item.methods.indexOf(ctx.method) >= 0) {
          route = item.middleware;
          break;
        }
      }

      if (typeof route === 'function') {
        route(ctx, next);
        return;
      }

      await next();
    };
  }
}

methods.forEach(method => {
  Router.prototype[method.toLowerCase()] = Router.prototype[method] = function(path, middleware) {
    this.register(path, [method], middleware);
  };
});

module.exports = Router;