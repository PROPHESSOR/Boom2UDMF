// Copyright (c) 2018 PROPHESSOR
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

'use strict';

const {lineActionMap} = require('./config');

class BoomParser {}

BoomParser.FlagParser = class {}; // TODO: Write me

BoomParser.Action = class {
	constructor(boomAction, otherData = {}) {
		this.boomAction = boomAction;
		this.actionMap = lineActionMap[String(boomAction)] || BoomParser.Action.emptyAction;
		this.otherData = otherData;
	}

	get UDMFflags() {
		return false; // TODO: Write me
	}

	get UDMFaction() {
		return this.actionMap.udmf[0];
	}

	get arg1() {
		return this.argParser(this.actionMap.udmf[1]);
	}

	get arg2() {
		return this.argParser(this.actionMap.udmf[2]);
	}

	get arg3() {
		return this.argParser(this.actionMap.udmf[3]);
	}

	get arg4() {
		return this.argParser(this.actionMap.udmf[4]);
	}

	get arg5() {
		return this.argParser(this.actionMap.udmf[5]);
	}

	argParser(arg) {
		if (!isNaN(Number(arg))) return Number(arg);

		switch (arg) {
			case 'tag':
				return this.otherData.tag || 0;
			case undefined:
				return 0;
			default:
				return console.warn(`Unknown constant ${arg}`) || 0;
		}
	}

	static get emptyAction() {
		return {
			'flags': [],
			'udmf': [
				0,
				0,
				0,
				0,
				0
			]
		};
	}
};

module.exports = BoomParser;