'use strict';


class Sidedef {

	constructor(_id, offsetx, offsety, uppertex, lowertex, middletex, sector, other = {}) {
		this.id = _id;

		this.offsetx = offsetx;
		this.offsety = offsety;
		this.texturetop = uppertex;
		this.texturebottom = lowertex;
		this.texturemiddle = middletex;
		this.sector = sector;

		Object.assign(this, other);
	}

	toString() {
		// const keys = ['v1', 'v2', 'sidefront', 'special', 'blocking', 'impact', 'repeatspecial', 'playeruse'];

		let out = `sidedef//#${this.id}\n{\n`;

		for (const key in this) {
			out += `${key}=${this[key]};\n`;
		}

		out += '}\n';

		return out;
	}
}

module.exports = Sidedef;

/*
sidedef
   {
      offsetx = <integer>; // X Offset. Default = 0.
      offsety = <integer>; // Y Offset. Default = 0.

      texturetop    = <string>; // Upper texture. Default = "-".
      texturebottom = <string>; // Lower texture. Default = "-".
      texturemiddle = <string>; // Middle texture. Default = "-".

      sector = <integer>; // Sector index. No valid default.

      comment = <string>; // A comment. Implementors should attach no special
                          // semantic meaning to this field.
   }
*/