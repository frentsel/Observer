"use strict";

var observer = new Observer();

var User = function(name) {
	this.name = name;
	this.handler = (news) => {
		$('#messages').append('<p><b>' + this.name + '</b>: <i>' + news + '</i></p>');
	};
};

var manger = {
	listeners: {},
	publish: function() {

		var $news = $('#news');
		var news = $news.val();

		if (news.length === 0) return false;

		$news.val('');
		$('#messages').html('');
		observer.publish('news', news);
	},
	addNewListener: function() {

		var $listener = $('#listener');
		var userName = $listener.val();

		if (userName.length === 0) return false;

		this.list([userName]);
		$listener.val('');
		$('#messages').html('');
	},
	subscribe: function(obj, name) {
		$(obj).closest('div').find('a').toggleClass('hide');
		observer.subscribe('news', this.listeners[name].handler);
	},
	unsubscribe: function(obj, name) {
		$(obj).closest('div').find('a').toggleClass('hide');
		observer.unsubscribe('news', this.listeners[name].handler);
	},
	list: function(users) {

		var tpl = $('#userTpl').html();
		var user;

		users.map((name) => {
			user = new User(name);
			this.listeners[name] = user;
			observer.subscribe('news', user.handler);
			$('#listeners').append(tpl.split('{name}').join(name));
		});
	}
};

manger.list([
	'Sonya',
	'Marina',
	'Anya'
]);
