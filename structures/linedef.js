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
		this.sidefront = front;
		this.sideback = back;
		this.arg0 = sector;
		this.special = special;

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
linedef
   {
      id = <integer>; // ID of line. Interpreted as tag or scripting id.
                      // Default = -1. *** see below.

      v1 = <integer>; // Index of first vertex. No valid default.
      v2 = <integer>; // Index of second vertex. No valid default.

      // All flags default to false.

      blocking      = <bool>; // true = line blocks things.
      blockmonsters = <bool>; // true = line blocks monsters.
      twosided      = <bool>; // true = line is 2S.
      dontpegtop    = <bool>; // true = upper texture unpegged.
      dontpegbottom = <bool>; // true = lower texture unpegged.
      secret        = <bool>; // true = drawn as 1S on map.
      blocksound    = <bool>; // true = blocks sound.
      dontdraw      = <bool>; // true = line never drawn on map.
      mapped        = <bool>; // true = always appears on map.

      // BOOM passuse flag not supported in Strife/Heretic/Hexen namespaces.

      passuse       = <bool>; // true = passes use action.

      // Strife specific flags. Support for other games is not defined by
      // default and these flags should be ignored when reading maps not for
      // the Strife namespace or maps for a port which supports these flags.

      translucent   = <bool>; // true = line is a Strife translucent line.
      jumpover      = <bool>; // true = line is a Strife railing.
      blockfloaters = <bool>; // true = line is a Strife float-blocker.

      // Note: SPAC flags should be set false in Doom/Heretic/Strife
      // namespace maps. Specials in those games do not support this
      // mechanism and instead imply activation parameters through the
      // special number. All flags default to false.

      playercross   = <bool>; // true = player can cross.
      playeruse     = <bool>; // true = player can use.
      monstercross  = <bool>; // true = monster can cross.
      monsteruse    = <bool>; // true = monster can use.
      impact        = <bool>; // true = projectile can activate.
      playerpush    = <bool>; // true = player can push.
      monsterpush   = <bool>; // true = monster can push.
      missilecross  = <bool>; // true = projectile can cross.
      repeatspecial = <bool>; // true = repeatable special.

      special = <integer>; // Special. Default = 0.
      arg0    = <integer>; // Argument 0. Default = 0.
      arg1    = <integer>; // Argument 1. Default = 0.
      arg2    = <integer>; // Argument 2. Default = 0.
      arg3    = <integer>; // Argument 3. Default = 0.
      arg4    = <integer>; // Argument 4. Default = 0.

      sidefront = <integer>; // Sidedef 1 index. No valid default.
      sideback  = <integer>; // Sidedef 2 index. Default = -1.

      comment = <string>; // A comment. Implementors should attach no special
                          // semantic meaning to this field.
   }
*/