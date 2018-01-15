// Copyright (c) 2018 PROPHESSOR
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

'use strict';

const {lineActionMap, Constants} = require('./config');

class BoomParser {}

BoomParser.Thing = class {
	static getUDMFflags(flag) {
		const {FLAGS} = Constants;

		const flags = {
			'skill1': flag & FLAGS.Things.EASY,
			'skill2': flag & FLAGS.Things.EASY,
			'skill3': flag & FLAGS.Things.MEDIUM,
			'skill4': flag & FLAGS.Things.HARD,
			'skill5': flag & FLAGS.Things.HARD,
			'ambush': flag & FLAGS.Things.AMBUSH,
			'single': flag & FLAGS.Things.SINGLE,
			'dm': flag & FLAGS.Things.DEATHMATCH,
			'coop': flag & FLAGS.Things.COOPERATIVE,
			'friend': flag & FLAGS.Things.FRIENDLY,
			'dormant': flag & FLAGS.Things.DORMANT,
			'class1': flag & FLAGS.Things.FIGHTER,
			'class2': flag & FLAGS.Things.CLERIC,
			'class3': flag & FLAGS.Things.MAGE,
			'standing': flag & FLAGS.Things.STANDSTILL,
			'strifeally': false,
			'translucent': false,
			'invisible': false
		};

		return flags;
	}
}; // TODO: Write me

BoomParser.Action = class {
	constructor(boomAction, otherData = {}) {
		this.boomAction = boomAction;
		this.actionMap = lineActionMap[String(boomAction)] || BoomParser.Action.emptyAction;
		this.otherData = otherData;
	}

	get UDMFflags() {
		const flag = this.otherData.flags || 0;
		const {FLAGS} = Constants;

		const flags = {
			'blocking': flag & FLAGS.BLOCKING,
			'blockmonsters': flag & FLAGS.BLOCKMONSTERS,
			'twosided': flag & FLAGS.TWOSIDED,
			'dontpegtop': flag & FLAGS.DONTPEGTOP,
			'dontpegbottom': flag & FLAGS.DONTPEGBOTTOM,
			'secret': flag & FLAGS.SECRET,
			'blocksound': flag & FLAGS.SOUNDBLOCK,
			'dontdraw': flag & FLAGS.DONTDRAW,
			'mapped': flag & FLAGS.MAPPED,
			'translucent': flag & FLAGS.TRANSLUCENT,
			'passuse': flag & FLAGS.PASSUSE,
			'jumpover': false,
			'blockfloaters': flag & FLAGS.BLOCK_FLOATERS,
			'playercross': flag & FLAGS.SPAC_PCross,
			'playeruse': flag & FLAGS.SPAC_Use,
			'monstercross': flag & FLAGS.SPAC_MCross,
			'monsteruse': flag & FLAGS.SPAC_MCross,
			'impact': flag & FLAGS.SPAC_Impact,
			'playerpush': flag & FLAGS.SPAC_Push,
			'monsterpush': flag & FLAGS.SPAC_MCross,
			'missilecross': flag & FLAGS.SPAC_MCross,
			'repeatspecial': flag & FLAGS.REPEAT_SPECIAL
		};

		if (this.actionMap.flags.includes('USE')) flags.playeruse = true;
		if (this.actionMap.flags.includes('REP')) flags.repeatspecial = true;
		if (this.actionMap.flags.includes('WALK')) flags.playercross = true;
		if (this.actionMap.flags.includes('MONST')) flags.monsteruse = true;
		if (this.actionMap.flags.includes('MONWALK')) flags.monstercross = true;
		if (this.actionMap.flags.includes('SHOOT')) flags.missilecross = true;
		if (this.actionMap.flags.includes('SHOOT')) flags.impact = true;

		return flags;
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
			case 'lineid':
				return this.otherData.lineid || 0;
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