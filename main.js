"use strict";

var eventer = new Observer();

var User = function(name){

	var _this = this;

	this.name = name;
	this.handler = function (news) {
		$('#messages').append('<p><b>'+_this.name+'</b> has got new message: <i>'+news+'</i></p>');
	};
	return this;
};

var manger = {
	listeners: {},
	publish: function () {

		var $news = $('#news'),
			news = $news.val();

		if(news.length === 0) return false;

		$news.val('');
		$('#messages').html('');
		eventer.publish('news', news);
	},
	addNewListener: function () {

		var $listener = $('#listener'),
			userName = $listener.val();

		if(userName.length === 0) return false;

		this.list([userName]);
		$listener.val('');
		$('#messages').html('');
	},
	subscribe: function (obj, name) {
		$(obj).closest('div').find('a').toggleClass('hide');
		eventer.subscribe('news', this.listeners[name].handler);
	},
	unsubscribe: function (obj, name) {
		$(obj).closest('div').find('a').toggleClass('hide');
		eventer.unsubscribe('news', this.listeners[name].handler);
	},
	list: function (users) {

		var _this = this,
			tpl = $('#userTpl').html(),
			user;

		users.map(function (name) {
			user = new User(name);
			_this.listeners[name] = user;
			eventer.subscribe('news', user.handler);
			$('#listeners').append(tpl.split('{name}').join(name));
		});
	}
};

manger.list([
	'Sonya',
	'Marina',
	'Anya'
]);