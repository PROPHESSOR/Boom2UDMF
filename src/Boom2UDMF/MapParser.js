// Copyright (c) 2018-2022 PROPHESSOR
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

// eslint-disable-next-line
import ByteTools from './utils/ByteTools'; // For typings

export class MapParser {
  constructor(map) {
    this.map = map;

    this.things = null;
    this.vertexes = null;
    this.linedefs = null;
    this.sectors = null;
    this.sidedefs = null;
  }

  /**
   *
   * @param {ByteTools} buffer
   * @returns
   */
  getThings(buffer) {
    if (this.things) return this.things;

    /*
    Bytes 0-1: Location (x) (short)
    Bytes 2-3: Location (y) (short)
    Bytes 4-5: Facing angle (short)
    Bytes 6-7: Type ID (short)
    Bytes 8-9: Flags (short)
    */

    const out = [];

    for (let i = 0; i < buffer.length; i += 10) {
      out.push({
        x: buffer.readInt16(),
        y: buffer.readInt16(),
        angle: buffer.readInt16(),
        tid: buffer.readInt16(),
        flags: buffer.readInt16(),
      });
    }

    this.things = out;

    return out;
  }

  /**
   *
   * @param {ByteTools} buffer
   * @returns
   */
  getVertexes(buffer) {
    if (this.vertexes) return this.vertexes;

    const out = [];

    for (let i = 0; i < buffer.length; i += 4) {
      out.push({
        x: buffer.readInt16(),
        y: buffer.readInt16(),
      });
    }

    this.vertexes = out;

    return out;
  }

  /**
   *
   * @param {ByteTools} buffer
   * @returns
   */
  getLinedefs(buffer) {
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

    const out = [];

    for (let i = 0; i < buffer.length; i += 14) {
      out.push({
        v1: buffer.readInt16(),
        v2: buffer.readInt16(),
        flags: buffer.readInt16(),
        action: buffer.readInt16(),
        tag: buffer.readInt16(),
        front: buffer.readInt16(),
        back: buffer.readInt16(),
      });
    }

    this.linedefs = out;

    return out;
  }

  /**
   *
   * @param {ByteTools} buffer
   * @returns
   */
  getSectors(buffer) {
    if (this.sidedefs) return this.sidedefs;

    const out = [];

    for (let i = 0; i < buffer.length; i += 26) {
      out.push({
        floor: buffer.readInt16(),
        height: buffer.readInt16(),
        floortex: buffer.readString(8),
        ceiltex: buffer.readString(8),
        light: buffer.readInt16(),
        special: buffer.readInt16(),
        tag: buffer.readInt16(),
      });
    }

    this.sidedefs = out;

    return out;
  }

  /**
   *
   * @param {ByteTools} buffer
   * @returns
   */
  getSides(buffer) {
    if (this.sectors) return this.sectors;

    /*
    Bytes 0-1: Texture x offset (short)
    Bytes 0-3: Texture y offset (short)
    Bytes 4-11: Upper texture name (8 byte string)
    Bytes 12-19: Lower texture name (8 byte string)
    Bytes 20-27: Middle texture name (8 byte string)
    Bytes 28-29: Sector id (short)
    */

    const out = [];

    for (let i = 0; i < buffer.length; i += 30) {
      out.push({
        offsetx: buffer.readInt16(),
        offsety: buffer.readInt16(),
        uppertex: buffer.readString(8),
        lowertex: buffer.readString(8),
        middletex: buffer.readString(8),
        sector: buffer.readInt16(),
      });
    }

    this.sectors = out;

    return out;
  }
}

export default new MapParser();
