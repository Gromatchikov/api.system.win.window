// функция преобразования строки JavaScript (UTF-8) в UTF-16
function TEXT(text){
	return new Buffer(text, 'ucs2').toString('binary');
}

var FFI = require('ffi');

// подключаемся к user32.dll
var user32 = new FFI.Library('user32', {
	'MessageBoxW': [
		'int32', [ 'int32', 'string', 'string', 'int32' ]
	]
});

function WindowSA(name) {
	console.log('Window system API module loaded');

	if (!(this instanceof WindowSA)) {
		return new WindowSA(name);
	}

	this.name = name;
}

WindowSA.prototype.sayHello = function sayHello() {
	// диалоговое окно
	var OK_or_Cancel = user32.MessageBoxW(0, TEXT('Привет, "' + this.name + '"!'), TEXT('Заголовок окна'), 1);
};

module.exports = WindowSA;
