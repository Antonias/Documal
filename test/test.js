console.log('Hellw world!');
if (window.console === undefined) {
	window.console = {log: function() {}};
	}