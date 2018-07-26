var Observer = function() {

  var listeners = {};

  this.subscribe = (e, handler) => {
    !listeners[e] && (listeners[e] = []);
    listeners[e].push(handler);
  };

  this.unsubscribe = (e, handler) => {

    if (!listeners[e])
      return false;

    if (!handler)
      return delete listeners[e];

    listeners[e].map((_handler, n) => handler === _handler && delete listeners[e][n]);
  };

  this.publish = (e, ...args) => {
    if (listeners[e]) {
      listeners[e].map((handler) => handler.apply(null, args));
    }
  };
};
