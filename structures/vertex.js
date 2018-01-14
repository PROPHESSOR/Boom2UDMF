'use strict';


class Vertex {

	constructor(_id, x, y, other = {}) {
		this._id = _id;

		this.x = x;
		this.y = y;

		Object.assign(this, other);
	}

	toString() {
		let out = `vertex//#${this._id}\n{\n`;

		for (const key in this) {
			if (key[0] === '_') continue;
			out += `${key}=${this[key]};\n`;
		}

		out += '}\n';

		return out;
	}
}

module.exports = Vertex;

/*
vertex
   {
      x = <float>; // X coordinate. No valid default.
      y = <float>; // Y coordinate. No valid default.
   }
*/