'use strict';


class Linedef {

	/** Create new Linedef
	 * @constructor
	 * @param  {number} _id=-1 - Linedef id
	 * @param  {number} v1 - First vertex
	 * @param  {number} v2 - Second vertex
	 * @param  {number} flag - Flag
	 * @param  {number} special - Special
	 * @param  {number} sector - Special
	 * @param  {number} front - SideDef ID
	 * @param  {number} back - SideDef ID
	 * @param  {object} other - Other attributes
	 */
	constructor(_id, v1, v2, flag, special, sector, front, back, other = {}) {
		this._id = _id;

		this.v1 = Number(v1);
		this.v2 = Number(v2);

		this.special = Number(special);

		Object.assign(this, other);
	}

	toString() {
		// const keys = ['v1', 'v2', 'sidefront', 'special', 'blocking', 'impact', 'repeatspecial', 'playeruse'];

		let out = `linedef//#${this._id}\n{\n`;

		for (const key in this) {
			if (key[0] === '_') continue;
			out += `${key}=${this[key]};\n`;
		}

		out += '}\n';

		return out;
	}
}

module.exports = Linedef;

/*
linedef//#6
{
	v1=7;
	v2=6;
	sidefront=6;
	special=243;
	blocking=true;
	impact=true;
	repeatspecial=true;
	playeruse=true;
}
*/