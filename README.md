# Observer JS
The tiny js library for manage of events. 
You also can pass some data into event. 
Each different event can have a multiple handlers. 
Available such methods:
- subscribe
- unsubscribe
- publish

[Demo](https://frentsel.github.io/Observer/index.html)

*Example for use*

```javascript
var eventer = new Observer;
		
var firstHandler = function (data) {
	console.info("Action: firstHandler, data: ", data);
};

var secondHandler = function (data) {
	console.info("Action: secondHandler, data: ", data);
};

// Subscribe on 'Action' event
eventer.subscribe('Action', firstHandler);
eventer.subscribe('Action', secondHandler);
```
*Call 'Action'*
```javascript
eventer.publish('Action', Date.now().toString());
```

Result in console
```javascript
Action: firstHandler, data:  1485090689876
Action: secondHandler, data:  1485090689876
```

*Unsubscribe firstHandler from 'Action'*
```javascript
eventer.unsubscribe('Action', firstHandler);
eventer.publish('Action', Date.now().toString());
```
Result in console
```javascript
Action: secondHandler, data:  1485090689879
```