'use strict';

const fs = require('fs');

class WadParser {
  constructor(map) {
    this.map = map;

    this.vertexes = null;
    this.linedefs = null;
    this.sectors = null;
    this.sidedefs = null;
  }

  getVertexes(file) {
    if (this.linedefs) return this.vertexes;

    const buffer = fs.readFileSync(file);
    const out = [];

    for (let i = 0; i < buffer.length; i += 4) {
      out.push({
        'x': buffer.readInt16LE(i),
        'y': buffer.readInt16LE(i + 2)
      });
    }
    this.vertexes = out;
    return out;
  }

  getLinedefs(file) {
    if (this.linedefs) return this.linedefs;

	/*
	Bytes 0-1: Start VERTEX (short)
	Bytes 2-3: End VERTEX (short)
	Bytes 4-5: Attributes (short)
	Bytes 6-7: Special effects type (short)
	Bytes 8-9: Tag (short)
	Bytes 10-11: Right SIDEDEF (short)
	Bytes 12-13: Left SIDEDEF (short)
	*/

    const buffer = fs.readFileSync(file);
    const out = [];

    for (let i = 0; i < buffer.length; i += 14) {
      let j = i;

      out.push({
        'v1': buffer.readInt16LE(j),
        'v2': buffer.readInt16LE(j += 2),
        'flags': buffer.readInt16LE(j += 2),
        'action': buffer.readInt16LE(j += 2),
        'tag': buffer.readInt16LE(j += 2),
        'front': buffer.readInt16LE(j += 2),
		'back': buffer.readInt16LE(j += 2)
      });
    }
    this.linedefs = out;
    return out;
  }

  getSectors(file) {
    if (this.sidedefs) return this.sidedefs;

    const buffer = fs.readFileSync(file);
    const out = [];

    for (let i = 0; i < buffer.length; i += 26) {
      let j = i;

      out.push({
        'floor': buffer.readInt16LE(j),
        'height': buffer.readInt16LE(j += 2),
        'floortex': buffer.readInt32LE(j += 8),
        'ceiltex': buffer.readInt32LE(j += 8),
        'light': buffer.readInt16LE(j += 2),
        'special': buffer.readInt16LE(j += 2),
        'tag': buffer.readInt16LE(j += 2)
      });
    }
    this.sidedefs = out;
    return out;
  }

  getSides(file) {
    if (this.sectors) return this.sectors;

    /*
    Bytes 0-1: Texture x offset (short)
    Bytes 0-3: Texture y offset (short)
    Bytes 4-11: Upper texture name (8 byte string)
    Bytes 12-19: Lower texture name (8 byte string)
    Bytes 20-27: Middle texture name (8 byte string)
    Bytes 28-29: Sector id (short)
    */

    const buffer = fs.readFileSync(file);
    const out = [];

    for (let i = 0; i < buffer.length; i += 30) {
      let j = i;

      out.push({
        'offsetx': buffer.readInt16LE(j),
        'offsety': buffer.readInt16LE(j += 2),
        'uppertex': buffer.readInt32LE(j += 8),
        'lowertex': buffer.readInt32LE(j += 8),
        'middletex': buffer.readInt32LE(j += 8),
        'sector': buffer.readInt16LE(j += 2)
      });
    }
    this.sectors = out;
    return out;
  }
}

module.exports = new WadParser();