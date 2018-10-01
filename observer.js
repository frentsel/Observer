var Observer = function() {

  var subscribers = {};

  this.subscribe = (action, subscriber) => {
    subscribers[action] || (subscribers[action] = []);
    subscribers[action].push(subscriber);
  };

  this.unsubscribe = (action, subscriber) => {

    if (!subscribers[action]) return false;

    if (!subscriber) return delete subscribers[action];

    subscribers[action].forEach((_subscriber, n) => {

      if (subscriber !== _subscriber) return false;

      delete subscribers[action][n];
    });
  };

  this.publish = function(action, ...args) {

    if (!subscribers[action]) return false;

    subscribers[action].forEach((subscriber) => {
      subscriber.apply(this, args);
    });
  };
};
