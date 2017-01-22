# Observer JS
## The tiny js library for manage of events.

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
*Call event 'Action'*
```javascript
eventer.publish('Action', Date.now().toString());
```

Result
```javascript
Action: firstHandler, data:  1485090689876
Action: secondHandler, data:  1485090689876
```

*Unsubscribe firstHandler from 'Action'*
```javascript
eventer.unsubscribe('Action', firstHandler);
eventer.publish('Action', Date.now().toString());
```
Result
```javascript
Action: secondHandler, data:  1485090689879
```