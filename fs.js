/*
 * Copyright 2013 the original author or authors
 * @license MIT, see LICENSE.txt for details
 *
 * @author Scott Andrews
 */

var fs, nodefn, promised, slice, whitelist;

fs = require('fs');
nodefn = require('when/node/function');
slice = Array.prototype.slice.call.bind(Array.prototype.slice);

whitelist = require('./method-whitelist.json');

module.exports = promised = {};

function promisify(method) {
	return function () {
		var args, callback, promise;
		args = slice(arguments);
		if (typeof args[args.length - 1] === 'function') {
			callback = args.pop();
			promise = nodefn.apply(method, args);
			promise.then(function (value) { callback(null, value); }, callback);
		}
		else {
			promise = nodefn.apply(method, args);
		}
		return promise;
	};
}

function eligible(name, obj) {
	return typeof obj === 'function' && whitelist.indexOf(name) >= 0;
}

Object.keys(fs).forEach(function (name) {
	promised[name] = eligible(name, fs[name]) ? promisify(fs[name]) : fs[name];
});

