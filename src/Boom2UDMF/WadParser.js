/**
 * Copyright (c) 2022 PROPHESSOR
 *
 * This software is released under the MIT License.
 * https://opensource.org/licenses/MIT
 */

import ByteTools from './utils/ByteTools';
import { setImmediate } from './utils';

export class WadLump {
  /**
   *
   * @param {ByteTools} wadBuffer
   * @param {number} pos
   * @param {number} size
   * @param {string} name
   * @param {number} index
   */
  constructor(wadBuffer, pos, size, name, index) {
    this.wadBuffer = wadBuffer;
    this.pos = pos;
    this.size = size;
    this.name = name;
    this.index = index;
  }

  read() {
    return new ByteTools(new DataView(
      this.wadBuffer.buffer.buffer.slice(this.pos, this.pos + this.size),
    ));
  }
}

export class WadParser {
  /**
   *
   * @param {ByteTools} buffer
   */
  constructor(buffer) {
    this.buffer = buffer;
    this.type = null;
    /**
     * @type {WadLump[]}
     */
    this.lumps = null;
  }

  async parse() {
    const type = this.buffer.readString(4);

    if (!['IWAD', 'PWAD'].includes(type)) throw new Error('Not a WAD file!');

    this.type = type;

    const numLumps = this.buffer.readUInt32();

    console.log(`Wad contains ${numLumps} lumps`);

    const dirTableOffset = this.buffer.readUInt32();

    console.log(`Wad table offset: ${dirTableOffset}`);

    this.buffer.seek(dirTableOffset, 'START');

    this.lumps = [];

    for (let i = 0; i < numLumps; i++) {
      const start = this.buffer.readUInt32();
      const size = this.buffer.readUInt32();
      const name = this.buffer.readString(8);

      this.lumps.push(new WadLump(this.buffer, start, size, name, i));
    }

    console.log(`Parsed ${this.lumps.length} lumps`);

    await setImmediate();
  }

  /**
   *
   * @param {WadLump[]} lumps
   * @param {string} name
   */
  static getLumpsByName(lumps, name) {
    return lumps.filter((x) => x.name === name);
  }

  /**
   *
   * @param {string} name
   * @returns {WadLump[]}
   */
  getLumpsByName(name) {
    return WadParser.getLumpsByName(this.lumps, name);
  }

  getMaps() {
    const REGEXP_MAP = /^(MAP\d+)|(E\dM\d)$/;

    return this.lumps.filter((x) => REGEXP_MAP.test(x.name));
  }

  getMapLumps(index) {
    const slice = this.lumps.slice(index);

    const [THINGS] = WadParser.getLumpsByName(slice, 'THINGS');
    const [LINEDEFS] = WadParser.getLumpsByName(slice, 'LINEDEFS');
    const [SIDEDEFS] = WadParser.getLumpsByName(slice, 'SIDEDEFS');
    const [VERTEXES] = WadParser.getLumpsByName(slice, 'VERTEXES');
    const [SECTORS] = WadParser.getLumpsByName(slice, 'SECTORS');

    return {
      THINGS,
      LINEDEFS,
      SIDEDEFS,
      VERTEXES,
      SECTORS,
    };
  }
}

export class WadGeneratorLump {
  /**
   *
   * @param {string} name
   * @param {string} data
   */
  constructor(name, data) {
    if (name.length > 8) throw new Error('Lump name must be <= 8 symbols');
    this.name = name.padEnd(8, '\x00');
    this.data = data;
    this.dataEnc = new TextEncoder().encode(data);
    this.offset = null;
  }

  /**
   *
   * @param {number} offset
   */
  setOffset(offset) {
    this.offset = offset;
  }
}

export class WadGenerator {
  constructor() {
    this.type = 'PWAD';
    /**
     * @type {WadGeneratorLump[]}
     */
    this.lumps = [];
  }

  /**
   *
   * @param {WadGeneratorLump} lump
   */
  addLump(lump) {
    this.lumps.push(lump);
  }

  generate() {
    const encoder = new TextEncoder();

    const sizeHeader = 12;
    const sizeDir = this.lumps.length * 16;
    let sizeData = 0;

    let offset = sizeHeader + sizeDir;

    this.lumps.forEach((lump) => {
      sizeData += lump.dataEnc.length;
      lump.setOffset(offset);
      offset += lump.dataEnc.length;
    });

    const arrayBuffer = new ArrayBuffer(sizeHeader + sizeDir + sizeData);
    const buffer = new DataView(arrayBuffer);

    offset = 0;

    // Header
    const type = encoder.encode(this.type);

    type.forEach((byte) => {
      buffer.setUint8(offset, byte);
      offset += 1;
    });

    buffer.setUint32(offset, this.lumps.length, true);
    offset += 4;
    buffer.setUint32(offset, sizeHeader, true); // data position
    offset += 4;

    if (offset !== sizeHeader) throw new Error();

    // Directory
    this.lumps.forEach((lump) => {
      const pos = lump.offset;
      const size = lump.dataEnc.length;
      const name = encoder.encode(lump.name);

      buffer.setUint32(offset, pos, true);
      offset += 4;
      buffer.setUint32(offset, size, true);
      offset += 4;
      name.forEach((byte) => {
        buffer.setUint8(offset, byte);
        offset += 1;
      });
    });

    if (offset !== sizeHeader + sizeDir) throw new Error();

    this.lumps.forEach((lump) => {
      lump.dataEnc.forEach((byte) => {
        buffer.setUint8(offset, byte);
        offset += 1;
      });
    });

    return buffer;
  }
}
