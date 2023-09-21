export class WebErrorHandler {
  static errorHandler(target, method, ...args) {
    try {
      return method.apply(target, args);
    } catch (error) {
      alert(error.message);

      return null;
    }
  }

  static errorProxy(object) {
    return new Proxy(object, {
      get: (target, prop, receiver) => {
        if (typeof target[prop] === 'function') {
          return (...args) => {
            return this.errorHandler(target, target[prop], ...args);
          };
        }
        return Reflect.get(target, prop, receiver);
      },
    });
  }
}
